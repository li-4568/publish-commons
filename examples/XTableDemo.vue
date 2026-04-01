<template>
  <div class="xtable-demo">
    <h1>XTable 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XTable
          :data-source="basicTableData"
          :columns="basicTableColumns"
          :border="'full'"
          :stripe="true"
          :is-current="true"
          :is-hover="true"
        />
      </div>

      <div class="code-example">
        <h3>基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;XTable
    :data-source="basicTableData"
    :columns="basicTableColumns"
    :border="'full'"
    :stripe="true"
    :is-current="true"
    :is-hover="true"
  /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XTable } from '../src/components/XTable'

// 基础表格数据
const basicTableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', status: 'active' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', status: 'inactive' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', status: 'active' },
  { id: 4, name: '赵六', age: 35, address: '深圳市南山区', status: 'active' },
  { id: 5, name: '孙七', age: 29, address: '杭州市西湖区', status: 'inactive' },
])

// 基础表格列配置
const basicTableColumns = ref([
  { type: 'seq', title: '序号', width: 80 },
  { field: 'name', title: '姓名', width: 120 },
  { field: 'age', title: '年龄', width: 100 },
  { field: 'address', title: '地址', width: 200 },
  { field: 'status', title: '状态', width: 120, formatter: ({ cellValue }) => {
    return cellValue === 'active' ? '激活' : '禁用'
  }},
])
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 分页表格 -->
    <section class="demo-section">
      <h2>分页表格</h2>
      <div class="demo-row">
        <XTable
          :data-source="pagedTableData"
          :columns="pagedTableColumns"
          :border="'full'"
          :stripe="true"
          :is-current="true"
          :is-hover="true"
          :pager-total="100"
          :current-page="currentPage"
          :page-size="pageSize"
          :set-loading="tableLoading"
          @update:current-page="currentPage = $event"
          @update:page-size="pageSize = $event"
          @page-change="handlePageChange"
        />
      </div>

      <div class="code-example">
        <h3>分页表格</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;XTable
    :data-source="pagedTableData"
    :columns="pagedTableColumns"
    :border="'full'"
    :stripe="true"
    :is-current="true"
    :is-hover="true"
    :pager-total="100"
    :current-page="currentPage"
    :page-size="pageSize"
    :set-loading="tableLoading"
    @update:current-page="currentPage = $event"
    @update:page-size="pageSize = $event"
    @page-change="handlePageChange"
  /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XTable } from '../src/components/XTable'

// 分页表格数据
const pagedTableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', status: 'active' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', status: 'inactive' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', status: 'active' },
  { id: 4, name: '赵六', age: 35, address: '深圳市南山区', status: 'active' },
  { id: 5, name: '孙七', age: 29, address: '杭州市西湖区', status: 'inactive' },
  { id: 6, name: '周八', age: 31, address: '成都市锦江区', status: 'active' },
  { id: 7, name: '吴九', age: 27, address: '武汉市江汉区', status: 'active' },
  { id: 8, name: '郑十', age: 33, address: '重庆市渝中区', status: 'inactive' },
  { id: 9, name: '冯十一', age: 26, address: '南京市玄武区', status: 'active' },
  { id: 10, name: '陈十二', age: 30, address: '西安市雁塔区', status: 'active' },
])

// 分页表格列配置
const pagedTableColumns = ref([
  { type: 'seq', title: '序号', width: 80 },
  { field: 'name', title: '姓名', width: 120 },
  { field: 'age', title: '年龄', width: 100 },
  { field: 'address', title: '地址', width: 200 },
  { field: 'status', title: '状态', width: 120, formatter: ({ cellValue }) => {
    return cellValue === 'active' ? '激活' : '禁用'
  }},
])

// 分页配置
const currentPage = ref(1)
const pageSize = ref(10)
const tableLoading = ref(false)

// 分页变化处理
const handlePageChange = (params: any) => {
  console.log('分页变化:', params)
  // 关闭loading状态
  tableLoading.value = false
  // 这里可以根据当前页码和每页条数请求新数据
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 排序表格 -->
    <section class="demo-section">
      <h2>排序表格</h2>
      <div class="demo-row">
        <XTable
          :data-source="sortTableData"
          :columns="sortTableColumns"
          :border="'full'"
          :stripe="true"
          :is-current="true"
          :is-hover="true"
          :sort-config="{ remote: true }"
          @sort-change="handleSortChange"
        />
      </div>

      <div class="code-example">
        <h3>排序表格</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;XTable
    :data-source="sortTableData"
    :columns="sortTableColumns"
    :border="'full'"
    :stripe="true"
    :is-current="true"
    :is-hover="true"
    :sort-config="{ remote: true }"
    @sort-change="handleSortChange"
  /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XTable } from '../src/components/XTable'

