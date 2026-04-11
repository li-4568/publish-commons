# Tree 树形控件

用于展示层级结构的数据。

## 效果演示

<DemoTree />

## 基础用法

```vue
<template>
  <XTree :treeData="treeData" />
</template>

<script setup>
import { ref } from 'vue'
import { XTree } from 'publish-commons'

const treeData = ref([
  {
    title: '父节点1',
    key: '0-0',
    children: [
      {
        title: '子节点1-1',
        key: '0-0-1',
      },
      {
        title: '子节点1-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '父节点2',
    key: '0-1',
  },
])
</script>
```

## 可勾选

```vue
<template>
  <XTree
    v-model:checkedKeys="checkedKeys"
    :treeData="treeData"
    checkable
  />
</template>

<script setup>
import { ref } from 'vue'

const checkedKeys = ref(['0-0-1'])
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| treeData | 树形数据 | `array` | `[]` |
| selectedKeys | 选中的节点 | `array` | `[]` |
| checkedKeys | 勾选的节点 | `array` | `[]` |
| checkable | 显示复选框 | `boolean` | `false` |
| selectable | 可选中 | `boolean` | `true` |
| disabled | 禁用 | `boolean` | `false` |
| showLine | 显示连接线 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 选中节点 | `selectedKeys, info` |
| check | 勾选节点 | `checkedKeys, info` |
| expand | 展开/收起 | `expandedKeys, info` |
