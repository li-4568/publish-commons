<template>
  <div :class="pickerWrapperClasses">
    <!-- 日期范围选择器主体 -->
    <ConfigProvider :locale="zhCN">
      <RangePicker
        v-model:value="internalValue"
        :size="size"
        :placeholder="placeholder"
        :disabled="disabled"
        :allow-clear="clearable"
        :bordered="bordered"
        :class="pickerClasses"
        :status="computedErrorMessage ? 'error' : undefined"
        :format="format"
        :value-format="valueFormat"
        :show-time="showTime"
        v-bind="$attrs"
        style="width: 100%"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
        @clear="handleClear"
      />
    </ConfigProvider>

    <!-- 错误提示信息 -->
    <div v-if="computedErrorMessage" class="xrangepicker-error-message">
      {{ computedErrorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
  /**
   * XRangePicker 组件
   * 日期范围选择器，基于 Ant Design Vue RangePicker 封装
   */
  import { computed, ref, watch } from 'vue'
  import { RangePicker, ConfigProvider } from 'ant-design-vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
  import dayjs from 'dayjs'
  import 'dayjs/locale/zh-cn'

  // 强制设置 locale
  if (dayjs.locale() !== 'zh-cn') {
    dayjs.locale('zh-cn')
  }

  // 定义组件名称
  defineOptions({
    name: 'XRangePicker',
    inheritAttrs: false
  })

  // Props 定义
  const props = withDefaults(defineProps<{
    // 组件大小
    size?: 'small' | 'middle' | 'large'
    // 绑定值
    modelValue?: [string, string] | null
    // 绑定值（兼容旧版）
    value?: [string, string] | null
    // 占位符
    placeholder?: [string, string]
    // 是否禁用
    disabled?: boolean
    // 是否只读
    readonly?: boolean
    // 是否可清除
    clearable?: boolean
    // 是否显示边框
    bordered?: boolean
    // 显示格式
    format?: string
    // 值格式
    valueFormat?: string
    // 是否显示时间
    showTime?: boolean
    // 是否必填
    required?: boolean
    // 校验规则
    rules?: any[]
    // 校验触发时机
    validateTrigger?: string[]
    // 值变化时是否校验
    validateOnChange?: boolean
    // 错误信息
    errorMessage?: string
  }>(), {
    size: 'middle',
    modelValue: null,
    value: null,
    placeholder: () => ['开始日期', '结束日期'],
    disabled: false,
    readonly: false,
    clearable: false,
    bordered: true,
    format: 'YYYY-MM-DD',
    valueFormat: 'YYYY-MM-DD',
    showTime: false,
    required: false,
    rules: () => [],
    validateTrigger: () => ['change', 'blur'],
    validateOnChange: true
  })

  // Emits 定义
  const emit = defineEmits<{
    (e: 'update:modelValue', value: [string, string] | null): void
    (e: 'update:value', value: [string, string] | null): void
    (e: 'change', value: [string, string] | null, dates: [string, string] | [dayjs.Dayjs, dayjs.Dayjs] | null): void
    (e: 'blur', event: FocusEvent): void
    (e: 'focus', event: FocusEvent): void
    (e: 'clear'): void
    (e: 'validate', valid: boolean, message?: string): void
  }>()

  // 内部值，用于v-model
  const internalValue = ref<[string, string] | [dayjs.Dayjs, dayjs.Dayjs] | undefined>(props.modelValue || props.value || undefined)

  // 内部错误信息状态
  const internalErrorMessage = ref<string>()

  /**
   * 计算属性：最终显示的错误信息
   * 优先级：props.errorMessage > 内部校验生成的错误信息
   */
  const computedErrorMessage = computed(() => {
    return props.errorMessage || internalErrorMessage.value
  })

  /**
   * 计算属性：选择器包装器类名
   */
  const pickerWrapperClasses = computed(() => {
    const classes = ['xrangepicker-wrapper']

    if (props.size) {
      classes.push(`xrangepicker-${props.size}`)
    }

    if (props.disabled) {
      classes.push('xrangepicker-disabled')
    }

    if (props.required) {
      classes.push('xrangepicker-required')
    }

    if (computedErrorMessage.value) {
      classes.push('xrangepicker-has-error')
    }

    return classes
  })

  /**
   * 计算属性：选择器类名
   */
  const pickerClasses = computed(() => {
    const classes = ['xrangepicker']

    return classes
  })

  /**
   * 处理值改变事件
   */
  const handleChange = (value: [string, string] | [dayjs.Dayjs, dayjs.Dayjs], dateStrings: [string, string]) => {
    internalValue.value = dateStrings || undefined
    emit('update:modelValue', dateStrings || null)
    emit('update:value', dateStrings || null)
    emit('change', dateStrings || null, value)

    // 根据触发时机决定是否校验
    if (props.validateOnChange && props.validateTrigger?.includes('change')) {
      runValidation(dateStrings || null)
    }
  }

  /**
   * 处理失焦事件
   */
  const handleBlur = (e: FocusEvent) => {
    emit('blur', e)

    // 失焦时校验
    if (props.validateTrigger?.includes('blur')) {
      runValidation(internalValue.value)
    }
  }

  /**
   * 处理聚焦事件
   */
  const handleFocus = (e: FocusEvent) => {
    emit('focus', e)
  }

  /**
   * 处理清除事件
   */
  const handleClear = () => {
    internalValue.value = undefined
    emit('update:modelValue', null)
    emit('update:value', null)
    emit('clear')
    internalErrorMessage.value = undefined
    emit('validate', true)
  }

  /**
   * 执行校验并更新状态
   */
  const runValidation = (value: [string, string] | [dayjs.Dayjs, dayjs.Dayjs] | null | undefined) => {
    // 如果禁用或只读，跳过校验
    if (props.disabled || props.readonly) {
      internalErrorMessage.value = undefined
      emit('validate', true)
      return
    }

    const result = validate(value)
    internalErrorMessage.value = result.message
    emit('validate', result.valid, result.message)
    return result
  }

  /**
   * 执行所有校验规则
   */
  const validate = (value: [string, string] | [dayjs.Dayjs, dayjs.Dayjs] | null | undefined): { valid: boolean; message?: string } => {
    // 如果没有规则，直接通过
    if (!props.rules || props.rules.length === 0) {
      return { valid: true }
    }

    // 依次执行所有规则
    for (const rule of props.rules) {
      const error = validateRule(value, rule)
      if (error) {
        return { valid: false, message: error }
      }
    }

    // 如果有必填属性但没有必填规则，额外校验
    if (props.required && !props.rules.some((rule) => rule.type === 'required')) {
      if (!value || value[0] === '' || value[1] === '') {
        return { valid: false, message: '此项为必填项' }
      }
    }

    return { valid: true }
  }

  /**
   * 执行单个校验规则
   */
  const validateRule = (value: [string, string] | [dayjs.Dayjs, dayjs.Dayjs] | null | undefined, rule: any): string | null => {
    // 如果规则未启用，跳过
    if (rule.enabled === false) {
      return null
    }

    // 如果值为空，只校验必填规则
    const isEmpty = !value || value[0] === '' || value[1] === ''

    // 必填规则校验
    if (rule.type === 'required' || props.required) {
      if (isEmpty) {
        return rule.message || '此项为必填项'
      }
    }

    // 如果值为空且不是必填规则，直接通过
    if (isEmpty) {
      return null
    }

    // 自定义校验函数
    if (rule.validator) {
      const result = rule.validator(value)
      if (result !== true) {
        return typeof result === 'string' ? result : '校验失败'
      }
    }

    return null
  }

  /**
   * 监听props变化，更新内部值
   */
  watch(
    () => props.modelValue,
    (newValue) => {
      internalValue.value = newValue || undefined
    }
  )

  /**
   * 监听值变化，触发校验
   */
  watch(
    () => internalValue.value,
    (newValue) => {
      if (props.validateOnChange && props.validateTrigger?.includes('change')) {
        runValidation(newValue)
      }
    },
    { immediate: false }
  )

  /**
   * 暴露公共方法
   */
  defineExpose({
    /**
     * 手动触发校验
     */
    validate: () => {
      return runValidation(internalValue.value)
    },

    /**
     * 清除校验状态
     */
    clearValidate: () => {
      internalErrorMessage.value = undefined
    }
  })
</script>

<style scoped lang="less">
  .xrangepicker-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;

    &.xrangepicker-has-error {
      .ant-picker {
        border-color: @error-color;
      }
    }

    &.xrangepicker-disabled {
      opacity: 0.6;
    }

    &.xrangepicker-required {
      .ant-picker-label::before {
        display: inline-block;
        margin-right: 4px;
        color: @error-color;
        font-size: 14px;
        font-family: SimSun, serif;
        line-height: 1;
        content: '*';
      }
    }
  }

  .xrangepicker {
    width: 100%;
  }

  .xrangepicker-error-message {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    color: @error-color;
    font-size: 12px;
    line-height: 1.5;
  }
</style>