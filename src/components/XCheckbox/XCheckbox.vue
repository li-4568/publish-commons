<template>
  <div class="xcheckbox-wrapper">
    <ACheckbox
      :checked="isGroup ? groupValue.includes(props.optionValue ?? props.value) : (props.modelValue ?? props.value)"
      :value="props.optionValue"
      :disabled="props.disabled || (isGroup && groupDisabled)"
      :size="props.size || (isGroup && groupSize)"
      :indeterminate="props.indeterminate"
      :autofocus="props.autofocus"
      :required="props.required"
      :status="props.status"
      @change="handleChange"
      @click="(e: MouseEvent) => emit('click', e)"
      @focus="(e: FocusEvent) => emit('focus', e)"
      @blur="(e: FocusEvent) => emit('blur', e)"
      v-bind="$attrs"
    >
      <template v-if="props.label">{{ props.label }}</template>
      <slot v-else></slot>
    </ACheckbox>
  </div>
</template>

<script setup lang="ts">
import { Checkbox as ACheckbox } from 'ant-design-vue'
import { inject, computed } from 'vue'
import type { CheckboxChangeEvent } from 'ant-design-vue/es/checkbox/interface'
import type { XCheckboxProps, XCheckboxEmits } from './types'
import './style.less'

defineOptions({
  name: 'XCheckbox'
})

// 定义组件属性
const props = withDefaults(defineProps<XCheckboxProps>(), {
  modelValue: undefined,
  value: undefined,
  optionValue: undefined,
  size: 'middle',
  label: '',
  disabled: false,
  indeterminate: false,
  autofocus: false,
  required: false,
  status: undefined
})

// 获取 CheckboxGroup 上下文（使用字符串键）
const checkboxGroup = inject<any>('CheckboxGroup', undefined)

// 判断是否在 CheckboxGroup 中
const isGroup = computed(() => !!checkboxGroup)

// Group 相关属性
const groupValue = computed(() => checkboxGroup?.value || [])
const groupDisabled = computed(() => checkboxGroup?.disabled || false)
const groupSize = computed(() => checkboxGroup?.size || 'middle')

// 定义组件事件
const emit = defineEmits<XCheckboxEmits>()

// 处理 change 事件
const handleChange = (e: CheckboxChangeEvent) => {
  const checked = e.target.checked

  if (isGroup.value) {
    // 在 Group 中使用时，通过 Group 处理值变化
    const key = props.optionValue ?? props.value
    checkboxGroup?.onChange(checked ? [...groupValue.value, key] : groupValue.value.filter((v: any) => v !== key))
  } else {
    // 单独使用时，直接触发事件
    emit('update:modelValue', checked)
    emit('update:value', checked)
    emit('change', checked)
  }
}
</script>

<style scoped lang="less">
.xcheckbox-wrapper {
  display: inline-flex;
  align-items: center;
}
</style>