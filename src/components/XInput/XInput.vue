<template>
  <div :class="inputWrapperClasses">
    <!-- 输入框主体 -->
    <Input
      :type="inputType"
      :size="size"
      :value="value ?? modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :show-count="showCount"
      :allow-clear="clearable"
      :class="inputClasses"
      :status="computedErrorMessage ? 'error' : undefined"
      v-bind="$attrs"
      style="width: 100%"
      @update:value="handleUpdateValue"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @pressEnter="handlePressEnter"
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
   * XInput 组件
   * 基于 Ant Design Vue Input 封装，增加错误提示、图标等功能
   */
  import { computed, ref, useSlots, watch } from 'vue'
  import { Input } from 'ant-design-vue'
  import type { XInputProps, XInputEmits, ValidationRule } from './types'

  // 定义组件名称
  defineOptions({
    name: 'XInput',
    inheritAttrs: false
  })

  // Props 定义
  const props = withDefaults(defineProps<XInputProps>(), {
    type: 'text',
    size: 'middle',
    modelValue: '',
    value: '',
    placeholder: '',
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
  const emit = defineEmits<XInputEmits>()

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
   * 计算属性：输入框类型
   * 处理 textarea 类型
   */
  const inputType = computed(() => {
    if (props.type === 'textarea') {
      return undefined // textarea 使用 Textarea 组件
    }
    return props.type
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

  // 内置校验规则的正则表达式
  const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^1[3-9]\d{9}$/,
    url: /^https?:\/\/[^\s.]+(\.[^\s.]+)+[^\s]*$/,
    number: /^-?\d+(\.\d+)?$/
  }

  /**
   * 内置校验规则消息
   */
  const defaultValidationMessages = {
    required: '此项为必填项',
    email: '请输入有效的邮箱地址',
    phone: '请输入有效的手机号码',
    url: '请输入有效的网址',
    number: '请输入有效的数字',
    minLength: '输入长度不能少于 {value} 个字符',
    maxLength: '输入长度不能超过 {value} 个字符',
    pattern: '输入格式不符合要求'
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
      case 'email':
        if (!validationPatterns.email.test(strValue)) {
          return rule.message || defaultValidationMessages.email
        }
        break

      case 'phone':
        if (!validationPatterns.phone.test(strValue)) {
          return rule.message || defaultValidationMessages.phone
        }
        break

      case 'url':
        if (!validationPatterns.url.test(strValue)) {
          return rule.message || defaultValidationMessages.url
        }
        break

      case 'number':
        if (!validationPatterns.number.test(strValue)) {
          return rule.message || defaultValidationMessages.number
        }
        break

      case 'minLength':
        if (typeof rule.value === 'number' && strValue.length < rule.value) {
          return (
            rule.message ||
            defaultValidationMessages.minLength.replace('{value}', String(rule.value))
          )
        }
        break

      case 'maxLength':
        if (typeof rule.value === 'number' && strValue.length > rule.value) {
          return (
            rule.message ||
            defaultValidationMessages.maxLength.replace('{value}', String(rule.value))
          )
        }
        break

      case 'pattern':
        if (rule.value instanceof RegExp && !rule.value.test(strValue)) {
          return rule.message || defaultValidationMessages.pattern
        }
        break
    }

    // 自定义校验函数
    if (rule.validator) {
      const result = rule.validator(value)
      if (result !== true) {
        return typeof result === 'string' ? result : defaultValidationMessages.pattern
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
   * 处理值更新
   */
  const handleUpdateValue = (value: string) => {
    emit('update:modelValue', value)
    emit('update:value', value)
  }

  /**
   * 处理输入事件
   */
  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    const value = target.value
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
    const target = e.target as HTMLInputElement
    const value = target.value
    emit('change', value, e)

    // 失焦时校验
    if (props.validateTrigger?.includes('blur')) {
      runValidation(value)
    }
  }

  /**
   * 处理聚焦事件
   */
  const handleFocus = (e: FocusEvent) => {
    emit('focus', e)
  }

  /**
   * 处理失焦事件
   */
  const handleBlur = (e: FocusEvent) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    emit('blur', e)

    // 失焦时校验
    if (props.validateTrigger?.includes('blur')) {
      runValidation(value)
    }
  }

  /**
   * 处理回车事件
   */
  const handlePressEnter = (e: KeyboardEvent) => {
    emit('pressEnter', e)
  }

  /**
   * 处理清除事件
   */
  const handleClear = () => {
    emit('clear')
    internalErrorMessage.value = undefined
    emit('validate', true)
  }

  /**
   * 监听值变化，触发校验
   */
  watch(
    () => props.modelValue,
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
      return runValidation(props.modelValue)
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
