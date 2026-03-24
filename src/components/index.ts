// ============================================
// 组件库统一入口
// ============================================

import type { App, Plugin } from 'vue'
import XButton from './XButton'
import XInput from './XInput'
import XSelect from './XSelect'

// 导出所有组件
export { XButton, XInput, XSelect }

// 导出所有类型
export * from './XButton/types'
export * from './XInput/types'
export * from './XSelect/types'

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
