<template>
  <div class="x-table-search-demo">
    <h1>表格搜索组件示例</h1>
    
    <!-- 基础用法 -->
    <div class="demo-section">
      <h2>基础用法</h2>
      <XTableSearch
        :searchItems="searchItems"
        @search="handleSearch"
        @reset="handleReset"
      />
    </div>
    
    <!-- 带高级搜索 -->
    <div class="demo-section">
      <h2>带高级搜索</h2>
      <XTableSearch
        :searchItems="advancedSearchItems"
        :showAdvanced="true"
        :advancedDefaultOpen="false"
        @search="handleAdvancedSearch"
        @reset="handleAdvancedReset"
        @advanced-change="handleAdvancedChange"
      />
    </div>
    
    <!-- 自定义操作按钮 -->
    <div class="demo-section">
      <h2>自定义操作按钮</h2>
      <XTableSearch
        :searchItems="searchItems"
        @search="handleSearch"
        @reset="handleReset"
      >
        <template #actions>
          <XButton @click="handleReset">
            重置
          </XButton>
          <XButton type="default" @click="handleClear">
            清空
          </XButton>
          <XButton type="primary" @click="handleSearch">
            搜索
          </XButton>
        </template>
      </XTableSearch>
    </div>
    
    <!-- 完整示例 -->
    <div class="demo-section">
      <h2>完整示例（所有组件类型）</h2>
      <XTableSearch
        :searchItems="fullSearchItems"
        @search="handleSearch"
        @reset="handleReset"
      />
    </div>
    
    <!-- 搜索结果展示 -->
    <div class="demo-section">
      <h2>搜索结果</h2>
      <div v-if="searchParams" class="search-result">
        <p>搜索参数：</p>
        <pre>{{ JSON.stringify(searchParams, null, 2) }}</pre>
      </div>
      <div v-else class="search-result">
        <p>请输入搜索条件并点击搜索按钮</p>
      </div>
    </div>
    
    <!-- 示例代码 -->
    <div class="demo-section">
      <h2>示例代码</h2>
      <div class="code-block">
        <h4>导入方法</h4>
        <pre><code>import { XTableSearch } from 'publish-commons';</code></pre>
        
        <h4>基础用法</h4>
        <pre><code>&lt;XTableSearch
  :searchItems="searchItems"
  @search="handleSearch"
  @reset="handleReset"
/&gt;</code></pre>
        
        <h4>带高级搜索</h4>
        <pre><code>&lt;XTableSearch
  :searchItems="advancedSearchItems"
  :showAdvanced="true"
  :advancedDefaultOpen="false"
  @search="handleAdvancedSearch"
  @reset="handleAdvancedReset"
  @advanced-change="handleAdvancedChange"
/&gt;</code></pre>
        
        <h4>搜索项配置</h4>
        <pre><code>const searchItems = [
  {
    type: 'input',
    field: 'name',
    label: '姓名',
    placeholder: '请输入姓名',
    defaultValue: ''
  },
  {
    type: 'select',
    field: 'status',
    label: '状态',
    placeholder: '请选择状态',
    options: [
      { value: 'active', label: '激活' },
      { value: 'inactive', label: '未激活' }
    ]
  },
  {
    type: 'date',
    field: 'startDate',
    label: '开始日期',
    placeholder: '请选择开始日期'
  },
  {
    type: 'datetime',
    field: 'createDate',
    label: '创建时间',
    placeholder: '请选择创建时间'
  },
  {
    type: 'cascader',
    field: 'region',
    label: '地区',
    placeholder: '请选择地区',
    cascaderOptions: cascaderOptions
  },
  {
    type: 'checkbox',
    field: 'enabled',
    label: '是否启用',
    defaultValue: false
  },
  {
    type: 'radio',
    field: 'gender',
    label: '性别',
    radioOptions: [
      { value: 'male', label: '男' },
      { value: 'female', label: '女' }
    ]
  },
  {
    type: 'treeSelect',
    field: 'department',
    label: '部门',
    placeholder: '请选择部门',
    treeData: treeData
  }
];</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XTableSearch, XButton } from '../src'
import type { SearchItem } from '../src'

// 基础搜索项
const searchItems: SearchItem[] = [
  {
    type: 'input',
    field: 'name',
    label: '姓名',
    placeholder: '请输入姓名',
    defaultValue: ''
  },
  {
    type: 'select',
    field: 'status',
    label: '状态',
    placeholder: '请选择状态',
    options: [
      { value: 'active', label: '激活' },
      { value: 'inactive', label: '未激活' }
    ]
  }
]

