// ============================================
// XRadio 组件类型定义
// ============================================

import type { RadioProps as AntRadioProps } from 'ant-design-vue/es/radio'
import type { VueNode } from 'ant-design-vue/es/_util/type'

/**
 * 单选框尺寸
 */
export type RadioSize = 'large' | 'small' | 'default' | 'middle'

/**
 * XRadio 组件 Props 接口
 */
export interface XRadioProps extends Omit<AntRadioProps, 'size' | 'value' | 'modelValue' | 'label'> {
  /**
   * 绑定值（单独使用时）
   */
  modelValue?: any
  
  /**
   * 选项值（在 RadioGroup 中使用时）
   */
  value?: any
  
  /**
   * 是否选中（单独使用时）
   */
  checked?: boolean
  
  /**
   * 尺寸
   * @default 'middle'
   */
  size?: RadioSize
  
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
   * 表单名称
   */
  name?: string
  
  /**
   * 状态
   */
  status?: 'error' | 'warning' | ''
}

/**
 * XRadio 组件 Emits 接口
 */
export interface XRadioEmits {
  /**
   * 绑定值变化时触发
   */
  (e: 'update:modelValue', value: any): void
  
  /**
   * 状态变化时触发
   */
  (e: 'change', value: any): void
  
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
 * XRadio 组件 Slots 接口
 */
export interface XRadioSlots {
  /**
   * 自定义标签内容
   */
  default?: () => VueNode
}

/**
 * XRadioGroup 组件 Props 接口
 */
export interface XRadioGroupProps {
  /**
   * 绑定值（用于 v-model）
   */
  modelValue?: any

  /**
   * 绑定值（用于 Form 组件，与 modelValue 等价）
   */
  value?: any

  /**
   * 默认值
   */
  defaultValue?: any
  
  /**
   * 尺寸
   */
  size?: RadioSize
  
  /**
   * 是否禁用
   */
  disabled?: boolean
  
  /**
   * 表单名称
   */
  name?: string
  
  /**
   * 单选框方向
   */
  direction?: 'horizontal' | 'vertical'
}

/**
 * XRadioGroup 组件 Emits 接口
 */
export interface XRadioGroupEmits {
  /**
   * 绑定值变化时触发（v-model）
   */
  (e: 'update:modelValue', value: any): void

  /**
   * 绑定值变化时触发（Form 组件使用）
   */
  (e: 'update:value', value: any): void

  /**
   * 状态变化时触发
   */
  (e: 'change', value: any): void
}

/**
 * XRadioGroup 组件 Slots 接口
 */
export interface XRadioGroupSlots {
  /**
   * 自定义内容
   */
  default?: () => VueNode
}