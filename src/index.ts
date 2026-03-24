// ============================================
// 库主入口文件
// ============================================

import type { App, Plugin } from 'vue'

// 导入组件
import XButton from './components/XButton'
import XInput from './components/XInput'
import XSelect from './components/XSelect'

// 导入样式
import './styles/index.less'

// 导出组件
export { XButton, XInput, XSelect }

// 导出组件类型
export type {
  XButtonProps,
  XButtonEmits,
  XButtonSlots,
  ButtonType,
  ButtonSize
} from './components/XButton/types'
export type {
  XInputProps,
  XInputEmits,
  XInputSlots,
  InputType,
  InputSize
} from './components/XInput/types'
export type {
  XSelectProps,
  XSelectEmits,
  XSelectSlots,
  SelectSize,
  SelectOption,
  SelectMode
} from './components/XSelect/types'

// 全局安装方法
const install = (app: App) => {
  app.component('XButton', XButton)
  app.component('XInput', XInput)
  app.component('XSelect', XSelect)
}

// 默认导出
export default {
  install
} as Plugin

// 命名导出（支持按需引入）
export { install }
