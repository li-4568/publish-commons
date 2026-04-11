# 快速开始

## 安装

```bash
npm install publish-commons
# 或
yarn add publish-commons
# 或
pnpm add publish-commons
```

## 完整引入

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import PublishCommons from 'publish-commons'
import 'publish-commons/dist/style.css'

const app = createApp(App)
app.use(PublishCommons)
app.mount('#app')
```

## 按需引入

推荐按需引入以减小打包体积：

```vue
<template>
  <XButton type="primary">点击我</XButton>
  <XInput v-model="value" placeholder="请输入" />
</template>

<script setup>
import { XButton, XInput } from 'publish-commons'
import { ref } from 'vue'

const value = ref('')
</script>
```

## TypeScript 支持

组件库提供了完整的类型定义：

```typescript
import type { XButtonProps, XTableProps } from 'publish-commons'

const buttonProps: XButtonProps = {
  type: 'primary',
  size: 'large'
}
```

## 开始使用

现在你可以开始使用组件了！建议从 [Button 组件](/components/button) 开始了解。
