// ============================================
// XForm 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XForm from './XForm.vue'

// 导出组件
export { XForm }

// 默认导出（带 install 方法）
export default {
  install(app: App) {
    app.component('XForm', XForm)
    app.component('x-form', XForm)
  }
} as Plugin