<template>
  <div class="xtooltip-wrapper">
    <Tooltip
      :placement="placement"
      :trigger="trigger"
      :disabled="disabled"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :auto-adjust-overflow="autoAdjustOverflow"
      :get-popup-container="getPopupContainer"
      :open="modelValue"
      @open-change="handleOpenChange"
      v-bind="$attrs"
    >
      <!-- 触发元素 -->
      <slot />
      
      <!-- 标题处理 -->
      <template #title>
        <slot name="title">
          <template v-if="htmlTitle">
            <div v-html="htmlTitle"></div>
          </template>
          <template v-else-if="title">{{ title }}</template>
        </slot>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-vue'
import { ref, watch } from 'vue'
import type { XTooltipProps } from './types'
import './style.less'

// 定义组件选项
defineOptions({
  name: 'XTooltip',
  inheritAttrs: false
})

// 定义组件属性
const props = withDefaults(defineProps<XTooltipProps>(), {
  title: undefined,
  htmlTitle: undefined,
  placement: 'top',
  trigger: 'hover',
  disabled: false,
  modelValue: undefined,
  openDelay: 0,
  closeDelay: 0,
  autoAdjustOverflow: true,
  getPopupContainer: () => document.body
})

// 定义组件事件
const emit = defineEmits(['update:modelValue', 'visibleChange', 'popupVisibleChange'])

// 内部可见性状态
const visible = ref(false)

// 监听外部可见性变化
watch(() => props.modelValue, (newVal) => {
  if (newVal !== undefined) {
    visible.value = newVal
  }
}, { immediate: true })

// 处理可见性变化
const handleOpenChange = (newVisible: boolean) => {
  emit('update:modelValue', newVisible)
  emit('visibleChange', newVisible)
  emit('popupVisibleChange', newVisible)
}
</script>