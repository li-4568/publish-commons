// ============================================
// 组件库统一入口
// ============================================

import type { App, Plugin } from 'vue'
import XButton from './XButton'
import XInput from './XInput'

// 导出所有组件
export { XButton, XInput }

// 导出所有类型
export * from './XButton/types'
export * from './XInput/types'

// 所有组件列表
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
