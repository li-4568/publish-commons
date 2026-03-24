import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isComponentsMode = mode === 'components'

  // 组件列表配置
  const components = ['XButton', 'XInput', 'XSelect']

  // 多入口配置（用于按需引入）
  const entries: Record<string, string> = {
    index: resolve(__dirname, 'src/index.ts')
  }

  // 为每个组件创建入口
  components.forEach((name) => {
    entries[name] = resolve(__dirname, `src/components/${name}/index.ts`)
  })

  return {
    plugins: [
      vue(),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true,
        // 为每个入口生成类型声明
        entryRoot: resolve(__dirname, 'src')
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${resolve(__dirname, 'src/styles/variables.less')}";`
        }
      }
    },
    build: {
      target: 'es2015',
      outDir: isComponentsMode ? 'es' : 'dist',
      lib: isComponentsMode
        ? false
        : {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'antCommons',
            formats: ['es', 'umd'],
            fileName: (format) => `ant-commons.${format}.js`
          },
      // 多入口模式配置
      rollupOptions: isComponentsMode
        ? {
            input: entries,
            external: ['vue', 'ant-design-vue', '@ant-design/icons-vue'],
            output: [
              {
                format: 'es',
                dir: 'es',
                entryFileNames: '[name].js',
                preserveModules: false
              },
              {
                format: 'cjs',
                dir: 'lib',
                entryFileNames: '[name].js',
                preserveModules: false,
                exports: 'named'
              }
            ]
          }
        : {
            external: ['vue', 'ant-design-vue', '@ant-design/icons-vue'],
            output: {
              globals: {
                vue: 'Vue',
                'ant-design-vue': 'AntDesignVue',
                '@ant-design/icons-vue': 'AntDesignIconsVue'
              }
            }
          }
    }
  }
})
