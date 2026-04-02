import { DatePickerProps as AntDatePickerProps } from 'ant-design-vue'

// ============================================
// XDatePicker 组件类型定义
// ============================================

/**
 * 日期选择器尺寸
 */
export type DatePickerSize = 'large' | 'middle' | 'small'

/**
 * 日期选择器类型
 */
export type DatePickerType = 'date' | 'datetime' | 'month' | 'year' | 'week' | 'daterange' | 'datetimerange'

/**
 * XDatePicker 组件属性
 */
export interface XDatePickerProps extends Omit<AntDatePickerProps, 'size' | 'value' | 'type' | 'picker'> {
  /**
   * 绑定值（用于 v-model）
   */
  modelValue?: string | number | Date | [Date, Date] | [string, string] | [number, number]

  /**
   * 绑定值（用于 Form 组件，与 modelValue 等价）
   */
  value?: string | number | Date | [Date, Date] | [string, string] | [number, number]

  /**
   * 日期选择器尺寸
   * @default 'middle'
   */
  size?: DatePickerSize

  /**
   * 日期选择器类型
   * @default 'date'
   */
  type?: DatePickerType

  /**
   * 是否显示清除按钮
   * @default false
   */
  clearable?: boolean

  /**
   * 占位符
   */
  placeholder?: string

  /**
   * 开始日期占位符（仅在范围选择器时有效）
   */
  startPlaceholder?: string

  /**
   * 结束日期占位符（仅在范围选择器时有效）
   */
  endPlaceholder?: string

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否必填
   * @default false
   */
  required?: boolean

  /**
   * 是否为错误状态
   * @default false
   */
  error?: boolean
}

/**
 * XDatePicker 组件事件
 */
export interface XDatePickerEmits {
  /**
   * 更新绑定值（v-model）
   */
  (e: 'update:modelValue', value: XDatePickerProps['modelValue']): void

  /**
   * 更新绑定值（Form 组件使用）
   */
  (e: 'update:value', value: XDatePickerProps['modelValue']): void

  /**
   * 值改变事件
   */
  (e: 'change', value: XDatePickerProps['modelValue']): void
}
