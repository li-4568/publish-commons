// ============================================
// XCheckbox 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XCheckbox from './XCheckbox.vue'
import XCheckboxGroup from './XCheckboxGroup.vue'
import './style.less'

// 导出组件
export { XCheckbox, XCheckboxGroup }

// 导出类型
export type { 
  XCheckboxProps, 
  XCheckboxEmits, 
  XCheckboxSlots, 
  CheckboxSize,
  XCheckboxGroupProps,
  XCheckboxGroupEmits
} from './types'

// 默认导出（带 install 方法）
const plugin = {
  install(app: App) {
    app.component('XCheckbox', XCheckbox)
    app.component('x-checkbox', XCheckbox)
    app.component('XCheckboxGroup', XCheckboxGroup)
    app.component('x-checkbox-group', XCheckboxGroup)
  }
} as Plugin

// 确保组件能被正确识别
XCheckbox.install = plugin.install
XCheckbox.__file = 'XCheckbox.vue'
XCheckboxGroup.install = plugin.install
XCheckboxGroup.__file = 'XCheckboxGroup.vue'

export default plugin