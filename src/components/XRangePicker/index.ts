// ============================================
// XRangePicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XRangePicker from './XRangePicker.vue'

// 导出组件
export { XRangePicker }

// 默认导出（带 install 方法）
export default {
  install(app: App) {
    app.component('XRangePicker', XRangePicker)
    app.component('x-range-picker', XRangePicker)
  }
} as Plugin