<template>
  <Col :span="props.rowSpan">
    <FormItem
      :label="props.item.label"
      :name="props.item.field"
      :rules="props.item.rules"
      :help="props.item.help"
      :extra="props.item.extra"
      :tooltip="props.item.tooltip"
    >
      <!-- radio类型使用slot方式渲染 -->
      <XRadioGroup
        v-if="props.item.type === 'radio'"
        v-model:value="props.formState[props.item.field]"
        v-bind="componentProps"
        v-on="props.item.events || {}"
      >
        <XRadio
          v-for="option in props.item.radioOptions"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </XRadio>
      </XRadioGroup>
      <!-- 其他类型使用动态组件 -->
      <component
        v-else
        :is="currentComponent"
        v-model:value="props.formState[props.item.field]"
        v-bind="componentProps"
        v-on="props.item.events || {}"
      ></component>
    </FormItem>
  </Col>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FormItem, Col } from 'ant-design-vue'
import XInput from '../../XInput/XInput.vue'
import XSelect from '../../XSelect/XSelect.vue'
import XDatePicker from '../../XDatePicker/XDatePicker.vue'
import XCascader from '../../XCascader/XCascader.vue'
import XCheckbox from '../../XCheckbox/XCheckbox.vue'
import XRadioGroup from '../../XRadio/XRadioGroup.vue'
import XRadio from '../../XRadio/XRadio.vue'
import XTreeSelect from '../../XTreeSelect/XTreeSelect.vue'
import type { SearchItem } from '../types'

const props = defineProps<{
  item: SearchItem
  formState: Record<string, any>
  rowSpan: number
}>()

// 计算当前组件
const currentComponent = computed(() => {
  switch (props.item.type) {
    case 'input':
      return XInput
    case 'select':
      return XSelect
    case 'date':
      return XDatePicker
    case 'datetime':
      return XDatePicker
    case 'cascader':
      return XCascader
    case 'checkbox':
      return XCheckbox
    case 'radio':
      return XRadioGroup
    case 'treeSelect':
      return XTreeSelect
    default:
      return null
  }
})

// 计算组件属性
const componentProps = computed(() => {
  const baseProps = {
    placeholder: props.item.placeholder || `请${props.item.type === 'input' ? '输入' : '选择'}${props.item.label}`,
    ...props.item.props
  }

  // 根据不同类型添加特定属性
  switch (props.item.type) {
    case 'select':
      return {
        ...baseProps,
        options: props.item.options
      }
    case 'date':
      return {
        ...baseProps,
        type: 'date'
      }
    case 'datetime':
      return {
        ...baseProps,
        type: 'datetime'
      }
    case 'cascader':
      return {
        ...baseProps,
        options: props.item.cascaderOptions
      }
    case 'checkbox':
      return {
        ...baseProps,
        label: props.item.label
      }
    case 'treeSelect':
      return {
        ...baseProps,
        treeData: props.item.treeData
      }
    default:
      return baseProps
  }
})
</script>