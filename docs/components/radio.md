# Radio 单选框

单选框组件，用于在多个互斥选项中进行选择。

## 效果演示

<DemoRadio />

## 基础用法

```vue
<template>
  <XRadio v-model="value" value="a">选项A</XRadio>
  <XRadio v-model="value" value="b">选项B</XRadio>
</template>

<script setup>
import { ref } from 'vue'
import { XRadio } from 'publish-commons'

const value = ref('a')
</script>
```

## 单选框组

```vue
<template>
  <XRadioGroup v-model="value" :options="options" />
</template>

<script setup>
import { ref } from 'vue'
import { XRadioGroup } from 'publish-commons'

const value = ref('apple')
const options = ref([
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
])
</script>
```

## API

### XRadio Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 选中的值 | `any` | - |
| value | 当前选项的值 | `any` | - |
| disabled | 禁用 | `boolean` | `false` |

### XRadioGroup Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 选中的值 | `any` | - |
| options | 选项数据 | `array` | `[]` |
| disabled | 禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化 | `any` |
| change | 值变化 | `any` |
