// ============================================
// XSelect 组件导出
// ============================================

import type { App } from 'vue'
import XSelect from './XSelect.vue'
import type { XSelectProps, SelectOption } from './types'

// 导入样式
import './style.less'

// 定义组件的 install 方法
XSelect.install = (app: App) => {
  // 注册组件
  app.component('XSelect', XSelect)
}

// 导出组件

export default XSelect
export type { XSelectProps, SelectOption }
