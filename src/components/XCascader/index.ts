// ============================================
// XCascader 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XCascader from './XCascader.vue'
import './style.less'

// 导出组件
export { XCascader }

// 导出类型
export type { XCascaderProps, XCascaderEmits, CascaderOption, CascaderSize } from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XCascader', XCascader)
    app.component('x-cascader', XCascader)
  }
} as Plugin

// 确保组件能被正确识别
XCascader.install = plugin.install
XCascader.__file = 'XCascader.vue'

export default plugin