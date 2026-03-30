<template>
  <div 
    class="xfloat-button-wrapper"
    :class="{
      'xfloat-button-top-left': position === 'top-left',
      'xfloat-button-top-right': position === 'top-right',
      'xfloat-button-bottom-left': position === 'bottom-left',
      'xfloat-button-bottom-right': position === 'bottom-right'
    }"
  >
    <AButton
      :type="antButtonType"
      :size="antButtonSize"
      :disabled="disabled"
      :loading="loading"
      :ghost="ghost"
      :danger="antButtonDanger"
      :block="block"
      :class="buttonClasses"
      v-bind="$attrs"
      @click="handleClick"
    >
      <template v-if="icon && !$slots.icon" #icon>
        <span>{{ icon }}</span>
      </template>
      <slot name="icon"></slot>
      <span v-if="text || $slots.default">{{ text }}</span>
      <slot></slot>
    </AButton>
  </div>
</template>

<script setup lang="ts">
import { Button as AButton } from 'ant-design-vue'
import { computed } from 'vue'
import type { XFloatButtonProps, XFloatButtonEmits } from './types'
import './style.less'

// 定义组件选项
defineOptions({
  name: 'XFloatButton'
})

// 定义组件属性
const props = withDefaults(defineProps<XFloatButtonProps>(), {
  type: 'primary',
  size: 'middle',
  position: 'bottom-right',
  disabled: false,
  loading: false,
  ghost: false,
  danger: false,
  block: false,
  text: ''
})

// 定义组件事件
const emit = defineEmits<XFloatButtonEmits>()

// 计算Ant Design Vue Button支持的type属性
const antButtonType = computed(() => {
  const validAntTypes = ['primary', 'default', 'dashed', 'text', 'link'] as const
  if (validAntTypes.includes(props.type as typeof validAntTypes[number])) {
    return props.type as typeof validAntTypes[number]
  }
  return 'default'
})

// 计算Ant Design Vue Button支持的size属性
const antButtonSize = computed(() => {
  const sizeMap: Record<string, 'large' | 'middle' | 'small'> = {
    large: 'large',
    middle: 'middle',
    small: 'small'
  }
  return sizeMap[props.size] || 'middle'
})

// 计算Ant Design Vue Button的danger属性
const antButtonDanger = computed(() => {
  return props.danger || props.type === 'error'
})

// 计算按钮类名
const buttonClasses = computed(() => {
  return {
    [`xfloat-button-${props.type}`]: props.type,
    [`xfloat-button-${props.size}`]: props.size
  }
})

// 处理点击事件
const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
  if (props.onClick) {
    props.onClick()
  }
}

// 暴露组件方法
defineExpose({
  click: () => handleClick(new MouseEvent('click'))
})
</script>