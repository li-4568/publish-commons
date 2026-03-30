// ============================================
// XPopover 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XPopover from './XPopover.vue'
import './style.less'

// 导出组件
export { XPopover }

// 导出类型
export type { XPopoverProps, XPopoverEmits, XPopoverSlots, PopoverPlacement, PopoverTrigger } from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XPopover', XPopover)
    app.component('x-popover', XPopover)
  }
} as Plugin

// 确保组件能被正确识别
XPopover.install = plugin.install
XPopover.__file = 'XPopover.vue'

export default plugin