// ============================================
// XInput 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XInput from './XInput.vue'
import XInputFloat from './XInputFloat.vue'
import XInputNeg from './XInputNeg.vue'
import XInputNum from './XInputNum.vue'

// 导出组件
export { XInput, XInputFloat, XInputNeg, XInputNum }

// 导出类型
export type { XInputProps, XInputEmits, XInputSlots, InputType, InputSize } from './types'

// 导出 composables
export { useInput, useInputEvents } from './composables'

// 默认导出（带 install 方法）
export default {
  install(app: App) {
    app.component('XInput', XInput)
    app.component('x-input', XInput)
    app.component('XInputFloat', XInputFloat)
    app.component('x-input-float', XInputFloat)
    app.component('XInputNeg', XInputNeg)
    app.component('x-input-neg', XInputNeg)
    app.component('XInputNum', XInputNum)
    app.component('x-input-num', XInputNum)
  }
} as Plugin
