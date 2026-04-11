# ImageCropper 图片裁剪

图片裁剪组件，支持图片上传、裁剪、预览功能。

## 效果演示

<DemoImageCropper />

## 基础用法

```vue
<template>
  <XImageCropper
    v-model="imageUrl"
    @crop="handleCrop"
  />
</template>

<script setup>
import { ref } from 'vue'
import { XImageCropper } from 'publish-commons'

const imageUrl = ref('')

const handleCrop = (croppedImage) => {
  console.log('裁剪后的图片:', croppedImage)
}
</script>
```

## 固定裁剪比例

```vue
<template>
  <XImageCropper
    v-model="imageUrl"
    :aspectRatio="16/9"
    fixedAspectRatio
  />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 图片URL | `string` | `''` |
| aspectRatio | 裁剪比例 | `number` | `1` |
| fixedAspectRatio | 固定比例 | `boolean` | `false` |
| maxWidth | 最大宽度 | `number` | `1920` |
| maxHeight | 最大高度 | `number` | `1080` |
| accept | 接受文件类型 | `string` | `'image/*'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化 | `string` |
| crop | 裁剪完成 | `croppedImage` |
| error | 错误 | `error` |
