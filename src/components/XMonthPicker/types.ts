// ============================================
// XMonthPicker 组件类型定义
// ============================================

import type { Dayjs } from 'dayjs'

/**
 * 选择器尺寸
 */
export type MonthPickerSize = 'large' | 'middle' | 'small'

/**
 * 校验规则类型
 */
export interface ValidationRule {
  /**
   * 规则类型
   */
  type?: 'required' | 'validator'
  /**
   * 错误提示信息
   */
  message?: string
  /**
   * 规则值
   */
  value?: any
  /**
   * 是否启用
   * @default true
   */
  enabled?: boolean
  /**
   * 自定义校验函数
   */
  validator?: (value: string | null | undefined) => boolean | string
}

/**
 * XMonthPicker 组件 Props 接口
 */
export interface XMonthPickerProps {
  /**
   * 组件大小
   * @default 'middle'
   */
  size?: MonthPickerSize
  /**
   * 绑定值（用于 v-model）格式：YYYY-MM
   */
  modelValue?: string | null
  /**
   * 绑定值（兼容旧版）
   */
  value?: string | null
  /**
   * 占位符
   * @default '请选择月份'
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
   * 是否可清除
   * @default false
   */
  clearable?: boolean
  /**
   * 是否显示边框
   * @default true
   */
  bordered?: boolean
  /**
   * 显示格式
   * @default 'M月'
   */
  format?: string | ((date: Dayjs | string | null) => string)
  /**
   * 值格式
   * @default 'YYYY-MM'
   */
  valueFormat?: string
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
  validateTrigger?: string[]
  /**
   * 值变化时是否校验
   * @default true
   */
  validateOnChange?: boolean
  /**
   * 错误信息（优先级高于内部校验）
   */
  errorMessage?: string
}

/**
 * XMonthPicker 组件事件
 */
export interface XMonthPickerEmits {
  /**
   * 值更新事件（v-model）
   */
  (e: 'update:modelValue', value: string | null): void
  /**
   * 值更新事件（兼容旧版）
   */
  (e: 'update:value', value: string | null): void
  /**
   * 值改变事件
   */
  (e: 'change', value: string | null, date: Dayjs | null): void
  /**
   * 失焦事件
   */
  (e: 'blur', event: FocusEvent): void
  /**
   * 聚焦事件
   */
  (e: 'focus', event: FocusEvent): void
  /**
   * 清除事件
   */
  (e: 'clear'): void
  /**
   * 校验结果事件
   */
  (e: 'validate', valid: boolean, message?: string): void
}

/**
 * XMonthPicker 组件插槽
 */
export interface XMonthPickerSlots {
  /**
   * 默认插槽
   */
  default?: () => any
  /**
   * 自定义日期单元格
   */
  dateRender?: ({ current, today }: { current: Dayjs; today: Dayjs }) => any
}

/**
 * XMonthPicker 组件暴露的方法
 */
export interface XMonthPickerExpose {
  /**
   * 手动触发校验
   */
  validate: () => { valid: boolean; message?: string }
  /**
   * 清除校验状态
   */
  clearValidate: () => void
}
