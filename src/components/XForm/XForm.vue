<template>
  <div :class="formWrapperClasses" ref="xFormRef">
    <Form
      ref="formRef"
      name="form"
      :model="formState"
      :colon="colon"
      :label-align="labelAlign"
      :hide-required-mark="hideRequiredMark"
      :layout="layout"
      :label-col="labelCol"
      v-bind="$attrs"
    >
      <Row :gutter="24" class="form-row">
        <FormItemRender
          v-for="item in formFields"
          :key="item.prop"
          :item="item"
          :formState="formState"
          :rowSpan="item.colSpan || 24"
          :isLabel="true"
        />
      </Row>
    </Form>
  </div>
</template>

<script setup lang="ts">
/**
 * XForm 表单组件
 * 基于 Ant Design Vue Form 封装，支持配置化表单生成
 */
import { computed, ref } from 'vue'
import { Form, Row } from 'ant-design-vue'
import FormItemRender from '../XTableSearch/components/FormItemRender.vue'
import { useForm } from './composables'
import type { FormParams } from './composables'

// 定义组件名称
defineOptions({
  name: 'XForm',
  inheritAttrs: false
})

// Props 定义
const props = withDefaults(defineProps<{
  // 配置数据
  paramsData: FormParams
  // 是否显示 label 后面的冒号
  colon?: boolean
  // 隐藏所有表单项的必选标记
  hideRequiredMark?: boolean
  // label 标签的文本对齐方式
  labelAlign?: 'left' | 'right'
  // 表单布局
  layout?: 'horizontal' | 'vertical' | 'inline'
  // label 标签布局
  labelCol?: Record<string, any>
}>(), {
  colon: true,
  hideRequiredMark: false,
  labelAlign: 'right',
  layout: 'horizontal'
})

// 使用 composable
const {
  formRef,
  formState,
  formFields,
  submit,
  reset,
  clearValidate,
  setFieldValue,
  getFieldValue,
  setFieldsValue,
} = useForm({ paramsData: props.paramsData })

// 模板引用
const xFormRef = ref()

// 表单包装器类名
const formWrapperClasses = computed(() => {
  return ['xform-wrapper', `xform-${props.layout}`]
})

// 暴露给父组件
defineExpose({
  // 核心方法
  submit,
  reset,
  clearValidate,
  setFieldValue,
  getFieldValue,
  setFieldsValue,
  // 兼容旧版本的方法名
  handleSubmit: submit,
  resetFields: reset,
  // 引用
  formRef,
  xFormRef,
})
</script>

<style scoped lang="less">
.xform-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  border: 1px solid #e0e0e6;
  background: #fff;
  border-radius: 8px;

  &.xform-horizontal {
    // 水平布局样式
  }

  &.xform-vertical {
    // 垂直布局样式
  }

  &.xform-inline {
    // 内联布局样式
  }
}

.form-row {
  padding: 10px;
}

:deep(.ant-form-item) {
  margin-bottom: 20px;
}

:deep(.ant-form-item-control) {
  min-width: 128px;
}

:deep(.ant-form-item-explain-error) {
  font-size: 12px;
}

:deep(.ant-form-item-label > label) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 84px;
  line-height: 32px;
  display: block;
}
</style>
