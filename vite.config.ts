import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
      outDir: 'dist',
      staticImport: true,
      clearPureImport: true,
      rollupTypes: true,
      bundledPackages: ['publish-commons']
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
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'antCommons',
      formats: ['es', 'umd'],
      fileName: (format) => `publish-commons.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue', '@ant-design/icons-vue', 'dayjs'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'AntDesignVue',
          '@ant-design/icons-vue': 'AntDesignIconsVue',
          dayjs: 'dayjs'
        }
      }
    }
  },
  // 开发模式配置
  optimizeDeps: {
    include: ['vue', 'ant-design-vue', '@ant-design/icons-vue', 'dayjs']
  }
})
