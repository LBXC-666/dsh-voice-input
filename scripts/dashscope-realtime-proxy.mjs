/**
 * dsh-voice-input 的百炼实时语音识别鉴权代理。
 *
 * 为什么需要它：浏览器 WebSocket 无法设置 `Authorization` 请求头，
 * 而阿里云百炼的实时 ASR（fun-asr-flash-8k-realtime 等）强制要求该头。
 * 本代理在浏览器和百炼之间做透明转发，密钥只存在于服务端环境变量，
 * 插件/浏览器永远接触不到 API Key。
 *
 * 启动：
 *   node scripts/dashscope-realtime-proxy.mjs
 *
 * API Key 来源（按优先级）：
 *   1. 插件设置面板里填的 API Key（通过 WS 查询参数 api_key 传入，浏览器本地保存）
 *   2. 环境变量 DASHSCOPE_API_KEY
 *
 * 可选环境变量：
 *   DASHSCOPE_API_KEY 百炼密钥（可不设，改用插件设置面板的 Key）
 *   PROXY_HOST        监听地址，默认 127.0.0.1
 *   PROXY_PORT        监听端口，默认 8787
 *   DASHSCOPE_WS_BASE 百炼实时 WS 地址，默认
 *                     wss://dashscope.aliyuncs.com/api-ws/v1/realtime
 *                     （国际版可改 wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime）
 *
 * 插件侧配置：接口模式选「实时流式接口」，地址填 ws://127.0.0.1:8787/ws。
 */
import { createRequire } from 'node:module'
import http from 'node:http'
import path from 'node:path'

const dshHome = process.env.DSH_HOME || path.join(process.env.HOME || '', '.dsh')
let wsMod = null
for (const base of [path.join(dshHome, 'profiles/node_modules/'), path.join(process.cwd(), 'node_modules/')]) {
  try {
    wsMod = createRequire(base)('ws')
    break
  } catch {
    wsMod = null
  }
}
if (wsMod === null) {
  console.error('[dsh-voice-input] 未找到 ws 模块：请先安装 dsh，或在插件目录执行 npm install ws')
  process.exit(1)
}
const { WebSocketServer, WebSocket } = wsMod

const API_KEY = (process.env.DASHSCOPE_API_KEY || '').trim()

const HOST = process.env.PROXY_HOST || '127.0.0.1'
const PORT = Number(process.env.PROXY_PORT || 8787)
const UPSTREAM = (process.env.DASHSCOPE_WS_BASE || 'wss://dashscope.aliyuncs.com/api-ws/v1/realtime').replace(/\/+$/, '')
const DEFAULT_MODEL = 'fun-asr-flash-8k-realtime'

function log(...args) {
  console.log(new Date().toISOString(), '[dsh-voice-input-proxy]', ...args)
}

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify({ status: 'ok', model: DEFAULT_MODEL, upstream: UPSTREAM }))
    return
  }
  res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
  res.end('not found')
})

const wss = new WebSocketServer({ server, path: '/ws' })

wss.on('connection', (browser, req) => {
  const query = new URLSearchParams((req.url || '').split('?')[1] || '')
  const model = (query.get('model') || DEFAULT_MODEL).trim()
  const queryApiKey = (query.get('api_key') || query.get('api-key') || '').trim()
  const key = queryApiKey !== '' ? queryApiKey : API_KEY
  if (key === '') {
    log('missing API key: set it in the plugin settings or via DASHSCOPE_API_KEY')
    try { browser.send(JSON.stringify({ type: 'error', error: { message: 'missing API key' } })) } catch {}
    try { browser.close(1008, 'missing API key') } catch {}
    return
  }
  const upstreamUrl = `${UPSTREAM}?model=${encodeURIComponent(model)}`

  let upstream
  try {
    upstream = new WebSocket(upstreamUrl, {
      headers: {
        Authorization: `Bearer ${key}`,
        'user-agent': 'dsh-voice-input/1.0',
      },
    })
  } catch (error) {
    log('upstream connect failed', error instanceof Error ? error.message : String(error))
    try { browser.close(1011, 'upstream connect failed') } catch {}
    return
  }

  const queue = []
  let upstreamOpen = false
  let browserOpen = false
  let closed = false

  upstream.on('open', () => {
    upstreamOpen = true
    log('upstream open', model)
    while (queue.length > 0 && upstream.readyState === 1) {
      upstream.send(queue.shift())
    }
  })

  browser.on('message', (data, isBinary) => {
    const payload = isBinary ? data : data.toString()
    if (upstreamOpen && upstream.readyState === 1) {
      upstream.send(payload)
    } else {
      queue.push(payload)
    }
  })

  upstream.on('message', (data, isBinary) => {
    if (browserOpen && browser.readyState === 1) {
      browser.send(data, { binary: isBinary })
    }
  })

  browser.on('close', () => {
    browserOpen = false
    if (!closed) {
      closed = true
      try { if (upstream.readyState < 2) upstream.close(1000) } catch {}
    }
  })

  upstream.on('close', () => {
    upstreamOpen = false
    if (!closed) {
      closed = true
      try { if (browser.readyState < 2) browser.close(1011) } catch {}
    }
  })

  browser.on('error', (error) => {
    log('browser error', error instanceof Error ? error.message : String(error))
  })

  upstream.on('error', (error) => {
    log('upstream error', model, error instanceof Error ? error.message : String(error))
    if (!closed) {
      closed = true
      try { if (browser.readyState < 2) browser.close(1011, 'upstream error') } catch {}
      try { if (upstream.readyState < 2) upstream.close(1011) } catch {}
    }
  })

  browserOpen = true
})

server.listen(PORT, HOST, () => {
  log(`listening on ws://${HOST}:${PORT}/ws → ${UPSTREAM}?model=${DEFAULT_MODEL}`)
  log(API_KEY !== '' ? 'key source: DASHSCOPE_API_KEY (plugin settings can override per connection)' : 'key source: plugin settings query parameter (DASHSCOPE_API_KEY is unset)')
})
