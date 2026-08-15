# @lbxc/dsh-voice-input

给 **DeepSeek Harness Web GUI（dsh web）** 添加一个语音输入插件（AI生成）：

- 🎤 在**输入框发送键左侧**新增麦克风按钮，点击开始录音，再点一次停止并自动转写、插入输入框；
- ⌨️ 全局快捷键：按 **右 Alt** 开始/停止语音输入（可关闭，自动忽略 AltGr）；
- ⚙️ 在 **设置 → 插件 → 语音输入** 提供完整配置页；
- 🔌 支持三种识别接口：
  1. **浏览器本地识别**（Web Speech API，免费、无需 Key，仅 Chrome / Edge）；
  2. **OpenAI 兼容接口**（`/audio/transcriptions`，适用于 OpenAI、Groq、SiliconFlow、本地 faster-whisper 等）；
  3. **自定义 JSON 接口**（音频 base64 放入 JSON 请求体，可对接任意自建服务）；
- 📥 **支持导入 / 导出 JSON 配置**，方便备份、分享或批量部署（“自定义导入 API”）。

配置与 API Key 只保存在浏览器 `localStorage`，不会上传到 DeepSeek Harness 服务端。

---

## 1. 安装

插件采用 dsh 官方的 bundle 插件规范（`dsh.bundle.patch` + `dsh.client`），
安装入口和本机已装的 `dsh-user-plugin-panel` / `dsh-task-board` 完全一致。

### 1.1 安装插件包

本地目录安装：

```bash
# 把 <本目录> 换成实际的插件目录，例如 /home/lbxc/voice_input
dsh plugin --profile web add link:<本目录>
```

该命令会：

- 在 `~/.dsh/profiles/web/package.json` 的 `dependencies` 里写入
  `"@lbxc/dsh-voice-input": "link:<本目录>"`；
- 识别到包内 `dsh.bundle.patch` 声明，把 `@lbxc/dsh-voice-input` 加入
  `dsh.profile.bundles` 的 bundle 组合层。

**从 GitHub 安装（推荐给其他使用者）**：

```bash
# 默认分支
dsh plugin --profile web add github:LBXC-666/dsh-voice-input

# 指定分支 / tag（建议发布时打 tag，让使用者锁定版本）
dsh plugin --profile web add github:LBXC-666/dsh-voice-input#v1.0.0

# 完整 URL 形式
dsh plugin --profile web add https://github.com/LBXC-666/dsh-voice-input.git#main
```

> 以上命令会执行 `pnpm add`，自动 clone 仓库并按其 `package.json` 的
> `dsh.bundle.patch` 声明加入 bundle 组合层。私有仓库需要先配置 GitHub 凭据。

如果你不使用 `dsh plugin`，也可以手动编辑 `~/.dsh/profiles/web/package.json`：

```json
{
  "dependencies": {
    "@lbxc/dsh-voice-input": "link:/home/lbxc/voice_input"
  },
  "dsh": {
    "profile": {
      "bundles": [
        "@lbxc/dsh-voice-input"
      ]
    }
  }
}
```

### 1.2 重启并刷新

Bundle 层插件必须重启 `dsh web` 才生效：

```bash
# 停掉当前正在运行的 dsh web，然后重新启动
dsh web
```

浏览器打开（或刷新） `http://127.0.0.1:3080`，即可在输入框发送键左侧看到麦克风按钮。

> 验证：设置 → 插件 里应出现「语音输入」标签页；输入框右下角出现 🎤。

### 1.3 卸载

```bash
dsh plugin --profile web remove @lbxc/dsh-voice-input
# 重启 dsh web
```

---

## 2. 快速配置

进入 **设置 → 插件 → 语音输入**。

### 方式 A：浏览器本地识别（零配置）

1. 接口模式选择「浏览器本地识别」；
2. 语言保持 `zh-CN`（或改为 `en-US` 等）；
3. 回到对话页点击麦克风即可。

> 注意：该模式走 Chrome / Edge 内置识别服务，Firefox 不支持；需要联网。

### 方式 B：OpenAI / Groq / SiliconFlow / 本地 Whisper

1. 接口模式选择「OpenAI 兼容接口」；
2. 在「快速预设」里选一个，会自动填充接口地址和模型；
3. 填上 API Key，保存（修改即自动保存）。

| 预设 | 接口地址 | 模型 |
|---|---|---|
| OpenAI Whisper | `https://api.openai.com/v1/audio/transcriptions` | `whisper-1` |
| Groq Whisper | `https://api.groq.com/openai/v1/audio/transcriptions` | `whisper-large-v3` |
| SiliconFlow SenseVoice | `https://api.siliconflow.cn/v1/audio/transcriptions` | `FunAudioLLM/SenseVoiceSmall` |
| 本地 faster-whisper | `http://127.0.0.1:8000/v1/audio/transcriptions` | `whisper-1` |

