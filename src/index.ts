// ============================================
// 库主入口文件
// ============================================

import type { App, Plugin } from 'vue'

// 导入组件
import XButton from './components/XButton'
import XInput from './components/XInput'

// 导入样式
import './styles/index.less'

// 导出组件
export { XButton, XInput }

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

// 组件列表
const components = [XButton, XInput]

// 全局安装方法
const install = (app: App) => {
  components.forEach((component) => {
    app.use(component)
  })
}

// 默认导出
export default {
  install
} as Plugin

// 命名导出（支持按需引入）
export { install }
