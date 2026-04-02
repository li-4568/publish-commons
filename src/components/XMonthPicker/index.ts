// ============================================
// XMonthPicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XMonthPicker from './XMonthPicker.vue'

// 导出组件
export { XMonthPicker }

// 默认导出（带 install 方法）
export default {
  install(app: App) {
    app.component('XMonthPicker', XMonthPicker)
    app.component('x-month-picker', XMonthPicker)
  }
} as Plugin