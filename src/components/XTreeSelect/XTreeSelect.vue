<template>
  <div class="xtreeselect-wrapper" :class="wrapperClasses">
    <TreeSelect
      v-model:value="internalValue"
      :tree-data="treeData"
      :multiple="isMultiple"
      :size="size"
      :disabled="disabled"
      :placeholder="placeholder"
      :allow-clear="clearable"
      :show-search="showSearch || searchable"
      :show-icon="showIcon"
      :tree-default-expand-all="treeDefaultExpandAll"
      :tree-default-expanded-keys="treeDefaultExpandedKeys"
      :tree-checkable="treeCheckable"
      :tree-check-strictly="treeCheckStrictly"
      :max-tag-count="maxTagCount"
      :field-names="fieldNames"
      :get-popup-container="getPopupContainer"
      :status="errorMessage ? 'error' : undefined"
      style="width: 100%"
      @change="handleChange"
      @dropdown-visible-change="handleOpenChange"
      @search="handleSearch"
      @select="handleSelect"
      @tree-expand="handleTreeExpand"
    >
      <!-- 空状态 -->
      <template v-if="$slots.empty || emptyText" #notFoundContent>
        <slot name="empty">
          <span class="xtreeselect-empty-text">{{ emptyText }}</span>
        </slot>
      </template>

      <!-- 标签渲染 -->
      <template v-if="$slots.tagRender" #tagRender="slotProps">
        <slot
          name="tagRender"
          :label="slotProps.label"
          :value="slotProps.value"
          :closable="slotProps.closable"
          :on-close="slotProps.onClose"
        />
      </template>
    </TreeSelect>

    <!-- 错误提示信息 -->
    <div v-if="errorMessage" class="xtreeselect-error-message">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { TreeSelect } from 'ant-design-vue'
import type { XTreeSelectProps, XTreeSelectEmits } from './types'

// 定义组件名称
defineOptions({
  name: 'XTreeSelect',
  inheritAttrs: false
})

// Props 定义
const props = withDefaults(defineProps<XTreeSelectProps>(), {
  mode: 'single',
  size: 'middle',
  disabled: false,
  clearable: false,
  searchable: false,
  showSearch: false,
  showIcon: false,
  treeDefaultExpandAll: false,
  treeCheckable: false,
  treeCheckStrictly: false,
  required: false,
  emptyText: '暂无数据'
})

// Emits 定义
const emit = defineEmits<XTreeSelectEmits>()

// 是否为多选模式
const isMultiple = computed(() => props.mode === 'multiple')

// 内部值
const currentValue = computed(() => props.value ?? props.modelValue)

const internalValue = computed({
  get() {
    return currentValue.value
  },
  set(val) {
    emit('update:modelValue', val)
    emit('update:value', val)
  }
})

// 计算包装器类名
const wrapperClasses = computed(() => {
  const classes = ['xtreeselect-wrapper']

  if (props.size) {
    classes.push(`xtreeselect-${props.size}`)
  }

  if (props.disabled) {
    classes.push('xtreeselect-disabled')
  }

  if (props.required) {
    classes.push('xtreeselect-required')
  }

  if (props.errorMessage) {
    classes.push('xtreeselect-has-error')
  }

  if (isMultiple.value) {
    classes.push('xtreeselect-multiple')
  }

  return classes
})

// 处理值变化
const handleChange = (val: any) => {
  emit('update:modelValue', val)
  emit('update:value', val)
  emit('change', val)
}

// 处理下拉框打开/关闭
const handleOpenChange = (open: boolean) => {
  emit('openChange', open)
}

// 处理搜索
const handleSearch = (value: string) => {
  emit('search', value)
}

// 处理选择
const handleSelect = (value: any, node: any) => {
  emit('select', value, node)
}

// 处理节点展开/收起
const handleTreeExpand = (expandedKeys: any[]) => {
  emit('treeExpand', expandedKeys)
}

// 监听值变化
watch(
  () => currentValue.value,
  (newValue) => {
    internalValue.value = newValue
  }
)

// 暴露公共方法
defineExpose({
  /**
   * 获取当前值
   */
  getValue: () => internalValue.value,

  /**
   * 清空选择
   */
  clear: () => {
    internalValue.value = isMultiple.value ? [] : undefined
    emit('clear')
  },

  /**
   * 聚焦
   */
  focus: () => {
    const select = document.querySelector<HTMLElement>('.xtreeselect-wrapper .ant-select-selector')
    select?.focus()
  },

  /**
   * 失焦
   */
  blur: () => {
    const select = document.querySelector<HTMLElement>('.xtreeselect-wrapper .ant-select-selector')
    select?.blur()
  }
})
</script>

<style scoped lang="less">
@import './style.less';
</style>
