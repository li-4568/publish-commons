<template>
  <div :class="formWrapperClasses" ref="xForm">
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
   * XForm 组件
   * 表单，基于 Ant Design Vue Form 封装
   */
  import { inject, onMounted, reactive, ref, toRaw, computed } from 'vue'
  import { Form, Row } from 'ant-design-vue'
  import FormItemRender from '../XTableSearch/components/FormItemRender.vue'

  // 定义组件名称
  defineOptions({
    name: 'XForm',
    inheritAttrs: false
  })

  // Props 定义
  const props = withDefaults(defineProps<{
    // 配置数据
    paramsData: { formList: any[]; formListSet?: Record<string, any> }
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

  // 注入 hideLoading 方法
  const hideLoading = inject<(() => void) | null>('hideLoading', null)

  // 表单引用
  const formRef = ref()
  const xForm = ref()

  // 表单状态
  const formState = reactive(props.paramsData.formListSet || {})
  // 表单项配置 - 将 prop 映射为 field 以兼容 FormItemRender
  const formFields = computed(() => {
    return props.paramsData.formList.map((item: any) => ({
      ...item,
      field: item.prop || item.field
    }))
  })

  // 组件挂载后执行
  onMounted(() => {
    // 关闭loading
    if (hideLoading && typeof hideLoading === 'function') {
      hideLoading()
    }
  })

  /**
   * 提交表单
   */
  const handleSubmit = () => {
    return new Promise((resolve, reject) => {
      if (!formRef.value) {
        reject({
          success: false,
          data: 'formRefError',
          error: '表单引用不存在'
        })
        return
      }

      formRef.value
        .validateFields()
        .then(() => {
          console.log('✅ 校验通过:', toRaw(formState))
          setTimeout(() => {
            resolve({
              success: true,
              data: toRaw(formState)
            })
          }, 1000)
        })
        .catch((error: any) => {
          console.log('❌ 校验失败:', error)
          reject({
            success: false,
            data: 'validateError',
            error: error
          })
        })
    })
  }

  /**
   * 重置表单
   */
  const resetFields = () => {
    if (formRef.value) {
      formRef.value.resetFields()
    }
  }

  /**
   * 清除表单校验状态
   */
  const clearValidate = () => {
    if (formRef.value) {
      formRef.value.clearValidate()
    }
  }

  /**
   * 计算属性：表单包装器类名
   */
  const formWrapperClasses = computed(() => {
    const classes = ['xform-wrapper']

    if (props.layout) {
      classes.push(`xform-${props.layout}`)
    }

    return classes
  })

  // 暴露给父组件调用
  defineExpose({
    handleSubmit,
    resetFields,
    clearValidate
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