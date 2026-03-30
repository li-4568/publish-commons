// ============================================
// XDatePicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XDatePicker from './XDatePicker.vue'

// 导出组件
export { XDatePicker }

// 导出类型
export type { XDatePickerProps, XDatePickerEmits, DatePickerSize, DatePickerType } from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XDatePicker', XDatePicker)
    app.component('x-date-picker', XDatePicker)
  }
} as Plugin

// 确保组件能被正确识别
XDatePicker.install = plugin.install
XDatePicker.__file = 'XDatePicker.vue'

export default plugin
