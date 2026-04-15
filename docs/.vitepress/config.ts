import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Publish Commons',
  description: '基于 Vue 3 + TypeScript 的企业级组件库',
  lang: 'zh-CN',
  base: '/publish-commons/',
  vite: {
    resolve: {
      alias: {
        'publish-commons': resolve(__dirname, '../../src'),
        '@': resolve(__dirname, '../../src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${resolve(__dirname, '../../src/styles/variables.less')}";`
        }
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/li-4568/publish-commons' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '主题定制', link: '/guide/theme' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Checkbox 复选框', link: '/components/checkbox' },
            { text: 'Radio 单选框', link: '/components/radio' },
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Form 表单', link: '/components/form' },
            { text: 'DatePicker 日期选择', link: '/components/datepicker' },
            { text: 'Cascader 级联选择', link: '/components/cascader' },
            { text: 'TreeSelect 树选择', link: '/components/treeselect' },
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'Table 表格', link: '/components/table' },
            { text: 'Tree 树形控件', link: '/components/tree' },
            { text: 'Chart 图表', link: '/components/chart' },
          ]
        },
        {
          text: '高级组件',
          items: [
            { text: 'Editor 富文本', link: '/components/editor' },
            { text: 'TableSearch 表格搜索', link: '/components/tablesearch' },
            { text: 'ImageCropper 图片裁剪', link: '/components/imagecropper' },
            { text: 'Notification 通知', link: '/components/notification' },
          ]
        },
        {
          text: '工具函数',
          items: [
            { text: 'Modal 弹窗', link: '/components/modal' },
            { text: 'Preview 文件预览', link: '/components/preview' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/li-4568/publish-commons' }
    ],
    footer: {
      message: '基于 MIT 协议发布',
      copyright: 'Copyright © 2024'
    }
  }
})
