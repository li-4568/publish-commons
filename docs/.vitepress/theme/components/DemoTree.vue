<template>
  <div class="demo-tree">
    <div class="demo-block">
      <h4>基础用法</h4>
      <XTree
        :tree-data="treeData"
        :default-expand-all="true"
        @select="handleSelect"
      />
    </div>

    <div class="demo-block">
      <h4>可勾选</h4>
      <XTree
        :tree-data="treeData"
        :checkable="true"
        :default-expand-all="true"
        @check="handleCheck"
      />
    </div>

    <div class="demo-block">
      <h4>可拖拽</h4>
      <XTree
        :tree-data="treeData"
        :draggable="true"
        :default-expand-all="true"
        @drag-start="handleDragStart"
        @drop="handleDrop"
      />
    </div>

    <div class="demo-block">
      <h4>显示连接线</h4>
      <XTree
        :tree-data="treeData"
        :show-line="true"
        :default-expand-all="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XTree } from 'publish-commons'

const treeData = ref([
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          { title: 'leaf', key: '0-0-0-0' },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: 'leaf', key: '0-0-1-0' }],
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        children: [
          { title: 'leaf', key: '0-1-0-0' },
          { title: 'leaf', key: '0-1-0-1' },
        ],
      },
    ],
  },
])

const handleSelect = (selectedKeys, info) => {
  console.log('选中:', selectedKeys, info)
}

const handleCheck = (checkedKeys, info) => {
  console.log('勾选:', checkedKeys, info)
}

const handleDragStart = (info) => {
  console.log('拖拽开始:', info)
}

const handleDrop = (info) => {
  console.log('放置:', info)
}
</script>

<style scoped>
.demo-tree {
  padding: 20px;
  border: 1px solid #e0e0e6;
  border-radius: 8px;
  background: #fff;
}

.demo-block {
  margin-bottom: 24px;
}

.demo-block h4 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 14px;
}

.demo-block:last-child {
  margin-bottom: 0;
}
</style>
