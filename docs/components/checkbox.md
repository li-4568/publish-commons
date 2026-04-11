# Checkbox 复选框

多选框组件，用于在多个选项中进行选择。

## 效果演示

<DemoCheckbox />

## 基础用法

```vue
<template>
  <XCheckbox v-model="checked">选项</XCheckbox>
</template>

<script setup>
import { ref } from 'vue'
import { XCheckbox } from 'publish-commons'

const checked = ref(false)
</script>
```

## 多选框组

```vue
<template>
  <XCheckboxGroup v-model="values" :options="options" />
</template>

<script setup>
import { ref } from 'vue'
import { XCheckboxGroup } from 'publish-commons'

const values = ref(['apple'])
const options = ref([
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
])
</script>
```

## API

### XCheckbox Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 选中状态 | `boolean` | `false` |
| disabled | 禁用 | `boolean` | `false` |
| indeterminate | 半选状态 | `boolean` | `false` |

### XCheckboxGroup Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 选中的值 | `array` | `[]` |
| options | 选项数据 | `array` | `[]` |
| disabled | 禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化 | `boolean \| array` |
| change | 值变化 | `boolean \| array` |
