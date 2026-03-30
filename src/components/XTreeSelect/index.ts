// ============================================
// XTreeSelect 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XTreeSelect from './XTreeSelect.vue'

// 导出组件
export { XTreeSelect }

// 导出类型
export type {
  XTreeSelectProps,
  XTreeSelectEmits,
  XTreeSelectSlots,
  TreeNode,
  TreeSelectSize,
  TreeSelectMode
} from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XTreeSelect', XTreeSelect)
    app.component('x-tree-select', XTreeSelect)
  }
} as Plugin

// 确保组件能被正确识别
XTreeSelect.install = plugin.install
XTreeSelect.__file = 'XTreeSelect.vue'

export default plugin
