import type { App, Plugin } from 'vue'
import XPopconfirm from './XPopconfirm.vue'
import './style.less'

export { XPopconfirm }

export type { XPopconfirmProps, XPopconfirmEmits, XPopconfirmPlacement, XPopconfirmTrigger } from './types'

const plugin = {
  install(app: App) {
    app.component('XPopconfirm', XPopconfirm)
    app.component('x-popconfirm', XPopconfirm)
  }
} as Plugin

XPopconfirm.install = plugin.install
XPopconfirm.__file = 'XPopconfirm.vue'

export default plugin