<template>
  <div class="x-table-search" ref="searchRef">
    <Form
      ref="formRef"
      name="table_search"
      class="search-form"
      :model="formState"
    >
      <Row :gutter="24" class="search-row">
        <!-- 搜索项渲染 -->
        <FormItemRender
          v-for="item in visibleFields"
          :key="item.field"
          :item="item"
          :formState="formState"
          :rowSpan="rowSpan"
        />
        
        <!-- 操作按钮区域 -->
        <Col class="action-col">
          <Space :size="spaceNum">
            <!-- 展开/收起按钮 -->
            <div
              class="expand-icon"
              @click="toggleMore"
              v-if="shouldCollapse && expandIcon"
              :title="isExpanded ? '收起' : '展开'"
            >
              <UpOutlined v-if="isExpanded" />
              <DownOutlined v-else />
            </div>
            <XButton @click="toggleMore" v-else-if="shouldCollapse">
              {{ isExpanded ? '收起' : '展开' }}
              <UpOutlined v-if="isExpanded" />
              <DownOutlined v-else />
            </XButton>
            
            <!-- 自定义操作按钮插槽 -->
            <slot name="actions">
              <XButton @click="handleReset">
                {{ resetText || '重置' }}
              </XButton>
              <XButton type="primary" @click="handleSearch">
                {{ searchText || '搜索' }}
              </XButton>
            </slot>
          </Space>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import FormItemRender from './components/FormItemRender.vue'
import { XButton } from '../XButton'
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue'
import { Form, Row, Col, Space } from 'ant-design-vue'
import type { XTableSearchProps, XTableSearchEmits } from './types'
import './style.less'

const props = defineProps<XTableSearchProps>()
const emit = defineEmits<XTableSearchEmits>()

// 表单数据
const formState = ref<Record<string, any>>({})
// 搜索容器引用
const searchRef = ref<HTMLElement | null>(null)
// 展开状态
const isExpanded = ref(props.advancedDefaultOpen || false)
// 每行显示的列数
const rowSpan = ref(6)
// 间距
const spaceNum = ref(6)
// 是否显示展开图标
const expandIcon = ref(false)

// 初始化表单数据
const initFormData = () => {
  props.searchItems.forEach(item => {
    if (item.defaultValue !== undefined && item.defaultValue !== null) {
      formState.value[item.field] = item.defaultValue
    } else {
      // 根据不同类型设置不同的默认值
      switch (item.type) {
        case 'cascader':
          formState.value[item.field] = []
          break
        case 'treeSelect':
          formState.value[item.field] = undefined
          break
        case 'checkbox':
          formState.value[item.field] = false
          break
        case 'select':
          formState.value[item.field] = undefined
          break
        case 'date':
        case 'datetime':
          formState.value[item.field] = undefined
          break
        default:
          formState.value[item.field] = ''
      }
    }
  })
}

// 监听搜索项和默认值变化
watch(
  () => [props.searchItems, props.advancedDefaultOpen],
  ([, newAdvancedDefaultOpen]) => {
    initFormData()
    isExpanded.value = Boolean(newAdvancedDefaultOpen)
  },
  { immediate: true }
)

// 总共多少个字段
const maxVisiblePerRow = computed(() => {
  return Math.floor(24 / rowSpan.value)
})

// 显示的字段列表
const visibleFields = computed(() => {
  const formList = props.searchItems
  if (isExpanded.value) {
    return formList
  }
  // 收起时只显示第一行
  return formList.slice(0, maxVisiblePerRow.value)
})

// 当前总共多少行
const totalRows = computed(() => {
  return Math.ceil(props.searchItems.length / maxVisiblePerRow.value)
})

// 是否需要显示“显示更多”按钮
const shouldCollapse = computed(() => {
  return totalRows.value >= 2
})

// 切换展开/收起
const toggleMore = () => {
  isExpanded.value = !isExpanded.value
  emit('advanced-change', isExpanded.value)
}

// 处理搜索
const handleSearch = () => {
  // 构建搜索参数
  const searchParams: Record<string, any> = {}
  Object.keys(formState.value).forEach(key => {
    const value = formState.value[key]
    if (value !== undefined && value !== null && value !== '') {
      searchParams[key] = value
    }
  })
  emit('search', searchParams)
}

// 处理重置
const handleReset = () => {
  initFormData()
  emit('reset')
  handleSearch()
}

// 处理窗口大小变化
const handleResize = () => {
  if (!searchRef.value) return
  
  const width = window.innerWidth
  if (width > 2000) {
    rowSpan.value = 4
    spaceNum.value = 10
  } else if (width <= 1250) {
    rowSpan.value = 6
    spaceNum.value = 4
  } else {
    rowSpan.value = 6
    spaceNum.value = 6
  }
  
  // 判断是否显示展开图标
  if (searchRef.value.offsetWidth <= 876) {
    expandIcon.value = true
  } else {
    expandIcon.value = false
  }
}

// 组件挂载时初始化
onMounted(() => {
  initFormData()
  handleResize()
  window.addEventListener('resize', handleResize)
})

// 组件卸载前清理
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
