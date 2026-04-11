<template>
  <div :class="inputWrapperClasses">
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
      @blur="handleBlurWithValidate"
      @pressEnter="handlePressEnter"
      @clear="handleClear"
    >
      <template v-if="showPrefix" #prefix>
        <span v-if="prefixIcon" class="xinput-prefix-icon">{{ prefixIcon }}</span>
        <slot name="prefix" />
      </template>

      <template v-if="showSuffix" #suffix>
        <span v-if="suffixIcon" class="xinput-suffix-icon">{{ suffixIcon }}</span>
        <slot name="suffix" />
      </template>

      <template v-if="$slots.addonBefore" #addonBefore>
        <slot name="addonBefore" />
      </template>

      <template v-if="$slots.addonAfter" #addonAfter>
        <slot name="addonAfter" />
      </template>
    </Input>

    <div v-if="computedErrorMessage" class="xinput-error-message">
      {{ computedErrorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Input } from 'ant-design-vue'
import { useInput, useInputEvents } from './composables'
import type { XInputProps, XInputEmits } from './types'

defineOptions({
  name: 'XInput',
  inheritAttrs: false
})

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

const emit = defineEmits<XInputEmits>()

const {
  computedErrorMessage,
  showPrefix,
  showSuffix,
  inputWrapperClasses,
  inputClasses,
  validate,
  clearValidate,
} = useInput({ props, emit })

const {
  handleUpdateValue,
  handleInput,
  handleChange,
  handleFocus,
  handleBlur,
  handlePressEnter,
  handleClear,
} = useInputEvents({ props, emit })

// 处理带校验的 blur 事件
const handleBlurWithValidate = (e: FocusEvent) => {
  handleBlur(e)
  if (props.validateTrigger?.includes('blur')) {
    validate('blur')
  }
}

const inputType = computed(() => {
  return props.type === 'textarea' ? undefined : props.type
})

defineExpose({
  validate,
  clearValidate,
})
</script>

<style scoped lang="less">
@import './style.less';
</style>
