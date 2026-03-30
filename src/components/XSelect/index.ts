// ============================================
// XSelect 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XSelect from './XSelect.vue'

// 导出组件
export { XSelect }

// 导出类型
export type { XSelectProps, XSelectEmits, XSelectSlots, SelectSize, SelectOption, SelectMode } from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XSelect', XSelect)
    app.component('x-select', XSelect)
  }
} as Plugin

// 确保组件能被正确识别
XSelect.install = plugin.install
XSelect.__file = 'XSelect.vue'

export default plugin
