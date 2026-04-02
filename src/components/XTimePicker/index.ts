// ============================================
// XTimePicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XTimePicker from './XTimePicker.vue'

// 导出组件
export { XTimePicker }

// 默认导出（带 install 方法）
export default {
  install(app: App) {
    app.component('XTimePicker', XTimePicker)
    app.component('x-time-picker', XTimePicker)
  }
} as Plugin