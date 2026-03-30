<template>
  <div class="xcheckbox-group-wrapper">
    <ACheckboxGroup
      :value="props.modelValue"
      @update:value="(value: any[]) => emit('update:modelValue', value)"
      :disabled="props.disabled"
      :size="props.size"
      :name="props.name"
      v-bind="$attrs"
    >
      <slot></slot>
    </ACheckboxGroup>
  </div>
</template>

<script setup lang="ts">
import { CheckboxGroup as ACheckboxGroup } from 'ant-design-vue'
import { provide } from 'vue'
import type { XCheckboxGroupProps, XCheckboxGroupEmits } from './types'
import './style.less'

// 定义组件选项
defineOptions({
  name: 'XCheckboxGroup'
})

// 定义组件属性
const props = withDefaults(defineProps<XCheckboxGroupProps>(), {
  modelValue: () => [],
  size: 'middle',
  disabled: false,
  name: ''
})

// 定义组件事件
const emit = defineEmits<XCheckboxGroupEmits>()

// 提供 CheckboxGroup 上下文，供子 Checkbox 组件使用
provide('CheckboxGroup', {
  value: props.modelValue,
  disabled: props.disabled,
  size: props.size,
  name: props.name,
  onChange: (value: any[]) => emit('update:modelValue', value)
})
</script>

<style scoped lang="less">
.xcheckbox-group-wrapper {
  display: inline-block;
}
</style>