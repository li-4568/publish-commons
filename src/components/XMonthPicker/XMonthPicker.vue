<template>
  <div :class="pickerWrapperClasses">
    <!-- 月份选择器主体 -->
    <DatePicker
      v-model:value="internalValue"
      :locale="locale"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      :allow-clear="clearable"
      :bordered="bordered"
      :class="pickerClasses"
      :status="computedErrorMessage ? 'error' : undefined"
      picker="month"
      :format="format"
      v-bind="$attrs"
      style="width: 100%"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
      @clear="handleClear"
    />

    <!-- 错误提示信息 -->
    <div v-if="computedErrorMessage" class="xmonthpicker-error-message">
      {{ computedErrorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
  /**
   * XMonthPicker 组件
   * 月份选择器，基于 Ant Design Vue DatePicker 封装
   */
  import { computed, ref, watch } from 'vue'
  import { DatePicker } from 'ant-design-vue'
  import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
  import dayjs from 'dayjs'
  import 'dayjs/locale/zh-cn'

  // 强制设置 dayjs locale
  dayjs.locale('zh-cn')

  // 定义组件名称
  defineOptions({
    name: 'XMonthPicker',
    inheritAttrs: false
  })

  // Props 定义
  const props = withDefaults(defineProps<{
    // 组件大小
    size?: 'small' | 'middle' | 'large'
    // 绑定值
    modelValue?: string | null
    // 绑定值（兼容旧版）
    value?: string | null
    // 占位符
    placeholder?: string
    // 是否禁用
    disabled?: boolean
    // 是否只读
    readonly?: boolean
    // 是否可清除
    clearable?: boolean
    // 是否显示边框
    bordered?: boolean
    // 显示格式
    format?: string | ((date: dayjs.Dayjs | string | null) => string)
    // 值格式
    valueFormat?: string
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
    placeholder: '请选择月份',
    disabled: false,
    readonly: false,
    clearable: false,
    bordered: true,
    format: 'M月',
    valueFormat: 'YYYY-MM',
    required: false,
    rules: () => [],
    validateTrigger: () => ['change', 'blur'],
    validateOnChange: true
  })

  // Emits 定义
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string | null): void
    (e: 'update:value', value: string | null): void
    (e: 'change', value: string | null, date: dayjs.Dayjs | string | null): void
    (e: 'blur', event: FocusEvent): void
    (e: 'focus', event: FocusEvent): void
    (e: 'clear'): void
    (e: 'validate', valid: boolean, message?: string): void
  }>()



  /**
   * 将字符串转换为 dayjs 对象
   */
  const parseValue = (val: string | null | undefined): dayjs.Dayjs | undefined => {
    if (!val) return undefined
    const parsed = dayjs(val, 'YYYY-MM')
    return parsed.isValid() ? parsed : undefined
  }

  // 内部值，用于v-model - DatePicker 需要 dayjs 对象或 undefined
  const internalValue = ref<dayjs.Dayjs | undefined>(parseValue(props.modelValue || props.value))

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
    const classes = ['xmonthpicker-wrapper']

    if (props.size) {
      classes.push(`xmonthpicker-${props.size}`)
    }

    if (props.disabled) {
      classes.push('xmonthpicker-disabled')
    }

    if (props.required) {
      classes.push('xmonthpicker-required')
    }

    if (computedErrorMessage.value) {
      classes.push('xmonthpicker-has-error')
    }

    return classes
  })

  /**
   * 计算属性：选择器类名
   */
  const pickerClasses = computed(() => {
    const classes = ['xmonthpicker']

    return classes
  })

  /**
   * 处理值改变事件
   */
  const handleChange = (value: dayjs.Dayjs | string | null, dateString: string) => {
    internalValue.value = value && dayjs(value).isValid() ? dayjs(value) : undefined
    const emitValue = dateString || null
    emit('update:modelValue', emitValue)
    emit('update:value', emitValue)
    emit('change', emitValue, value as dayjs.Dayjs | null)

    // 根据触发时机决定是否校验
    if (props.validateOnChange && props.validateTrigger?.includes('change')) {
      runValidation(dateString || undefined)
    }
  }

  /**
   * 处理失焦事件
   */
  const handleBlur = (e: FocusEvent) => {
    emit('blur', e)

    // 失焦时校验
    if (props.validateTrigger?.includes('blur')) {
      const valueStr = internalValue.value?.isValid?.() ? internalValue.value.format('YYYY-MM') : undefined
      runValidation(valueStr)
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
  const runValidation = (value: string | undefined) => {
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
  const validate = (value: string | undefined): { valid: boolean; message?: string } => {
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
      if (value === '' || value === null || value === undefined) {
        return { valid: false, message: '此项为必填项' }
      }
    }

    return { valid: true }
  }

  /**
   * 执行单个校验规则
   */
  const validateRule = (value: string | undefined, rule: any): string | null => {
    // 如果规则未启用，跳过
    if (rule.enabled === false) {
      return null
    }

    // 如果值为空，只校验必填规则
    const isEmpty = value === '' || value === undefined

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
      internalValue.value = parseValue(newValue)
    }
  )

  /**
   * 监听props.value变化（兼容旧版）
   */
  watch(
    () => props.value,
    (newValue) => {
      internalValue.value = parseValue(newValue)
    }
  )

  /**
   * 监听值变化，触发校验
   */
  watch(
    () => internalValue.value,
    (newValue) => {
      if (props.validateOnChange && props.validateTrigger?.includes('change')) {
        const valueStr = newValue?.isValid?.() ? newValue.format('YYYY-MM') : undefined
        runValidation(valueStr)
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
      const valueStr = internalValue.value?.isValid?.() ? internalValue.value.format('YYYY-MM') : undefined
      return runValidation(valueStr)
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
  .xmonthpicker-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;

    &.xmonthpicker-has-error {
      .ant-picker {
        border-color: @error-color;
      }
    }

    &.xmonthpicker-disabled {
      opacity: 0.6;
    }

    &.xmonthpicker-required {
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

  .xmonthpicker {
    width: 100%;
  }

  .xmonthpicker-error-message {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    color: @error-color;
    font-size: 12px;
    line-height: 1.5;
  }
</style>