<template>
  <div class="xcascader-wrapper">
    <ACascader
      :value="modelValue"
      @update:value="(value: any) => emit('update:modelValue', value)"
      :options="options"
      :size="size"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :multiple="multiple"
      :change-on-select="changeOnSelect"
      :show-checked-strategy="showCheckedStrategy"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
import { Cascader as ACascader } from 'ant-design-vue'
import type { XCascaderProps, XCascaderEmits } from './types'
import './style.less'

defineOptions({
  name: 'XCascader'
})

// 定义组件属性
withDefaults(defineProps<XCascaderProps>(), {
  modelValue: undefined,
  size: 'middle',
  options: () => [],
  clearable: false,
  disabled: false,
  multiple: false,
  changeOnSelect: false,
  showCheckedStrategy: 'SHOW_PARENT',
  placeholder: '请选择'
})

const emit = defineEmits<XCascaderEmits>()
</script>

<style scoped lang="less">
.xcascader-wrapper {
  display: inline-block;
  width: 100%;
}
</style>