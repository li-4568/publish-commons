// ============================================
// XBothTimePicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XBothTimePicker from './XBothTimePicker.vue'

// 导出组件
export { XBothTimePicker }

// 导出类型
export type {
  BothTimePickerSize,
  TimeRangeValue,
  TimeRangeDayjsValue,
  ValidationRule,
  XBothTimePickerProps,
  XBothTimePickerEmits,
  XBothTimePickerSlots,
  XBothTimePickerExpose
} from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XBothTimePicker', XBothTimePicker)
    app.component('x-both-time-picker', XBothTimePicker)
  }
} as Plugin

// 确保组件能被正确识别
XBothTimePicker.install = plugin.install
XBothTimePicker.__file = 'XBothTimePicker.vue'

export default plugin