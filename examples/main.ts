// ============================================
// 示例入口文件
// ============================================

import { createApp } from 'vue'
import App from './App.vue'

// 引入组件库
import XButton from '../src/components/XButton/XButton.vue'

const app = createApp(App)

// 全局注册组件
app.component('XButton', XButton)

app.mount('#app')
