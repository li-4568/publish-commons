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
import { XCheckbox, XCheckboxGroup } from './components/XCheckbox'
import { XRadio, XRadioGroup } from './components/XRadio'
import { XPopover } from './components/XPopover'
import { XTooltip } from './components/XTooltip'
import { XTree } from './components/XTree'
import { XTreeSelect } from './components/XTreeSelect'
import { XPopconfirm } from './components/XPopconfirm'
import { XNotification, notification } from './components/XNotification'

// 导入样式
import './styles/index.less'

// 导出组件
export {
  XButton,
  XInput,
  XSelect,
  XDatePicker,
  XCascader,
  XCheckbox,
  XCheckboxGroup,
  XRadio,
  XRadioGroup,
  XPopover,
  XTooltip,
  XTree,
  XTreeSelect,
  XPopconfirm,
  XNotification,
  notification
}

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
  CheckboxSize,
  XCheckboxGroupProps,
  XCheckboxGroupEmits
} from './components/XCheckbox/types'
export type {
  XRadioProps,
  XRadioEmits,
  XRadioSlots,
  XRadioGroupProps,
  XRadioGroupEmits,
  XRadioGroupSlots,
  RadioSize
} from './components/XRadio/types'
export type {
  XPopoverProps,
  XPopoverEmits,
  XPopoverSlots,
  PopoverPlacement,
  PopoverTrigger
} from './components/XPopover/types'
export type {
  XTooltipProps,
  XTooltipEmits,
  XTooltipSlots,
  TooltipPlacement,
  TooltipTrigger
} from './components/XTooltip/types'
export type {
  XTreeProps,
  XTreeEmits,
  XTreeSlots,
  XTreeNode
} from './components/XTree/types'
export type {
  XTreeSelectProps,
  XTreeSelectEmits,
  XTreeSelectSlots,
  TreeNode,
  TreeSelectSize,
  TreeSelectMode
} from './components/XTreeSelect/types'
export type {
  XPopconfirmProps,
  XPopconfirmEmits,
  XPopconfirmSlots,
  XPopconfirmPlacement,
  XPopconfirmTrigger
} from './components/XPopconfirm/types'
export type {
  XNotificationProps,
  XNotificationOptions,
  XNotificationInstance,
  XNotificationApi,
  XNotificationType,
  XNotificationPlacement
} from './components/XNotification/types'

// 全局安装方法
const install = (app: App) => {
  app.component('XButton', XButton)
  app.component('XInput', XInput)
  app.component('XSelect', XSelect)
  app.component('XDatePicker', XDatePicker)
  app.component('XCascader', XCascader)
  app.component('XCheckbox', XCheckbox)
  app.component('XCheckboxGroup', XCheckboxGroup)
  app.component('XRadio', XRadio)
  app.component('XRadioGroup', XRadioGroup)
  app.component('XPopover', XPopover)
  app.component('XTooltip', XTooltip)
  app.component('XTree', XTree)
  app.component('XTreeSelect', XTreeSelect)
  app.component('XPopconfirm', XPopconfirm)
  app.component('XNotification', XNotification)
}

// 默认导出
export default {
  install
} as Plugin

// 命名导出（支持按需引入）
export { install }
