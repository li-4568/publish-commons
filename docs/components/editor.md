# Editor 富文本编辑器

基于 wangEditor 封装的富文本编辑器组件。

## 效果演示

<ClientOnly>
  <DemoEditor />
</ClientOnly>

## 基础用法

```vue
<template>
  <XEditor v-model="content" />
</template>

<script setup>
import { ref } from 'vue'
import { XEditor } from 'publish-commons'

const content = ref('<p>请输入内容...</p>')
</script>
```

## 自定义工具栏

```vue
<template>
  <XEditor
    v-model="content"
    :toolbarConfig="toolbarConfig"
  />
</template>

<script setup>
const content = ref('')
const toolbarConfig = {
  excludeKeys: ['uploadVideo', 'insertVideo'] // 排除视频上传
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 内容 | `string` | `''` |
| placeholder | 占位符 | `string` | `'请输入内容...'` |
| height | 高度 | `number \| string` | `400` |
| readonly | 只读 | `boolean` | `false` |
| toolbarConfig | 工具栏配置 | `object` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 内容变化 | `string` |
| change | 内容变化 | `string` |
| focus | 获得焦点 | `editor` |
| blur | 失去焦点 | `editor` |
