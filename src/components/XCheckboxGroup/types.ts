// ============================================
// XCheckboxGroup 组件类型定义
// ============================================

import type { CheckboxGroupProps as AntCheckboxGroupProps } from 'ant-design-vue/es/checkbox'

/**
 * 复选框组尺寸
 */
export type CheckboxSize = 'large' | 'middle' | 'small'

/**
 * XCheckboxGroup 组件 Props 接口
 */
export interface XCheckboxGroupProps extends Omit<AntCheckboxGroupProps, 'size' | 'value' | 'modelValue' | 'options' | 'defaultValue'> {
  /**
   * 绑定值
   */
  modelValue?: any[]
  
  /**
   * 尺寸
   * @default 'middle'
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