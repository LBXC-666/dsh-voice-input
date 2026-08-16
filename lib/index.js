/**
 * Host half of @lbxc/dsh-voice-input.
 *
 * 语音识别与文本整理在浏览器端完成；node 半身只负责一件事：
 * 在 dsh web 启动时自动拉起本地实时 ASR 鉴权代理
 * （scripts/dashscope-realtime-proxy.mjs），保证电脑重启后无需手动
 * 执行 `node scripts/dashscope-realtime-proxy.mjs`。
 *
 * 行为约定：
 *   - 代理已在运行（端口 /health 可达）→ 直接复用，不重复启动；
 *   - 代理由本插件启动 → dsh 插件卸载/停服时一并停止；
 *   - 手动启动的代理不属于本插件管理，插件卸载时不会被误杀。
 */

import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const PROXY_HOST = process.env.PROXY_HOST || '127.0.0.1'
const PROXY_PORT = Number(process.env.PROXY_PORT || 8787)
const STARTUP_TIMEOUT_MS = Number(process.env.VOICE_INPUT_PROXY_STARTUP_TIMEOUT || 8000)
const HEALTH_POLL_MS = 250
const HEALTH_TIMEOUT_MS = 1200

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function log(...args) {
  console.log('[dsh-voice-input]', ...args)
}

function checkProxyHealth() {
  return new Promise((resolve) => {
    const request = http.request({
      host: PROXY_HOST,
      port: PROXY_PORT,
      path: '/health',
      method: 'GET',
      timeout: HEALTH_TIMEOUT_MS,
    }, (response) => {
      response.resume()
      response.on('end', () => resolve(response.statusCode === 200))
      response.on('error', () => resolve(false))
    })
    request.on('timeout', () => {
      request.destroy()
      resolve(false)
    })
    request.on('error', () => resolve(false))
    request.end()
  })
}

function pluginRoot() {
  return path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
}

function proxyScript() {
  return path.join(pluginRoot(), 'scripts', 'dashscope-realtime-proxy.mjs')
}

function proxyLogPath() {
  const dshHome = process.env.DSH_HOME || path.join(process.env.HOME || '', '.dsh')
  return path.join(dshHome, 'logs', 'dsh-voice-input-proxy.log')
}

function spawnProxy() {
  const script = proxyScript()
  if (!fs.existsSync(script)) {
    log('warn: 未找到实时代理脚本', script)
    return null
  }
  let logFd = null
  try {
    const logPath = proxyLogPath()
    fs.mkdirSync(path.dirname(logPath), { recursive: true })
    logFd = fs.openSync(logPath, 'a')
  } catch (_error) {
    logFd = null
  }
  const child = spawn(process.execPath, [script], {
    cwd: pluginRoot(),
    detached: process.platform !== 'win32',
    stdio: logFd === null ? 'ignore' : ['ignore', logFd, logFd],
    env: process.env,
  })
  // 关闭父进程持有的日志 fd：子进程已经复制了自己的句柄，关闭不影响其写入
  if (logFd !== null) {
    try { fs.closeSync(logFd) } catch (_error) { /* ignore */ }
  }
  child.unref()
  return child
}

export const inject = []

export function apply(ctx) {
  let child = null
  let disposed = false

  const boot = async () => {
    if (await checkProxyHealth()) {
      log('实时语音代理已在运行，直接复用 ws://' + PROXY_HOST + ':' + PROXY_PORT + '/ws')
      return
    }
    log('启动实时语音代理 ws://' + PROXY_HOST + ':' + PROXY_PORT + '/ws …')
    const spawned = spawnProxy()
    if (spawned === null) return
    child = spawned

    const deadline = Date.now() + STARTUP_TIMEOUT_MS
    while (!disposed && Date.now() < deadline) {
      if (child.exitCode !== null) {
        log('warn: 实时语音代理启动失败（exitCode=' + child.exitCode + '），请检查日志 ' + proxyLogPath())
        return
      }
      if (await checkProxyHealth()) {
        log('实时语音代理启动成功，健康检查通过')
        return
      }
      await delay(HEALTH_POLL_MS)
    }
    if (!disposed && child.exitCode === null) {
      log('warn: 实时语音代理已启动但健康检查超时，日志见 ' + proxyLogPath())
    }
  }

  boot().catch((error) => {
    log('warn: 实时语音代理自动启动检查失败：', error && error.message ? error.message : String(error))
  })

  if (ctx !== null && ctx !== undefined && typeof ctx.on === 'function') {
    ctx.on('dispose', () => {
      disposed = true
      if (child !== null && child.exitCode === null) {
        try { child.kill() } catch (_error) { /* ignore */ }
        log('实时语音代理已随插件停止')
      }
    })
  }
}
