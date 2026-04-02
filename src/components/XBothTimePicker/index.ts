// ============================================
// XBothTimePicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XBothTimePicker from './XBothTimePicker.vue'

// 导出组件
export { XBothTimePicker }

// 默认导出（带 install 方法）
export default {
  install(app: App) {
    app.component('XBothTimePicker', XBothTimePicker)
    app.component('x-both-time-picker', XBothTimePicker)
  }
} as Plugin