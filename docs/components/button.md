# Button 按钮

基于 Ant Design Vue Button 封装，增加自定义图标、加载状态等功能。

## 效果演示

<script setup>
import { ref } from 'vue'
import { XButton } from 'publish-commons'

const loading = ref(false)
const handleClick = () => {
  loading.value = true
  setTimeout(() => loading.value = false, 2000)
}
</script>

<div class="demo-button">
  <div class="demo-block">
    <h4>基础用法</h4>
    <div class="demo-row">
      <XButton>默认按钮</XButton>
      <XButton type="primary">主要按钮</XButton>
      <XButton type="success">成功按钮</XButton>
      <XButton type="warning">警告按钮</XButton>
      <XButton type="error">危险按钮</XButton>
    </div>
  </div>

  <div class="demo-block">
    <h4>按钮尺寸</h4>
    <div class="demo-row">
      <XButton size="large">大按钮</XButton>
      <XButton size="middle">中按钮</XButton>
      <XButton size="small">小按钮</XButton>
    </div>
  </div>

  <div class="demo-block">
    <h4>按钮状态</h4>
    <div class="demo-row">
      <XButton :loading="loading" @click="handleClick">
        {{ loading ? '加载中...' : '点击加载' }}
      </XButton>
      <XButton disabled>禁用</XButton>
      <XButton ghost>幽灵</XButton>
      <XButton danger>危险</XButton>
    </div>
  </div>

  <div class="demo-block">
    <h4>块级按钮</h4>
    <XButton block type="primary">块级按钮</XButton>
  </div>
</div>

<style scoped>
.demo-button {
  padding: 20px;
  border: 1px solid #e0e0e6;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 20px;
}

.demo-block {
  margin-bottom: 24px;
}

.demo-block h4 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 14px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>

## 基础用法

```vue
<template>
  <XButton>默认按钮</XButton>
  <XButton type="primary">主要按钮</XButton>
  <XButton type="success">成功按钮</XButton>
  <XButton type="warning">警告按钮</XButton>
  <XButton type="error">危险按钮</XButton>
</template>

<script setup>
import { XButton } from 'publish-commons'
</script>
```

## 按钮尺寸

```vue
<template>
  <XButton size="large">大按钮</XButton>
  <XButton size="middle">中按钮</XButton>
  <XButton size="small">小按钮</XButton>
</template>
```

## 加载状态

```vue
<template>
  <XButton loading>加载中</XButton>
  <XButton :loading="loading" @click="handleClick">点击加载</XButton>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
const handleClick = () => {
  loading.value = true
  setTimeout(() => loading.value = false, 2000)
}
</script>
```

## 禁用状态

```vue
<template>
  <XButton disabled>禁用按钮</XButton>
  <XButton type="primary" disabled>禁用主要</XButton>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 按钮类型 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| size | 按钮尺寸 | `'large' \| 'middle' \| 'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| ghost | 幽灵按钮 | `boolean` | `false` |
| danger | 危险按钮 | `boolean` | `false` |
| block | 块级按钮 | `boolean` | `false` |
| icon | 图标 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发 | `(event: MouseEvent) => void` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 按钮内容 |
| icon | 自定义图标 |
