// ============================================
// XTextarea 组件入口文件
// ============================================

import type { App, Plugin } from 'vue'
import XTextarea from './XTextarea.vue'

// 导出组件
export { XTextarea }

// 默认导出（带 install 方法）
export default {
  install(app: App) {
    app.component('XTextarea', XTextarea)
    app.component('x-textarea', XTextarea)
  }
} as Plugin