<template>
  <div class="xtree-wrapper">
    <Tree
      :tree-data="treeData"
      :default-expand-all="defaultExpandAll"
      :default-expanded-keys="defaultExpandedKeys"
      :default-selected-keys="defaultSelectedKeys"
      :default-checked-keys="defaultCheckedKeys"
      :selected-keys="selectedKeys"
      :checked-keys="checkedKeys"
      :expanded-keys="expandedKeys"
      :selectable="selectable"
      :checkable="checkable"
      :draggable="draggable"
      :disabled="disabled"
      :show-line="showLine"
      :show-icon="showIcon"
      :switcher-icon="switcherIcon"
      @select="handleSelect"
      @check="handleCheck"
      @expand="handleExpand"
      @right-click="handleRightClick"
      @double-click="handleDoubleClick"
      @drag-start="handleDragStart"
      @drag-end="handleDragEnd"
      @drag-enter="handleDragEnter"
      @drag-leave="handleDragLeave"
      @drop="handleDrop"
      v-bind="$attrs"
    >
      <!-- 自定义节点内容 -->
      <template #title="{ node, data }">
        <slot name="title" :record="data" :node="node">{{ data?.title }}</slot>
      </template>
      
      <!-- 自定义节点图标 -->
      <template #icon="{ node, data }">
        <slot name="icon" :record="data" :node="node">{{ data?.icon }}</slot>
      </template>
      
      <!-- 自定义展开/折叠图标 -->
      <template #switcherIcon>
        <slot name="switcherIcon"></slot>
      </template>
    </Tree>
  </div>
</template>

<script setup lang="ts">
import { Tree } from 'ant-design-vue'
import type { XTreeProps } from './types'
import './style.less'

// 定义组件选项
defineOptions({
  name: 'XTree',
  inheritAttrs: false
})

// 定义组件属性
withDefaults(defineProps<XTreeProps>(), {
  treeData: () => [],
  defaultExpandAll: false,
  defaultExpandedKeys: () => [],
  defaultSelectedKeys: () => [],
  defaultCheckedKeys: () => [],
  selectable: true,
  checkable: false,
  draggable: false,
  disabled: false,
  showLine: true,
  showIcon: true
})

// 定义组件事件
const emit = defineEmits(['update:selectedKeys', 'update:checkedKeys', 'update:expandedKeys', 'select', 'check', 'expand', 'rightClick', 'doubleClick', 'dragStart', 'dragEnd', 'dragEnter', 'dragLeave', 'drop'])

// 处理节点选中
const handleSelect = (selectedKeys: (string | number)[], info: any) => {
  emit('update:selectedKeys', selectedKeys)
  emit('select', selectedKeys, info)
}

// 处理节点复选框选中
const handleCheck = (checkedKeys: (string | number)[] | { checked: (string | number)[]; halfChecked: (string | number)[] }, info: any) => {
  emit('update:checkedKeys', checkedKeys)
  emit('check', checkedKeys, info)
}

// 处理节点展开/折叠
const handleExpand = (expandedKeys: (string | number)[], info: any) => {
  emit('update:expandedKeys', expandedKeys)
  emit('expand', expandedKeys, info)
}

// 处理节点右键菜单
const handleRightClick = (info: any) => {
  emit('rightClick', info)
}

// 处理节点双击
const handleDoubleClick = (info: any) => {
  emit('doubleClick', info)
}

// 处理拖拽开始
const handleDragStart = (info: any) => {
  emit('dragStart', info)
}

// 处理拖拽结束
const handleDragEnd = (info: any) => {
  emit('dragEnd', info)
}

// 处理拖拽进入节点
const handleDragEnter = (info: any) => {
  emit('dragEnter', info)
}

// 处理拖拽离开节点
const handleDragLeave = (info: any) => {
  emit('dragLeave', info)
}

// 处理拖拽放置
const handleDrop = (info: any) => {
  emit('drop', info)
}
</script>

<style scoped lang="less">
/* XTree 组件样式 */
.xtree-wrapper {
  display: inline-block;
  width: 100%;
  min-width: 200px;
  max-width: 600px;
  max-height: 500px;
  overflow: auto;
  
  /* 自定义树节点样式 */
  :deep(.ant-tree-node-content-wrapper) {
    padding: 0 8px;
    border-radius: 4px;
    transition: all 0.3s;
    
    &:hover {
      background-color: rgba(24, 144, 255, 0.1);
    }
    
    &.ant-tree-node-selected {
      background-color: rgba(24, 144, 255, 0.2);
    }
  }
  
  /* 自定义连接线样式 */
  :deep(.ant-tree-line) {
    .ant-tree-line-vertical,
    .ant-tree-line-horizontal {
      border-color: #e8e8e8;
    }
  }
  
  /* 自定义图标样式 */
  :deep(.ant-tree-iconEle) {
    margin-right: 6px;
  }
}
</style>
