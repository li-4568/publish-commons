// ============================================
// XTextarea 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XTextarea from './XTextarea.vue'

// 导出组件
export { XTextarea }

// 导出类型
export type {
  TextareaSize,
  ValidationRule,
  AutoSize,
  XTextareaProps,
  XTextareaEmits,
  XTextareaSlots,
  XTextareaExpose
} from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XTextarea', XTextarea)
    app.component('x-textarea', XTextarea)
  }
} as Plugin

// 确保组件能被正确识别
XTextarea.install = plugin.install
XTextarea.__file = 'XTextarea.vue'

export default plugin