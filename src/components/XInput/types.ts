// ============================================
// XInput 组件类型定义
// ============================================

import type { InputProps as AntInputProps } from 'ant-design-vue/es/input'

/**
 * 输入框类型
 */
export type InputType =
  | 'text'
  | 'password'
  | 'textarea'
  | 'number'
  | 'search'
  | 'tel'
  | 'url'
  | 'email'

/**
 * 输入框尺寸
 */
export type InputSize = 'large' | 'middle' | 'small'

/**
 * 内置校验规则类型
 */
export type ValidationRuleType =
  | 'required' // 必填
  | 'email' // 邮箱格式
  | 'phone' // 手机号格式
  | 'url' // URL格式
  | 'number' // 数字格式
  | 'minLength' // 最小长度
  | 'maxLength' // 最大长度
  | 'pattern' // 正则表达式

/**
 * 校验触发时机
 */
export type ValidationTrigger =
  | 'change' // 输入时触发
  | 'blur' // 失焦时触发
  | 'submit' // 提交时触发

/**
 * 自定义校验函数
 */
export type CustomValidator = (value: string | number) => boolean | string

/**
 * 校验规则配置
 */
export interface ValidationRule {
  /**
   * 规则类型
   */
  type?: ValidationRuleType

  /**
   * 错误提示信息
   */
  message?: string

  /**
   * 规则值（如 minLength: 5）
   */
  value?: any

  /**
   * 是否启用该规则
   * @default true
   */
  enabled?: boolean

  /**
   * 自定义校验函数
   */
  validator?: CustomValidator
}

/**
 * XInput 组件 Props 接口
 * 继承自 Ant Design Vue Input 的 Props
 */
export interface XInputProps extends Omit<AntInputProps, 'type' | 'size' | 'value'> {
  /**
   * 输入框类型
   * @default 'text'
   */
  type?: InputType

  /**
   * 输入框尺寸
   * @default 'middle'
   */
  size?: InputSize

  /**
   * 输入框内容（用于 v-model）
   * @default ''
   */
  modelValue?: string | number

  /**
   * 输入框内容（用于 Form 组件，与 modelValue 等价）
   * @default ''
   */
  value?: string | number

  /**
   * 占位提示文字
   * @default ''
   */
  placeholder?: string

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean

  /**
   * 是否显示清除按钮
   * @default false
   */
  clearable?: boolean

  /**
   * 最大输入长度
   */
  maxlength?: number

  /**
   * 是否显示字数统计
   * @default false
   */
  showCount?: boolean

  /**
   * 前缀图标
   */
  prefixIcon?: string

  /**
   * 后缀图标
   */
  suffixIcon?: string

  /**
   * 是否必填
   * @default false
   */
  required?: boolean

  /**
   * 校验规则数组
   */
  rules?: ValidationRule[]

  /**
   * 校验触发时机
   * @default ['change', 'blur']
   */
  validateTrigger?: ValidationTrigger[]

  /**
   * 是否在输入变化时自动校验
   * @default true
   */
  validateOnChange?: boolean

  /**
   * 自定义错误提示信息
   * 优先级高于校验规则生成的错误信息
   */
  errorMessage?: string
}

/**
 * XInput 组件事件
 */
export interface XInputEmits {
  /**
   * 输入事件（v-model）
   */
  (e: 'update:modelValue', value: string): void

  /**
   * 输入事件（Form 组件使用）
   */
  (e: 'update:value', value: string): void

  /**
   * 输入事件（实时）
   */
  (e: 'input', value: string, event: Event): void

  /**
   * 值改变事件（失焦后）
   */
  (e: 'change', value: string, event: Event): void

  /**
   * 聚焦事件
   */
  (e: 'focus', event: FocusEvent): void

  /**
   * 失焦事件
   */
  (e: 'blur', event: FocusEvent): void

  /**
   * 清除事件
   */
  (e: 'clear'): void

  /**
   * 按下回车事件
   */
  (e: 'pressEnter', event: KeyboardEvent): void

  /**
   * 校验结果事件
   */
  (e: 'validate', valid: boolean, message?: string): void
}

/**
 * XInput 组件插槽
 */
export interface XInputSlots {
  /**
   * 前缀插槽
   */
  prefix?: () => any

  /**
   * 后缀插槽
   */
  suffix?: () => any

  /**
   * 前置标签插槽
   */
  addonBefore?: () => any

  /**
   * 后置标签插槽
   */
  addonAfter?: () => any
}