### 方式 C：自定义 JSON 接口

适用任何接受「音频 base64 + JSON」的自建 / 第三方转写服务。

1. 接口模式选择「自定义 JSON 接口」；
2. 填完整请求地址、模型、语言；
3. 编辑「请求体模板」，支持占位符：

| 占位符 | 含义 |
|---|---|
| `{{audio}}` | 录音的 base64 字符串 |
| `{{format}}` | 录音 MIME 类型，如 `audio/webm` |
| `{{model}}` | 配置中的模型名 |
| `{{language}}` | 配置中的识别语言 |

默认模板：

```json
{
  "audio": "{{audio}}",
  "format": "{{format}}",
  "model": "{{model}}",
  "language": "{{language}}"
}
```

4. 填「转写文本的取值路径」，支持点路径和数组下标：

| 服务响应示例 | 取值路径 |
|---|---|
| `{"text": "你好"}` | `text` |
| `{"data": {"text": "你好"}}` | `data.text` |
| `{"result": [{"text": "你好"}]}` | `result[0].text` |
| `"你好"`（响应本身就是文本） | 留空 |

5. 如服务需要额外的 Header（例如 `X-Service-Id`），在「高级选项」里填 JSON，例如：

```json
{ "X-Service-Id": "my-app" }
```

> API Key 会自动以 `Authorization: Bearer <key>` 发送；自定义 Header 中的
> `Authorization` 会覆盖自动值。

---

## 3. 自定义导入 API 配置（导入 / 导出）

在「导入 / 导出 API 配置」区域：

- **导入**：粘贴 JSON 配置点「导入粘贴的配置」，或点「导入 JSON 文件」选择
  `config.example.json` / 任意之前导出的配置；
- **导出**：「复制当前配置」或「下载当前配置」生成 `dsh-voice-input.config.json`。

### 配置 JSON 完整字段

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
  "jsonTemplate": "{\n  \"audio\": \"{{audio}}\",\n  \"format\": \"{{format}}\",\n  \"model\": \"{{model}}\",\n  \"language\": \"{{language}}\"\n}",
  "responsePath": "text"
}
```

| 字段 | 说明 |
|---|---|
| `mode` | `openai`（OpenAI 兼容）/ `custom-json`（自定义 JSON）/ `browser`（浏览器本地） |
| `preset` | 记录当前预设 id，仅用于界面回显 |
| `endpoint` | OpenAI 兼容接口地址；可填完整地址或 Base URL（自动补 `/audio/transcriptions`） |
| `apiKey` | API Key；发送时自动加 `Authorization: Bearer` |
| `model` | 转写模型 |
| `language` | 识别语言，如 `zh` / `en` / `ja`，留空自动检测 |
| `prompt` | 可选提示词，帮助识别专有名词 |
| `headers` | 自定义请求头 JSON 对象（两个云端模式都生效） |
| `shortcutEnabled` | 是否启用右 Alt 全局快捷键（`true` / `false`） |
| `customUrl` | 自定义 JSON 模式的完整请求地址 |
| `jsonTemplate` | 自定义 JSON 模式的请求体模板（JSON 字符串） |
| `responsePath` | 自定义 JSON 模式的文本取值路径 |

复制仓库里的 `config.example.json`，改成自己的接口即可。

---

## 4. 使用方式

### 鼠标

1. 点击输入框右下角（发送键左侧）的 🎤；
2. 浏览器请求麦克风权限，点击允许；
3. 开始说话，按钮变红并显示录音时长；
4. 再次点击按钮停止，按钮进入「转写中…」；
5. 转写文本自动追加到输入框并聚焦输入框，回车发送即可。

识别错误会以气泡显示在按钮上方，9 秒后自动消失。

### 快捷键：右 Alt

- 在页面**任意位置**按一下 **右 Alt** 开始录音；
- 说完了再按一下 **右 Alt** 停止并转写；
- 自动忽略：AltGr 键盘布局、Ctrl/Shift/Meta 组合键、长按重复触发、输入法组合中；
- 可以在 设置 → 插件 → 语音输入 中关闭「启用右 Alt 快捷键」（默认开启）。

> 小提示：录音/转写状态会实时显示在发送键左侧的麦克风按钮上，快捷键与鼠标点击共用同一套状态。

---

## 5. 常见问题

**Q1：看不到麦克风按钮？**
确认已执行 `dsh plugin --profile web add link:<本目录>` 且**重启了 dsh web**；
再刷新页面。设置 → 插件 → 插件清单里应能看到 `@lbxc/dsh-voice-input`。

**Q2：点击后提示无法访问麦克风？**
- 浏览器需要 `localhost`（或 HTTPS）才算安全上下文；通过局域网 IP 访问时请改用
  `http://127.0.0.1:3080` 或为站点配置 HTTPS；
