<template>
  <div :class="inputWrapperClasses">
    <!-- 输入框主体 -->
      <Input
        v-model:value="internalValue"
        :size="size"
        :placeholder="placeholder"
        :disabled="disabled"
        :allow-clear="clearable"
        :class="inputClasses"
        :status="computedErrorMessage ? 'error' : undefined"
        v-bind="$attrs"
        style="width: 100%"
        autocomplete="off"
        @input="handleInput"
        @change="handleChange"
        @blur="handleBlur"
        @clear="handleClear"
      >
      <!-- 前缀插槽 -->
      <template v-if="showPrefix" #prefix>
        <span v-if="prefixIcon" class="xinput-prefix-icon">{{ prefixIcon }}</span>
        <slot name="prefix" />
      </template>

      <!-- 后缀插槽 -->
      <template v-if="showSuffix" #suffix>
        <span v-if="suffixIcon" class="xinput-suffix-icon">{{ suffixIcon }}</span>
        <slot name="suffix" />
      </template>

      <!-- 前置标签插槽 -->
      <template v-if="$slots.addonBefore" #addonBefore>
        <slot name="addonBefore" />
      </template>

      <!-- 后置标签插槽 -->
      <template v-if="$slots.addonAfter" #addonAfter>
        <slot name="addonAfter" />
      </template>
    </Input>

    <!-- 错误提示信息 -->
    <div v-if="computedErrorMessage" class="xinput-error-message">
      {{ computedErrorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
  /**
   * XInputFloat 组件
   * 小数点输入框，支持只输入数字和小数点，限制两位小数
   */
  import { computed, ref, useSlots, watch } from 'vue'
  import { Input } from 'ant-design-vue'
  import type { XInputProps, ValidationRule } from './types'

  // 定义组件名称
  defineOptions({
    name: 'XInputFloat',
    inheritAttrs: false
  })

  // Props 定义
  const props = withDefaults(defineProps<XInputProps>(), {
    type: 'text',
    size: 'middle',
    modelValue: '',
    value: '',
    placeholder: '请输入',
    disabled: false,
    readonly: false,
    clearable: false,
    showCount: false,
    required: false,
    rules: () => [],
    validateTrigger: () => ['change', 'blur'],
    validateOnChange: true
  })

  // Emits 定义
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'update:value', value: string): void
    (e: 'input', value: string, event: Event): void
    (e: 'change', value: string, event: Event): void
    (e: 'blur', event: FocusEvent): void
    (e: 'focus', event: FocusEvent): void
    (e: 'clear'): void
    (e: 'validate', valid: boolean, message?: string): void
  }>()

  // 内部值，用于v-model
  const internalValue = ref(props.modelValue)

  // 监听props变化，更新内部值
  watch(
    () => props.modelValue,
    (newValue) => {
      internalValue.value = newValue
    }
  )

  // 获取插槽
  const slots = useSlots()

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
   * 计算属性：是否显示前缀
   */
  const showPrefix = computed(() => {
    return props.prefixIcon || slots.prefix
  })

  /**
   * 计算属性：是否显示后缀
   */
  const showSuffix = computed(() => {
    return props.suffixIcon || slots.suffix
  })

  /**
   * 计算属性：输入框包装器类名
   */
  const inputWrapperClasses = computed(() => {
    const classes = ['xinput-wrapper']

    if (props.size) {
      classes.push(`xinput-${props.size}`)
    }

    if (props.disabled) {
      classes.push('xinput-disabled')
    }

    if (props.required) {
      classes.push('xinput-required')
    }

    if (computedErrorMessage.value) {
      classes.push('xinput-has-error')
    }

    return classes
  })

  /**
   * 计算属性：输入框类名
   */
  const inputClasses = computed(() => {
    const classes = ['xinput']

    if (props.type) {
      classes.push(`xinput-type-${props.type}`)
    }

    return classes
  })

  /**
   * 处理输入事件
   */
  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    let value = target.value
    
    // 只允许输入数字和小数点
    value = value.replace(/[^0-9.]/g, '')
    
    // 只保留第一个小数点，其余删除
    const firstDotIndex = value.indexOf('.')
    if (firstDotIndex !== -1) {
      const beforeDot = value.slice(0, firstDotIndex)
      const afterDot = value.slice(firstDotIndex).replace(/\./g, '')
      value = beforeDot + '.' + afterDot
    }
    
    // 分割整数和小数部分
    const parts = value.split('.')
    let integerPart = parts[0]
    let decimalPart = parts.length > 1 ? parts[1] : ''
    
    // 整数部分去前导零
    if (integerPart) {
      integerPart = integerPart.replace(/^0+/, '') || '0'
    }
    
    value = decimalPart ? `${integerPart}.${decimalPart}` : integerPart
    
    // 特殊情况处理：. → 0.
    if (value === '.') {
      value = '0.'
    } else if (value.startsWith('.')) {
      value = '0' + value
    }
    
    // 限制最多两位小数
    if (decimalPart) {
      value = `${integerPart}.${decimalPart.slice(0, 2)}`
    }
    
    // 同步更新输入框显示值
    if (target.value !== value) {
      target.value = value
    }
    
    // 更新内部值
    internalValue.value = value
    
    // 触发事件
    emit('update:modelValue', value)
    emit('update:value', value)
    emit('input', value, e)

    // 根据触发时机决定是否校验
    if (props.validateOnChange && props.validateTrigger?.includes('change')) {
      runValidation(value)
    }
  }

  /**
   * 处理值改变事件
   */
  const handleChange = (e: Event) => {
    const value = String(internalValue.value)
    emit('change', value, e)

    // 失焦时校验
    if (props.validateTrigger?.includes('blur')) {
      runValidation(value)
    }
  }

  /**
   * 处理失焦事件
   */
  const handleBlur = (e: FocusEvent) => {
    const value = String(internalValue.value)
    emit('blur', e)

    // 失焦时校验
    if (props.validateTrigger?.includes('blur')) {
      runValidation(value)
    }
  }

  /**
   * 处理清除事件
   */
  const handleClear = () => {
    internalValue.value = ''
    emit('update:modelValue', '')
    emit('update:value', '')
    emit('clear')
    internalErrorMessage.value = undefined
    emit('validate', true)
  }

  // 内置校验规则的正则表达式
  const validationPatterns = {
    number: /^-?\d+(\.\d+)?$/
  }

  /**
   * 内置校验规则消息
   */
  const defaultValidationMessages = {
    required: '此项为必填项',
    number: '请输入有效的数字'
  }

  /**
   * 执行单个校验规则
   */
  const validateRule = (value: string | number, rule: ValidationRule): string | null => {
    // 如果规则未启用，跳过
    if (rule.enabled === false) {
      return null
    }

    // 如果值为空，只校验必填规则
    const isEmpty = value === '' || value === null || value === undefined

    // 必填规则校验
    if (rule.type === 'required' || props.required) {
      if (isEmpty) {
        return rule.message || defaultValidationMessages.required
      }
    }

    // 如果值为空且不是必填规则，直接通过
    if (isEmpty) {
      return null
    }

    const strValue = String(value)

    // 根据规则类型进行校验
    switch (rule.type) {
      case 'number':
        if (!validationPatterns.number.test(strValue)) {
          return rule.message || defaultValidationMessages.number
        }
        break
    }

    // 自定义校验函数
    if (rule.validator) {
      const result = rule.validator(value)
      if (result !== true) {
        return typeof result === 'string' ? result : defaultValidationMessages.number
      }
    }

    return null
  }

  /**
   * 执行所有校验规则
   */
  const validate = (value: string | number): { valid: boolean; message?: string } => {
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
        return { valid: false, message: defaultValidationMessages.required }
      }
    }

    return { valid: true }
  }

  /**
   * 执行校验并更新状态
   */
  const runValidation = (value: string | number) => {
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
   * 监听值变化，触发校验
   */
  watch(
    () => internalValue.value,
    (newValue) => {
      if (props.validateOnChange && props.validateTrigger?.includes('change')) {
        runValidation(String(newValue))
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
      return runValidation(String(internalValue.value))
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
  @import './style.less';
</style>