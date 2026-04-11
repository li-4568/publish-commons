// ============================================
// XTimePicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XTimePicker from './XTimePicker.vue'

// 导出组件
export { XTimePicker }

// 导出类型
export type {
  TimePickerSize,
  ValidationRule,
  XTimePickerProps,
  XTimePickerEmits,
  XTimePickerSlots,
  XTimePickerExpose
} from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XTimePicker', XTimePicker)
    app.component('x-time-picker', XTimePicker)
  }
} as Plugin

// 确保组件能被正确识别
XTimePicker.install = plugin.install
XTimePicker.__file = 'XTimePicker.vue'

export default plugin