# @lbxc/dsh-voice-input

给 **DeepSeek Harness Web GUI（dsh web）** 添加语音输入与文本整理的插件：

- 🎤 输入框发送键左侧的**圆形麦克风按钮**，点击或按住 **右 Alt** 说话，松手自动识别并插入输入框；
- 📝 录音中按钮显示**声纹动画**，识别中转圈，实时识别文字在按钮上方滚动显示（当前句只增不减）；
- ⚙️ 设置 → **语音输入**（或 设置 → 插件 → 语音输入）提供完整配置页；
- 🔌 支持四种识别方式：
  1. 浏览器本地识别（Web Speech API，免费，仅 Chrome / Edge）；
  2. OpenAI 兼容 `/audio/transcriptions`（OpenAI / Groq / SiliconFlow / 本地 faster-whisper）；
  3. 自定义 JSON 接口（音频 base64）；
  4. 实时流式接口（**fun-asr-flash-8k-realtime** 与 **qwen3-asr-flash-realtime**，边说边转写）；
- ✨ 识别完成后麦克风左侧弹出 **AI 优化按钮**：一键把输入框内容交给 LLM 清洗并格式化为「目标 / 关键要求 / 补充信息」，提示词可自定义，可注入当前对话上下文，**模型思考档位可选（默认低）**；
- 📥 支持导入 / 导出 JSON 配置；
- 🔐 API Key 只保存在浏览器 `localStorage`；百炼实时 Key 可通过本地代理查询参数传入，代理日志不打印密钥。

---

## 1. 安装

插件采用 dsh 官方 bundle 规范（`dsh.bundle.patch` + `dsh.client`）。

### 从 GitHub 安装（推荐）

```bash
dsh plugin --profile web add github:LBXC-666/dsh-voice-input

# 锁定版本（发布 tag 后）
dsh plugin --profile web add github:LBXC-666/dsh-voice-input#v1.0.0
```

### 本地目录安装

```bash
dsh plugin --profile web add link:/home/lbxc/voice_input
```

### 重启并刷新

Bundle 层插件必须重启 `dsh web`：

```bash
dsh web
```

刷新 `http://127.0.0.1:3080` 后，输入框发送键左侧出现 🎤，设置左侧导航出现「语音输入」。

### 卸载

```bash
dsh plugin --profile web remove @lbxc/dsh-voice-input
# 重启 dsh web
```

---

## 2. 首次使用：导入 / 配置 API（必做）

插件不内置转写服务，首次使用二选一：

1. **导入配置**：设置 → 语音输入 → 「导入 / 导出 API 配置」，粘贴 JSON 或选择 `config.example.json`；
2. **手动配置**：选择接口模式和快速预设，填写 API Key / 地址 / 模型。

---

## 3. 快速配置

进入 **设置 → 语音输入**。

### 方式 A：浏览器本地识别（零配置）

接口模式选「浏览器本地识别」，语言填 `zh-CN`。仅 Chrome / Edge。

### 方式 B：OpenAI 兼容接口

| 预设 | 接口地址 | 模型 |
|---|---|---|
| OpenAI Whisper | `https://api.openai.com/v1/audio/transcriptions` | `whisper-1` |
| Groq Whisper | `https://api.groq.com/openai/v1/audio/transcriptions` | `whisper-large-v3` |
| SiliconFlow SenseVoice | `https://api.siliconflow.cn/v1/audio/transcriptions` | `FunAudioLLM/SenseVoiceSmall` |
| 本地 faster-whisper | `http://127.0.0.1:8000/v1/audio/transcriptions` | `whisper-1` |

### 方式 C：自定义 JSON 接口

模板占位符：`{{audio}}`（base64）、`{{format}}`（MIME）、`{{model}}`、`{{language}}`；用「取值路径」提取结果文本。

### 方式 D：实时流式接口（推荐日常使用）

启动本地鉴权代理：

```bash
# 代理默认监听 ws://127.0.0.1:8787/ws，健康检查 http://127.0.0.1:8787/health
node scripts/dashscope-realtime-proxy.mjs
```

设置页选择：

