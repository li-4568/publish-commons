<template>
  <div class="demo-treeselect">
    <div class="demo-block">
      <h4>基础用法</h4>
      <div class="demo-row">
        <XTreeSelect
          v-model="value1"
          :tree-data="treeData"
          placeholder="请选择"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>多选模式</h4>
      <div class="demo-row">
        <XTreeSelect
          v-model="value2"
          :tree-data="treeData"
          mode="multiple"
          placeholder="多选"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>可勾选</h4>
      <div class="demo-row">
        <XTreeSelect
          v-model="value3"
          :tree-data="treeData"
          :tree-checkable="true"
          placeholder="勾选节点"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>可搜索</h4>
      <div class="demo-row">
        <XTreeSelect
          v-model="value4"
          :tree-data="treeData"
          :show-search="true"
          placeholder="可搜索"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>可清空</h4>
      <div class="demo-row">
        <XTreeSelect
          v-model="value5"
          :tree-data="treeData"
          :clearable="true"
          placeholder="可清空"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>默认展开所有</h4>
      <div class="demo-row">
        <XTreeSelect
          v-model="value6"
          :tree-data="treeData"
          :tree-default-expand-all="true"
          placeholder="默认展开"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XTreeSelect } from 'publish-commons'

const value1 = ref(undefined)
const value2 = ref([])
const value3 = ref([])
const value4 = ref(undefined)
const value5 = ref('0-0-0')
const value6 = ref(undefined)

const treeData = ref([
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
      },
      {
        title: 'Child Node2',
        value: '0-0-1',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        children: [
          {
            title: 'Grandchild Node1',
            value: '0-1-0-0',
          },
        ],
      },
    ],
  },
])
</script>

<style scoped>
.demo-treeselect {
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

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.demo-row > * {
  margin: 0;
  width: 300px;
}

.demo-block:last-child {
  margin-bottom: 0;
}
</style>
