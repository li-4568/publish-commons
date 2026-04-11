# Table 表格

基于 vxe-table 封装的高级表格组件，支持虚拟滚动、大数据量、复杂表格场景。

## 效果演示

<ClientOnly>
  <DemoTable />
</ClientOnly>

## 基础用法

```vue
<template>
  <XTable
    :columns="columns"
    :data-source="dataSource"
  />
</template>

<script setup>
import { XTable } from 'publish-commons'
import { ref } from 'vue'

const columns = ref([
  { field: 'name', title: '姓名', width: 120 },
  { field: 'age', title: '年龄', width: 100 },
  { field: 'address', title: '地址' },
])

const dataSource = ref([
  { id: 1, name: '张三', age: 25, address: '北京市' },
  { id: 2, name: '李四', age: 30, address: '上海市' },
])
</script>
```

## 带分页

```vue
<template>
  <XTable
    :columns="columns"
    :data-source="dataSource"
    :is-show-pager="true"
    :pager-total="100"
    :current-page="currentPage"
    :page-size="10"
    @page-change="handlePageChange"
  />
</template>

<script setup>
const currentPage = ref(1)

const handlePageChange = ({ currentPage, pageSize }) => {
  console.log('页码变化:', currentPage, pageSize)
}
</script>
```

## 斑马纹

```vue
<template>
  <XTable
    :columns="columns"
    :data-source="dataSource"
    :stripe="true"
  />
</template>
```

## 固定列

```vue
<template>
  <XTable
    :columns="fixedColumns"
    :data-source="dataSource"
  />
</template>

<script setup>
const fixedColumns = [
  { type: 'seq', width: 60, title: '序号', fixed: 'left' },
  { field: 'name', title: '姓名', width: 120, fixed: 'left' },
  { field: 'age', title: '年龄', width: 100 },
  { field: 'address', title: '地址', minWidth: 200 },
  { field: 'operation', title: '操作', width: 120, fixed: 'right' },
]
</script>
```

## 多选表格

```vue
<template>
  <XTable
    :columns="checkboxColumns"
    :data-source="dataSource"
    :checkbox-config="{ highlight: true }"
    @checkbox-change="handleCheckboxChange"
  />
</template>

<script setup>
const checkboxColumns = [
  { type: 'checkbox', width: 60, align: 'center' },
  { field: 'name', title: '姓名', width: 120 },
  { field: 'age', title: '年龄', width: 100 },
  { field: 'address', title: '地址' },
]

const handleCheckboxChange = (params) => {
  console.log('选中项:', params.records)
}
</script>
```

## 单选表格

```vue
<template>
  <XTable
    :columns="radioColumns"
    :data-source="dataSource"
    :radio-config="{ highlight: true }"
    @radio-change="handleRadioChange"
  />
</template>

<script setup>
const radioColumns = [
  { type: 'radio', width: 60, align: 'center' },
  { field: 'name', title: '姓名', width: 120 },
  { field: 'age', title: '年龄', width: 100 },
  { field: 'address', title: '地址' },
]

const handleRadioChange = (params) => {
  console.log('选中项:', params.row)
}
</script>
```

## 排序

```vue
<template>
  <XTable
    :columns="sortColumns"
    :data-source="dataSource"
    :sort-config="{ trigger: 'cell' }"
    @sort-change="handleSortChange"
  />
</template>

<script setup>
const sortColumns = [
  { field: 'name', title: '姓名', width: 120 },
  { field: 'age', title: '年龄', width: 100, sortable: true },
  { field: 'address', title: '地址' },
]

const handleSortChange = (params) => {
  console.log('排序字段:', params.field)
  console.log('排序方式:', params.order)
}
</script>
```

## 虚拟滚动

```vue
<template>
  <XTable
    :columns="columns"
    :data-source="largeData"
    :is-virtual-y="true"
    :is-virtual-x="true"
    height="500"
  />
</template>

<script setup>
import { XTable } from 'publish-commons'
import { ref } from 'vue'

// 生成大量数据
const largeData = ref(
  Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `用户${i + 1}`,
    age: 20 + (i % 30),
    address: `地址${i + 1}`,
  }))
)
</script>
```

