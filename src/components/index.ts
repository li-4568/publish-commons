// ============================================
// 组件库统一入口
// ============================================

import type { App, Plugin } from 'vue'

// 导入组件
import { XButton } from './XButton'
import { XInput } from './XInput'
import { XSelect } from './XSelect'
import { XDatePicker } from './XDatePicker'
import { XTreeSelect } from './XTreeSelect'
import { XPopconfirm } from './XPopconfirm'

// 导出所有组件
export { XButton, XInput, XSelect, XDatePicker, XTreeSelect, XPopconfirm }

// 导出所有类型
export * from './XButton/types'
export * from './XInput/types'
export * from './XSelect/types'
export * from './XDatePicker/types'
export * from './XTreeSelect/types'
export * from './XPopconfirm/types'

// 全局安装方法
const install = (app: App) => {
  app.component('XButton', XButton)
  app.component('XInput', XInput)
  app.component('XSelect', XSelect)
  app.component('XDatePicker', XDatePicker)
  app.component('XTreeSelect', XTreeSelect)
  app.component('XPopconfirm', XPopconfirm)
}

// 默认导出
export default {
  install
} as Plugin

// 命名导出（支持按需引入）
export { install }
