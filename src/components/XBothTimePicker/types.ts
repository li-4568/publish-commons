// ============================================
// XBothTimePicker 组件类型定义
// ============================================

import type { Dayjs } from 'dayjs'

/**
 * 选择器尺寸
 */
export type BothTimePickerSize = 'large' | 'middle' | 'small'

/**
 * 时间范围值类型
 */
export type TimeRangeValue = [string, string] | null

/**
 * 内部时间范围值类型
 */
export type TimeRangeDayjsValue = [Dayjs, Dayjs] | null

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
  validator?: (value: TimeRangeValue | TimeRangeDayjsValue) => boolean | string
}

/**
 * XBothTimePicker 组件 Props 接口
 */
export interface XBothTimePickerProps {
  /**
   * 组件大小
   * @default 'middle'
   */
  size?: BothTimePickerSize
  /**
   * 绑定值（用于 v-model）格式：[startTime, endTime]
   */
  modelValue?: TimeRangeValue
  /**
   * 绑定值（兼容旧版）
   */
  value?: TimeRangeValue
  /**
   * 占位符
   * @default ['开始时间', '结束时间']
   */
  placeholder?: [string, string]
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
   * @default 'HH:mm'
   */
  format?: string
  /**
   * 值格式
   * @default 'HH:mm'
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
 * XBothTimePicker 组件事件
 */
export interface XBothTimePickerEmits {
  /**
   * 值更新事件（v-model）
   */
  (e: 'update:modelValue', value: TimeRangeValue): void
  /**
   * 值更新事件（兼容旧版）
   */
  (e: 'update:value', value: TimeRangeValue): void
  /**
   * 值改变事件
   */
  (e: 'change', value: TimeRangeValue, times: TimeRangeValue | TimeRangeDayjsValue): void
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
 * XBothTimePicker 组件插槽
 */
export interface XBothTimePickerSlots {
  /**
   * 默认插槽
   */
  default?: () => any
}

/**
 * XBothTimePicker 组件暴露的方法
 */
export interface XBothTimePickerExpose {
  /**
   * 手动触发校验
   */
  validate: () => { valid: boolean; message?: string }
  /**
   * 清除校验状态
   */
  clearValidate: () => void
}
