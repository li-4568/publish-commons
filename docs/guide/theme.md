# 主题定制

Publish Commons 基于 Ant Design Vue，支持通过 CSS 变量和 Less 变量进行主题定制。

## CSS 变量

组件库支持以下 CSS 变量：

```css
:root {
  /* 主色调 */
  --x-primary-color: #1890ff;
  --x-success-color: #52c41a;
  --x-warning-color: #faad14;
  --x-error-color: #f5222d;
  
  /* 文本颜色 */
  --x-text-color: rgba(0, 0, 0, 0.85);
  --x-text-color-secondary: rgba(0, 0, 0, 0.45);
  
  /* 边框颜色 */
  --x-border-color: #d9d9d9;
  --x-border-radius: 6px;
  
  /* 背景色 */
  --x-bg-color: #f5f5f5;
}
```

## Less 变量

在 `vite.config.ts` 中配置 Less 变量：

```typescript
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1890ff',
          'border-radius-base': '6px',
        },
        javascriptEnabled: true,
      },
    },
  },
})
```

## 覆盖组件样式

### 全局覆盖

```css
/* 全局修改按钮样式 */
.xbtn {
  border-radius: 4px;
}

/* 全局修改输入框样式 */
.xinput-wrapper {
  border-radius: 4px;
}
```

### 局部覆盖

```vue
<template>
  <XButton class="my-custom-button">自定义按钮</XButton>
</template>

<style scoped>
.my-custom-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}
</style>
```

## 暗色主题

通过配置 CSS 变量实现暗色主题：

```css
[data-theme='dark'] {
  --x-primary-color: #177ddc;
  --x-text-color: rgba(255, 255, 255, 0.85);
  --x-bg-color: #141414;
  --x-border-color: #434343;
}
```

## 主题切换

```vue
<script setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute(
    'data-theme',
    isDark.value ? 'dark' : 'light'
  )
}
</script>
```

## 自定义配置示例

### 企业主题

```typescript
// vite.config.ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1a5cff',
          'success-color': '#00b42a',
          'warning-color': '#ff7d00',
          'error-color': '#f53f3f',
          'border-radius-base': '4px',
          'font-size-base': '14px',
        },
        javascriptEnabled: true,
      },
    },
  },
})
```

### 简约主题

```typescript
// vite.config.ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#000000',
          'border-radius-base': '0px',
          'border-width-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
})
```

## 注意事项

1. 修改 Less 变量需要重新编译
2. CSS 变量可以运行时动态修改
3. 组件样式基于 Ant Design Vue，部分变量可能需要覆盖 Ant Design 的变量
4. 建议使用 CSS 变量进行运行时主题切换，Less 变量用于编译时定制