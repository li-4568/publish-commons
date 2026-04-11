# Select 选择器

下拉选择器组件，支持单选、多选、搜索等功能。

## 效果演示

<DemoSelect />

## 基础用法

```vue
<template>
  <XSelect v-model="value" :options="options" />
</template>

<script setup>
import { ref } from 'vue'
import { XSelect } from 'publish-commons'

const value = ref(undefined)
const options = ref([
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
])
</script>
```

## 多选模式

```vue
<template>
  <XSelect
    v-model="values"
    :options="options"
    mode="multiple"
    placeholder="请选择"
  />
</template>

<script setup>
const values = ref([])
const options = ref([
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
])
</script>
```

## 可搜索

```vue
<template>
  <XSelect
    v-model="value"
    :options="options"
    showSearch
    placeholder="请输入搜索"
  />
</template>
```

## 分组选项

```vue
<template>
  <XSelect v-model="value" :options="groupOptions" />
</template>

<script setup>
const groupOptions = ref([
  {
    label: '分组1',
    options: [
      { label: '选项1-1', value: '1-1' },
      { label: '选项1-2', value: '1-2' },
    ]
  },
  {
    label: '分组2',
    options: [
      { label: '选项2-1', value: '2-1' },
      { label: '选项2-2', value: '2-2' },
    ]
  },
])
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 选中值 | `string \| number \| array` | - |
| options | 选项数据 | `SelectOption[]` | `[]` |
| mode | 模式 | `'default' \| 'multiple' \| 'tags'` | `'default'` |
| placeholder | 占位符 | `string` | `'请选择'` |
| disabled | 禁用 | `boolean` | `false` |
| showSearch | 可搜索 | `boolean` | `false` |
| allowClear | 可清空 | `boolean` | `true` |
| loading | 加载中 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'middle' \| 'small'` | `'middle'` |

### SelectOption

| 属性 | 说明 | 类型 |
|------|------|------|
| label | 显示文本 | `string` |
| value | 值 | `string \| number` |
| disabled | 禁用 | `boolean` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化 | `any` |
| change | 值变化 | `any` |
| search | 搜索 | `value: string` |