| 预设 | 协议 | 模型 |
|---|---|---|
| **Qwen-ASR Realtime（推荐）** | Qwen-ASR-Realtime | `qwen3-asr-flash-realtime` |
| Fun-ASR Flash 8K Realtime | Fun-ASR（百炼 inference） | `fun-asr-flash-8k-realtime` |

- API Key 可直接填在设置面板（通过本地代理 `api_key` 查询参数传递）；留空则代理使用环境变量 `DASHSCOPE_API_KEY`；
- 可指定**麦克风设备**（避免选成立体声混音/回路设备）与**输入声道**（自动自适应或固定 1~4 声道）；
- 推荐日常使用 **qwen3-asr-flash-realtime**：抗噪与识别稳定性更好；`fun-asr-flash-8k-realtime` 适合安静环境。

---

## 4. 使用方式

### 语音输入

- **按住右 Alt 说话，松手结束**：录音中按钮显示声纹动画，实时识别文字在按钮上方滚动；
- 或点击 🎤 开始，再点停止；
- 识别结果自动插入输入框并聚焦。

### AI 优化按钮

1. **只要输入框有文字，✨ 按钮就显示**；文本清空（发送）后隐藏，手动修改文字不会隐藏；
2. **左键 ✨**：默认执行「一轮纠错」；
3. **右键 ✨**：默认执行「一轮纠错 + 二轮格式化」；
4. **⚡ 自动优化按钮**：按设置里的「自动优化模式」一键执行；
5. **自动优化开关**：打开后，每次语音转写完成都会**自动**按「自动优化模式」优化，不再需要手动点按钮；优化什么内容由「自动优化模式」决定（一轮纠错 / 二轮格式化 / 一轮+二轮）；
6. **↶ 回退按钮**：优化前自动保存原文快照，一键恢复未优化文本；
7. 结果**基于当前光标位置插入**（逐字打字机效果），不再是固定追加到末尾；
8. 快捷键（可在设置中自定义，默认）：
   - `Alt+1`：一轮纠错
   - `Alt+2`：一轮 + 二轮
   - `Alt+3`：自动优化模式

配置位置：设置 → 语音输入 → 文本整理：

| 字段 | 说明 |
|---|---|
| 模型接口地址 | 例如 `https://api.deepseek.com/v1` 或 `https://dashscope.aliyuncs.com/compatible-mode/v1` |
| 模型 | 例如 `deepseek-chat`、`qwen-plus` |
| API Key | 留空则复用语音识别的 API Key |
| 左键模式 / 右键模式 / 自动优化模式 | 可选：一轮纠错、二轮格式化、一轮 + 二轮 |
| 自动优化开关 | 默认关闭；打开后转写完成自动执行「自动优化模式」 |
| 一轮优化 / 二轮优化 / 自动优化快捷键 | 点击输入框后按下组合键录制 |
| 纠错提示词（第一轮） | 只纠正错别字/口语化，支持 `{{context}}` / `{{text}}` |
| 格式化提示词（第二轮） | 生成固定格式，不注入上下文；支持 `{{text}}` |
| 启用右键第二轮优化 | 默认开启；关闭后任何“一轮 + 二轮”模式只执行第一轮 |
| 模型思考档位 | 关闭 / 低 / 中 / 高，默认**低**：低档思考可显著提高输出准确性，关闭最快；兼容 DeepSeek `thinking` 与 DashScope `enable_thinking` |
| 注入当前对话上下文 | 默认开启：最近 2 条用户/助手消息完整注入；超长时只保留结尾 800 字，避免丢失最新结论 |

默认输出格式：

```text
【目标】
<一句话说明用户想达成什么>

【关键要求】
- <要点>

【补充信息】
<其他有价值的信息；没有这一节就省略>
```

---

## 5. 导入 / 导出配置

设置 → 语音输入 → 导入 / 导出 API 配置：

- 粘贴 JSON 导入，或选择 `config.example.json` 文件导入；
- 一键复制 / 下载当前配置。

配置字段（节选）：

