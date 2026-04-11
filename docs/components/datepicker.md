# DatePicker 日期选择

日期选择组件，用于选择日期。

## 效果演示

<DemoDatePicker />

## 基础用法

```vue
<template>
  <XDatePicker v-model="date" />
</template>

<script setup>
import { ref } from 'vue'
import { XDatePicker } from 'publish-commons'

const date = ref(null)
</script>
```

## 格式化输出

```vue
<template>
  <XDatePicker
    v-model="date"
    format="YYYY-MM-DD"
    valueFormat="YYYY-MM-DD"
  />
</template>

<script setup>
import { ref } from 'vue'

const date = ref('2024-01-01')
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 日期值 | `string \| Date` | - |
| format | 显示格式 | `string` | `'YYYY-MM-DD'` |
| valueFormat | 返回值格式 | `string` | `'YYYY-MM-DD'` |
| placeholder | 占位符 | `string` | `'请选择日期'` |
| disabled | 禁用 | `boolean` | `false` |
| allowClear | 允许清除 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化 | `string \| Date` |
| change | 值变化 | `string \| Date` |
