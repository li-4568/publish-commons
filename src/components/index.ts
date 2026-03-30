// ============================================
// 组件库统一入口
// ============================================

import type { App, Plugin } from 'vue'

// 导入组件
import { XButton } from './XButton'
import { XInput } from './XInput'
import { XSelect } from './XSelect'
import { XDatePicker } from './XDatePicker'
import { XCascader } from './XCascader'
import { XCheckbox, XCheckboxGroup } from './XCheckbox'
import { XRadio, XRadioGroup } from './XRadio'
import { XPopover } from './XPopover'
import { XTooltip } from './XTooltip'
import { XTree } from './XTree'
import { XTreeSelect } from './XTreeSelect'
import { XPopconfirm } from './XPopconfirm'
import { XNotification, notification } from './XNotification'

// 导出所有组件
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

// 导出所有类型
export * from './XButton/types'
export * from './XInput/types'
export * from './XSelect/types'
export * from './XDatePicker/types'
export * from './XCascader/types'
export * from './XCheckbox/types'
export * from './XRadio/types'
export * from './XPopover/types'
export * from './XTooltip/types'
export * from './XTree/types'
export * from './XTreeSelect/types'
export * from './XPopconfirm/types'
export * from './XNotification/types'

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
