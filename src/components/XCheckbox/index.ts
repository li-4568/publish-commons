// ============================================
// XCheckbox 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XCheckbox from './XCheckbox.vue'
import './style.less'

// 导出组件
export { XCheckbox }

// 导出类型
export type { XCheckboxProps, XCheckboxEmits, XCheckboxSlots, CheckboxSize } from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XCheckbox', XCheckbox)
    app.component('x-checkbox', XCheckbox)
  }
} as Plugin

// 确保组件能被正确识别
XCheckbox.install = plugin.install
XCheckbox.__file = 'XCheckbox.vue'

export default plugin