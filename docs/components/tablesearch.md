# TableSearch 表格搜索

表格搜索组件，支持响应式布局、展开/收起功能。

## 效果演示

<DemoTableSearch />

## 基础用法

```vue
<template>
  <XTableSearch
    :searchItems="searchItems"
    @search="handleSearch"
    @reset="handleReset"
  />
</template>

<script setup>
import { XTableSearch } from 'publish-commons'

const searchItems = [
  { field: 'name', label: '姓名', type: 'input' },
  { field: 'age', label: '年龄', type: 'inputNum' },
  { field: 'status', label: '状态', type: 'select', options: [
    { label: '启用', value: 1 },
    { label: '禁用', value: 0 },
  ]},
]

const handleSearch = (values) => {
  console.log('搜索条件:', values)
}

const handleReset = () => {
  console.log('重置搜索')
}
</script>
```

## 默认展开

```vue
<template>
  <XTableSearch
    :searchItems="searchItems"
    :advancedDefaultOpen="true"
    @search="handleSearch"
  />
</template>
```

## 自定义按钮

```vue
<template>
  <XTableSearch :searchItems="searchItems">
    <template #actions>
      <XButton @click="handleReset">重置</XButton>
      <XButton type="primary" @click="handleSearch">查询</XButton>
      <XButton type="success" @click="handleExport">导出</XButton>
    </template>
  </XTableSearch>
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| searchItems | 搜索项配置 | `SearchItem[]` | `[]` |
| advancedDefaultOpen | 默认展开 | `boolean` | `false` |
| searchText | 搜索按钮文字 | `string` | `'搜索'` |
| resetText | 重置按钮文字 | `string` | `'重置'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| search | 搜索 | `values: Record<string, any>` |
| reset | 重置 | - |
| advanced-change | 展开/收起变化 | `expanded: boolean` |

### SearchItem 配置

| 属性 | 说明 | 类型 |
|------|------|------|
| field | 字段名 | `string` |
| label | 标签 | `string` |
| type | 类型 | `'input' \| 'inputNum' \| 'select' \| 'date' \| 'datetime' \| 'cascader' \| 'treeSelect' \| 'checkbox'` |
| options | 选项 | `array` |
| defaultValue | 默认值 | `any` |
