<template>
  <div class="demo-table-search">
    <div class="demo-block">
      <h4>基础用法</h4>
      <XTableSearch
        :search-items="searchItems"
        @search="handleSearch"
        @reset="handleReset"
      />
    </div>

    <div class="demo-block">
      <h4>高级搜索（默认展开）</h4>
      <XTableSearch
        :search-items="searchItems2"
        :show-advanced="true"
        :advanced-default-open="true"
        @search="handleSearch"
        @reset="handleReset"
      />
    </div>

    <div class="demo-block">
      <h4>自定义按钮文本</h4>
      <XTableSearch
        :search-items="searchItems3"
        search-text="查询"
        reset-text="清空"
        @search="handleSearch"
        @reset="handleReset"
      />
    </div>

    <div class="demo-block">
      <h4>带默认值的搜索</h4>
      <XTableSearch
        :search-items="searchItemsWithDefault"
        @search="handleSearch"
        @reset="handleReset"
      />
    </div>

    <div class="demo-block" v-if="searchParams">
      <h4>搜索结果</h4>
      <pre class="result-box">{{ JSON.stringify(searchParams, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XTableSearch } from 'publish-commons'

const searchParams = ref(null)

const searchItems = [
  { field: 'name', label: '姓名', type: 'input' },
  { field: 'status', label: '状态', type: 'select', options: [
    { label: '全部', value: '' },
    { label: '启用', value: 'active' },
    { label: '禁用', value: 'inactive' },
  ]},
]

const searchItems2 = [
  { field: 'name', label: '姓名', type: 'input' },
  { field: 'age', label: '年龄', type: 'inputNum' },
  { field: 'status', label: '状态', type: 'select', options: [
    { label: '全部', value: '' },
    { label: '启用', value: 'active' },
    { label: '禁用', value: 'inactive' },
  ]},
  { field: 'date', label: '日期', type: 'date' },
  { field: 'type', label: '类型', type: 'select', options: [
    { label: '类型A', value: 'A' },
    { label: '类型B', value: 'B' },
  ]},
]

const searchItems3 = [
  { field: 'keyword', label: '关键词', type: 'input' },
  { field: 'category', label: '分类', type: 'select', options: [
    { label: '全部', value: '' },
    { label: '分类1', value: 'c1' },
    { label: '分类2', value: 'c2' },
  ]},
]

const searchItemsWithDefault = [
  { field: 'name', label: '姓名', type: 'input', defaultValue: '张三' },
  { field: 'status', label: '状态', type: 'select', options: [
    { label: '全部', value: '' },
    { label: '启用', value: 'active' },
    { label: '禁用', value: 'inactive' },
  ], defaultValue: 'active' },
]

const handleSearch = (params) => {
  console.log('搜索参数:', params)
  searchParams.value = params
}

const handleReset = () => {
  console.log('重置搜索')
  searchParams.value = null
}
</script>

<style scoped>
.demo-table-search {
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

.result-box {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 4px;
  font-size: 13px;
  overflow-x: auto;
}

.demo-block:last-child {
  margin-bottom: 0;
}
</style>
