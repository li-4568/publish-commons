<template>
  <div class="xpopconfirm-wrapper">
    <Popconfirm
      :title="title"
      :description="description"
      :placement="placement"
      :trigger="trigger"
      :ok-text="okText"
      :cancel-text="cancelText"
      :ok-type="okType"
      :ok-button-props="okButtonProps"
      :cancel-button-props="cancelButtonProps"
      :closeable="closeable"
      :disabled="disabled"
      :icon="icon"
      :icon-color="iconColor"
      @confirm="handleConfirm"
      @cancel="handleCancel"
      @open-change="handleOpenChange"
      v-bind="$attrs"
    >
      <slot></slot>
      
      <template #title>
        <slot name="title">{{ title }}</slot>
      </template>
      
      <template #description>
        <slot name="description">{{ description }}</slot>
      </template>
      
      <template #okText>
        <slot name="okText">{{ okText }}</slot>
      </template>
      
      <template #cancelText>
        <slot name="cancelText">{{ cancelText }}</slot>
      </template>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-vue'
import type { XPopconfirmProps, XPopconfirmEmits } from './types'
import './style.less'

// 定义组件选项
defineOptions({
  name: 'XPopconfirm',
  inheritAttrs: false
})

// 定义组件属性
const props = withDefaults(defineProps<XPopconfirmProps>(), {
  title: '',
  placement: 'top',
  trigger: 'click',
  okText: '确定',
  cancelText: '取消',
  okType: 'primary',
  closeable: true,
  disabled: false,
  iconColor: '#faad14'
})

// 定义组件事件
const emit = defineEmits<XPopconfirmEmits>()

// 处理确认事件
const handleConfirm = () => {
  emit('confirm')
  if (props.modelValue !== undefined) {
    emit('update:modelValue', false)
  }
}

// 处理取消事件
const handleCancel = () => {
  emit('cancel')
  if (props.modelValue !== undefined) {
    emit('update:modelValue', false)
  }
}

// 处理打开状态变化
const handleOpenChange = (visible: boolean) => {
  if (props.modelValue !== undefined) {
    emit('update:modelValue', visible)
  }
  emit('open-change', visible)
}
</script>

<style scoped lang="less">
.xpopconfirm-wrapper {
  // 组件样式
}
</style>