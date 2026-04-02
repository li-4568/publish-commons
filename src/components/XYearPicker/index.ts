// ============================================
// XYearPicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XYearPicker from './XYearPicker.vue'

// 导出组件
export { XYearPicker }

// 默认导出（带 install 方法）
export default {
  install(app: App) {
    app.component('XYearPicker', XYearPicker)
    app.component('x-year-picker', XYearPicker)
  }
} as Plugin