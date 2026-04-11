// ============================================
// XMonthPicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XMonthPicker from './XMonthPicker.vue'

// 导出组件
export { XMonthPicker }

// 导出类型
export type {
  MonthPickerSize,
  ValidationRule,
  XMonthPickerProps,
  XMonthPickerEmits,
  XMonthPickerSlots,
  XMonthPickerExpose
} from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XMonthPicker', XMonthPicker)
    app.component('x-month-picker', XMonthPicker)
  }
} as Plugin

// 确保组件能被正确识别
XMonthPicker.install = plugin.install
XMonthPicker.__file = 'XMonthPicker.vue'

export default plugin