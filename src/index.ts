// ============================================
// 库主入口文件
// ============================================

import type { App, Plugin } from 'vue'

// 导入组件
import { XButton } from './components/XButton'
import { XInput } from './components/XInput'
import { XSelect } from './components/XSelect'
import { XDatePicker } from './components/XDatePicker'
import { XCascader } from './components/XCascader'
import { XCheckbox } from './components/XCheckbox'
import { XCheckboxGroup } from './components/XCheckboxGroup'

// 导入样式
import './styles/index.less'

// 导出组件
export { XButton, XInput, XSelect, XDatePicker, XCascader, XCheckbox, XCheckboxGroup }

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
export type {
  XDatePickerProps,
  XDatePickerEmits,
  DatePickerSize,
  DatePickerType
} from './components/XDatePicker/types'
export type {
  XCascaderProps,
  XCascaderEmits,
  CascaderOption,
  CascaderSize
} from './components/XCascader/types'
export type {
  XCheckboxProps,
  XCheckboxEmits,
  XCheckboxSlots,
  CheckboxSize
} from './components/XCheckbox/types'
export type {
  XCheckboxGroupProps,
  XCheckboxGroupEmits
} from './components/XCheckboxGroup/types'

// 全局安装方法
const install = (app: App) => {
  app.component('XButton', XButton)
  app.component('XInput', XInput)
  app.component('XSelect', XSelect)
  app.component('XDatePicker', XDatePicker)
  app.component('XCascader', XCascader)
  app.component('XCheckbox', XCheckbox)
  app.component('XCheckboxGroup', XCheckboxGroup)
}

// 默认导出
export default {
  install
} as Plugin

// 命名导出（支持按需引入）
export { install }