// 排序表格数据
const sortTableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', status: 'active' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', status: 'inactive' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', status: 'active' },
  { id: 4, name: '赵六', age: 35, address: '深圳市南山区', status: 'active' },
  { id: 5, name: '孙七', age: 29, address: '杭州市西湖区', status: 'inactive' },
])

// 排序表格列配置
const sortTableColumns = ref([
  { type: 'seq', title: '序号', width: 80 },
  { field: 'name', title: '姓名', width: 120, sortable: true },
  { field: 'age', title: '年龄', width: 100, sortable: true },
  { field: 'address', title: '地址', width: 200 },
  { field: 'status', title: '状态', width: 120, formatter: ({ cellValue }) => {
    return cellValue === 'active' ? '激活' : '禁用'
  }},
])

// 排序变化处理
const handleSortChange = (params: any) => {
  console.log('排序变化:', params)
  // 这里可以根据排序字段和排序顺序请求新数据
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 自定义列 -->
    <section class="demo-section">
      <h2>自定义列</h2>
      <div style="margin-bottom: 16px;">
        <XButton type="primary" @click="handleAdd">添加</XButton>
      </div>
      <div class="demo-row">
        <XTable
          :data-source="customColumnTableData"
          :columns="customColumnTableColumns"
          :border="'full'"
          :stripe="true"
          :is-current="true"
          :is-hover="true"
        >
          <template #action="{ row }">
            <div style="display: flex; gap: 8px;">
              <XButton type="primary" size="small" @click="handleEdit(row)">编辑</XButton>
              <XButton type="error" size="small" @click="handleDelete(row)">删除</XButton>
            </div>
          </template>
        </XTable>
      </div>

      <div class="code-example">
        <h3>自定义列</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div style="margin-bottom: 16px;"&gt;
    &lt;XButton type="primary" @click="handleAdd"&gt;添加&lt;/XButton&gt;
  &lt;/div&gt;
  &lt;XTable
    :data-source="customColumnTableData"
    :columns="customColumnTableColumns"
    :border="'full'"
    :stripe="true"
    :is-current="true"
    :is-hover="true"
  &gt;
    &lt;template #action="{ row }"&gt;
      &lt;div style="display: flex; gap: 8px;"&gt;
        &lt;XButton type="primary" size="small" @click="handleEdit(row)"&gt;编辑&lt;/XButton&gt;
        &lt;XButton type="error" size="small" @click="handleDelete(row)"&gt;删除&lt;/XButton&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/XTable&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XTable, XButton } from '../src/components'

// 自定义列表格数据
const customColumnTableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', status: 'active' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', status: 'inactive' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', status: 'active' },
])

// 自定义列表格列配置
const customColumnTableColumns = ref([
  { type: 'seq', title: '序号', width: 80 },
  { field: 'name', title: '姓名', width: 120 },
  { field: 'age', title: '年龄', width: 100 },
  { field: 'address', title: '地址', width: 200 },
  { field: 'status', title: '状态', width: 120, formatter: ({ cellValue }) => {
    // 不使用h函数，直接返回格式化的字符串
    return cellValue === 'active' ? '激活' : '禁用'
  }},
  { 
    title: '操作', 
    width: 180, 
    slots: { 
      default: 'action' // 使用插槽名称
    }
  },
])

// 编辑处理
const handleEdit = (row: any) => {
  console.log('编辑:', row)
}

// 删除处理
const handleDelete = (row: any) => {
  console.log('删除:', row)
}

// 添加处理
const handleAdd = () => {
  console.log('添加按钮被点击')
}
&lt;/script&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XTable, XButton } from '../src/components'

// 基础表格数据
const basicTableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', status: 'active' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', status: 'inactive' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', status: 'active' },
  { id: 4, name: '赵六', age: 35, address: '深圳市南山区', status: 'active' },
  { id: 5, name: '孙七', age: 29, address: '杭州市西湖区', status: 'inactive' },
])

// 基础表格列配置
const basicTableColumns = ref([
  { type: 'seq', title: '序号' },
  { field: 'name', title: '姓名' },
  { field: 'age', title: '年龄' },
  { field: 'address', title: '地址' },
  { field: 'status', title: '状态', formatter: ({ cellValue }) => {
    return cellValue === 'active' ? '激活' : '禁用'
  }},
])

