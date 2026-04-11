// ============================================
// XTextarea 组件类型定义
// ============================================

/**
 * 文本域尺寸
 */
export type TextareaSize = 'large' | 'middle' | 'small'

/**
 * 校验规则类型
 */
export interface ValidationRule {
  /**
   * 规则类型
   */
  type?: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'validator'
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
  validator?: (value: string | undefined) => boolean | string
}

/**
 * 自动调整大小配置
 */
export interface AutoSize {
  /**
   * 最小行数
   */
  minRows: number
  /**
   * 最大行数
   */
  maxRows: number
}

/**
 * XTextarea 组件 Props 接口
 */
export interface XTextareaProps {
  /**
   * 组件大小
   * @default 'middle'
   */
  size?: TextareaSize
  /**
   * 绑定值（用于 v-model）
   */
  modelValue?: string | null
  /**
   * 绑定值（兼容旧版）
   */
  value?: string | null
  /**
   * 占位符
   * @default '请输入'
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
   * 是否显示字数
   * @default false
   */
  showCount?: boolean
  /**
   * 最大长度
   * @default 250
   */
  maxlength?: number
  /**
   * 自动调整大小
   * @default { minRows: 2, maxRows: 5 }
   */
  autoSize?: boolean | AutoSize
  /**
   * 校验状态
   */
  status?: '' | 'error' | 'warning'
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
 * XTextarea 组件事件
 */
export interface XTextareaEmits {
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
  (e: 'change', value: string): void
  /**
   * 失焦事件
   */
  (e: 'blur', value: string): void
  /**
   * 聚焦事件
   */
  (e: 'focus', value: string): void
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
 * XTextarea 组件插槽
 */
export interface XTextareaSlots {
  /**
   * 默认插槽
   */
  default?: () => any
}

/**
 * XTextarea 组件暴露的方法
 */
export interface XTextareaExpose {
  /**
   * 手动触发校验
   */
  validate: () => { valid: boolean; message?: string }
  /**
   * 清除校验状态
   */
  clearValidate: () => void
}
