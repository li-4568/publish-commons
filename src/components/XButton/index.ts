// ============================================
// XButton 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XButton from './XButton.vue'

// 导出组件
export { XButton }

// 导出类型
export type { XButtonProps, XButtonEmits, XButtonSlots, ButtonType, ButtonSize } from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XButton', XButton)
    app.component('x-button', XButton)
  }
} as Plugin

// 确保组件能被正确识别
XButton.install = plugin.install
XButton.__file = 'XButton.vue'

export default plugin
