// ============================================
// XYearPicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XYearPicker from './XYearPicker.vue'

// 导出组件
export { XYearPicker }

// 导出类型
export type {
  YearPickerSize,
  ValidationRule,
  XYearPickerProps,
  XYearPickerEmits,
  XYearPickerSlots,
  XYearPickerExpose
} from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XYearPicker', XYearPicker)
    app.component('x-year-picker', XYearPicker)
  }
} as Plugin

// 确保组件能被正确识别
XYearPicker.install = plugin.install
XYearPicker.__file = 'XYearPicker.vue'

export default plugin