## 树形表格

```vue
<template>
  <XTable
    :columns="columns"
    :data-source="treeData"
    :tree-config="{ children: 'children', accordion: true }"
  />
</template>

<script setup>
const treeData = ref([
  {
    id: 1,
    name: '部门1',
    children: [
      { id: 11, name: '子部门1-1' },
      { id: 12, name: '子部门1-2' },
    ],
  },
])
</script>
```

## 可编辑表格

```vue
<template>
  <XTable
    :columns="editColumns"
    :data-source="dataSource"
    edit-trigger="click"
    edit-mode="cell"
  />
</template>

<script setup>
const editColumns = ref([
  { field: 'name', title: '姓名', editRender: { name: 'input' } },
  { field: 'age', title: '年龄', editRender: { name: 'input' } },
])
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| columns | 列配置 | `ColumnConfig[]` | `[]` |
| dataSource | 数据源 | `any[]` | `[]` |
| height | 表格高度 | `number \| string` | `480` |
| minHeight | 最小高度 | `number` | `300` |
| maxHeight | 最大高度 | `number \| string` | `'100%'` |
| border | 边框样式 | `'none' \| 'default' \| 'full'` | `'none'` |
| stripe | 斑马纹 | `boolean` | `true` |
| showHeader | 显示表头 | `boolean` | `true` |
| showFooter | 显示表尾 | `boolean` | `false` |
| align | 对齐方式 | `'left' \| 'center' \| 'right'` | `'center'` |
| isCurrent | 高亮当前行 | `boolean` | `true` |
| isHover | 悬停高亮 | `boolean` | `true` |
| isRowDrag | 启用行拖拽 | `boolean` | `true` |
| isColumnDrag | 启用列拖拽 | `boolean` | `false` |
| isResizable | 可调整列宽 | `boolean` | `true` |
| isShowPager | 显示分页 | `boolean` | `true` |
| pagerTotal | 总记录数 | `number` | `0` |
| currentPage | 当前页 | `number` | `1` |
| pageSize | 每页条数 | `number` | `10` |
| pageLayouts | 分页布局 | `string[]` | - |
| isVirtualX | 横向虚拟滚动 | `boolean` | `true` |
| isVirtualY | 纵向虚拟滚动 | `boolean` | `true` |
| setLoading | 加载状态 | `boolean` | `false` |
| treeConfig | 树形配置 | `object` | - |
| editConfig | 编辑配置 | `object` | - |
| sortConfig | 排序配置 | `object` | - |
| checkboxConfig | 复选框配置 | `object` | - |
| radioConfig | 单选框配置 | `object` | - |
| groupFields | 分组字段 | `string[]` | `[]` |
| mergeCells | 合并单元格 | `object[]` | `[]` |

### ColumnConfig

| 属性 | 说明 | 类型 |
|------|------|------|
| type | 列类型 | `'seq' \| 'checkbox' \| 'radio'` |
| field | 字段名 | `string` |
| title | 标题 | `string` |
| width | 宽度 | `number \| string` |
| minWidth | 最小宽度 | `number \| string` |
| fixed | 固定列 | `'left' \| 'right'` |
| sortable | 可排序 | `boolean` |
| align | 对齐方式 | `'left' \| 'center' \| 'right'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| pageChange | 分页变化 | `{ currentPage, pageSize }` |
| sortChange | 排序变化 | `params` |
| cellClick | 单元格点击 | `params` |
| cellDblclick | 单元格双击 | `params` |
| scroll | 滚动事件 | `params` |
| rowDragStart | 行拖拽开始 | `params` |
| rowDragEnd | 行拖拽结束 | `params` |
| editActivated | 编辑激活 | `params` |
| editClosed | 编辑关闭 | `params` |
| checkboxChange | 勾选变化 | `params` |
| radioChange | 单选变化 | `params` |
| toggleTreeExpand | 树节点展开/收起 | `params` |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| selectRowEvent | 选中并滚动到行 | `row` |
| clearCheckbox | 清除勾选 | `row` |
| tooltipClose | 关闭提示 | - |
