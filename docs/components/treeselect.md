# TreeSelect 树选择

树形选择组件，结合了树形控件和下拉选择框的功能。

## 效果演示

<DemoTreeSelect />

## 基础用法

```vue
<template>
  <XTreeSelect v-model="value" :treeData="treeData" />
</template>

<script setup>
import { ref } from 'vue'
import { XTreeSelect } from 'publish-commons'

const value = ref(undefined)
const treeData = ref([
  {
    title: '父节点1',
    value: 'parent1',
    children: [
      {
        title: '子节点1-1',
        value: 'child1-1',
      },
      {
        title: '子节点1-2',
        value: 'child1-2',
      },
    ],
  },
  {
    title: '父节点2',
    value: 'parent2',
  },
])
</script>
```

## 多选模式

```vue
<template>
  <XTreeSelect
    v-model="values"
    :treeData="treeData"
    multiple
    placeholder="请选择"
  />
</template>

<script setup>
import { ref } from 'vue'

const values = ref([])
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 选中的值 | `string \| array` | - |
| treeData | 树形数据 | `array` | `[]` |
| multiple | 多选模式 | `boolean` | `false` |
| placeholder | 占位符 | `string` | `'请选择'` |
| disabled | 禁用 | `boolean` | `false` |
| allowClear | 允许清除 | `boolean` | `true` |
| showSearch | 支持搜索 | `boolean` | `false` |
| treeCheckable | 显示复选框 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化 | `any` |
| change | 值变化 | `any` |
