<template>
  <div class="xpopover-wrapper">
    <Popover
      v-bind="$attrs"
      v-model:open="visible"
      @open-change="onVisibleChange"
    >
      <slot />
      <template #title>
        <slot name="title">{{ title }}</slot>
      </template>
      <template #content>
        <slot name="content">
          <template v-if="htmlContent">
            <div v-html="htmlContent"></div>
          </template>
          <template v-else>{{ content }}</template>
        </slot>
      </template>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-vue'
import { ref, watch } from 'vue'
import type { XPopoverProps } from './types'
import './style.less'

// 定义组件选项
defineOptions({
  name: 'XPopover',
  inheritAttrs: true
})

// 定义组件属性
const props = withDefaults(defineProps<XPopoverProps>(), {
  title: '',
  content: '',
  htmlContent: undefined,
  placement: 'top',
  trigger: 'hover',
  disabled: false,
  modelValue: undefined,
  openDelay: 0,
  closeDelay: 0,
  autoAdjustOverflow: true
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
const onVisibleChange = (newVisible: boolean) => {
  if (props.modelValue === undefined) {
    visible.value = newVisible
  }
  emit('update:modelValue', newVisible)
  emit('visibleChange', newVisible)
  emit('popupVisibleChange', newVisible)
}
</script>

<style scoped lang="less">
/* XPopover 组件样式 */
.xpopover-wrapper {
  display: inline-block;
}
</style>