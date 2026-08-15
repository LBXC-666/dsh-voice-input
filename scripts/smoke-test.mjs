import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

// React 来自 dsh 的 profile node_modules（或本目录 node_modules），
// 使脚本在本机和克隆仓库的机器上都能找到依赖。
const dshHome = process.env.DSH_HOME || path.join(process.env.HOME || '', '.dsh')
let require = null
for (const base of [path.join(dshHome, 'profiles/node_modules/'), path.join(process.cwd(), 'node_modules/')]) {
  try {
    require = createRequire(base)
    require('react')
    require('react-dom/server')
    break
  } catch {
    require = null
  }
}
if (require === null) {
  console.error('未找到 react / react-dom：请先安装 dsh（或在本目录 npm install react react-dom）再运行此测试。')
  process.exit(1)
}
const React = require('react')
const { renderToString } = require('react-dom/server')

const captured = {}
const windowListeners = []
globalThis.window = {
  __ModuleLoader__: {
    load: (handoff) => { captured.handoff = handoff },
  },
  addEventListener: (type, fn) => { windowListeners.push({ type, fn }) },
  removeEventListener: (type, fn) => {
    const idx = windowListeners.findIndex((l) => l.type === type && l.fn === fn)
    if (idx >= 0) windowListeners.splice(idx, 1)
  },
}
globalThis.localStorage = {
  getItem: () => null,
  setItem: () => {},
}

await import(pathToFileURL('/home/lbxc/voice_input/lib/client.js').href)

if (!captured.handoff) throw new Error('client.js did not register its factory')
const mod = captured.handoff.factory((spec) => {
  if (spec === 'react') return React
  throw new Error('unexpected require: ' + spec)
})

console.log('exports.inject =', JSON.stringify(mod.inject))
if (mod.inject.join() !== 'slots,locale') throw new Error('bad inject list')

const regs = []
let dictionaries = null
const ctx = {
  locale: {
    bind: () => (key) => key,
    register: (_ns, dicts) => { dictionaries = dicts; return () => {} },
  },
  effect: (fn, _label) => { if (typeof fn === 'function') fn(); return () => {} },
  slots: {
    inject: (_name, callback) => { const d = callback(); return typeof d === 'function' ? d : () => {} },
    register: (options, Component) => { regs.push({ options, Component }); return () => {} },
  },
}

mod.apply(ctx)

const buttonReg = regs.find((r) => r.options.name === 'conversation.input.right')
const tabReg = regs.find((r) => r.options.name === 'settings.plugins.tab')
if (!buttonReg || buttonReg.options.id !== 'voice-input') throw new Error('missing input.right registration')
if (!tabReg || tabReg.options.id !== 'voice-input') throw new Error('missing settings tab registration')
console.log('slots registered:', regs.map((r) => `${r.options.name}#${r.options.id} order=${r.options.order}`).join(' | '))

const zhKeys = Object.keys(dictionaries.zh).sort()
const enKeys = Object.keys(dictionaries.en).sort()
const missing = zhKeys.filter((k) => !enKeys.includes(k)).concat(enKeys.filter((k) => !zhKeys.includes(k)))
if (missing.length) throw new Error('locale key mismatch: ' + missing.join(','))
console.log('locale keys OK:', zhKeys.length)

const t = (key) => key
const buttonHtml = renderToString(React.createElement(buttonReg.Component, {
  t,
  input: { draft: '你好' },
  inputActions: { setDraft: () => {} },
}))
if (!buttonHtml.includes('vi_micButton')) throw new Error('button did not render')
console.log('VoiceInputButton HTML:', buttonHtml.slice(0, 320).replace(/\n/g, ' '))

const tabHtml = renderToString(React.createElement(tabReg.Component, { t }))
if (!tabHtml.includes('vi_root') || !tabHtml.includes('importGroup')) throw new Error('settings panel did not render')
if (!tabHtml.includes('shortcutEnabled')) throw new Error('shortcut toggle missing from settings panel')
console.log('VoiceSettingsPanel HTML length:', tabHtml.length)

const keydown = windowListeners.filter((l) => l.type === 'keydown' && l.fn)
if (keydown.length !== 1) throw new Error('expected one global keydown listener, got ' + keydown.length)
let prevented = 0
const fakeEvent = (overrides) => ({
  key: 'Alt', code: 'AltRight', location: 2, repeat: false, isComposing: false,
  ctrlKey: false, metaKey: false, shiftKey: false,
  getModifierState: () => false,
  preventDefault: () => { prevented++ },
  ...overrides,
})
keydown[0].fn(fakeEvent({}))                       // plain Right Alt: allowed
keydown[0].fn(fakeEvent({ repeat: true }))         // key repeat: ignored
keydown[0].fn(fakeEvent({ ctrlKey: true }))        // AltGr-style combo: ignored
keydown[0].fn(fakeEvent({ getModifierState: () => true })) // AltGraph: ignored
keydown[0].fn(fakeEvent({ key: 'Shift', code: 'ShiftRight', location: 2 })) // wrong key: ignored
if (prevented !== 1) throw new Error('right-alt filtering wrong: prevented=' + prevented)
console.log('right-alt keydown listener filtered correctly (prevented:', prevented + ')')

console.log('SMOKE TEST PASSED')
