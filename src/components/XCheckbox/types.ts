// ============================================
// XCheckbox 组件类型定义
// ============================================

import type { CheckboxProps as AntCheckboxProps } from 'ant-design-vue/es/checkbox'
import type { VueNode } from 'ant-design-vue/es/_util/type'

/**
 * 复选框尺寸
 */
export type CheckboxSize = 'large' | 'middle' | 'small'

/**
 * XCheckbox 组件 Props 接口
 * 继承自 Ant Design Vue Checkbox 的 Props
 */
export interface XCheckboxProps extends Omit<AntCheckboxProps, 'size' | 'value' | 'modelValue' | 'label'> {
  /**
   * 绑定值（单独使用时，用于 v-model）
   */
  modelValue?: boolean

  /**
   * 绑定值（单独使用时，用于 Form 组件）
   */
  value?: any

  /**
   * 选项值（在 CheckboxGroup 中使用时）
   */
  optionValue?: any
  
  /**
   * 尺寸
   * @default 'middle'
   */
  size?: CheckboxSize
  
  /**
   * 标签文本
   */
  label?: string | VueNode
  
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  
  /**
   * 是否为不确定状态
   * @default false
   */
  indeterminate?: boolean
  
  /**
   * 是否自动获取焦点
   * @default false
   */
  autofocus?: boolean
  
  /**
   * 是否必填
   * @default false
   */
  required?: boolean
  
  /**
   * 状态
   */
  status?: 'error' | 'warning' | ''
}

/**
 * XCheckbox 组件 Emits 接口
 */
export interface XCheckboxEmits {
  /**
   * 绑定值变化时触发（v-model）
   */
  (e: 'update:modelValue', value: boolean | null): void

  /**
   * 绑定值变化时触发（Form 组件使用）
   */
  (e: 'update:value', value: boolean | null): void

  /**
   * 状态变化时触发
   */
  (e: 'change', checked: boolean): void

  /**
   * 点击时触发
   */
  (e: 'click', event: MouseEvent): void

  /**
   * 焦点时触发
   */
  (e: 'focus', event: FocusEvent): void

  /**
   * 失焦时触发
   */
  (e: 'blur', event: FocusEvent): void
}

/**
 * XCheckbox 组件 Slots 接口
 */
export interface XCheckboxSlots {
  /**
   * 标签内容
   */
  default?: () => VueNode
}

/**
 * XCheckboxGroup 组件 Props 接口
 */
export interface XCheckboxGroupProps {
  /**
   * 绑定值
   */
  modelValue?: any[]
  
  /**
   * 尺寸
   */
  size?: CheckboxSize
  
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  
  /**
   * 表单名称
   */
  name?: string
}

/**
 * XCheckboxGroup 组件 Emits 接口
 */
export interface XCheckboxGroupEmits {
  /**
   * 绑定值变化时触发
   */
  (e: 'update:modelValue', value: any[]): void
  
  /**
   * 状态变化时触发
   */
  (e: 'change', value: any[]): void
}