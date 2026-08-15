/**
 * Host half of @lbxc/dsh-voice-input.
 *
 * 语音输入完全在浏览器端完成（getUserMedia + MediaRecorder + fetch），
 * 配置保存在浏览器 localStorage，因此 node 半身不需要注册任何服务或路由。
 * 保留空实现是为了让 bundle 层的 dual-face 插件行能正常挂载。
 */

export const inject = []

export function apply() {}
