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
      '.vi_aiButton{margin-right:4px}',
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
      '.vi_live{max-width:280px;color:var(--dsw-alias-label-primary);white-space:pre-wrap}',
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
      presetQwenAsrRealtime: 'Qwen-ASR Realtime（qwen3-asr-flash）',
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
      realtimeApiKey: 'API Key（可选，保存在浏览器本地）',
      realtimeApiKeyHint: '留空时代理使用环境变量 DASHSCOPE_API_KEY；填写后会通过本地代理地址的查询参数传给代理，仅保存在浏览器 localStorage。',
      realtimeModel: '实时模型',
      realtimeModelHint: '例如 fun-asr-flash-8k-realtime、qwen3-asr-flash-realtime。',
      realtimeApi: '实时协议',
      realtimeApiHint: 'fun-asr-flash 系列走百炼 Fun-ASR 协议（inference）；qwen3-asr-flash 走 Qwen-ASR-Realtime 协议。',
      realtimeApiFunAsr: 'Fun-ASR（百炼 inference 协议）',
      realtimeApiQwen: 'Qwen-ASR-Realtime（session 协议）',
      micDevice: '麦克风设备',
      micDeviceHint: '如果识别出来只有嗡嗡声或没有声音，可能是浏览器选错了输入设备（例如立体声混音）。请选择你真正使用的麦克风。',
      micDeviceDefault: '系统默认麦克风',
      micDeviceRefresh: '刷新设备列表',
      formatterGroup: '文本整理（AI 优化按钮）',
      formatterIntro: '语音识别完成后，麦克风左侧会出现 AI 优化按钮；点击后把输入框内容发送给模型清洗并格式化为「目标 / 关键要求 / 补充信息」，结果自动写回输入框。',
      optimizeAria: 'AI 优化文本',
      optimizeTitle: 'AI 优化文本',
      formatterEndpoint: '模型接口地址（Base URL）',
      formatterEndpointHint: 'OpenAI 兼容接口，例如 https://api.deepseek.com/v1、https://dashscope.aliyuncs.com/compatible-mode/v1。',
      formatterModel: '模型',
      formatterModelHint: '例如 deepseek-chat、qwen-plus。',
      formatterApiKey: 'API Key',
      formatterApiKeyHint: '留空时自动使用上面语音识别的 API Key。',
      formatterTemplate: '提示词模板',
      formatterTemplateHint: '必须包含 {{text}} 占位符，它会被替换成输入框里的原文。输出格式可自由修改。',
      formatterNote: '整理过程在后台调用一次 chat/completions；结果会直接替换输入框内容。',
      formatting: '正在整理…',
      errFormatEmpty: '输入框里没有文字，先输入或语音录入内容再按 Alt+Space。',
      errFormatKey: '请先在 设置 → 语音输入 → 文本整理 中填写 API Key。',
      errFormatTemplate: '提示词模板必须包含 {{text}} 占位符。',
      realtimeNote: '实时模式会边说边流式转写，需要 Chromium 浏览器（Chrome / Edge）与本地代理。',
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
      errMic: '无法访问麦克风，请检查浏览器权限。',
      errNoAudio: '没有采集到音频数据：请检查麦克风是否被占用或静音，并确认已允许麦克风权限。',
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
      errNoAudio: '没有采集到音频数据：请检查麦克风是否被占用或静音，并确认已允许麦克风权限。',
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
      presetQwenAsrRealtime: 'Qwen-ASR Realtime (qwen3-asr-flash)',
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
      realtimeApiKey: 'API key (optional, stored in this browser)',
      realtimeApiKeyHint: 'Leave blank to use DASHSCOPE_API_KEY from the proxy environment. If filled, it is passed to the local proxy as a query parameter and stored only in browser localStorage.',
      realtimeModel: 'Realtime model',
      realtimeModelHint: 'e.g. fun-asr-flash-8k-realtime, qwen3-asr-flash-realtime.',
      realtimeApi: 'Realtime protocol',
      realtimeApiHint: 'fun-asr-flash models use the Bailian Fun-ASR protocol (inference); qwen3-asr-flash uses Qwen-ASR-Realtime.',
      realtimeApiFunAsr: 'Fun-ASR (Bailian inference protocol)',
      realtimeApiQwen: 'Qwen-ASR-Realtime (session protocol)',
      micDevice: 'Microphone device',
      micDeviceHint: 'If the transcript is hum-only or silent, the browser may have picked the wrong input (e.g. stereo mix). Choose the microphone you actually use.',
      micDeviceDefault: 'System default microphone',
      micDeviceRefresh: 'Refresh device list',
      formatterGroup: 'Text formatting (AI optimize button)',
      formatterIntro: 'After speech recognition finishes, an AI optimize button appears to the left of the mic; clicking it sends the composer text to the model, which cleans and formats it as goal / key requirements / extra info, then writes the result back.',
      optimizeAria: 'Optimize text with AI',
      optimizeTitle: 'Optimize text with AI',
      formatterEndpoint: 'Model endpoint (base URL)',
      formatterEndpointHint: 'OpenAI-compatible, e.g. https://api.deepseek.com/v1 or https://dashscope.aliyuncs.com/compatible-mode/v1.',
      formatterModel: 'Model',
      formatterModelHint: 'e.g. deepseek-chat, qwen-plus.',
      formatterApiKey: 'API key',
      formatterApiKeyHint: 'Leave blank to reuse the speech recognition API key above.',
      formatterTemplate: 'Prompt template',
      formatterTemplateHint: 'Must contain the {{text}} placeholder; it is replaced with the composer text. The output format is fully customizable.',
      formatterNote: 'Formatting calls chat/completions once in the background and replaces the composer content with the result.',
      formatting: 'Formatting…',
      errFormatEmpty: 'The composer is empty; type or dictate something first, then press Alt+Space.',
      errFormatKey: 'Set an API key in Settings → Voice input → Text formatting first.',
      errFormatTemplate: 'The prompt template must contain the {{text}} placeholder.',
      realtimeNote: 'Realtime mode streams audio while you speak. It needs a Chromium browser (Chrome/Edge) and the local proxy.',
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
      errNoAudio: 'No audio data was captured: check that the microphone is not muted or occupied and that permission is granted.',
      close: 'Dismiss',
    }

    // ------------------------------------------------------------------
    // 配置存储（localStorage，带订阅；设置页与输入框按钮共享）
    // ------------------------------------------------------------------
    var STORAGE_KEY = 'dsh.voice-input.config.v1'

    var DEFAULT_FORMATTER_TEMPLATE = [
      '请对下面的原始输入做清理与格式化。',
      '任务：提取用户的真正目标、所有关键要求和约束，去掉口语化、重复、错别字与无意义内容，但不要遗漏任何细节。',
      '严格按下面的格式输出（只输出整理后的内容，不要任何解释）：',
      '',
      '【目标】',
      '<一句话说明用户想达成什么>',
      '',
      '【关键要求】',
      '- <要点>',
      '- <要点>',
      '',
      '【补充信息】',
      '<其他有价值的信息；没有这一节就省略>',
      '',
      '原始输入：',
      '{{text}}',
    ].join('\n')

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
      realtimeApi: 'fun-asr', // fun-asr（百炼 inference 协议） | qwen（Qwen-ASR-Realtime 协议）
      micDeviceId: '',
      formatterEndpoint: 'https://api.deepseek.com/v1',
      formatterApiKey: '',
      formatterModel: 'deepseek-chat',
      formatterTemplate: DEFAULT_FORMATTER_TEMPLATE,
    }

    var PRESETS = [
      { id: 'openai', mode: 'openai', endpoint: 'https://api.openai.com/v1/audio/transcriptions', model: 'whisper-1' },
      { id: 'groq', mode: 'openai', endpoint: 'https://api.groq.com/openai/v1/audio/transcriptions', model: 'whisper-large-v3' },
      { id: 'siliconflow', mode: 'openai', endpoint: 'https://api.siliconflow.cn/v1/audio/transcriptions', model: 'FunAudioLLM/SenseVoiceSmall' },
      { id: 'fun-asr-realtime', mode: 'realtime', realtimeApi: 'fun-asr', realtimeUrl: 'ws://127.0.0.1:8787/ws', realtimeModel: 'fun-asr-flash-8k-realtime' },
      { id: 'qwen-asr-realtime', mode: 'realtime', realtimeApi: 'qwen', realtimeUrl: 'ws://127.0.0.1:8787/ws', realtimeModel: 'qwen3-asr-flash-realtime' },
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
      base.realtimeApi = src.realtimeApi === 'qwen' ? 'qwen' : 'fun-asr'
      base.micDeviceId = asString(src.micDeviceId, '')
      base.formatterEndpoint = asString(src.formatterEndpoint, base.formatterEndpoint)
      base.formatterApiKey = asString(src.formatterApiKey, '')
      base.formatterModel = asString(src.formatterModel, base.formatterModel)
      base.formatterTemplate = asString(src.formatterTemplate, base.formatterTemplate)
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

    function formatDraftText(text, cfg, t) {
      var endpoint = (cfg.formatterEndpoint || '').trim()
      var model = (cfg.formatterModel || '').trim()
      if (endpoint === '' || model === '') throw new Error(t('errConfig'))
      var key = (cfg.formatterApiKey || '').trim() || (cfg.apiKey || '').trim()
      if (key === '') throw new Error(t('errFormatKey'))
      var template = cfg.formatterTemplate || ''
      if (template.indexOf('{{text}}') === -1) throw new Error(t('errFormatTemplate'))
      var url = endpoint.replace(/\/+$/, '') + '/chat/completions'
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + key,
        },
        body: JSON.stringify({
          model: model,
          temperature: 0.2,
          stream: false,
          messages: [{ role: 'user', content: template.split('{{text}}').join(text) }],
        }),
      }).then(function (response) {
        return safeJson(response).then(function (data) {
          if (!response.ok) {
            var detail = 'HTTP ' + response.status
            if (data !== null && data !== undefined) {
              if (typeof data === 'string') detail = data.slice(0, 200)
              else if (data.error && data.error.message) detail = data.error.message
              else if (data.message) detail = String(data.message)
            }
            throw new Error(t('errHttp') + ' (' + detail + ')')
          }
          var content = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
          if (typeof content !== 'string' || content.trim() === '') throw new Error(t('errEmpty'))
          return content.trim()
        })
      }).catch(function (error) {
        if (error instanceof TypeError) throw new Error(t('errNetwork'))
        throw error
      })
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

    function AiIcon(props) {
      return react.createElement('svg', Object.assign({}, props, {
        width: 15, height: 15, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': 'true',
      }),
        react.createElement('path', {
          d: 'M8 1.5l1.4 3.1L12.5 6l-3.1 1.4L8 10.5 6.6 7.4 3.5 6l3.1-1.4L8 1.5z',
          fill: 'currentColor',
        }),
        react.createElement('path', {
          d: 'M12.5 10l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7.7-1.6z',
          fill: 'currentColor', opacity: 0.75,
        }),
      )
    }

    // ------------------------------------------------------------------
    // 实时流式识别（Fun-ASR Realtime / Qwen-ASR）：AudioWorklet 采集 16k PCM
    // ------------------------------------------------------------------
    var REALTIME_WORKLET_CODE = [
      'class ViPcm16kProcessor extends AudioWorkletProcessor {',
      '  constructor() {',
      '    super();',
      '    this.ratio = sampleRate / 16000;',
      '    this.src = [];',
      '    this.phase = 0;',
      '    this.buffer = [];',
      '    this.target = 1600;',
      '    this.stopped = false;',
      '    this.chosenChannel = -1;',
      '    this.hpAlpha = Math.exp(-2 * Math.PI * 250 / sampleRate);',
      '    this.hp1PrevX = 0; this.hp1PrevY = 0;',
      '    this.hp2PrevX = 0; this.hp2PrevY = 0;',
      '    this.port.onmessage = (event) => {',
      '      if (event.data === "stop") {',
      '        this.stopped = true;',
      '        if (this.buffer.length > 0) { this.port.postMessage(new Int16Array(this.buffer)); this.buffer = []; }',
      '      }',
      '    };',
      '  }',
      '  pickChannel(input) {',
      '    // 选“高频能量”最大的声道（语音频段），避开只有电流嗡嗡声的回路声道',
      '    let best = 0;',
      '    let bestScore = -1;',
      '    const frames = input[0].length;',
      '    for (let c = 0; c < input.length; c++) {',
      '      let high = 0;',
      '      const data = input[c];',
      '      for (let i = 1; i < frames; i++) {',
      '        const d = data[i] - data[i - 1];',
      '        high += d * d;',
      '      }',
      '      if (high > bestScore) { bestScore = high; best = c; }',
      '    }',
      '    this.chosenChannel = best;',
      '  }',
      '  emitResampled() {',
      '    while (this.phase + this.ratio <= this.src.length - 1) {',
      '      const i0 = Math.floor(this.phase);',
      '      const frac = this.phase - i0;',
      '      const value = this.src[i0] * (1 - frac) + this.src[i0 + 1] * frac;',
      '      const sample = Math.max(-32768, Math.min(32767, Math.round(value * 32767)));',
      '      this.buffer.push(sample);',
      '      this.phase += this.ratio;',
      '      if (this.buffer.length >= this.target) {',
      '        this.port.postMessage(new Int16Array(this.buffer.splice(0, this.target)));',
      '      }',
      '    }',
      '    const shift = Math.floor(this.phase) - 1;',
      '    if (shift > 0) {',
      '      this.src.splice(0, shift);',
      '      this.phase -= shift;',
      '    }',
      '  }',
      '  process(inputs) {',
      '    const input = inputs[0];',
      '    if (input && input.length > 0) {',
      '      const frames = input[0].length;',
      '      if (this.chosenChannel < 0 || this.chosenChannel >= input.length) this.pickChannel(input);',
      '      const data = input[this.chosenChannel];',
      '      for (let i = 0; i < frames; i++) {',
      '        const x = data[i];',
      '        // 两级 250Hz 高通，滤掉 50~200Hz 电流嗡嗡声',
      '        const y1 = x - this.hp1PrevX + this.hpAlpha * this.hp1PrevY;',
      '        this.hp1PrevX = x; this.hp1PrevY = y1;',
      '        const y2 = y1 - this.hp2PrevX + this.hpAlpha * this.hp2PrevY;',
      '        this.hp2PrevX = y1; this.hp2PrevY = y2;',
      '        this.src.push(y2);',
      '      }',
      '      this.emitResampled();',
      '    }',
      '    if (this.stopped) {',
      '      if (this.buffer.length > 0) { this.port.postMessage(new Int16Array(this.buffer)); this.buffer = []; }',
      '      this.port.postMessage("stopped");',
      '      return false;',
      '    }',
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

    function uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0
        var v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
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
      var interimState = react.useState('')
      var interim = interimState[0]
      var setInterim = interimState[1]
      var formatBusyState = react.useState(false)
      var formatBusy = formatBusyState[0]
      var setFormatBusy = formatBusyState[1]

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
      var startTokenRef = react.useRef(0)
      var optimizeDraftRef = react.useRef(null)
      var showOptimizeState = react.useState(false)
      var showOptimize = showOptimizeState[0]
      var setShowOptimize = showOptimizeState[1]

      var liveInput = typeof props.useInput === 'function'
        ? props.useInput(function (snapshot) { return snapshot })
        : props.input
      liveInputRef.current = liveInput || null
      actionsRef.current = props.inputActions || null
      phaseRef.current = phase
      var composerDraft = liveInput && typeof liveInput.draft === 'string' ? liveInput.draft : ''
      controllerRef.current = { start: startFromShortcut, stop: stopFromShortcut, format: formatDraft }
      react.useEffect(function () {
        aliveRef.current = true
        var handle = {
          start: function (opts) {
            var controller = controllerRef.current
            if (controller !== null) controller.start(opts)
          },
          stop: function () {
            var controller = controllerRef.current
            if (controller !== null) controller.stop()
          },
          format: function () {
            var controller = controllerRef.current
            if (controller !== null) controller.format()
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

      // 用户手动打字或发送后（草稿与转写结果不一致），收回 AI 优化按钮
      react.useEffect(function () {
        if (showOptimize && optimizeDraftRef.current !== null && composerDraft !== optimizeDraftRef.current) {
          setShowOptimize(false)
        }
      }, [showOptimize, composerDraft])

      react.useEffect(function () {
        if (error === null) return undefined
        var id = window.setTimeout(function () { setError(null) }, 9000)
        return function () { window.clearTimeout(id) }
      }, [error])

      function stopTracks() {
        var stream = streamRef.current
        if (stream !== null) {
          stream.getTracks().forEach(function (track) { track.stop() })
          streamRef.current = null
        }
      }

      function insertCleanText(clean) {
        var actions = actionsRef.current
        if (actions === null || typeof actions.setDraft !== 'function') {
          setError(t('errNoInput'))
          return null
        }
        var current = liveInputRef.current && typeof liveInputRef.current.draft === 'string'
          ? liveInputRef.current.draft
          : ''
        var next = current
        if (next !== '' && !/[\s\n\u3000]$/.test(next)) next += ' '
        next += clean
        actions.setDraft(next)
        focusComposer()
        return next
      }

      function insertTranscript(text) {
        var clean = String(text === null || text === undefined ? '' : text).trim()
        if (clean === '') {
          setError(t('errEmpty'))
          return
        }
        var nextDraft = insertCleanText(clean)
        if (nextDraft !== null) {
          optimizeDraftRef.current = nextDraft
          // 转写完成后，麦克风左侧弹出 AI 优化按钮
          setShowOptimize(true)
        }
      }

      function formatDraft() {
        if (formatBusy || phaseRef.current !== 'idle') return
        var actions = actionsRef.current
        if (actions === null || typeof actions.setDraft !== 'function') {
          setError(t('errNoInput'))
          return
        }
        var current = liveInputRef.current && typeof liveInputRef.current.draft === 'string'
          ? liveInputRef.current.draft
          : ''
        if (current.trim() === '') {
          setError(t('errFormatEmpty'))
          return
        }
        setFormatBusy(true)
        setError(null)
        setInterim('')
        formatDraftText(current, cfg, t).then(function (formatted) {
          if (!aliveRef.current) return
          setFormatBusy(false)
          actions.setDraft(formatted)
          setShowOptimize(false)
          focusComposer()
        }).catch(function (error) {
          if (!aliveRef.current) return
          setFormatBusy(false)
          setError(messageOf(error))
        })
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

      function realtimeText(rt) {
        var parts = []
        var order = rt.sentenceOrder || []
        for (var i = 0; i < order.length; i++) {
          var sentence = rt.sentences[order[i]]
          if (sentence !== null && sentence !== undefined && sentence.sentence_end === true
            && typeof sentence.text === 'string' && sentence.text.trim() !== '') {
            parts.push(sentence.text.trim())
          }
        }
        var lastId = order.length > 0 ? order[order.length - 1] : null
        var last = lastId === null || lastId === undefined ? null : rt.sentences[lastId]
        if (last !== null && last !== undefined && last.sentence_end !== true) {
          // 实时气泡用“当前句最长草稿”，录的过程中字只增不减，不吞前文
          var draft = typeof last.displayText === 'string' && last.displayText.trim() !== ''
            ? last.displayText.trim()
            : (typeof last.text === 'string' ? last.text.trim() : '')
          if (draft !== '') parts.push(draft)
        }
        return parts.join(' ').replace(/\s+/g, ' ').trim()
      }

      function finishRealtime(rt) {
        if (rt.finished) return
        rt.finished = true
        var wasActive = realtimeRef.current === rt
        if (wasActive) realtimeRef.current = null
        if (rt.finishTimer !== null) {
          window.clearTimeout(rt.finishTimer)
          rt.finishTimer = null
        }
        if (rt.drainTimer !== null) {
          window.clearTimeout(rt.drainTimer)
          rt.drainTimer = null
        }
        if (rt.graceTimer !== null) {
          window.clearTimeout(rt.graceTimer)
          rt.graceTimer = null
        }
        try { if (rt.socket !== null && rt.socket.readyState < 2) rt.socket.close() } catch (_err) { /* ignore */ }
        try { if (rt.node !== null) rt.node.port.close() } catch (_err) { /* ignore */ }
        try { if (rt.source !== null) rt.source.disconnect() } catch (_err) { /* ignore */ }
        try { if (rt.stream !== null) rt.stream.getTracks().forEach(function (track) { track.stop() }) } catch (_err) { /* ignore */ }
        try { if (rt.audioContext !== null) rt.audioContext.close() } catch (_err) { /* ignore */ }
        if (wasActive) setInterim('')
        if (!aliveRef.current) return
        var text = realtimeText(rt)
        if (text === '' && typeof rt.lastText === 'string') text = rt.lastText.replace(/\s+/g, ' ').trim()
        if (text === '') text = String(rt.finalText || '').replace(/\s+/g, ' ').trim()
        if (text !== '') {
          if (wasActive) setPhase('idle')
          insertTranscript(text)
          return
        }
        // 后台会话或快速松手：静默收尾，不动当前按钮状态
        if (!wasActive) return
        if (rt.silent) {
          setPhase('idle')
        } else if (rt.error !== null) {
          setPhase('idle')
          setError(rt.error)
        } else if (rt.audioChunks === 0) {
          setPhase('idle')
          setError(t('errNoAudio'))
        } else if (rt.audioChunks < 5) {
          setPhase('idle')
        } else {
          setPhase('idle')
          setError(t('errNoSpeech') + ' [' + rt.audioChunks + ' blocks, ' + rt.resultCount + ' results, rate ' + rt.contextRate + ']')
        }
      }

      function sendRealtimeFinish(rt) {
        if (rt.socket !== null && rt.socket.readyState === 1) {
          try {
            if (rt.protocol === 'fun-asr') {
              if (rt.taskStarted) {
                rt.socket.send(JSON.stringify({
                  header: { action: 'finish-task', task_id: rt.taskId, streaming: 'duplex' },
                  payload: { input: {} },
                }))
              }
            } else {
              rt.socket.send(JSON.stringify({ event_id: eventId(), type: 'session.finish' }))
            }
          } catch (_err) { /* 下面由超时兜底 */ }
        }
        rt.finishTimer = window.setTimeout(function () {
          finishRealtime(rt)
        }, 2500)
      }

      function requestRealtimeFinish(rt) {
        if (rt.finished || rt.finishing !== true || rt.finishTimer !== null || rt.drainTimer !== null) return
        if (rt.protocol === 'fun-asr') {
          // 给上游 250ms 排空最后一段音频，避免把句尾“吞掉”
          rt.drainTimer = window.setTimeout(function () {
            rt.drainTimer = null
            sendRealtimeFinish(rt)
          }, 250)
        } else {
          sendRealtimeFinish(rt)
        }
      }

      function startRealtimeRecording(token) {
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
        var protocol = cfg.realtimeApi === 'qwen' ? 'qwen' : 'fun-asr'
        var wsUrl = proxyUrl + (proxyUrl.indexOf('?') >= 0 ? '&' : '?')
          + 'model=' + encodeURIComponent(model)
          + '&api=' + encodeURIComponent(protocol)
        if (cfg.apiKey && cfg.apiKey.trim() !== '') {
          wsUrl += '&api_key=' + encodeURIComponent(cfg.apiKey.trim())
        }

        // 音频块路由：连接/任务还没就绪时先缓存，就绪后一次性冲出，避免吞掉开头语音
        function bufferAudioChunk(rt, int16) {
          rt.pendingChunks.push(int16)
          if (rt.pendingChunks.length > 300) rt.pendingChunks.shift()
        }

        function sendAudioChunk(rt, int16) {
          if (rt.socket === null || rt.socket.readyState !== 1) {
            bufferAudioChunk(rt, int16)
            return
          }
          try {
            if (rt.protocol === 'fun-asr') {
              if (rt.taskStarted) {
                rt.socket.send(int16.buffer)
                rt.audioChunks += 1
              } else {
                bufferAudioChunk(rt, int16)
              }
            } else {
              if (rt.wsReady) {
                rt.socket.send(JSON.stringify({
                  event_id: eventId(),
                  type: 'input_audio_buffer.append',
                  audio: int16ToBase64(int16),
                }))
                rt.audioChunks += 1
              } else {
                bufferAudioChunk(rt, int16)
              }
            }
          } catch (_err) {
            bufferAudioChunk(rt, int16)
          }
        }

        function flushPendingChunks(rt) {
          if (rt.socket === null || rt.socket.readyState !== 1 || rt.pendingChunks.length === 0) return
          var chunks = rt.pendingChunks.splice(0, rt.pendingChunks.length)
          for (var i = 0; i < chunks.length; i++) {
            try {
              if (rt.protocol === 'fun-asr') {
                rt.socket.send(chunks[i].buffer)
              } else {
                rt.socket.send(JSON.stringify({
                  event_id: eventId(),
                  type: 'input_audio_buffer.append',
                  audio: int16ToBase64(chunks[i]),
                }))
              }
              rt.audioChunks += 1
            } catch (_err) { /* ignore */ }
          }
        }

        var audioConstraints = { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
        if (cfg.micDeviceId && cfg.micDeviceId.trim() !== '') {
          audioConstraints.deviceId = { exact: cfg.micDeviceId }
        }

        navigator.mediaDevices.getUserMedia({
          audio: audioConstraints,
        }).then(function (stream) {
          if (!aliveRef.current || token !== startTokenRef.current) {
            stream.getTracks().forEach(function (track) { track.stop() })
            return
          }
          var audioContext
          try {
            audioContext = new AC({ sampleRate: 16000 })
          } catch (_err) {
            audioContext = new AC()
          }

          var rt = {
            socket: null, audioContext: audioContext, node: null, source: null, gain: null,
            stream: stream, finalText: '', lastText: '', finished: false, finishing: false,
            finishTimer: null, error: null, wsReady: false,
            protocol: protocol, taskId: '', taskStarted: false,
            audioChunks: 0, resultCount: 0, contextRate: audioContext.sampleRate,
            sentences: {}, sentenceOrder: [], drainTimer: null, graceTimer: null,
            silent: false, pendingChunks: [], sessionUpdated: false,
          }
          realtimeRef.current = rt

          // 先并行建立 WebSocket（代理→百炼握手耗时最长），音频管线稍后就绪
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
            if (rt.finished || rt.finishing) {
              try { socket.close() } catch (_err) { /* ignore */ }
              return
            }
            rt.wsReady = true
            if (rt.protocol === 'fun-asr') {
              rt.taskId = uuid()
              var runTask = {
                header: { action: 'run-task', task_id: rt.taskId, streaming: 'duplex' },
                payload: {
                  task_group: 'audio',
                  task: 'asr',
                  function: 'recognition',
                  model: model,
                  parameters: {
                    format: 'pcm',
                    sample_rate: 16000,
                    disfluency_removal_enabled: false,
                    language_hints: cfg.language ? [cfg.language] : ['zh'],
                  },
                  input: {},
                },
              }
              try { socket.send(JSON.stringify(runTask)) } catch (_err) { /* ignore */ }
            } else {
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
              // 等 session.updated 后再补发缓存音频
            }
            setPhase('recording')
          }

          socket.onmessage = function (event) {
            var data
            try { data = JSON.parse(event.data) } catch (_err) { return }
            if (rt.protocol === 'fun-asr') {
              var header = data.header || {}
              if (header.event === 'task-started') {
                rt.taskStarted = true
                flushPendingChunks(rt)
              } else if (header.event === 'result-generated') {
                rt.resultCount += 1
                var sentence = data.payload && data.payload.output && data.payload.output.sentence
                if (sentence !== null && sentence !== undefined) {
                  var sid = sentence.sentence_id !== undefined && sentence.sentence_id !== null ? String(sentence.sentence_id) : 'current'
                  var previous = rt.sentences[sid]
                  if (typeof sentence.text === 'string') {
                    var currentText = sentence.text.trim()
                    if (sentence.sentence_end === true) {
                      sentence.displayText = currentText
                    } else if (previous !== null && previous !== undefined
                      && typeof previous.displayText === 'string' && previous.displayText.length > currentText.length) {
                      sentence.displayText = previous.displayText
                    } else {
                      sentence.displayText = currentText
                    }
                    rt.lastText = currentText
                  }
                  if (!Object.prototype.hasOwnProperty.call(rt.sentences, sid)) {
                    rt.sentences[sid] = sentence
                    rt.sentenceOrder.push(sid)
                  } else {
                    rt.sentences[sid] = sentence
                  }
                  if (typeof sentence.text === 'string') {
                    // 实时气泡 = 已定稿的前文 + 当前句的最长草稿，前文不消失
                    setInterim(realtimeText(rt))
                  }
                  if (rt.lastText !== '' && sentence.sentence_end === true) {
                    rt.finalText = realtimeText(rt)
                  }
                }
              } else if (header.event === 'task-finished') {
                // 留 300ms 接收可能迟到的最后一条最终结果，再落盘
                if (rt.graceTimer === null) {
                  rt.graceTimer = window.setTimeout(function () {
                    rt.graceTimer = null
                    finishRealtime(rt)
                  }, 300)
                }
              } else if (header.event === 'task-failed') {
                var message = data.payload && (data.payload.output && data.payload.output.message || data.payload.error)
                rt.error = t('errRealtimeWs') + (message ? '：' + message : '')
                finishRealtime(rt)
              }
              return
            }
            if (data.type === 'error') {
              rt.error = t('errRealtimeWs')
            } else if (data.type === 'session.updated') {
              rt.sessionUpdated = true
              flushPendingChunks(rt)
            } else if (data.type === 'conversation.item.input_audio_transcription.text') {
              var preview = String(data.text || '') + String(data.stash || '')
              if (preview.trim() !== '') {
                setInterim((rt.finalText === '' ? '' : rt.finalText + ' ') + preview.trim())
              }
            } else if (data.type === 'conversation.item.input_audio_transcription.completed') {
              rt.resultCount += 1
              if (typeof data.transcript === 'string' && data.transcript.trim() !== '') {
                rt.finalText += (rt.finalText === '' ? '' : ' ') + data.transcript.trim()
                setInterim(rt.finalText)
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
              // 若 final 结果还在宽限等待中，交给 graceTimer；否则立即收尾
              if (rt.graceTimer === null) finishRealtime(rt)
            } else if (phaseRef.current !== 'processing') {
              finishRealtime(rt)
            }
          }

          // 音频管线：AudioWorklet 强制重采样到 16k，100ms 一块
          var workletUrl = URL.createObjectURL(new Blob([REALTIME_WORKLET_CODE], { type: 'application/javascript' }))
          audioContext.audioWorklet.addModule(workletUrl).then(function () {
            if (token !== startTokenRef.current || rt.finished) {
              URL.revokeObjectURL(workletUrl)
              finishRealtime(rt)
              return
            }
            URL.revokeObjectURL(workletUrl)
            var source = audioContext.createMediaStreamSource(stream)
            var node = new AudioWorkletNode(audioContext, 'vi-pcm-16k')
            var gain = audioContext.createGain()
            gain.gain.value = 0
            source.connect(node)
            node.connect(gain)
            gain.connect(audioContext.destination)
            rt.source = source
            rt.node = node
            rt.gain = gain

            node.port.onmessage = function (event) {
              if (event.data === 'stopped') {
                if (rt.finishing) requestRealtimeFinish(rt)
                return
              }
              if (event.data instanceof Int16Array) {
                sendAudioChunk(rt, event.data)
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
          setError(t('errMic'))
        })
      }

      function stopRealtimeRecording() {
        var rt = realtimeRef.current
        if (rt === null) {
          setPhase('idle')
          return
        }
        rt.finishing = true
        // 立即释放按钮：上一轮的收尾在后台继续，不阻塞下一轮录音
        setPhase('idle')
        try {
          if (rt.node !== null) rt.node.port.postMessage('stop')
        } catch (_err) {
          requestRealtimeFinish(rt)
        }
        try {
          if (rt.stream !== null) rt.stream.getTracks().forEach(function (track) { track.stop() })
        } catch (_err) { /* ignore */ }
        if (!rt.wsReady) {
          // 连接还没建立就松手：静默丢弃，不弹错误
          rt.silent = true
          finishRealtime(rt)
        }
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
        setInterim('')
        setShowOptimize(false)
        var token = ++startTokenRef.current
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
          // 已有一轮在启动/录音中时忽略重复启动；上一轮后台收尾中则允许新开
          var active = realtimeRef.current
          if (active !== null && !active.finished && !active.finishing) return
          startRealtimeRecording(token)
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
        var audioConstraints = { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
        if (cfg.micDeviceId && cfg.micDeviceId.trim() !== '') {
          audioConstraints.deviceId = { exact: cfg.micDeviceId }
        }
        navigator.mediaDevices.getUserMedia({
          audio: audioConstraints,
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
        startTokenRef.current += 1
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

      // 右 Alt：按住说话，松手识别（不再有双击逻辑）
      function startFromShortcut(opts) {
        if (phaseRef.current !== 'idle') return
        shortcutActiveRef.current = true
        startRecording()
      }

      function stopFromShortcut() {
        if (!shortcutActiveRef.current) return
        stopRecording()
      }

      function onButtonClick() {
        if (phase === 'recording') stopRecording()
        else if (phase === 'idle') {
          setShowOptimize(false)
          startRecording()
        }
        // processing：后台收尾中，按钮保持可用，等待下一轮
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
      if (phase === 'recording' && interim !== '') {
        popover = h('div', { className: 'vi_pop vi_live', role: 'status' },
          h('span', null, interim),
        )
      } else if (formatBusy) {
        popover = h('div', { className: 'vi_pop', role: 'status' },
          h('span', { className: 'vi_spin', 'aria-hidden': 'true' }),
          h('span', null, t('formatting')),
        )
      } else if (error !== null) {
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
      }

      return h('div', { className: 'vi_micAnchor', 'data-dsh-voice-input': '' },
        showOptimize && composerDraft.trim() !== '' ? h('button', {
          type: 'button',
          className: 'vi_micButton vi_aiButton',
          'aria-label': t('optimizeAria'),
          title: t('optimizeTitle'),
          disabled: formatBusy || phase !== 'idle',
          onClick: formatDraft,
        }, h(AiIcon, {})) : null,
        h('button', {
          type: 'button',
          className: 'vi_micButton',
          'data-phase': phase === 'idle' ? 'idle' : phase,
          'aria-label': phase === 'recording' ? t('buttonAriaRecording') : t('buttonAria'),
          'aria-pressed': phase === 'recording' ? 'true' : 'false',
          title: t('buttonTitle'),
          disabled: phase === 'processing' || formatBusy || props.inputActions === undefined,
          onClick: onButtonClick,
        }, phase === 'recording' ? waveform : (phase === 'processing' || formatBusy) ? h('span', { className: 'vi_spin' }) : h(MicIcon, {})),
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
      var micDevicesState = react.useState([])
      var micDevices = micDevicesState[0]
      var setMicDevices = micDevicesState[1]

      function refreshMicDevices() {
        if (typeof navigator === 'undefined' || !navigator.mediaDevices || typeof navigator.mediaDevices.enumerateDevices !== 'function') return
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
          setMicDevices(devices
            .filter(function (device) { return device.kind === 'audioinput' })
            .map(function (device, index) {
              return { id: device.deviceId, label: device.label || t('micDeviceDefault') + ' ' + (index + 1) }
            }))
        }).catch(function () { /* 忽略 */ })
      }

      react.useEffect(function () {
        refreshMicDevices()
      }, [])

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
        var micDeviceSelect = h('select', {
          className: 'vi_select',
          value: cfg.micDeviceId || '',
          onChange: function (event) { update({ micDeviceId: event.currentTarget.value }) },
        },
          h('option', { value: '' }, t('micDeviceDefault')),
          micDevices.map(function (device) {
            return h('option', { value: device.id, key: device.id }, device.label)
          }),
        )
        providerFields = [
          field({
            label: t('micDevice'),
            hint: t('micDeviceHint'),
            wide: true,
            control: h('div', { className: 'vi_actions' },
              micDeviceSelect,
              h('button', { type: 'button', className: 'vi_btn', onClick: refreshMicDevices }, t('micDeviceRefresh')),
            ),
          }),
          field({
            label: t('realtimeUrl'),
            hint: t('realtimeUrlHint'),
            wide: true,
            control: textInput(cfg.realtimeUrl, function (value) { update({ realtimeUrl: value }) }, { placeholder: 'ws://127.0.0.1:8787/ws' }),
          }),
          field({
            label: t('realtimeApiKey'),
            hint: t('realtimeApiKeyHint'),
            control: textInput(cfg.apiKey, function (value) { update({ apiKey: value }) }, { type: 'password', autoComplete: 'off', placeholder: 'sk-…（可留空）' }),
          }),
          field({
            label: t('realtimeModel'),
            hint: t('realtimeModelHint'),
            control: textInput(cfg.realtimeModel, function (value) { update({ realtimeModel: value }) }),
          }),
          field({
            label: t('realtimeApi'),
            hint: t('realtimeApiHint'),
            control: h('select', {
              className: 'vi_select',
              value: cfg.realtimeApi,
              onChange: function (event) { update({ realtimeApi: event.currentTarget.value }) },
            },
              h('option', { value: 'fun-asr' }, t('realtimeApiFunAsr')),
              h('option', { value: 'qwen' }, t('realtimeApiQwen')),
            ),
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
          h('h3', { className: 'vi_groupTitle' }, t('formatterGroup')),
          h('p', { className: 'vi_hint' }, t('formatterIntro')),
          h('div', { className: 'vi_grid' },
            field({
              label: t('formatterEndpoint'),
              hint: t('formatterEndpointHint'),
              control: textInput(cfg.formatterEndpoint, function (value) { update({ formatterEndpoint: value }) }, { placeholder: 'https://api.deepseek.com/v1' }),
            }),
            field({
              label: t('formatterModel'),
              hint: t('formatterModelHint'),
              control: textInput(cfg.formatterModel, function (value) { update({ formatterModel: value }) }, { placeholder: 'deepseek-chat' }),
            }),
            field({
              label: t('formatterApiKey'),
              hint: t('formatterApiKeyHint'),
              control: textInput(cfg.formatterApiKey, function (value) { update({ formatterApiKey: value }) }, { type: 'password', autoComplete: 'off', placeholder: 'sk-…' }),
            }),
          ),
          field({
            label: t('formatterTemplate'),
            hint: t('formatterTemplateHint'),
            wide: true,
            control: h('textarea', {
              className: 'vi_textarea', value: cfg.formatterTemplate, rows: 12, spellCheck: false,
              onInput: function (event) { update({ formatterTemplate: event.currentTarget.value }) },
            }),
          }),
          h('p', { className: 'vi_note' }, t('formatterNote')),
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
