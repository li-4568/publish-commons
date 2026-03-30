<template>
  <div class="xradio-wrapper">
    <ARadio
      :checked="isGroup ? (groupValue === props.value) : (props.modelValue === props.value || props.checked)"
      :value="props.value"
      :disabled="props.disabled || (isGroup && groupDisabled)"
      :size="props.size || (isGroup && groupSize)"
      :autofocus="props.autofocus"
      :required="props.required"
      :name="props.name || (isGroup ? groupName : '')"
      :status="props.status"
      @change="handleChange"
      @click="(e: MouseEvent) => emit('click', e)"
      @focus="(e: FocusEvent) => emit('focus', e)"
      @blur="(e: FocusEvent) => emit('blur', e)"
      v-bind="$attrs"
    >
      <template v-if="props.label">{{ props.label }}</template>
      <slot v-else></slot>
    </ARadio>
  </div>
</template>

<script setup lang="ts">
import { Radio as ARadio } from 'ant-design-vue'
import { inject, computed } from 'vue'
import type { RadioChangeEvent } from 'ant-design-vue/es/radio/interface'
import type { XRadioProps, XRadioEmits } from './types'
import './style.less'

// 定义组件选项
defineOptions({
  name: 'XRadio'
})

// 定义组件属性
const props = withDefaults(defineProps<XRadioProps>(), {
  modelValue: undefined,
  value: undefined,
  checked: false,
  size: 'default',
  label: '',
  disabled: false,
  autofocus: false,
  required: false,
  name: '',
  status: undefined
})

// 获取 RadioGroup 上下文
const radioGroup = inject<any>('RadioGroup', undefined)

// 判断是否在 RadioGroup 中
const isGroup = computed(() => !!radioGroup)

// Group 相关属性
const groupValue = computed(() => radioGroup?.value || undefined)
const groupDisabled = computed(() => radioGroup?.disabled || false)
const groupSize = computed(() => radioGroup?.size || 'default')
const groupName = computed(() => radioGroup?.name || '')

// 定义组件事件
const emit = defineEmits<XRadioEmits>()

// 处理 change 事件
const handleChange = (e: RadioChangeEvent) => {
  const value = e.target.value
  
  if (isGroup.value) {
    // 在 Group 中使用时，通过 Group 处理值变化
    radioGroup?.onChange(value)
  } else {
    // 单独使用时，直接触发事件
    emit('update:modelValue', value)
    emit('change', value)
  }
}
</script>

<style scoped lang="less">
.xradio-wrapper {
  display: inline-flex;
  align-items: center;
}
</style>