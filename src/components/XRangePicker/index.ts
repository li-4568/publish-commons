// ============================================
// XRangePicker 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XRangePicker from './XRangePicker.vue'

// 导出组件
export { XRangePicker }

// 导出类型
export type {
  RangePickerSize,
  RangeValue,
  RangeDayjsValue,
  ValidationRule,
  XRangePickerProps,
  XRangePickerEmits,
  XRangePickerSlots,
  XRangePickerExpose
} from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XRangePicker', XRangePicker)
    app.component('x-range-picker', XRangePicker)
  }
} as Plugin

// 确保组件能被正确识别
XRangePicker.install = plugin.install
XRangePicker.__file = 'XRangePicker.vue'

export default plugin