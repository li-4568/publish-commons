<template>
  <div class="demo-table">
    <!-- 基础表格 -->
    <div class="demo-section">
      <h4>基础表格</h4>
      <XTable
        :columns="columns"
        :data-source="tableData"
        :border="true"
        height="320"
      />
    </div>

    <!-- 带分页 -->
    <div class="demo-section">
      <h4>带分页</h4>
      <XTable
        :columns="columns"
        :data-source="tableData"
        :border="true"
        :is-show-pager="true"
        :pager-total="100"
        :current-page="currentPage"
        :page-size="10"
        height="360"
        @page-change="handlePageChange"
      />
    </div>

    <!-- 斑马纹 -->
    <div class="demo-section">
      <h4>斑马纹</h4>
      <XTable
        :columns="columns"
        :data-source="tableData"
        :border="true"
        :stripe="true"
        height="320"
      />
    </div>

    <!-- 固定列 -->
    <div class="demo-section">
      <h4>固定列</h4>
      <XTable
        :columns="fixedColumns"
        :data-source="tableData"
        :border="true"
        height="320"
      />
    </div>

    <!-- 多选表格 -->
    <div class="demo-section">
      <h4>多选表格</h4>
      <XTable
        :columns="checkboxColumns"
        :data-source="tableData"
        :border="true"
        :checkbox-config="{ highlight: true }"
        height="320"
        @checkbox-change="handleCheckboxChange"
      />
    </div>

    <!-- 单选表格 -->
    <div class="demo-section">
      <h4>单选表格</h4>
      <XTable
        :columns="radioColumns"
        :data-source="tableData"
        :border="true"
        :radio-config="{ highlight: true }"
        height="320"
        @radio-change="handleRadioChange"
      />
    </div>

    <!-- 排序 -->
    <div class="demo-section">
      <h4>排序</h4>
      <XTable
        :columns="sortColumns"
        :data-source="tableData"
        :border="true"
        :sort-config="{ trigger: 'cell' }"
        height="320"
        @sort-change="handleSortChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XTable } from 'publish-commons'

const currentPage = ref(1)

// 基础列配置
const columns = [
  { type: 'seq', width: 80, title: '序号', align: 'center' },
  { field: 'name', title: '姓名', width: 100 },
  { field: 'age', title: '年龄', width: 80 },
  { field: 'department', title: '部门', width: 100 },
  { field: 'position', title: '职位', width: 120 },
  { field: 'status', title: '状态', width: 80 },
  { field: 'address', title: '地址', minWidth: 150 },
]

// 多选列配置
const checkboxColumns = [
  { type: 'checkbox', width: 50, align: 'center' },
  { field: 'name', title: '姓名', width: 100 },
  { field: 'age', title: '年龄', width: 80 },
  { field: 'department', title: '部门', width: 100 },
  { field: 'position', title: '职位', width: 120 },
  { field: 'status', title: '状态', width: 80 },
  { field: 'address', title: '地址', minWidth: 150 },
]

// 单选列配置
const radioColumns = [
  { type: 'radio', width: 50, align: 'center' },
  { field: 'name', title: '姓名', width: 100 },
  { field: 'age', title: '年龄', width: 80 },
  { field: 'department', title: '部门', width: 100 },
  { field: 'position', title: '职位', width: 120 },
  { field: 'status', title: '状态', width: 80 },
  { field: 'address', title: '地址', minWidth: 150 },
]

// 固定列配置
const fixedColumns = [
  { type: 'seq', width: 80, title: '序号', fixed: 'left', align: 'center' },
  { field: 'name', title: '姓名', width: 100, fixed: 'left' },
  { field: 'age', title: '年龄', width: 80 },
  { field: 'department', title: '部门', width: 100 },
  { field: 'position', title: '职位', width: 120 },
  { field: 'address', title: '地址', minWidth: 120 },
  { field: 'operation', title: '操作', width: 80, fixed: 'right' },
]

// 排序列配置
const sortColumns = [
  { type: 'seq', width: 80, title: '序号' },
  { field: 'name', title: '姓名', width: 100 },
  { field: 'age', title: '年龄', width: 80, sortable: true },
  { field: 'department', title: '部门', width: 100, sortable: true },
  { field: 'position', title: '职位', width: 120 },
  { field: 'status', title: '状态', width: 80 },
]

// 表格数据
const tableData = [
  { id: 1, name: '张三', age: 28, department: '技术部', position: '前端工程师', status: '在职', address: '北京市朝阳区', operation: '编辑' },
  { id: 2, name: '李四', age: 32, department: '产品部', position: '产品经理', status: '在职', address: '上海市浦东新区', operation: '编辑' },
  { id: 3, name: '王五', age: 25, department: '设计部', position: 'UI设计师', status: '离职', address: '广州市天河区', operation: '编辑' },
  { id: 4, name: '赵六', age: 35, department: '技术部', position: '后端工程师', status: '在职', address: '深圳市南山区', operation: '编辑' },
  { id: 5, name: '孙七', age: 29, department: '测试部', position: '测试工程师', status: '在职', address: '杭州市西湖区', operation: '编辑' },
  { id: 6, name: '周八', age: 31, department: '运维部', position: '运维工程师', status: '在职', address: '成都市高新区', operation: '编辑' },
  { id: 7, name: '吴九', age: 27, department: '技术部', position: '前端工程师', status: '在职', address: '武汉市洪山区', operation: '编辑' },
  { id: 8, name: '郑十', age: 33, department: '产品部', position: '产品总监', status: '在职', address: '南京市建邺区', operation: '编辑' },
]

// 事件处理
const handlePageChange = ({ currentPage: page }) => {
  currentPage.value = page
  console.log('页码变化:', page)
}

const handleCheckboxChange = (params) => {
  console.log('多选变化:', params)
}

const handleRadioChange = (params) => {
  console.log('单选变化:', params)
}

const handleSortChange = (params) => {
  console.log('排序变化:', params)
}
</script>

<style scoped>
.demo-table {
  padding: 20px;
  border: 1px solid #e0e0e6;
  border-radius: 8px;
  background: #fff;
}

.demo-section {
  margin-bottom: 32px;
}

.demo-section:last-child {
  margin-bottom: 0;
}

.demo-section h4 {
  margin: 0 0 16px 0;
  color: #333;
  font-size: 14px;
  font-weight: 600;
}
</style>