- 检查地址栏左侧的站点权限，允许麦克风。

**Q3：云端接口报错 / 转写结果为空？**
- 检查接口地址：OpenAI 兼容模式最终请求 `POST <endpoint>/audio/transcriptions`；
- 检查 API Key 是否有效、账户是否有额度；
- 服务端 CORS 必须放行浏览器请求；本地自建服务建议添加
  `Access-Control-Allow-Origin: *`；
- 录音格式为 `audio/webm`（部分浏览器为 mp4），服务端需支持该格式（OpenAI /
  Groq / SiliconFlow 均支持）。

**Q4：Firefox 能用吗？**
录音（MediaRecorder）可以用，但「浏览器本地识别」模式依赖 Web Speech API，
Firefox 不支持；请改用云端接口模式。

**Q5：数据存在哪里？**
配置和 API Key 存在当前浏览器 `localStorage` 的 `dsh.voice-input.config.v1` 键下；
语音数据只发送给你配置的识别接口。清除浏览器站点数据会清掉配置，可提前用导出功能备份。

**Q6：右 Alt 没反应？**
- 确认 设置 → 插件 → 语音输入 里「启用右 Alt 快捷键」为开启状态；
- 需要先打开一个有会话的对话页（麦克风按钮存在时快捷键才生效）；
- 欧洲键盘布局的 AltGr 会被自动忽略，避免影响输入字符；也可以改用鼠标点击按钮。

**Q7：插件更新后没变化？**
Bundle 插件需要重启 `dsh web`；浏览器端可能需要强制刷新（Ctrl/Cmd+Shift+R）。

---

## 6. 发布到 GitHub（维护者）

### 8.1 首次推送

1. 在 GitHub 上新建一个**公开**仓库（例如 `dsh-voice-input`），不要勾选自动生成
   README / LICENSE（本目录已包含）；
2. 本地进入插件目录并提交：

```bash
cd /home/lbxc/voice_input
git init -b main
git config user.name  "LBXC-666"
git config user.email "2025051611057@stu.cqnu.edu.cn"

git add .
git commit -m "dsh-voice-input: initial release"
git branch -M main
git remote add origin https://github.com/LBXC-666/dsh-voice-input.git
git push -u origin main
```

3. 推送后，任何人都可以用 1.1 节的 GitHub 命令安装。

### 8.2 发布新版本

```bash
# 修改 package.json 的 version 后
git add .
git commit -m "release v1.1.0"
git tag v1.1.0
git push origin main --tags
```

使用者升级（锁定 tag 时）：

```bash
dsh plugin --profile web add github:LBXC-666/dsh-voice-input#v1.1.0
```

> `dsh plugin add` 会覆盖 profile 里同名的依赖规格，所以版本更新用同一条命令即可。

### 8.3 注意事项

- **仓库根目录必须是本插件目录**（`package.json` 在根目录），`github:` 安装才能直接
  找到 `dsh.bundle.patch`；如果是 monorepo 子目录，需用
  `github:user/repo#tag&path:/packages/dsh-voice-input` 形式；
- 本项目**无需构建**：`lib/client.js` 是纯 JS，GitHub 安装后重启 `dsh web` 即生效；
- 不要把带真实 API Key 的 `dsh-voice-input.config.json` 提交进仓库（`.gitignore`
  已忽略该文件名）。

## 7. 目录结构

```text
voice_input/
├── package.json           # dsh 插件清单（dsh.client + dsh.bundle.patch）
├── cordis.patch.yml       # bundle 组合补丁：插入 voice-input 插件行
├── lib/
│   ├── index.js           # node 半身（空实现，浏览器端完成全部功能）
│   └── client.js          # browser 半身：输入框按钮 + 设置页 + 录音/转写
├── config.example.json    # 配置导入示例
├── scripts/
│   └── smoke-test.mjs     # Node 冒烟测试（mock 加载 client 工厂并渲染组件）
└── README.md              # 本文件
```

改动插件后可在不重启服务的情况下先跑一遍自检：

```bash
node scripts/smoke-test.mjs
```

## 8. 技术说明（给开发者）

- 按钮注册在 dsh 官方槽位 **`conversation.input.right`**：
  “The right end of the same tool row, before the primary send button”，
  即输入框工具行右端、发送键左侧，与产品要求一致；
- 配置页注册在 **`settings.plugins.tab`**，与 dsh 内置插件设置页同构；
- 客户端通过 `inputActions.setDraft(text)` 写回输入框草稿（dsh 标准
  `InputActions` 契约），不依赖任何 DOM hack；
- 插件为 dual-face bundle：`cordis.patch.yml` 插入 loader 行，
  `package.json` 的 `dsh.client` 声明浏览器半身。
