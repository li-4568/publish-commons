<template>
  <div class="xtreeselect-demo">
    <h1>XTreeSelect 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value1"
          :tree-data="treeData"
          placeholder="请选择"
        />
      </div>
      <p class="demo-value">选择值: {{ value1 }}</p>
    </section>

    <!-- 不同尺寸 -->
    <section class="demo-section">
      <h2>不同尺寸</h2>
      <div class="demo-col">
        <XTreeSelect
          v-model="value2"
          :tree-data="treeData"
          size="large"
          placeholder="大号选择器"
        />
        <XTreeSelect
          v-model="value3"
          :tree-data="treeData"
          size="middle"
          placeholder="中号选择器"
        />
        <XTreeSelect
          v-model="value4"
          :tree-data="treeData"
          size="small"
          placeholder="小号选择器"
        />
      </div>
    </section>

    <!-- 多选模式 -->
    <section class="demo-section">
      <h2>多选模式</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value5"
          :tree-data="treeData"
          mode="multiple"
          placeholder="可多选"
        />
      </div>
      <p class="demo-value">选择值: {{ value5 }}</p>
    </section>

    <!-- 带复选框 -->
    <section class="demo-section">
      <h2>带复选框（多选模式）</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value6"
          :tree-data="treeData"
          mode="multiple"
          tree-checkable
          placeholder="勾选节点选择"
        />
      </div>
      <p class="demo-value">选择值: {{ value6 }}</p>
    </section>

    <!-- 严格勾选模式 -->
    <section class="demo-section">
      <h2>严格勾选模式</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value7"
          :tree-data="treeData"
          mode="multiple"
          tree-checkable
          :tree-check-strictly="false"
          placeholder="父子节点关联勾选"
        />
      </div>
      <p class="demo-value">选择值: {{ value7 }}</p>
    </section>

    <!-- 带清除按钮 -->
    <section class="demo-section">
      <h2>带清除按钮</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value8"
          :tree-data="treeData"
          clearable
          placeholder="可清除选择"
        />
      </div>
    </section>

    <!-- 搜索功能 -->
    <section class="demo-section">
      <h2>搜索功能</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value9"
          :tree-data="treeData"
          searchable
          placeholder="可搜索节点"
        />
      </div>
    </section>

    <!-- 默认展开所有 -->
    <section class="demo-section">
      <h2>默认展开所有节点</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value10"
          :tree-data="treeData"
          tree-default-expand-all
          placeholder="展开所有节点"
        />
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-col">
        <XTreeSelect
          v-model="value11"
          :tree-data="treeData"
          disabled
          placeholder="禁用状态"
        />
        <XTreeSelect
          v-model="value12"
          :tree-data="treeDataWithDisabled"
          placeholder="部分节点禁用"
        />
      </div>
    </section>

    <!-- 必填状态 -->
    <section class="demo-section">
      <h2>必填状态</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value13"
          :tree-data="treeData"
          required
          placeholder="必填项"
        />
      </div>
    </section>

    <!-- 错误状态 -->
    <section class="demo-section">
      <h2>错误状态</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value14"
          :tree-data="treeData"
          error-message="请选择一个节点"
          placeholder="错误状态"
        />
      </div>
    </section>

    <!-- 最大标签数量 -->
    <section class="demo-section">
      <h2>最大标签数量</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value15"
          :tree-data="treeData"
          mode="multiple"
          :max-tag-count="2"
          placeholder="最多显示2个标签"
        />
      </div>
    </section>

    <!-- 显示图标 -->
    <section class="demo-section">
      <h2>显示图标</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value16"
          :tree-data="treeDataWithIcon"
          show-icon
          placeholder="带图标的树"
        />
      </div>
    </section>

    <!-- 异步加载数据 -->
    <section class="demo-section">
      <h2>异步加载数据</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value17"
          :tree-data="asyncTreeData"
          placeholder="异步加载"
        />
        <XButton type="primary" @click="loadTreeData">加载数据</XButton>
      </div>
    </section>

    <!-- 大数据量 -->
    <section class="demo-section">
      <h2>大数据量（100个节点）</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value18"
          :tree-data="largeTreeData"
          searchable
          placeholder="大数据量选择"
        />
      </div>
    </section>

    <!-- 事件演示 -->
    <section class="demo-section">
      <h2>事件演示</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="value19"
          :tree-data="treeData"
          @change="handleChange"
          @open-change="handleOpenChange"
          @search="handleSearch"
          @select="handleSelect"
          @tree-expand="handleTreeExpand"
          @clear="handleClear"
          clearable
          searchable
          placeholder="触发各种事件"
        />
      </div>
      <div class="event-log">
        <p v-for="(log, index) in eventLogs" :key="index">{{ log }}</p>
      </div>
    </section>

    <!-- 实际应用场景 -->
    <section class="demo-section">
      <h2>实际应用场景 - 部门选择</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="deptValue"
          :tree-data="departmentData"
          mode="multiple"
          tree-checkable
          clearable
          searchable
          placeholder="请选择部门"
        />
      </div>
      <p class="demo-value">已选部门: {{ deptValue }}</p>
    </section>

    <!-- 实际应用场景 - 权限选择 -->
    <section class="demo-section">
      <h2>实际应用场景 - 权限选择</h2>
      <div class="demo-row">
        <XTreeSelect
          v-model="permissionValue"
          :tree-data="permissionData"
          mode="multiple"
          tree-checkable
          :tree-check-strictly="false"
          clearable
          placeholder="请选择权限"
        />
      </div>
      <p class="demo-value">已选权限: {{ permissionValue }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * XTreeSelect 组件使用示例
 */
import { ref, computed } from 'vue'
import XTreeSelect from '../src/components/XTreeSelect/XTreeSelect.vue'
import XButton from '../src/components/XButton/XButton.vue'
import type { TreeNode } from '../src/components/XTreeSelect/types'

// ========== 基础数据 ==========
const treeData = ref<TreeNode[]>([
  {
    key: '1',
    value: '1',
    title: '技术部',
    children: [
      {
        key: '1-1',
        value: '1-1',
        title: '前端组',
        children: [
          { key: '1-1-1', value: '1-1-1', title: 'Vue小组' },
          { key: '1-1-2', value: '1-1-2', title: 'React小组' }
        ]
      },
      {
        key: '1-2',
        value: '1-2',
        title: '后端组',
        children: [
          { key: '1-2-1', value: '1-2-1', title: 'Java小组' },
          { key: '1-2-2', value: '1-2-2', title: 'Go小组' },
          { key: '1-2-3', value: '1-2-3', title: 'Node小组' }
        ]
      },
      { key: '1-3', value: '1-3', title: '测试组' }
    ]
  },
  {
    key: '2',
    value: '2',
    title: '产品部',
    children: [
      { key: '2-1', value: '2-1', title: '产品设计' },
      { key: '2-2', value: '2-2', title: '产品运营' }
    ]
  },
  {
    key: '3',
    value: '3',
    title: '市场部',
    children: [
      { key: '3-1', value: '3-1', title: '销售团队' },
      { key: '3-2', value: '3-2', title: '推广团队' }
    ]
  }
])

// 带禁用节点的数据
const treeDataWithDisabled = ref<TreeNode[]>([
  {
    key: '1',
    value: '1',
    title: '可选项1',
    children: [
      { key: '1-1', value: '1-1', title: '子选项1' },
      { key: '1-2', value: '1-2', title: '禁用子选项', disabled: true }
    ]
  },
  {
    key: '2',
    value: '2',
    title: '禁用项',
    disabled: true,
    children: [
      { key: '2-1', value: '2-1', title: '子选项' }
    ]
  },
  {
    key: '3',
    value: '3',
    title: '可选项2'
  }
])

// 带图标的数据
const treeDataWithIcon = ref<TreeNode[]>([
  {
    key: '1',
    value: '1',
    title: '📁 文件夹',
    children: [
      { key: '1-1', value: '1-1', title: '📄 文档.txt' },
      { key: '1-2', value: '1-2', title: '📄 报告.doc' },
      { key: '1-3', value: '1-3', title: '📊 数据.xls' }
    ]
  },
  {
    key: '2',
    value: '2',
    title: '📁 图片',
    children: [
      { key: '2-1', value: '2-1', title: '🖼️ logo.png' },
      { key: '2-2', value: '2-2', title: '🖼️ banner.jpg' }
    ]
  }
])

// 部门数据
const departmentData = ref<TreeNode[]>([
  {
    key: 'company',
    value: 'company',
    title: '🏢 总公司',
    children: [
      {
        key: 'rd-center',
        value: 'rd-center',
        title: '🔧 研发中心',
        children: [
          { key: 'frontend', value: 'frontend', title: '💻 前端开发部' },
          { key: 'backend', value: 'backend', title: '🖥️ 后端开发部' },
          { key: 'mobile', value: 'mobile', title: '📱 移动开发部' },
          { key: 'qa', value: 'qa', title: '🧪 测试部' }
        ]
      },
      {
        key: 'product-center',
        value: 'product-center',
        title: '📋 产品中心',
        children: [
          { key: 'product-design', value: 'product-design', title: '🎨 产品设计部' },
          { key: 'product-manager', value: 'product-manager', title: '📊 产品管理部' }
        ]
      },
      {
        key: 'marketing-center',
        value: 'marketing-center',
        title: '📢 市场中心',
        children: [
          { key: 'sales', value: 'sales', title: '💼 销售部' },
          { key: 'marketing', value: 'marketing', title: '📣 推广部' },
          { key: 'customer-service', value: 'customer-service', title: '🎧 客服部' }
        ]
      }
    ]
  }
])

// 权限数据
const permissionData = ref<TreeNode[]>([
  {
    key: 'system',
    value: 'system',
    title: '⚙️ 系统管理',
    children: [
      {
        key: 'user-mgmt',
        value: 'user-mgmt',
        title: '👤 用户管理',
        children: [
          { key: 'user-view', value: 'user-view', title: '查看用户' },
          { key: 'user-create', value: 'user-create', title: '创建用户' },
          { key: 'user-edit', value: 'user-edit', title: '编辑用户' },
          { key: 'user-delete', value: 'user-delete', title: '删除用户' }
        ]
      },
      {
        key: 'role-mgmt',
        value: 'role-mgmt',
        title: '🔐 角色管理',
        children: [
          { key: 'role-view', value: 'role-view', title: '查看角色' },
          { key: 'role-create', value: 'role-create', title: '创建角色' },
          { key: 'role-edit', value: 'role-edit', title: '编辑角色' },
          { key: 'role-delete', value: 'role-delete', title: '删除角色' }
        ]
      }
    ]
  },
  {
    key: 'content',
    value: 'content',
    title: '📝 内容管理',
    children: [
      { key: 'article-mgmt', value: 'article-mgmt', title: '📄 文章管理' },
      { key: 'category-mgmt', value: 'category-mgmt', title: '📁 分类管理' },
      { key: 'comment-mgmt', value: 'comment-mgmt', title: '💬 评论管理' }
    ]
  }
])

// ========== 响应式数据 ==========
const value1 = ref<string>()
const value2 = ref<string>()
const value3 = ref<string>()
const value4 = ref<string>()
const value5 = ref<string[]>([])
const value6 = ref<string[]>([])
const value7 = ref<string[]>([])
const value8 = ref<string>()
const value9 = ref<string>()
const value10 = ref<string>()
const value11 = ref<string>()
const value12 = ref<string>()
const value13 = ref<string>()
const value14 = ref<string>()
const value15 = ref<string[]>([])
const value16 = ref<string>()
const value17 = ref<string>()
const value18 = ref<string>()
const value19 = ref<string>()
const deptValue = ref<string[]>([])
const permissionValue = ref<string[]>([])

// 异步数据
const asyncTreeData = ref<TreeNode[]>([])

// 大数据量数据
const largeTreeData = computed<TreeNode[]>(() => {
  const data: TreeNode[] = []
  for (let i = 1; i <= 10; i++) {
    const children: TreeNode[] = []
    for (let j = 1; j <= 10; j++) {
      children.push({
        key: `${i}-${j}`,
        value: `${i}-${j}`,
        title: `节点 ${i}-${j}`
      })
    }
    data.push({
      key: `${i}`,
      value: `${i}`,
      title: `一级节点 ${i}`,
      children
    })
  }
  return data
})

// 事件日志
const eventLogs = ref<string[]>([])

// ========== 方法 ==========
const addLog = (message: string) => {
  const time = new Date().toLocaleTimeString()
  eventLogs.value.unshift(`[${time}] ${message}`)
  if (eventLogs.value.length > 10) {
    eventLogs.value.pop()
  }
}

const handleChange = (value: any) => {
  addLog(`值变化: ${JSON.stringify(value)}`)
}

const handleOpenChange = (open: boolean) => {
  addLog(`下拉框${open ? '打开' : '关闭'}`)
}

const handleSearch = (value: string) => {
  addLog(`搜索: ${value}`)
}

const handleSelect = (value: any, node: any) => {
  addLog(`选择节点: ${value}`)
}

const handleTreeExpand = (expandedKeys: any[]) => {
  addLog(`展开节点: ${expandedKeys.join(', ')}`)
}

const handleClear = () => {
  addLog('内容已清除')
}

const loadTreeData = () => {
  // 模拟异步加载
  setTimeout(() => {
    asyncTreeData.value = [
      {
        key: 'async-1',
        value: 'async-1',
        title: '异步节点1',
        children: [
          { key: 'async-1-1', value: 'async-1-1', title: '异步子节点1' },
          { key: 'async-1-2', value: 'async-1-2', title: '异步子节点2' }
        ]
      },
      {
        key: 'async-2',
        value: 'async-2',
        title: '异步节点2',
        children: [
          { key: 'async-2-1', value: 'async-2-1', title: '异步子节点3' },
          { key: 'async-2-2', value: 'async-2-2', title: '异步子节点4' }
        ]
      }
    ]
    addLog('异步数据加载完成')
  }, 500)
}
</script>

<style scoped lang="less">
.xtreeselect-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;

  h1 {
    text-align: center;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.85);
  }
}

.demo-section {
  margin-bottom: 32px;

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
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.demo-value {
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.event-log {
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
  min-height: 100px;

  p {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.8;
    font-family: monospace;
  }
}
</style>
