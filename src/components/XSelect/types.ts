// ============================================
// XSelect 组件类型定义
// ============================================

import type { SelectProps as AntSelectProps } from 'ant-design-vue/es/select'
import type { VueNode } from 'ant-design-vue/es/_util/type'

/**
 * 下拉框尺寸
 */
export type SelectSize = 'large' | 'middle' | 'small'

/**
 * 下拉框选项类型
 */
export interface SelectOption {
  /**
   * 选项值
   */
  value: string | number
  
  /**
   * 选项文本
   */
  label: string | VueNode
  
  /**
   * 是否禁用该选项
   * @default false
   */
  disabled?: boolean
  
  /**
   * 选项的其他属性
   */
  [key: string]: any
}

/**
 * 下拉框模式
 */
export type SelectMode = 'multiple' | 'tags' | undefined

/**
 * XSelect 组件 Props 接口
 * 继承自 Ant Design Vue Select 的 Props
 */
export interface XSelectProps extends Omit<AntSelectProps, 'size' | 'value' | 'options'> {
  /**
   * 绑定值（用于 v-model）
   */
  modelValue?: string | number | (string | number)[]

  /**
   * 绑定值（用于 Form 组件，与 modelValue 等价）
   */
  value?: string | number | (string | number)[]

  /**
   * 下拉框尺寸
   * @default 'middle'
   */
  size?: SelectSize

  /**
   * 下拉框模式
   * @default undefined
   */
  mode?: SelectMode

  /**
   * 选项数据
   */
  options?: SelectOption[]

  /**
   * 是否显示清除按钮
   * @default false
   */
  clearable?: boolean

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
   * 占位符
   */
  placeholder?: string

  /**
   * 最大显示标签数量（仅在 multiple 或 tags 模式下生效）
   */
  maxTagCount?: number

  /**
   * 自定义错误提示信息
   */
  errorMessage?: string
}

/**
 * XSelect 组件事件
 */
export interface XSelectEmits {
  /**
   * 值变化事件
   */
  (e: 'update:modelValue', value: string | number | (string | number)[]): void

  /**
   * 值变化事件
   */
  (e: 'change', value: string | number | (string | number)[]): void

  /**
   * 下拉框打开事件
   */
  (e: 'openChange', open: boolean): void

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
   * 标签移除事件
   */
  (e: 'tagRemove', removedTag: string | number): void
}

/**
 * XSelect 组件插槽
 */
export interface XSelectSlots {
  /**
   * 自定义前缀
   */
  prefix?: () => VueNode

  /**
   * 自定义后缀
   */
  suffix?: () => VueNode

  /**
   * 自定义选项内容
   */
  option?: ({ option }: { option: SelectOption }) => VueNode

  /**
   * 自定义标签内容
   */
  tagRender?: ({ label, value, closable, onClose }: any) => VueNode

  /**
   * 下拉框底部内容
   */
  dropdownRender?: ({ menu, props }: any) => VueNode
}