// 带高级搜索的搜索项
const advancedSearchItems: SearchItem[] = [
  {
    type: 'input',
    field: 'name',
    label: '姓名',
    placeholder: '请输入姓名',
    defaultValue: ''
  },
  {
    type: 'select',
    field: 'status',
    label: '状态',
    placeholder: '请选择状态',
    options: [
      { value: 'active', label: '激活' },
      { value: 'inactive', label: '未激活' }
    ]
  },
  {
    type: 'date',
    field: 'startDate',
    label: '开始日期',
    placeholder: '请选择开始日期'
  },
  {
    type: 'date',
    field: 'endDate',
    label: '结束日期',
    placeholder: '请选择结束日期'
  },
  {
    type: 'input',
    field: 'keyword',
    label: '关键词',
    placeholder: '请输入关键词'
  }
]

// 级联选择器选项
const cascaderOptions = [
  {
    value: 'zhejiang',
    label: '浙江省',
    children: [
      {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'jianggan', label: '江干区' }
        ]
      },
      {
        value: 'ningbo',
        label: '宁波市',
        children: [
          { value: 'haishu', label: '海曙区' },
          { value: 'jiangbei', label: '江北区' }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: '江苏省',
    children: [
      {
        value: 'nanjing',
        label: '南京市',
        children: [
          { value: 'xuanwu', label: '玄武区' },
          { value: 'gulou', label: '鼓楼区' }
        ]
      }
    ]
  }
]

// 树形选择器数据
const treeData = [
  {
    value: '1',
    title: '技术部',
    children: [
      { value: '1-1', title: '前端组' },
      { value: '1-2', title: '后端组' }
    ]
  },
  {
    value: '2',
    title: '产品部',
    children: [
      { value: '2-1', title: '产品经理' },
      { value: '2-2', title: 'UI设计师' }
    ]
  }
]

// 完整的搜索项（包含所有类型）
const fullSearchItems: SearchItem[] = [
  {
    type: 'input',
    field: 'name',
    label: '姓名',
    placeholder: '请输入姓名',
    defaultValue: ''
  },
  {
    type: 'select',
    field: 'status',
    label: '状态',
    placeholder: '请选择状态',
    options: [
      { value: 'active', label: '激活' },
      { value: 'inactive', label: '未激活' }
    ]
  },
  {
    type: 'date',
    field: 'startDate',
    label: '开始日期',
    placeholder: '请选择开始日期'
  },
  {
    type: 'datetime',
    field: 'createDate',
    label: '创建时间',
    placeholder: '请选择创建时间'
  },
  {
    type: 'cascader',
    field: 'region',
    label: '地区',
    placeholder: '请选择地区',
    cascaderOptions: cascaderOptions
  },
  {
    type: 'checkbox',
    field: 'enabled',
    label: '是否启用',
    defaultValue: false
  },
  {
    type: 'radio',
    field: 'gender',
    label: '性别',
    radioOptions: [
      { value: 'male', label: '男' },
      { value: 'female', label: '女' }
    ]
  },
  {
    type: 'treeSelect',
    field: 'department',
    label: '部门',
    placeholder: '请选择部门',
    treeData: treeData
  }
]

// 搜索参数
const searchParams = ref<any>(null)

// 处理搜索
const handleSearch = (params: any) => {
  console.log('111:', params)
  searchParams.value = params
  console.log('搜索参数:', params)
}

// 处理重置
const handleReset = () => {
  searchParams.value = null
  console.log('重置搜索')
}

// 处理清空
const handleClear = () => {
  searchParams.value = null
  console.log('清空搜索')
}

// 处理高级搜索
const handleAdvancedSearch = (params: any) => {
  searchParams.value = params
  console.log('高级搜索参数:', params)
}

// 处理高级重置
const handleAdvancedReset = () => {
  searchParams.value = null
  console.log('重置高级搜索')
}

// 处理高级搜索展开/收起
const handleAdvancedChange = (isOpen: boolean) => {
  console.log('高级搜索状态:', isOpen ? '展开' : '收起')
}
</script>

<style scoped>
/* 统一组件示例样式，与其他Demo保持一致 */
.x-table-search-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}

.x-table-search-demo h1 {
  text-align: center;
  margin-bottom: 32px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
  font-weight: 600;
}

.demo-section {
  margin-bottom: 32px;
}

.demo-section h2 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  border-left: 4px solid #1890ff;
  padding-left: 12px;
}

.search-result {
  margin-top: 10px;
  padding: 10px;
  background-color: #f0f2f5;
  border-radius: 4px;
  
  pre {
    margin: 10px 0 0;
    padding: 10px;
    background-color: #fafafa;
    border-radius: 4px;
    overflow-x: auto;
  }
}

.code-block {
  margin-top: 10px;
  
  h4 {
    margin: 15px 0 5px;
    color: #666;
    font-size: 14px;
  }
  
  pre {
    margin: 5px 0 10px;
    padding: 10px;
    background-color: #fafafa;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
    line-height: 1.4;
  }
}
</style>