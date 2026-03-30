<template>
  <div class="xselect-wrapper" :class="wrapperClasses">
    <Select
      v-model:value="internalValue"
      :size="size"
      :mode="mode"
      :disabled="disabled"
      :placeholder="placeholder"
      :clearable="clearable"
      :max-tag-count="maxTagCount"
      :show-search="showSearch"
      :filter-option="filterOption"
      :not-found-content="notFoundContent"
      :get-popup-container="getPopupContainer"
      style="width: 100%" 
      @change="handleChange"
      @open-change="handleOpenChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @clear="handleClear"
      @tag-remove="handleTagRemove"
      v-bind="$attrs"
    >
      <!-- 渲染选项 -->
      <SelectOption
        v-for="option in processedOptions"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        <slot name="option" :option="option">{{ option.label }}</slot>
      </SelectOption>

      <!-- 自定义选项（通过 slot） -->
      <slot></slot>
    </Select>

    <!-- 错误提示信息 -->
    <div v-if="errorMessage" class="xselect-error-message">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { Select, SelectOption } from 'ant-design-vue'
import type { XSelectProps } from './types'

// 定义 Props
const props = withDefaults(defineProps<XSelectProps>(), {
  modelValue: undefined,
  size: 'middle',
  mode: undefined,
  options: () => [],
  clearable: false,
  disabled: false,
  required: false,
  placeholder: '',
  maxTagCount: undefined,
  errorMessage: '',
  showSearch: false,
  filterOption: true,
  notFoundContent: '无匹配数据'
})

// 定义 Emits
const emit = defineEmits(['update:modelValue', 'change', 'openChange', 'focus', 'blur', 'clear', 'tagRemove'])

// 内部值
const internalValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
    emit('change', value)
  }
})

// 处理选项数据，确保不为 undefined
const processedOptions = computed(() => {
  return props.options || []
})

// 计算包装器类名
const wrapperClasses = computed(() => {
  const classes = ['xselect-wrapper']
  
  if (props.size) {
    classes.push(`xselect-${props.size}`)
  }
  
  if (props.disabled) {
    classes.push('xselect-disabled')
  }
  
  if (props.required) {
    classes.push('xselect-required')
  }
  
  if (props.errorMessage) {
    classes.push('xselect-has-error')
  }
  
  return classes
})

// 监听值变化
watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue
  }
)

/**
 * 处理值变化事件
 */
const handleChange = (value: any) => {
  emit('update:modelValue', value)
  emit('change', value)
}

/**
 * 处理下拉框打开/关闭事件
 */
const handleOpenChange = (open: boolean) => {
  emit('openChange', open)
}

/**
 * 处理聚焦事件
 */
const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

/**
 * 处理失焦事件
 */
const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

/**
 * 处理清除事件
 */
const handleClear = () => {
  emit('clear')
}

/**
 * 处理标签移除事件
 */
const handleTagRemove = (removedTag: string | number) => {
  emit('tagRemove', removedTag)
}

// 导出组件
defineExpose({
  /**
   * 获取当前值
   */
  getValue: () => internalValue.value,

  /**
   * 聚焦
   */
  focus: () => {
    const select = document.querySelector<HTMLElement>('.xselect-wrapper .ant-select-selector')
    select?.focus()
  },

  /**
   * 失焦
   */
  blur: () => {
    const select = document.querySelector<HTMLElement>('.xselect-wrapper .ant-select-selector')
    select?.blur()
  }
})
</script>

<style scoped lang="less">
  @import './style.less';
</style>