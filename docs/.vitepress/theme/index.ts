import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithComponents } from './register-components'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册组件库的组件到文档中
    enhanceAppWithComponents(app)
  },
} as Theme
