import { ref, computed, watch, useSlots } from 'vue'
import type { ValidationRule, ValidationTrigger, XInputProps, XInputEmits } from '../types'

export interface UseInputOptions {
  props: XInputProps
  emit: XInputEmits
}

/**
 * 执行单个校验规则
 */
const validateRule = (value: string, rule: ValidationRule): string | null => {
  if (rule.enabled === false) return null

  const strValue = String(value)

  switch (rule.type) {
    case 'required':
      if (!strValue.trim()) {
        return rule.message || '该字段不能为空'
      }
      break
    case 'email':
      if (strValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(strValue)) {
        return rule.message || '请输入正确的邮箱格式'
      }
      break
    case 'phone':
      if (strValue && !/^1[3-9]\d{9}$/.test(strValue)) {
        return rule.message || '请输入正确的手机号'
      }
      break
    case 'url':
      try {
        if (strValue) new URL(strValue)
      } catch {
        return rule.message || '请输入正确的URL格式'
      }
      break
    case 'number':
      if (strValue && isNaN(Number(strValue))) {
        return rule.message || '请输入数字'
      }
      break
    case 'minLength':
      if (strValue.length < (rule.value || 0)) {
        return rule.message || `长度不能少于 ${rule.value} 个字符`
      }
      break
    case 'maxLength':
      if (strValue.length > (rule.value || Infinity)) {
        return rule.message || `长度不能超过 ${rule.value} 个字符`
      }
      break
    case 'pattern':
      if (strValue && rule.value && !new RegExp(rule.value).test(strValue)) {
        return rule.message || '格式不正确'
      }
      break
  }

  // 自定义校验函数
  if (rule.validator) {
    const result = rule.validator(value)
    if (result !== true) {
      return typeof result === 'string' ? result : (rule.message || '校验失败')
    }
  }

  return null
}

/**
 * 输入框通用逻辑
 */
export function useInput({ props, emit }: UseInputOptions) {
  const slots = useSlots()
  const internalErrorMessage = ref<string>()

  // 计算属性：最终显示的错误信息
  const computedErrorMessage = computed(() => {
    return props.errorMessage || internalErrorMessage.value
  })

  // 是否有前缀/后缀
  const showPrefix = computed(() => !!props.prefixIcon || !!slots.prefix)
  const showSuffix = computed(() => !!props.suffixIcon || !!slots.suffix)

  // 计算属性：输入框包装器类名
  const inputWrapperClasses = computed(() => {
    const classes = ['xinput-wrapper']
    if (props.size) classes.push(`xinput-${props.size}`)
    if (computedErrorMessage.value) classes.push('xinput-error')
    return classes
  })

  // 计算属性：输入框类名
  const inputClasses = computed(() => {
    const classes = ['xinput']
    if (props.size) classes.push(`xinput-${props.size}`)
    return classes
  })

  /**
   * 执行校验
   */
  const validate = (trigger?: ValidationTrigger): { valid: boolean; message?: string } => {
    const value = String(props.modelValue || props.value || '')
    const triggers = trigger ? [trigger] : (props.validateTrigger || ['change', 'blur'])

    // 检查必填
    if (props.required && !value.trim()) {
      internalErrorMessage.value = '该字段不能为空'
      emit('validate', false, internalErrorMessage.value)
      return { valid: false, message: internalErrorMessage.value }
    }

    // 执行规则校验
    for (const rule of props.rules || []) {
      // 检查触发时机
      if (trigger && !triggers.includes(trigger)) continue

      const error = validateRule(value, rule)
      if (error) {
        internalErrorMessage.value = error
        emit('validate', false, error)
        return { valid: false, message: error }
      }
    }

    internalErrorMessage.value = undefined
    emit('validate', true)
    return { valid: true }
  }

  /**
   * 清除校验状态
   */
  const clearValidate = () => {
    internalErrorMessage.value = undefined
  }

  // 监听外部错误信息变化
  watch(() => props.errorMessage, () => {
    if (props.errorMessage !== undefined) {
      internalErrorMessage.value = undefined
    }
  })

  // 监听值变化自动校验
  watch(() => props.modelValue, () => {
    if (props.validateOnChange && internalErrorMessage.value) {
      validate('change')
    }
  })

  return {
    slots,
    internalErrorMessage,
    computedErrorMessage,
    showPrefix,
    showSuffix,
    inputWrapperClasses,
    inputClasses,
    validate,
    clearValidate,
  }
}

/**
 * 处理输入事件
 */
export function useInputEvents({ emit }: UseInputOptions) {
  const handleUpdateValue = (val: string) => {
    emit('update:modelValue', val)
    emit('update:value', val)
  }

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('input', target.value, e)
  }

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('change', target.value, e)
  }

  const handleFocus = (e: FocusEvent) => {
    emit('focus', e)
  }

  const handleBlur = (e: FocusEvent) => {
    emit('blur', e)
  }

  const handlePressEnter = (e: KeyboardEvent) => {
    emit('pressEnter', e)
  }

  const handleClear = () => {
    emit('update:modelValue', '')
    emit('update:value', '')
    emit('clear')
  }

  return {
    handleUpdateValue,
    handleInput,
    handleChange,
    handleFocus,
    handleBlur,
    handlePressEnter,
    handleClear,
  }
}