// 分页表格数据
const pagedTableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', status: 'active' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', status: 'inactive' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', status: 'active' },
  { id: 4, name: '赵六', age: 35, address: '深圳市南山区', status: 'active' },
  { id: 5, name: '孙七', age: 29, address: '杭州市西湖区', status: 'inactive' },
  { id: 6, name: '周八', age: 31, address: '成都市锦江区', status: 'active' },
  { id: 7, name: '吴九', age: 27, address: '武汉市江汉区', status: 'active' },
  { id: 8, name: '郑十', age: 33, address: '重庆市渝中区', status: 'inactive' },
  { id: 9, name: '冯十一', age: 26, address: '南京市玄武区', status: 'active' },
  { id: 10, name: '陈十二', age: 30, address: '西安市雁塔区', status: 'active' },
])

// 分页表格列配置
const pagedTableColumns = ref([
  { type: 'seq', title: '序号' },
  { field: 'name', title: '姓名' },
  { field: 'age', title: '年龄' },
  { field: 'address', title: '地址' },
  { field: 'status', title: '状态', formatter: ({ cellValue }) => {
    return cellValue === 'active' ? '激活' : '禁用'
  }},
])

// 分页配置
const currentPage = ref(1)
const pageSize = ref(10)
const tableLoading = ref(false)

// 分页变化处理
const handlePageChange = (params: any) => {
  // 开始加载数据时打开loading
  tableLoading.value = true
  console.log('分页变化:', params, '开始加载数据')
  // 模拟异步加载数据
  setTimeout(() => {
    console.log('数据加载完成，关闭loading')
    // 数据加载完成后关闭loading
    tableLoading.value = false
  }, 3000)
}

// 排序表格数据
const sortTableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', status: 'active' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', status: 'inactive' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', status: 'active' },
  { id: 4, name: '赵六', age: 35, address: '深圳市南山区', status: 'active' },
  { id: 5, name: '孙七', age: 29, address: '杭州市西湖区', status: 'inactive' },
])

// 排序表格列配置
const sortTableColumns = ref([
  { type: 'seq', title: '序号' },
  { field: 'name', title: '姓名', sortable: true },
  { field: 'age', title: '年龄', sortable: true },
  { field: 'address', title: '地址' },
  { field: 'status', title: '状态', formatter: ({ cellValue }) => {
    return cellValue === 'active' ? '激活' : '禁用'
  }},
])

// 排序变化处理
const handleSortChange = (params: any) => {
  console.log('排序变化:', params)
}

// 自定义列表示格数据
const customColumnTableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区', status: 'active' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区', status: 'inactive' },
  { id: 3, name: '王五', age: 25, address: '广州市天河区', status: 'active' },
])

// 编辑处理
const handleEdit = (row: any) => {
  console.log('编辑:', row)
}

// 删除处理
const handleDelete = (row: any) => {
  console.log('删除:', row)
}

// 添加处理
const handleAdd = () => {
  console.log('添加按钮被点击')
}

// 自定义列表示格列配置
const customColumnTableColumns = ref([
  { type: 'seq', title: '序号' },
  { field: 'name', title: '姓名' },
  { field: 'age', title: '年龄' },
  { field: 'address', title: '地址' },
  { field: 'status', title: '状态', formatter: ({ cellValue }) => {
    // 不使用h函数，直接返回格式化的字符串
    return cellValue === 'active' ? '激活' : '禁用'
  }},
  { 
    title: '操作', 
    width: 180, 
    slots: { 
      default: 'action' // 使用插槽名称
    }
  },
])
</script>

<style scoped lang="less">
.xtable-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;

  h1 {
    text-align: center;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.85);
  }
}

.demo-section {
  margin-bottom: 40px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.85);
    border-left: 4px solid #1890ff;
    padding-left: 12px;
  }
}

.demo-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}

.demo-col {
  width: 300px;
  margin-bottom: 20px;
}

.demo-tip {
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.65);
}

.code-example {
  margin-top: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;

  h3 {
    margin: 0;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    background-color: #fafafa;
    border-bottom: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.85);
  }

  pre {
    margin: 0;
    padding: 16px;
    background-color: #fafafa;
    overflow-x: auto;

    code {
      font-family: Menlo, Monaco, 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.6;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
</style>
