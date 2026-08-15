window.__ModuleLoader__.load({
  id: '@lbxc/dsh-voice-input',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    var react = require('react')

    // ------------------------------------------------------------------
    // 样式
    // ------------------------------------------------------------------
    var css = [
      /* 设置页 */
      '.vi_root{width:100%;max-width:760px;color:var(--dsw-alias-label-primary);display:flex;flex-direction:column;gap:14px}',
      '.vi_heading{margin:0;font-size:18px;font-weight:600}',
      '.vi_intro{color:var(--dsw-alias-label-tertiary);margin:0;font-size:13px;line-height:20px}',
      '.vi_group{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:12px;padding:14px 16px;display:flex;flex-direction:column;gap:12px}',
      '.vi_groupTitle{margin:0;font-size:13px;font-weight:600;line-height:20px}',
      '.vi_grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 14px}',
      '.vi_field{min-width:0;display:flex;flex-direction:column;gap:5px}',
      '.vi_fieldWide{grid-column:1/-1}',
      '.vi_label{font-size:12px;font-weight:500;color:var(--dsw-alias-label-secondary);line-height:18px}',
      '.vi_input,.vi_select,.vi_textarea{font:inherit;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:6px 10px;font-size:13px;line-height:20px;outline:none;width:100%;box-sizing:border-box}',
      '.vi_input,.vi_select{height:34px}',
      '.vi_textarea{min-height:92px;resize:vertical;font-family:var(--ds-font-family-code);font-size:12px;line-height:18px}',
      '.vi_input:focus-visible,.vi_select:focus-visible,.vi_textarea:focus-visible{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-business-primary) 18%, transparent)}',
      '.vi_hint{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}',
      '.vi_note{border-left:3px solid var(--dsw-alias-state-business-primary);background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 8%, transparent);border-radius:0 8px 8px 0;padding:8px 12px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}',
      '.vi_warn{border-left-color:var(--dsw-alias-state-warn-primary);background:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 8%, transparent)}',
      '.vi_actions{display:flex;flex-wrap:wrap;gap:8px}',
      '.vi_btn{font:inherit;font-size:12px;line-height:18px;cursor:pointer;border-radius:8px;padding:5px 12px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}',
      '.vi_btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}',
      '.vi_btn:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}',
      '.vi_btnPrimary{border-color:transparent;background:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-state-business-label, #fff)}',
      '.vi_feedbackOk{color:var(--dsw-alias-state-success-primary);font-size:12px;line-height:18px;margin:0}',
      '.vi_feedbackError{color:var(--dsw-alias-state-error-primary);font-size:12px;line-height:18px;margin:0;overflow-wrap:anywhere}',
      '.vi_fileInput{clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}',
      '.vi_checkRow{display:flex;align-items:flex-start;gap:8px;font-size:13px;line-height:20px;color:var(--dsw-alias-label-primary);cursor:pointer}',
      '.vi_checkRow input{accent-color:var(--dsw-alias-state-business-primary);margin-top:4px;flex:none}',

      /* 输入框按钮 */
      '.vi_micAnchor{position:relative;display:inline-flex;align-items:center}',
      '.vi_micButton{width:30px;height:30px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);cursor:pointer;padding:0;flex:none;transition:background .15s var(--ds-ease-in-out),color .15s var(--ds-ease-in-out),border-color .15s var(--ds-ease-in-out)}',
      '.vi_micButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-border-l1);color:var(--dsw-alias-label-primary)}',
      '.vi_micButton:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}',
      '.vi_micButton:disabled{opacity:.55;cursor:default}',
      '.vi_micButton[data-phase=recording]{color:var(--dsw-alias-state-business-primary);border-color:color-mix(in srgb, var(--dsw-alias-state-business-primary) 60%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 12%, transparent)}',
      '.vi_micButton[data-phase=recording]:hover{background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 18%, transparent);color:var(--dsw-alias-state-business-primary)}',
      '.vi_wave{display:inline-flex;align-items:center;justify-content:center;gap:2px;height:13px}',
      '.vi_wave i{display:block;width:2px;height:100%;border-radius:1px;background:currentColor;animation:vi_wave 1.1s ease-in-out infinite}',
      '.vi_wave i:nth-child(2){animation-delay:.12s}',
      '.vi_wave i:nth-child(3){animation-delay:.24s}',
      '.vi_wave i:nth-child(4){animation-delay:.36s}',
      '.vi_wave i:nth-child(5){animation-delay:.48s}',
      '.vi_pop{position:absolute;bottom:calc(100% + 8px);right:0;z-index:60;min-width:max-content;max-width:300px;display:flex;align-items:center;gap:7px;background:var(--dsw-alias-bg-module-platform);border:1px solid var(--dsw-alias-border-l1);border-radius:10px;box-shadow:var(--dsw-shadow-lv2);padding:7px 10px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-primary)}',
      '.vi_recDot{width:8px;height:8px;border-radius:999px;background:var(--dsw-alias-state-error-primary);flex:none;animation:vi_blink 1s steps(2,start) infinite}',
      '.vi_spin{width:13px;height:13px;border:2px solid color-mix(in srgb, var(--dsw-alias-label-tertiary) 40%, transparent);border-top-color:var(--dsw-alias-state-business-primary);border-radius:999px;flex:none;animation:vi_spin .8s linear infinite}',
      '.vi_popError{color:var(--dsw-alias-state-error-primary);overflow-wrap:anywhere;min-width:180px}',
      '.vi_popOk{color:var(--dsw-alias-state-success-primary)}',
      '.vi_popClose{font:inherit;font-size:11px;line-height:16px;cursor:pointer;border:0;background:transparent;color:var(--dsw-alias-label-tertiary);padding:0 2px;flex:none}',
      '.vi_popClose:hover{color:var(--dsw-alias-label-primary)}',
      '@keyframes vi_blink{50%{opacity:.25}}',
      '@keyframes vi_spin{to{transform:rotate(360deg)}}',
      '@keyframes vi_wave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}',
      '@media (width<=680px){.vi_grid{grid-template-columns:minmax(0,1fr)}}',
    ].join('\n')
    var cssTagId = '@lbxc/dsh-voice-input/styles.css'
    if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css=' + JSON.stringify(cssTagId) + ']') === null) {
      var styleTag = document.createElement('style')
      styleTag.dataset.plugin = '@lbxc/dsh-voice-input'
      styleTag.dataset.pluginCss = cssTagId
      styleTag.textContent = css
      document.head.appendChild(styleTag)
    }

    // ------------------------------------------------------------------
    // 文案（中英字典必须同键，否则 locale 注册会报错）
    // ------------------------------------------------------------------
    var NS = 'voice-input'

    var zh = {
      tab: '语音输入',
      settingsTitle: '语音输入',
      settingsIntro: '在输入框发送键左侧启用语音输入。选择一种识别接口并填写参数，配置会自动保存在当前浏览器中。',
      providerGroup: '识别接口',
      mode: '接口模式',
      modeHint: '浏览器本地识别免费且无需密钥；OpenAI 兼容接口适用于 Whisper、Groq、SiliconFlow 等；自定义 JSON 接口可对接任意 HTTP 服务。',
      modeOpenai: 'OpenAI 兼容接口（multipart/form-data）',
      modeCustomJson: '自定义 JSON 接口（base64）',
      modeBrowser: '浏览器本地识别（Web Speech API）',
      modeRealtime: '实时流式接口（Fun-ASR Realtime / Qwen-ASR）',
      preset: '快速预设',
      presetHint: '选择一个预设会自动填充接口地址和模型，不会覆盖已填写的 API Key。',
      presetApplied: '预设已应用。',
      presetOpenai: 'OpenAI Whisper',
      presetGroq: 'Groq Whisper',
      presetSiliconflow: 'SiliconFlow SenseVoice',
      presetFunAsrRealtime: 'Fun-ASR Flash 8K Realtime（百炼实时）',
      presetLocalWhisper: '本地 faster-whisper',
      presetBrowser: '浏览器本地识别',
      presetCustom: '自定义 JSON 接口',
      endpoint: '接口地址',
      endpointHint: '可以是完整地址（以 /audio/transcriptions 结尾）或只填 Base URL，插件会自动补全路径。',
      apiKey: 'API Key',
      apiKeyHint: '会以 Authorization: Bearer <key> 发送。本地服务无需密钥时留空。',
      model: '模型',
      modelHint: '例如 whisper-1、whisper-large-v3、FunAudioLLM/SenseVoiceSmall。',
      language: '识别语言',
      languageHint: '例如 zh、en、ja；留空表示由服务自动检测。浏览器模式默认 zh-CN。',
      prompt: '提示词（可选）',
      promptHint: '传给转写服务的上下文提示，帮助识别专有名词。',
      customUrl: '请求地址（完整 URL）',
      customUrlHint: '音频会以 base64 字符串放在 JSON 请求体中发送。',
      jsonTemplate: '请求体模板（JSON）',
      jsonTemplateHint: '可用占位符：{{audio}}（base64）、{{format}}（MIME 类型）、{{model}}、{{language}}。占位符需写在字符串值内。',
      responsePath: '转写文本的取值路径',
      responsePathHint: '支持点路径与数组下标，例如 text、data.text、result[0].text；留空表示整个响应就是文本。',
      realtimeUrl: '实时代理地址（WebSocket）',
      realtimeUrlHint: '浏览器无法直接给百炼 WebSocket 加鉴权头，请先运行 scripts/dashscope-realtime-proxy.mjs（默认 ws://127.0.0.1:8787/ws）。',
      realtimeModel: '实时模型',
      realtimeModelHint: '例如 fun-asr-flash-8k-realtime、qwen3-asr-flash-realtime。',
      realtimeNote: '实时模式会边说边流式转写，需要 Chromium 浏览器（Chrome / Edge）与本地代理。代理从环境变量 DASHSCOPE_API_KEY 读取百炼密钥，插件不接触密钥。',
      advanced: '高级选项',
      headers: '自定义请求头（JSON）',
      headersHint: '对象形式，例如 {"X-Service":"stt"}。Authorization 会自动从 API Key 生成，这里设置的项会覆盖自动值。失焦时保存。',
      headersInvalid: '请求头不是合法的 JSON 对象。',
      browserNote: '浏览器本地识别使用系统/浏览器自带的识别服务：无需 API Key、不占用云端额度，但仅 Chromium 内核浏览器（Chrome、Edge）支持，且需联网。',
      storageNote: '配置与 API Key 仅保存在当前浏览器的 localStorage 中，不会上传到 DeepSeek Harness 服务端。麦克风与语音数据只会发送给你配置的识别接口。',
      shortcutEnabled: '启用右 Alt 快捷键',
      shortcutHint: '按住右 Alt 说话，松手即停止并转写。AltGr 键盘布局、组合键与长按重复会被自动忽略。',
      configure: '去配置',
      errOpenSettings: '无法自动打开设置面板，请点击左下角设置按钮，进入「语音输入」。',
      importGroup: '导入 / 导出 API 配置',
      importHint: '粘贴一份 JSON 配置后点「导入」，或选择 config.example.json 文件；导出可用于备份或分享给其他浏览器。',
      importPlaceholder: '在此粘贴 JSON 配置…',
      importText: '导入粘贴的配置',
      importFile: '导入 JSON 文件',
      exportCopy: '复制当前配置',
      exportDownload: '下载当前配置',
      importOk: '配置已导入并保存。',
      importError: '导入失败：不是合法的语音输入配置 JSON。',
      copied: '已复制到剪贴板。',
      copyFailed: '复制失败，请手动复制。',
      buttonAria: '开始语音输入',
      buttonAriaRecording: '停止录音并转写',
      buttonTitle: '语音输入',
      recording: '录音中',
      processing: '转写中…',
      inserted: '已插入输入框',
      errMic: '无法访问麦克风，请检查浏览器权限。',
      errMediaRecorder: '当前浏览器不支持录音，请改用 Chrome / Edge。',
      errRecognitionUnsupported: '当前浏览器不支持语音识别，请改用 Chrome / Edge 或配置云端接口。',
      errNoSpeech: '没有识别到有效语音，请重试。',
      errConfig: '请先在 设置 → 语音输入 中配置接口参数。',
      errInvalidTemplate: '请求体模板不是合法的 JSON。',
      errReadAudio: '读取录音数据失败。',
      errEmpty: '转写结果为空。',
      errHttp: '识别接口返回错误',
      errNetwork: '请求识别接口失败，请检查地址、密钥与网络。',
      errExtract: '无法从接口响应中取出文本，请检查取值路径。',
      errNoInput: '输入框暂不可用。',
      errNotAllowed: '浏览器拒绝了麦克风权限。',
      errAudioCapture: '开始录音失败',
      errRealtimeUnsupported: '当前浏览器不支持实时流式录音，请改用 Chrome / Edge。',
      errRealtimeWs: '实时识别连接失败，请确认本地代理已启动且密钥有效。',
      close: '关闭提示',
    }

    var en = {
      tab: 'Voice input',
      settingsTitle: 'Voice input',
      settingsIntro: 'Adds a voice input button to the left of the send button. Pick a recognition provider and fill in its parameters; the configuration is saved in this browser.',
      providerGroup: 'Recognition provider',
      mode: 'Provider mode',
      modeHint: 'Browser recognition is free and keyless; the OpenAI-compatible mode covers Whisper, Groq, SiliconFlow and similar; the custom JSON mode can call any HTTP service.',
      modeOpenai: 'OpenAI-compatible (multipart/form-data)',
      modeCustomJson: 'Custom JSON (base64)',
      modeBrowser: 'Browser local (Web Speech API)',
      modeRealtime: 'Realtime streaming (Fun-ASR Realtime / Qwen-ASR)',
      preset: 'Quick preset',
      presetHint: 'Applying a preset fills the endpoint and model fields and never overwrites an existing API key.',
      presetApplied: 'Preset applied.',
      presetOpenai: 'OpenAI Whisper',
      presetGroq: 'Groq Whisper',
      presetSiliconflow: 'SiliconFlow SenseVoice',
      presetFunAsrRealtime: 'Fun-ASR Flash 8K Realtime (Bailian)',
      presetLocalWhisper: 'Local faster-whisper',
      presetBrowser: 'Browser local',
      presetCustom: 'Custom JSON',
      endpoint: 'Endpoint',
      endpointHint: 'Either the full /audio/transcriptions URL or just a base URL; the path is appended automatically.',
      apiKey: 'API key',
      apiKeyHint: 'Sent as Authorization: Bearer <key>. Leave blank for keyless local servers.',
      model: 'Model',
      modelHint: 'e.g. whisper-1, whisper-large-v3, FunAudioLLM/SenseVoiceSmall.',
      language: 'Language',
      languageHint: 'e.g. zh, en, ja; leave blank for auto-detection. Browser mode defaults to zh-CN.',
      prompt: 'Prompt (optional)',
      promptHint: 'Context hint forwarded to the transcription service to help with proper nouns.',
      customUrl: 'Request URL (full)',
      customUrlHint: 'The audio is sent as a base64 string inside a JSON request body.',
      jsonTemplate: 'Request body template (JSON)',
      jsonTemplateHint: 'Placeholders: {{audio}} (base64), {{format}} (MIME type), {{model}}, {{language}}. Put them inside string values.',
      responsePath: 'Transcript field path',
      responsePathHint: 'Dot paths and array indexes work, e.g. text, data.text, result[0].text; leave blank when the whole response is the text.',
      realtimeUrl: 'Realtime proxy URL (WebSocket)',
      realtimeUrlHint: 'Browsers cannot set the Bailian WebSocket auth header, so run scripts/dashscope-realtime-proxy.mjs first (default ws://127.0.0.1:8787/ws).',
      realtimeModel: 'Realtime model',
      realtimeModelHint: 'e.g. fun-asr-flash-8k-realtime, qwen3-asr-flash-realtime.',
      realtimeNote: 'Realtime mode streams audio while you speak. It needs a Chromium browser (Chrome/Edge) and the local proxy. The proxy reads the Bailian key from DASHSCOPE_API_KEY; the plugin never sees it.',
      advanced: 'Advanced',
      headers: 'Custom request headers (JSON)',
      headersHint: 'An object such as {"X-Service":"stt"}. Authorization is generated from the API key; entries here override it. Saved on blur.',
      headersInvalid: 'Headers are not a valid JSON object.',
      browserNote: 'Browser local recognition uses the browser/system speech service: no API key and no cloud quota, but it only works in Chromium browsers (Chrome, Edge) and requires connectivity.',
      storageNote: 'Configuration and API keys stay in this browser\'s localStorage and are never uploaded to the DeepSeek Harness server. Mic and voice data go only to the recognition endpoint you configure.',
      shortcutEnabled: 'Enable Right Alt shortcut',
      shortcutHint: 'Hold Right Alt to talk, and release to stop and transcribe. AltGr layouts, key combos and key-repeat are ignored automatically.',
      configure: 'Configure',
      errOpenSettings: 'Could not open the settings panel automatically; click the settings button in the lower-left corner and open "Voice input".',
      importGroup: 'Import / export API configuration',
      importHint: 'Paste a JSON configuration and click Import, or pick a config.example.json file; Export is for backups or sharing across browsers.',
      importPlaceholder: 'Paste JSON configuration here…',
      importText: 'Import pasted config',
      importFile: 'Import JSON file',
      exportCopy: 'Copy current config',
      exportDownload: 'Download current config',
      importOk: 'Configuration imported and saved.',
      importError: 'Import failed: not a valid voice-input configuration JSON.',
      copied: 'Copied to clipboard.',
      copyFailed: 'Copy failed, please copy manually.',
      buttonAria: 'Start voice input',
      buttonAriaRecording: 'Stop recording and transcribe',
      buttonTitle: 'Voice input',
      recording: 'Recording',
      processing: 'Transcribing…',
      inserted: 'Inserted into the composer',
      errMic: 'Microphone unavailable; check browser permissions.',
      errMediaRecorder: 'This browser cannot record audio; try Chrome or Edge.',
      errRecognitionUnsupported: 'This browser has no speech recognition; try Chrome/Edge or configure a cloud endpoint.',
      errNoSpeech: 'No speech recognized; please try again.',
      errConfig: 'Configure the endpoint in Settings → Voice input first.',
      errInvalidTemplate: 'The request body template is not valid JSON.',
      errReadAudio: 'Failed to read recorded audio data.',
      errEmpty: 'The transcript is empty.',
      errHttp: 'Recognition endpoint returned an error',
      errNetwork: 'Request to the recognition endpoint failed; check the URL, key and network.',
      errExtract: 'Could not extract text from the endpoint response; check the field path.',
      errNoInput: 'The composer is currently unavailable.',
      errNotAllowed: 'The browser denied microphone permission.',
      errAudioCapture: 'Failed to start recording',
      errRealtimeUnsupported: 'This browser cannot stream live audio; try Chrome or Edge.',
      errRealtimeWs: 'Realtime recognition connection failed; check that the local proxy is running and the key is valid.',
      close: 'Dismiss',
    }

    // ------------------------------------------------------------------
    // 配置存储（localStorage，带订阅；设置页与输入框按钮共享）
    // ------------------------------------------------------------------
    var STORAGE_KEY = 'dsh.voice-input.config.v1'

    var DEFAULT_CONFIG = {
      mode: 'openai', // openai | custom-json | browser | realtime
      preset: 'openai',
      endpoint: 'https://api.openai.com/v1/audio/transcriptions',
      apiKey: '',
      model: 'whisper-1',
      language: 'zh',
      prompt: '',
      headers: {},
      shortcutEnabled: true,
      customUrl: '',
      jsonTemplate: JSON.stringify({
        audio: '{{audio}}',
        format: '{{format}}',
        model: '{{model}}',
        language: '{{language}}',
      }, null, 2),
      responsePath: 'text',
      realtimeUrl: 'ws://127.0.0.1:8787/ws',
      realtimeModel: 'fun-asr-flash-8k-realtime',
    }

    var PRESETS = [
      { id: 'openai', mode: 'openai', endpoint: 'https://api.openai.com/v1/audio/transcriptions', model: 'whisper-1' },
      { id: 'groq', mode: 'openai', endpoint: 'https://api.groq.com/openai/v1/audio/transcriptions', model: 'whisper-large-v3' },
      { id: 'siliconflow', mode: 'openai', endpoint: 'https://api.siliconflow.cn/v1/audio/transcriptions', model: 'FunAudioLLM/SenseVoiceSmall' },
      { id: 'fun-asr-realtime', mode: 'realtime', realtimeUrl: 'ws://127.0.0.1:8787/ws', realtimeModel: 'fun-asr-flash-8k-realtime' },
      { id: 'local-whisper', mode: 'openai', endpoint: 'http://127.0.0.1:8000/v1/audio/transcriptions', model: 'whisper-1' },
      { id: 'browser', mode: 'browser' },
      { id: 'custom-json', mode: 'custom-json', customUrl: 'https://example.com/api/stt' },
    ]

    function asObject(value) {
      if (value !== null && typeof value === 'object' && !Array.isArray(value)) return value
      return null
    }

    function asString(value, fallback) {
      return typeof value === 'string' ? value : fallback
    }

    function normalizeConfig(raw) {
      var base = JSON.parse(JSON.stringify(DEFAULT_CONFIG))
      var src = asObject(raw)
      if (src === null) return base
      var modes = ['openai', 'custom-json', 'browser', 'realtime']
      base.mode = modes.indexOf(src.mode) >= 0 ? src.mode : base.mode
      base.preset = asString(src.preset, base.preset)
      base.endpoint = asString(src.endpoint, base.endpoint)
      base.apiKey = asString(src.apiKey, '')
      base.model = asString(src.model, base.model)
      base.language = asString(src.language, base.language)
      base.prompt = asString(src.prompt, '')
      base.shortcutEnabled = typeof src.shortcutEnabled === 'boolean' ? src.shortcutEnabled : base.shortcutEnabled
      base.customUrl = asString(src.customUrl, '')
      base.jsonTemplate = asString(src.jsonTemplate, base.jsonTemplate)
      base.responsePath = asString(src.responsePath, base.responsePath)
      base.realtimeUrl = asString(src.realtimeUrl, base.realtimeUrl)
      base.realtimeModel = asString(src.realtimeModel, base.realtimeModel)
      var headers = asObject(src.headers)
      if (headers !== null) {
        base.headers = headers
      } else if (typeof src.headers === 'string') {
        try {
          var parsed = JSON.parse(src.headers)
          if (asObject(parsed) !== null) base.headers = parsed
        } catch (_err) { /* 保留原值 */ }
      }
      return base
    }

    function loadConfig() {
      var value = null
      try {
        if (typeof localStorage !== 'undefined') value = localStorage.getItem(STORAGE_KEY)
      } catch (_err) { /* 隐私模式等 */ }
      if (typeof value !== 'string' || value === '') return normalizeConfig(null)
      try {
        return normalizeConfig(JSON.parse(value))
      } catch (_err) {
        return normalizeConfig(null)
      }
    }

    var config = loadConfig()
    var configListeners = new Set()

    function subscribeConfig(listener) {
      configListeners.add(listener)
      return function unsubscribe() {
        configListeners.delete(listener)
      }
    }

    function getConfig() {
      return config
    }

    function setConfig(next) {
      config = normalizeConfig(next)
      try {
        if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
      } catch (_err) { /* 存储失败不阻塞使用 */ }
      configListeners.forEach(function (listener) {
        try { listener() } catch (_err) { /* 单个监听器失败不影响其他 */ }
      })
    }

    function useConfig() {
      if (typeof react.useSyncExternalStore === 'function') {
        return react.useSyncExternalStore(subscribeConfig, getConfig, getConfig)
      }
      var state = react.useState(getConfig)
      var setState = state[1]
      react.useEffect(function () {
        return subscribeConfig(function () { setState(getConfig()) })
      }, [])
      return state[0]
    }

    // 全局右 Alt 快捷键控制器：VoiceInputButton 挂载时登记，卸载时清空。
    // 按住右 Alt 开始录音，松手停止并转写。
    var voiceController = { current: null }

    // ------------------------------------------------------------------
    // 工具函数
    // ------------------------------------------------------------------
    function messageOf(error) {
      if (error instanceof Error && error.message) return error.message
      return String(error)
    }

    function pickMimeType() {
      if (typeof MediaRecorder === 'undefined') return ''
      var candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus']
      for (var i = 0; i < candidates.length; i++) {
        try {
          if (MediaRecorder.isTypeSupported(candidates[i])) return candidates[i]
        } catch (_err) { /* continue */ }
      }
      return ''
    }

    function extensionOf(mimeType) {
      if (mimeType.indexOf('mp4') >= 0) return 'm4a'
      if (mimeType.indexOf('ogg') >= 0) return 'ogg'
      return 'webm'
    }

    function resolveOpenAIEndpoint(raw) {
      var endpoint = (raw || '').trim()
      if (endpoint === '') return ''
      if (/\/audio\/transcriptions\/?$/.test(endpoint)) return endpoint.replace(/\/+$/, '')
      return endpoint.replace(/\/+$/, '') + '/audio/transcriptions'
    }

    function safeJson(response) {
      return response.text().then(function (text) {
        if (text === '') return null
        try {
          return JSON.parse(text)
        } catch (_err) {
          return { __raw: text }
        }
      })
    }

    function extractOpenAIText(data) {
      if (data === null || data === undefined) return ''
      var value = data.text
      if (typeof value === 'string') return value
      value = data.transcript
      if (typeof value === 'string') return value
      if (asObject(data.data) !== null) {
        value = data.data.text
        if (typeof value === 'string') return value
      }
      return ''
    }

    function errorTextOfOpenAI(data, status) {
      var detail = ''
      var errObj = asObject(data) === null ? null : data
      if (errObj !== null && errObj.error) {
        detail = typeof errObj.error === 'string'
          ? errObj.error
          : errObj.error.message || JSON.stringify(errObj.error)
      } else if (asObject(data) !== null && data.message) {
        detail = String(data.message)
      } else {
        detail = 'HTTP ' + status
      }
      return detail
    }

    function pathGet(root, path) {
      if (path === undefined || path === null || String(path).trim() === '') return root
      var parts = String(path).replace(/\[(\d+)\]/g, '.$1').split('.').filter(function (part) {
        return part !== ''
      })
      var current = root
      for (var i = 0; i < parts.length; i++) {
        if (current === null || current === undefined) return undefined
        current = current[parts[i]]
      }
      return current
    }

    function extractCustomText(data, responsePath) {
      if (typeof data === 'string') return data
      var value = pathGet(data, responsePath)
      if (typeof value === 'string') return value
      return ''
    }

    function deepSubstitute(node, vars) {
      if (typeof node === 'string') {
        return node.replace(/\{\{\s*(audio|format|model|language)\s*\}\}/g, function (_whole, name) {
          return vars[name]
        })
      }
      if (Array.isArray(node)) {
        return node.map(function (item) { return deepSubstitute(item, vars) })
      }
      if (asObject(node) !== null) {
        var output = {}
        Object.keys(node).forEach(function (key) {
          output[key] = deepSubstitute(node[key], vars)
        })
        return output
      }
      return node
    }

    function blobToBase64(blob, t) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader()
        reader.onload = function () {
          var dataUrl = String(reader.result || '')
          var comma = dataUrl.indexOf(',')
          resolve(comma >= 0 ? dataUrl.slice(comma + 1) : dataUrl)
        }
        reader.onerror = function () {
          reject(new Error(t('errReadAudio')))
        }
        reader.readAsDataURL(blob)
      })
    }

    function buildHeaders(cfg) {
      var headers = {}
      if (cfg.apiKey) headers.Authorization = 'Bearer ' + cfg.apiKey
      var custom = asObject(cfg.headers)
      if (custom !== null) {
        Object.keys(custom).forEach(function (key) {
          if (typeof custom[key] === 'string' || typeof custom[key] === 'number') {
            headers[key] = String(custom[key])
          }
        })
      }
      return headers
    }

    function transcribeOpenAI(blob, mimeType, cfg, t) {
      var endpoint = resolveOpenAIEndpoint(cfg.endpoint)
      if (endpoint === '') throw new Error(t('errConfig'))
      var form = new FormData()
      form.append('file', blob, 'voice.' + extensionOf(mimeType))
      form.append('model', cfg.model || 'whisper-1')
      if (cfg.language) form.append('language', cfg.language)
      if (cfg.prompt) form.append('prompt', cfg.prompt)
      var headers = buildHeaders(cfg)
      return fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: form,
      }).then(function (response) {
        return safeJson(response).then(function (data) {
          if (!response.ok) {
            throw new Error(t('errHttp') + ' (' + errorTextOfOpenAI(data, response.status) + ')')
          }
          var text = extractOpenAIText(data)
          if (text.trim() === '') throw new Error(t('errEmpty'))
          return text.trim()
        })
      }).catch(function (error) {
        if (error instanceof TypeError) throw new Error(t('errNetwork'))
        throw error
      })
    }

    function transcribeCustomJSON(blob, mimeType, cfg, t) {
      var url = (cfg.customUrl || '').trim()
      if (url === '') throw new Error(t('errConfig'))
      var templateText = cfg.jsonTemplate
      var template
      try {
        template = JSON.parse(templateText)
      } catch (_err) {
        throw new Error(t('errInvalidTemplate'))
      }
      return blobToBase64(blob, t).then(function (base64) {
        var body = deepSubstitute(template, {
          audio: base64,
          format: mimeType || 'audio/webm',
          model: cfg.model || '',
          language: cfg.language || '',
        })
        return fetch(url, {
          method: 'POST',
          headers: Object.assign({ 'Content-Type': 'application/json' }, buildHeaders(cfg)),
          body: JSON.stringify(body),
        })
      }).then(function (response) {
        return safeJson(response).then(function (data) {
          if (!response.ok) {
            var detail = 'HTTP ' + response.status
            if (data !== null && data !== undefined) {
              if (typeof data === 'string') detail = data.slice(0, 200)
              else if (data.message) detail = String(data.message)
              else if (data.error) detail = typeof data.error === 'string' ? data.error : JSON.stringify(data.error).slice(0, 200)
            }
            throw new Error(t('errHttp') + ' (' + detail + ')')
          }
          var text = extractCustomText(data, cfg.responsePath)
          if (text.trim() === '') throw new Error(t('errExtract'))
          return text.trim()
        })
      }).catch(function (error) {
        if (error instanceof TypeError) throw new Error(t('errNetwork'))
        throw error
      })
    }

    function focusComposer() {
      if (typeof document === 'undefined') return
      window.setTimeout(function () {
        var element = document.querySelector('textarea[data-phase]')
        if (element === null) return
        try {
          element.focus()
          var end = element.value.length
          element.setSelectionRange(end, end)
        } catch (_err) { /* ignore */ }
      }, 60)
    }

    // ------------------------------------------------------------------
    // SVG 图标（不依赖 primitives 的导出名，保证可用）
    // ------------------------------------------------------------------
    function MicIcon(props) {
      return react.createElement('svg', Object.assign({}, props, {
        width: 15, height: 15, viewBox: '0 0 16 16', fill: 'none',
        'aria-hidden': 'true',
      }),
        react.createElement('rect', { x: 5, y: 2, width: 6, height: 9, rx: 3, fill: 'currentColor' }),
        react.createElement('path', { d: 'M2.5 7.5a5.5 5.5 0 0 0 11 0', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }),
        react.createElement('line', { x1: 8, x2: 8, y1: 13, y2: 14.5, stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }),
      )
    }

    // ------------------------------------------------------------------
    // 实时流式识别（Fun-ASR Realtime / Qwen-ASR）：AudioWorklet 采集 16k PCM
    // ------------------------------------------------------------------
    var REALTIME_WORKLET_CODE = [
      'class ViPcm16kProcessor extends AudioWorkletProcessor {',
      '  constructor() { super(); this.buffer = []; this.target = 1600; this.stopped = false;',
      '    this.port.onmessage = (event) => {',
      '      if (event.data === "stop") { this.stopped = true;',
      '        if (this.buffer.length > 0) { this.port.postMessage(new Int16Array(this.buffer)); this.buffer = []; }',
      '      }',
      '    };',
      '  }',
      '  process(inputs) {',
      '    const input = inputs[0];',
      '    if (input && input[0]) {',
      '      const data = input[0];',
      '      for (let i = 0; i < data.length; i++) {',
      '        const sample = Math.max(-32768, Math.min(32767, Math.round(data[i] * 32767)));',
      '        this.buffer.push(sample);',
      '      }',
      '      while (this.buffer.length >= this.target) {',
      '        this.port.postMessage(new Int16Array(this.buffer.splice(0, this.target)));',
      '      }',
      '    }',
      '    if (this.stopped) { this.port.postMessage("stopped"); return false; }',
      '    return true;',
      '  }',
      '}',
      'registerProcessor("vi-pcm-16k", ViPcm16kProcessor);',
    ].join('\n')

    function int16ToBase64(int16) {
      var bytes = new Uint8Array(int16.buffer, int16.byteOffset, int16.byteLength)
      var binary = ''
      var chunkSize = 0x8000
      for (var i = 0; i < bytes.length; i += chunkSize) {
        binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize))
      }
      return btoa(binary)
    }

    function eventId() {
      return 'evt_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10)
    }

    // ------------------------------------------------------------------
    // 输入框按钮（conversation.input.right）
    // ------------------------------------------------------------------
    function VoiceInputButton(props) {
      var h = react.createElement
      var t = props.t || function (key) { return key }
      var cfg = useConfig()
      var phaseState = react.useState('idle')
      var phase = phaseState[0]
      var setPhase = phaseState[1]
      var errorState = react.useState(null)
      var error = errorState[0]
      var setError = errorState[1]
      var noticeState = react.useState(null)
      var notice = noticeState[0]
      var setNotice = noticeState[1]

      var recorderRef = react.useRef(null)
      var streamRef = react.useRef(null)
      var chunksRef = react.useRef([])
      var speechRef = react.useRef(null)
      var speechErrorRef = react.useRef(false)
      var aliveRef = react.useRef(true)
      var liveInputRef = react.useRef(null)
      var actionsRef = react.useRef(null)
      var controllerRef = react.useRef(null)
      var phaseRef = react.useRef('idle')
      var shortcutActiveRef = react.useRef(false)
      var realtimeRef = react.useRef(null)

      var liveInput = typeof props.useInput === 'function'
        ? props.useInput(function (snapshot) { return snapshot })
        : props.input
      liveInputRef.current = liveInput || null
      actionsRef.current = props.inputActions || null
      phaseRef.current = phase
      controllerRef.current = { start: startFromShortcut, stop: stopFromShortcut }

      react.useEffect(function () {
        aliveRef.current = true
        var handle = {
          start: function () {
            var controller = controllerRef.current
            if (controller !== null) controller.start()
          },
          stop: function () {
            var controller = controllerRef.current
            if (controller !== null) controller.stop()
          },
        }
        voiceController.current = handle
        return function () {
          aliveRef.current = false
          if (voiceController.current === handle) voiceController.current = null
          var rt = realtimeRef.current
          if (rt !== null) {
            realtimeRef.current = null
            try { if (rt.socket !== null && rt.socket.readyState < 2) rt.socket.close() } catch (_err) { /* ignore */ }
            try { if (rt.node !== null) rt.node.port.close() } catch (_err) { /* ignore */ }
            try { if (rt.source !== null) rt.source.disconnect() } catch (_err) { /* ignore */ }
            try { if (rt.stream !== null) rt.stream.getTracks().forEach(function (track) { track.stop() }) } catch (_err) { /* ignore */ }
            try { if (rt.audioContext !== null) rt.audioContext.close() } catch (_err) { /* ignore */ }
          }
          var stream = streamRef.current
          if (stream !== null) {
            stream.getTracks().forEach(function (track) { track.stop() })
            streamRef.current = null
          }
          if (speechRef.current !== null) {
            try { speechRef.current.abort() } catch (_err) { /* ignore */ }
            speechRef.current = null
          }
        }
      }, [])

      react.useEffect(function () {
        if (phase !== 'recording') shortcutActiveRef.current = false
      }, [phase])

      react.useEffect(function () {
        if (error === null) return undefined
        var id = window.setTimeout(function () { setError(null) }, 9000)
        return function () { window.clearTimeout(id) }
      }, [error])

      react.useEffect(function () {
        if (notice === null) return undefined
        var id = window.setTimeout(function () { setNotice(null) }, 2400)
        return function () { window.clearTimeout(id) }
      }, [notice])

      function stopTracks() {
        var stream = streamRef.current
        if (stream !== null) {
          stream.getTracks().forEach(function (track) { track.stop() })
          streamRef.current = null
        }
      }

      function insertTranscript(text) {
        var clean = String(text === null || text === undefined ? '' : text).trim()
        if (clean === '') {
          setError(t('errEmpty'))
          return
        }
        var actions = actionsRef.current
        if (actions === null || typeof actions.setDraft !== 'function') {
          setError(t('errNoInput'))
          return
        }
        var current = liveInputRef.current && typeof liveInputRef.current.draft === 'string'
          ? liveInputRef.current.draft
          : ''
        var next = current
        if (next !== '' && !/[\s\n\u3000]$/.test(next)) next += ' '
        next += clean
        actions.setDraft(next)
        setNotice(t('inserted'))
        focusComposer()
      }

      function runTranscription(blob, mimeType) {
        setPhase('processing')
        var request
        if (cfg.mode === 'custom-json') {
          request = transcribeCustomJSON(blob, mimeType || 'audio/webm', cfg, t)
        } else {
          request = transcribeOpenAI(blob, mimeType || 'audio/webm', cfg, t)
        }
        request.then(function (text) {
          if (!aliveRef.current) return
          setPhase('idle')
          insertTranscript(text)
        }).catch(function (error) {
          if (!aliveRef.current) return
          setPhase('idle')
          setError(messageOf(error))
        })
      }

      function finishRealtime(rt) {
        if (rt.finished) return
        rt.finished = true
        if (realtimeRef.current === rt) realtimeRef.current = null
        if (rt.finishTimer !== null) {
          window.clearTimeout(rt.finishTimer)
          rt.finishTimer = null
        }
        try { if (rt.socket !== null && rt.socket.readyState < 2) rt.socket.close() } catch (_err) { /* ignore */ }
        try { if (rt.node !== null) rt.node.port.close() } catch (_err) { /* ignore */ }
        try { if (rt.source !== null) rt.source.disconnect() } catch (_err) { /* ignore */ }
        try { if (rt.stream !== null) rt.stream.getTracks().forEach(function (track) { track.stop() }) } catch (_err) { /* ignore */ }
        try { if (rt.audioContext !== null) rt.audioContext.close() } catch (_err) { /* ignore */ }
        if (!aliveRef.current) return
        var text = String(rt.finalText || '').replace(/\s+/g, ' ').trim()
        if (text !== '') {
          setPhase('idle')
          insertTranscript(text)
        } else {
          setPhase('idle')
          setError(rt.error || t('errNoSpeech'))
        }
      }

      function requestRealtimeFinish(rt) {
        if (rt.finished || rt.finishing !== true || rt.finishTimer !== null) return
        if (rt.socket !== null && rt.socket.readyState === 1) {
          try {
            rt.socket.send(JSON.stringify({ event_id: eventId(), type: 'session.finish' }))
          } catch (_err) { /* 下面由超时兜底 */ }
        }
        rt.finishTimer = window.setTimeout(function () {
          finishRealtime(rt)
        }, 2500)
      }

      function startRealtimeRecording() {
        var AC = window.AudioContext || window.webkitAudioContext
        if (typeof AC !== 'function') {
          setError(t('errRealtimeUnsupported'))
          return
        }
        var proxyUrl = (cfg.realtimeUrl || '').trim()
        if (proxyUrl === '') {
          setError(t('errConfig'))
          return
        }
        var model = cfg.realtimeModel || 'fun-asr-flash-8k-realtime'
        var wsUrl = proxyUrl + (proxyUrl.indexOf('?') >= 0 ? '&' : '?') + 'model=' + encodeURIComponent(model)

        navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        }).then(function (stream) {
          if (!aliveRef.current) {
            stream.getTracks().forEach(function (track) { track.stop() })
            return
          }
          var audioContext
          try {
            audioContext = new AC({ sampleRate: 16000 })
          } catch (_err) {
            audioContext = new AC()
          }
          var workletUrl = URL.createObjectURL(new Blob([REALTIME_WORKLET_CODE], { type: 'application/javascript' }))
          audioContext.audioWorklet.addModule(workletUrl).then(function () {
            URL.revokeObjectURL(workletUrl)
            var source = audioContext.createMediaStreamSource(stream)
            var node = new AudioWorkletNode(audioContext, 'vi-pcm-16k')
            var gain = audioContext.createGain()
            gain.gain.value = 0
            source.connect(node)
            node.connect(gain)
            gain.connect(audioContext.destination)

            var rt = {
              socket: null, audioContext: audioContext, node: node, source: source, gain: gain,
              stream: stream, finalText: '', finished: false, finishing: false,
              finishTimer: null, error: null, wsReady: false,
            }
            realtimeRef.current = rt

            var socket
            try {
              socket = new WebSocket(wsUrl)
            } catch (_err) {
              finishRealtime(rt)
              setError(t('errRealtimeWs'))
              return
            }
            rt.socket = socket

            socket.onopen = function () {
              rt.wsReady = true
              var transcription = { language: cfg.language || 'zh' }
              if (cfg.prompt && cfg.prompt.trim() !== '') transcription.corpus = { text: cfg.prompt.trim() }
              var update = {
                event_id: eventId(),
                type: 'session.update',
                session: {
                  input_audio_format: 'pcm',
                  sample_rate: 16000,
                  input_audio_transcription: transcription,
                  turn_detection: { type: 'server_vad', threshold: 0.2, silence_duration_ms: 600 },
                },
              }
              try { socket.send(JSON.stringify(update)) } catch (_err) { /* ignore */ }
              setPhase('recording')
            }

            node.port.onmessage = function (event) {
              if (event.data === 'stopped') {
                if (rt.finishing) requestRealtimeFinish(rt)
                return
              }
              if (event.data instanceof Int16Array) {
                if (rt.socket !== null && rt.socket.readyState === 1) {
                  try {
                    rt.socket.send(JSON.stringify({
                      event_id: eventId(),
                      type: 'input_audio_buffer.append',
                      audio: int16ToBase64(event.data),
                    }))
                  } catch (_err) { /* ignore */ }
                }
              }
            }

            socket.onmessage = function (event) {
              var data
              try { data = JSON.parse(event.data) } catch (_err) { return }
              if (data.type === 'error') {
                rt.error = t('errRealtimeWs')
              } else if (data.type === 'conversation.item.input_audio_transcription.completed') {
                if (typeof data.transcript === 'string' && data.transcript.trim() !== '') {
                  rt.finalText += (rt.finalText === '' ? '' : ' ') + data.transcript.trim()
                }
              } else if (data.type === 'session.finished') {
                finishRealtime(rt)
              }
            }

            socket.onerror = function () {
              rt.error = t('errRealtimeWs')
            }

            socket.onclose = function () {
              if (!aliveRef.current) return
              if (rt.finished) return
              if (rt.finishing) {
                finishRealtime(rt)
              } else if (phaseRef.current !== 'processing') {
                finishRealtime(rt)
              }
            }
          }).catch(function () {
            URL.revokeObjectURL(workletUrl)
            stream.getTracks().forEach(function (track) { track.stop() })
            try { audioContext.close() } catch (_err) { /* ignore */ }
            setError(t('errRealtimeUnsupported'))
          })
        }).catch(function () {
          if (!aliveRef.current) return
          setError(t('errNotAllowed'))
        })
      }

      function stopRealtimeRecording() {
        var rt = realtimeRef.current
        if (rt === null) {
          setPhase('idle')
          return
        }
        rt.finishing = true
        setPhase('processing')
        try {
          if (rt.node !== null) rt.node.port.postMessage('stop')
        } catch (_err) {
          requestRealtimeFinish(rt)
          return
        }
        try {
          if (rt.stream !== null) rt.stream.getTracks().forEach(function (track) { track.stop() })
        } catch (_err) { /* ignore */ }
        if (!rt.wsReady) finishRealtime(rt)
      }

      function startBrowserRecognition() {
        var SR = window.SpeechRecognition || window.webkitSpeechRecognition
        if (typeof SR !== 'function') {
          setError(t('errRecognitionUnsupported'))
          return
        }
        var recognition
        try {
          recognition = new SR()
        } catch (_err) {
          setError(t('errRecognitionUnsupported'))
          return
        }
        speechRef.current = recognition
        speechErrorRef.current = false
        recognition.lang = cfg.language || 'zh-CN'
        recognition.continuous = true
        recognition.interimResults = false
        recognition.maxAlternatives = 1
        var finalText = ''
        recognition.onresult = function (event) {
          for (var i = event.resultIndex; i < event.results.length; i++) {
            var result = event.results[i]
            if (result.isFinal && result[0] && result[0].transcript) {
              finalText += result[0].transcript
            }
          }
        }
        recognition.onerror = function (event) {
          if (!aliveRef.current) return
          setPhase('idle')
          speechRef.current = null
          speechErrorRef.current = true
          if (event && (event.error === 'not-allowed' || event.error === 'service-not-allowed')) {
            setError(t('errNotAllowed'))
          } else if (event && event.error === 'no-speech') {
            setError(t('errNoSpeech'))
          } else {
            setError(t('errNetwork'))
          }
        }
        recognition.onend = function () {
          if (!aliveRef.current) return
          speechRef.current = null
          setPhase('idle')
          if (speechErrorRef.current) return
          if (finalText.trim() !== '') insertTranscript(finalText)
          else setError(t('errNoSpeech'))
        }
        try {
          recognition.start()
          setPhase('recording')
        } catch (_err) {
          speechRef.current = null
          setError(t('errNotAllowed'))
        }
      }

      function startMediaRecorder(stream) {
        streamRef.current = stream
        var mimeType = pickMimeType()
        var recorder
        try {
          recorder = mimeType === '' ? new MediaRecorder(stream) : new MediaRecorder(stream, { mimeType: mimeType })
        } catch (_err) {
          stopTracks()
          setError(t('errMediaRecorder'))
          return
        }
        recorderRef.current = recorder
        chunksRef.current = []
        recorder.ondataavailable = function (event) {
          if (event.data && event.data.size > 0) chunksRef.current.push(event.data)
        }
        recorder.onerror = function () {
          if (!aliveRef.current) return
          stopTracks()
          recorderRef.current = null
          setPhase('idle')
          setError(t('errAudioCapture'))
        }
        recorder.onstop = function () {
          var recordedMime = recorder.mimeType || mimeType || 'audio/webm'
          recorderRef.current = null
          var blob = new Blob(chunksRef.current, { type: recordedMime })
          chunksRef.current = []
          stopTracks()
          if (!aliveRef.current) return
          if (blob.size === 0) {
            setPhase('idle')
            setError(t('errNoSpeech'))
            return
          }
          runTranscription(blob, recordedMime)
        }
        recorder.start()
        setPhase('recording')
      }

      function startRecording() {
        setError(null)
        setNotice(null)
        if (actionsRef.current === null || typeof actionsRef.current.setDraft !== 'function') {
          setError(t('errNoInput'))
          return
        }
        var mode = cfg.mode
        if (mode === 'browser') {
          startBrowserRecognition()
          return
        }
        if (mode === 'realtime') {
          startRealtimeRecording()
          return
        }
        if (mode === 'openai' && resolveOpenAIEndpoint(cfg.endpoint) === '') {
          setError(t('errConfig'))
          return
        }
        if (mode === 'custom-json' && (cfg.customUrl || '').trim() === '') {
          setError(t('errConfig'))
          return
        }
        if (typeof navigator === 'undefined' || !navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
          setError(t('errMic'))
          return
        }
        navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        }).then(function (stream) {
          if (!aliveRef.current) {
            stream.getTracks().forEach(function (track) { track.stop() })
            return
          }
          startMediaRecorder(stream)
        }).catch(function (_error) {
          if (!aliveRef.current) return
          setError(t('errNotAllowed'))
        })
      }

      function stopRecording() {
        shortcutActiveRef.current = false
        if (cfg.mode === 'realtime') {
          stopRealtimeRecording()
          return
        }
        var speech = speechRef.current
        if (speech !== null) {
          try { speech.stop() } catch (_err) { /* ignore */ }
          return
        }
        var recorder = recorderRef.current
        if (recorder !== null && recorder.state !== 'inactive') {
          try { recorder.stop() } catch (_err) { /* ignore */ }
          return
        }
        setPhase('idle')
      }

      // 右 Alt 快捷键：keydown 开始，keyup 结束
      function startFromShortcut() {
        if (phaseRef.current !== 'idle') return
        shortcutActiveRef.current = true
        startRecording()
      }

      function stopFromShortcut() {
        if (!shortcutActiveRef.current) return
        stopRecording()
      }

      function onButtonClick() {
        if (phase === 'processing') return
        if (phase === 'recording') stopRecording()
        else startRecording()
      }

      function openSettingsPanel() {
        try {
          var trigger = document.querySelector('button[aria-haspopup="dialog"]')
          if (trigger !== null) {
            trigger.click()
            setError(null)
            return
          }
        } catch (_err) { /* fall through */ }
        setError(t('errOpenSettings'))
      }

      var waveBars = []
      for (var i = 0; i < 5; i++) waveBars.push(h('i', { key: i }))
      var waveform = h('span', { className: 'vi_wave', 'aria-hidden': 'true' }, waveBars)

      var popover = null
      if (error !== null) {
        popover = h('div', { className: 'vi_pop vi_popError', role: 'alert' },
          h('span', null, error),
          h('button', {
            type: 'button', className: 'vi_btn', onClick: openSettingsPanel,
          }, t('configure')),
          h('button', {
            type: 'button', className: 'vi_popClose', 'aria-label': t('close'),
            onClick: function () { setError(null) },
          }, '✕'),
        )
      } else if (notice !== null) {
        popover = h('div', { className: 'vi_pop vi_popOk', role: 'status' },
          h('span', null, notice),
        )
      }

      return h('div', { className: 'vi_micAnchor', 'data-dsh-voice-input': '' },
        h('button', {
          type: 'button',
          className: 'vi_micButton',
          'data-phase': phase === 'idle' ? 'idle' : phase,
          'aria-label': phase === 'recording' ? t('buttonAriaRecording') : t('buttonAria'),
          'aria-pressed': phase === 'recording' ? 'true' : 'false',
          title: t('buttonTitle'),
          disabled: phase === 'processing' || props.inputActions === undefined,
          onClick: onButtonClick,
        }, phase === 'recording' ? waveform : phase === 'processing' ? h('span', { className: 'vi_spin' }) : h(MicIcon, {})),
        popover,
      )
    }

    // ------------------------------------------------------------------
    // 设置页（settings.plugins.tab）
    // ------------------------------------------------------------------
    function VoiceSettingsPanel(props) {
      var h = react.createElement
      var t = props.t || function (key) { return key }
      var cfg = useConfig()

      var importTextState = react.useState('')
      var importText = importTextState[0]
      var setImportText = importTextState[1]
      var feedbackState = react.useState(null)
      var feedback = feedbackState[0]
      var setFeedback = feedbackState[1]
      var headersDraftState = react.useState(JSON.stringify(asObject(cfg.headers) || {}, null, 2))
      var headersDraft = headersDraftState[0]
      var setHeadersDraft = headersDraftState[1]

      react.useEffect(function () {
        setHeadersDraft(JSON.stringify(asObject(cfg.headers) || {}, null, 2))
      }, [cfg.headers])

      function update(patch) {
        var next = {}
        Object.keys(cfg).forEach(function (key) { next[key] = cfg[key] })
        Object.keys(patch).forEach(function (key) { next[key] = patch[key] })
        setConfig(next)
      }

      function showFeedback(kind, text) {
        setFeedback({ kind: kind, text: text })
        window.setTimeout(function () {
          setFeedback(function (current) {
            return current !== null && current.text === text ? null : current
          })
        }, 4000)
      }

      function applyPreset(presetId) {
        var preset = null
        for (var i = 0; i < PRESETS.length; i++) {
          if (PRESETS[i].id === presetId) {
            preset = PRESETS[i]
            break
          }
        }
        if (preset === null) return
        var patch = { preset: presetId }
        if (preset.mode) patch.mode = preset.mode
        if (preset.endpoint) patch.endpoint = preset.endpoint
        if (preset.model) patch.model = preset.model
        if (preset.customUrl) patch.customUrl = preset.customUrl
        update(patch)
        showFeedback('ok', t('presetApplied'))
      }

      function commitHeaders() {
        try {
          var parsed = JSON.parse(headersDraft)
          if (asObject(parsed) === null) throw new Error('not an object')
          update({ headers: parsed })
          showFeedback('ok', t('importOk'))
        } catch (_err) {
          showFeedback('error', t('headersInvalid'))
        }
      }

      function importConfig(text) {
        try {
          var parsed = JSON.parse(text)
          if (asObject(parsed) === null) throw new Error('not an object')
          setConfig(parsed)
          setImportText('')
          showFeedback('ok', t('importOk'))
        } catch (_err) {
          showFeedback('error', t('importError'))
        }
      }

      function copyConfig() {
        var text = JSON.stringify(getConfig(), null, 2)
        var done = function () { showFeedback('ok', t('copied')) }
        var fail = function () { showFeedback('error', t('copyFailed')) }
        try {
          if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            navigator.clipboard.writeText(text).then(done, fail)
            return
          }
        } catch (_err) { /* fall through */ }
        try {
          var textarea = document.createElement('textarea')
          textarea.value = text
          textarea.style.position = 'fixed'
          textarea.style.opacity = '0'
          document.body.appendChild(textarea)
          textarea.select()
          var ok = document.execCommand('copy')
          document.body.removeChild(textarea)
          if (ok) done()
          else fail()
        } catch (_err) {
          fail()
        }
      }

      function downloadConfig() {
        var text = JSON.stringify(getConfig(), null, 2)
        var blob = new Blob([text], { type: 'application/json' })
        var url = URL.createObjectURL(blob)
        var anchor = document.createElement('a')
        anchor.href = url
        anchor.download = 'dsh-voice-input.config.json'
        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
        window.setTimeout(function () { URL.revokeObjectURL(url) }, 1000)
      }

      function onConfigFile(event) {
        var file = event.target.files && event.target.files[0]
        event.target.value = ''
        if (file === undefined || file === null) return
        var reader = new FileReader()
        reader.onload = function () {
          importConfig(String(reader.result || ''))
        }
        reader.onerror = function () {
          showFeedback('error', t('importError'))
        }
        reader.readAsText(file)
      }

      function field(options) {
        return h('label', {
          key: options.key !== undefined ? options.key : options.label,
          className: 'vi_field' + (options.wide ? ' vi_fieldWide' : ''),
        },
          h('span', { className: 'vi_label' }, options.label),
          options.control,
          options.hint !== undefined ? h('span', { className: 'vi_hint' }, options.hint) : null,
        )
      }

      function textInput(value, onInput, extra) {
        return h('input', Object.assign({
          className: 'vi_input', type: 'text', value: value,
          onInput: function (event) { onInput(event.currentTarget.value) },
        }, extra || {}))
      }

      var mode = cfg.mode
      var providerFields = []
      var advancedFields = []

      if (mode === 'openai') {
        providerFields = [
          field({
            label: t('endpoint'),
            hint: t('endpointHint'),
            control: textInput(cfg.endpoint, function (value) { update({ endpoint: value }) }, { placeholder: 'https://…/v1/audio/transcriptions' }),
          }),
          field({
            label: t('apiKey'),
            hint: t('apiKeyHint'),
            control: textInput(cfg.apiKey, function (value) { update({ apiKey: value }) }, { type: 'password', autoComplete: 'off', placeholder: 'sk-…' }),
          }),
          field({
            label: t('model'),
            hint: t('modelHint'),
            control: textInput(cfg.model, function (value) { update({ model: value }) }),
          }),
          field({
            label: t('language'),
            hint: t('languageHint'),
            control: textInput(cfg.language, function (value) { update({ language: value }) }),
          }),
          field({
            label: t('prompt'),
            hint: t('promptHint'),
            control: textInput(cfg.prompt, function (value) { update({ prompt: value }) }),
            wide: true,
          }),
        ]
        advancedFields = [
          field({
            label: t('headers'),
            hint: t('headersHint'),
            wide: true,
            control: h('textarea', {
              className: 'vi_textarea', value: headersDraft, rows: 4, spellCheck: false,
              onInput: function (event) { setHeadersDraft(event.currentTarget.value) },
              onBlur: commitHeaders,
            }),
          }),
        ]
      } else if (mode === 'custom-json') {
        providerFields = [
          field({
            label: t('customUrl'),
            hint: t('customUrlHint'),
            wide: true,
            control: textInput(cfg.customUrl, function (value) { update({ customUrl: value }) }, { placeholder: 'https://…' }),
          }),
          field({
            label: t('apiKey'),
            hint: t('apiKeyHint'),
            control: textInput(cfg.apiKey, function (value) { update({ apiKey: value }) }, { type: 'password', autoComplete: 'off', placeholder: 'sk-…' }),
          }),
          field({
            label: t('model'),
            hint: t('modelHint'),
            control: textInput(cfg.model, function (value) { update({ model: value }) }),
          }),
          field({
            label: t('language'),
            hint: t('languageHint'),
            control: textInput(cfg.language, function (value) { update({ language: value }) }),
          }),
          field({
            label: t('responsePath'),
            hint: t('responsePathHint'),
            control: textInput(cfg.responsePath, function (value) { update({ responsePath: value }) }),
          }),
          field({
            label: t('jsonTemplate'),
            hint: t('jsonTemplateHint'),
            wide: true,
            control: h('textarea', {
              className: 'vi_textarea', value: cfg.jsonTemplate, rows: 7, spellCheck: false,
              onInput: function (event) { update({ jsonTemplate: event.currentTarget.value }) },
            }),
          }),
        ]
        advancedFields = [
          field({
            label: t('headers'),
            hint: t('headersHint'),
            wide: true,
            control: h('textarea', {
              className: 'vi_textarea', value: headersDraft, rows: 4, spellCheck: false,
              onInput: function (event) { setHeadersDraft(event.currentTarget.value) },
              onBlur: commitHeaders,
            }),
          }),
        ]
      } else if (mode === 'realtime') {
        providerFields = [
          field({
            label: t('realtimeUrl'),
            hint: t('realtimeUrlHint'),
            wide: true,
            control: textInput(cfg.realtimeUrl, function (value) { update({ realtimeUrl: value }) }, { placeholder: 'ws://127.0.0.1:8787/ws' }),
          }),
          field({
            label: t('realtimeModel'),
            hint: t('realtimeModelHint'),
            control: textInput(cfg.realtimeModel, function (value) { update({ realtimeModel: value }) }),
          }),
          field({
            label: t('language'),
            hint: t('languageHint'),
            control: textInput(cfg.language, function (value) { update({ language: value }) }, { placeholder: 'zh' }),
          }),
          field({
            label: t('prompt'),
            hint: t('promptHint'),
            control: textInput(cfg.prompt, function (value) { update({ prompt: value }) }),
          }),
          h('p', { key: 'realtimeNote', className: 'vi_note vi_fieldWide' }, t('realtimeNote')),
        ]
      } else {
        providerFields = [
          field({
            label: t('language'),
            hint: t('languageHint'),
            control: textInput(cfg.language, function (value) { update({ language: value }) }, { placeholder: 'zh-CN' }),
          }),
          h('p', { key: 'browserNote', className: 'vi_note vi_fieldWide' }, t('browserNote')),
        ]
      }

      var presetSelect = h('select', {
        className: 'vi_select', value: cfg.preset,
        onChange: function (event) { applyPreset(event.currentTarget.value) },
      }, PRESETS.map(function (preset) {
        var key = 'preset' + preset.id.charAt(0).toUpperCase() + preset.id.slice(1).replace(/-([a-z])/g, function (_m, letter) { return letter.toUpperCase() })
        return h('option', { value: preset.id, key: preset.id }, t(key))
      }))

      var modeSelect = h('select', {
        className: 'vi_select', value: mode,
        onChange: function (event) { update({ mode: event.currentTarget.value }) },
      },
        h('option', { value: 'openai' }, t('modeOpenai')),
        h('option', { value: 'custom-json' }, t('modeCustomJson')),
        h('option', { value: 'browser' }, t('modeBrowser')),
        h('option', { value: 'realtime' }, t('modeRealtime')),
      )

      return h('div', { className: 'vi_root', 'data-dsh-voice-input-settings': '' },
        h('h2', { className: 'vi_heading' }, t('settingsTitle')),
        h('p', { className: 'vi_intro' }, t('settingsIntro')),

        h('section', { className: 'vi_group' },
          h('h3', { className: 'vi_groupTitle' }, t('providerGroup')),
          h('div', { className: 'vi_grid' },
            field({ label: t('mode'), hint: t('modeHint'), control: modeSelect }),
            field({ label: t('preset'), hint: t('presetHint'), control: presetSelect }),
            h('div', { key: 'shortcutEnabled', className: 'vi_field vi_fieldWide' },
              h('label', { className: 'vi_checkRow' },
                h('input', {
                  type: 'checkbox',
                  checked: cfg.shortcutEnabled === true,
                  onChange: function (event) { update({ shortcutEnabled: event.currentTarget.checked }) },
                }),
                h('span', null, t('shortcutEnabled')),
              ),
              h('span', { className: 'vi_hint' }, t('shortcutHint')),
            ),
          ),
          providerFields,
          advancedFields.length > 0 ? h('details', { className: 'vi_field' },
            h('summary', { className: 'vi_label', style: { cursor: 'pointer' } }, t('advanced')),
            h('div', { className: 'vi_grid', style: { marginTop: 8 } }, advancedFields),
          ) : null,
        ),

        h('section', { className: 'vi_group' },
          h('h3', { className: 'vi_groupTitle' }, t('importGroup')),
          h('p', { className: 'vi_hint' }, t('importHint')),
          h('textarea', {
            className: 'vi_textarea', rows: 6, spellCheck: false, value: importText,
            placeholder: t('importPlaceholder'),
            onInput: function (event) { setImportText(event.currentTarget.value) },
          }),
          h('div', { className: 'vi_actions' },
            h('button', {
              type: 'button', className: 'vi_btn vi_btnPrimary',
              onClick: function () { importConfig(importText) },
            }, t('importText')),
            h('label', { className: 'vi_btn' },
              t('importFile'),
              h('input', { className: 'vi_fileInput', type: 'file', accept: 'application/json,.json', onChange: onConfigFile }),
            ),
            h('button', { type: 'button', className: 'vi_btn', onClick: copyConfig }, t('exportCopy')),
            h('button', { type: 'button', className: 'vi_btn', onClick: downloadConfig }, t('exportDownload')),
          ),
          feedback === null ? null : h('p', {
            className: feedback.kind === 'ok' ? 'vi_feedbackOk' : 'vi_feedbackError',
            role: 'status',
          }, feedback.text),
        ),

        h('p', { className: 'vi_note vi_warn' }, t('storageNote')),
      )
    }

    // ------------------------------------------------------------------
    // 插件入口
    // ------------------------------------------------------------------
    var inject = ['slots', 'locale']

    function apply(ctx) {
      var t = ctx.locale.bind(NS)
      ctx.effect(function () {
        return ctx.locale.register(NS, { zh: zh, en: en })
      }, 'dsh-voice-input: dictionaries')

      // 全局快捷键：按住右 Alt 开始录音，松手停止并转写
      // （自动忽略 AltGr、组合键与长按重复）
      ctx.effect(function () {
        function isRightAlt(event) {
          return event.code === 'AltRight' || (event.key === 'Alt' && event.location === 2)
        }
        function onRightAltKeyDown(event) {
          if (!isRightAlt(event)) return
          if (event.repeat || event.isComposing) return
          if (event.ctrlKey || event.metaKey || event.shiftKey) return
          try {
            if (event.getModifierState && event.getModifierState('AltGraph')) return
          } catch (_err) { /* 老浏览器没有该方法时继续 */ }
          if (getConfig().shortcutEnabled !== true) return
          event.preventDefault()
          var controller = voiceController.current
          if (controller !== null) controller.start()
        }
        function onRightAltKeyUp(event) {
          if (!isRightAlt(event)) return
          var controller = voiceController.current
          if (controller !== null) controller.stop()
        }
        window.addEventListener('keydown', onRightAltKeyDown, true)
        window.addEventListener('keyup', onRightAltKeyUp, true)
        return function () {
          window.removeEventListener('keydown', onRightAltKeyDown, true)
          window.removeEventListener('keyup', onRightAltKeyUp, true)
        }
      }, 'dsh-voice-input: right-alt hold-to-talk shortcut')

      // 发送键左侧的语音按钮
      ctx.slots.inject('conversation.input.right', function () {
        return ctx.slots.register({
          name: 'conversation.input.right',
          id: 'voice-input',
          order: 1000,
          locale: NS,
        }, VoiceInputButton)
      })

      // 设置 → 语音输入（独立的设置章节，左侧导航直接可见）
      ctx.slots.inject('settings.section', function () {
        return ctx.slots.register({
          name: 'settings.section',
          id: 'voice-input',
          order: 12,
          label: function () { return t('tab') },
          locale: NS,
        }, VoiceSettingsPanel)
      })

      // 设置 → 插件 → 语音输入（兼容入口，内容相同）
      ctx.slots.inject('settings.plugins.tab', function () {
        return ctx.slots.register({
          name: 'settings.plugins.tab',
          id: 'voice-input',
          order: 30,
          label: function () { return t('tab') },
          locale: NS,
        }, VoiceSettingsPanel)
      })
    }

    exports.NS = NS
    exports.apply = apply
    exports.inject = inject
    return module.exports
  },
})
