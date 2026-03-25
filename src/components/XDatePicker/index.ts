import type { App, Plugin } from 'vue'
import XDatePicker from './XDatePicker.vue'
import './style.less'

// 定义组件的插件类型
export type XDatePickerPlugin = Plugin & {
  install: (app: App) => void
}

// 安装函数
XDatePicker.install = (app: App) => {
  app.component('XDatePicker', XDatePicker)
  return app
}

export { XDatePicker }
export default XDatePicker
