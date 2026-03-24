// ============================================
// XInput 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XInput from './XInput.vue'

// 导出组件
export { XInput }

// 导出类型
export type { XInputProps, XInputEmits, XInputSlots, InputType, InputSize } from './types'

// 默认导出（带 install 方法）
export default {
  install(app: App) {
    app.component('XInput', XInput)
    app.component('x-input', XInput)
  }
} as Plugin