```json
{
  "mode": "openai",
  "preset": "openai",
  "endpoint": "https://api.openai.com/v1/audio/transcriptions",
  "apiKey": "",
  "model": "whisper-1",
  "language": "zh",
  "prompt": "",
  "headers": {},
  "shortcutEnabled": true,
  "customUrl": "",
  "jsonTemplate": "…{{audio}}…",
  "responsePath": "text",
  "realtimeUrl": "ws://127.0.0.1:8787/ws",
  "realtimeModel": "fun-asr-flash-8k-realtime",
  "realtimeApi": "fun-asr",
  "micDeviceId": "",
  "micChannel": "auto",
  "formatterEndpoint": "https://api.deepseek.com/v1",
  "formatterApiKey": "",
  "formatterModel": "deepseek-chat",
  "formatterNoThinking": false,
  "formatterThinking": "low",
  "formatterWithContext": true,
  "formatterTwoPassEnabled": true,
  "autoOptimizeEnabled": false,
  "formatterTemplate": "…{{context}}…{{text}}…"
}
```

---

## 6. 常见问题

**Q1：看不到按钮 / 设置页？**
确认已重启 `dsh web` 并硬刷新（Ctrl+Shift+R）。

**Q2：一直提示没有识别到有效语音？**
- 设置 → 语音输入 → 选择正确的**麦克风设备**（不要选 Stereo Mix / 回路设备）；
- 实时模式优先切到 **qwen3-asr-flash-realtime**；
- 确认本地代理运行在 8787 端口、Key 有效；
- 浏览器必须是 localhost / HTTPS 且允许麦克风。

**Q3：fun-asr-flash 在嘈杂环境效果差？**
该模型对低频噪声敏感；插件已做声道自动选择 + 250Hz 高通滤波，但建议改用 qwen3-asr-flash-realtime。

**Q4：AI 优化按钮消失？**
按钮只出现在最近一次识别之后；手动打字、发送或新一轮录音都会让它收回。

**Q5：数据存在哪里？**
配置和 API Key 在浏览器 `localStorage`（`dsh.voice-input.config.v1`）；语音只发给配置的识别服务，整理文本只发给配置的模型接口。

**Q6：代理调试**
```bash
# 可选：把浏览器发送的 PCM 抓包到 /tmp/dsh-voice-input-audio.pcm（默认关闭）
PROXY_DUMP_AUDIO=1 node scripts/dashscope-realtime-proxy.mjs
```

---

## 7. 技术说明

- 按钮注册在 dsh 槽位 **`conversation.input.right`**（发送键左侧）；设置页注册在 `settings.section` / `settings.plugins.tab`；
- 文本写回使用 dsh 标准 `inputActions.setDraft`；
- 实时模式：`AudioWorklet` 采集 → 自动选语音声道 → 两级 250Hz 高通 → 重采样至 16kHz PCM → 每 **100ms（1600 样本 / 3200 字节）** 一块，经本地代理以 WebSocket 二进制帧发送；
- 启动阶段音频块会缓存，`task-started` / `session.updated` 后补发，避免丢开头；
- 代理解决浏览器 WebSocket 无法设置 `Authorization` 头的问题，转发到：
  - Fun-ASR：`wss://dashscope.aliyuncs.com/api-ws/v1/inference`
  - Qwen-ASR：`wss://dashscope.aliyuncs.com/api-ws/v1/realtime`

## 8. 目录结构

```text
voice_input/
├── package.json
├── cordis.patch.yml
├── lib/
│   ├── index.js
│   └── client.js
├── scripts/
│   ├── smoke-test.mjs
│   └── dashscope-realtime-proxy.mjs
├── config.example.json
├── LICENSE
└── README.md
```

自检：

```bash
node scripts/smoke-test.mjs
```

## 9. 发布到 GitHub

```bash
git init -b main
git config user.name "LBXC-666"
git config user.email "2025051611057@stu.cqnu.edu.cn"
git add .
git commit -m "release"
git branch -M main
git remote add origin https://github.com/LBXC-666/dsh-voice-input.git
git push -u origin main
```

更新版本：

```bash
git tag v1.0.0 && git push origin main --tags
# 使用者：
dsh plugin --profile web add github:LBXC-666/dsh-voice-input#v1.0.0
```
