// ============================================
// XCascader 组件类型定义
// ============================================

import type { CascaderProps as AntCascaderProps } from 'ant-design-vue/es/cascader'
import type { ValueType, ShowCheckedStrategy } from 'ant-design-vue/es/vc-cascader/Cascader'
import type { VueNode } from 'ant-design-vue/es/_util/type'

/**
 * 级联选择器尺寸
 */
export type CascaderSize = 'large' | 'middle' | 'small'

/**
 * 级联选择器选项类型
 */
export interface CascaderOption {
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
   * 子选项
   */
  children?: CascaderOption[]
  
  /**
   * 选项的其他属性
   */
  [key: string]: any
}

/**
 * XCascader 组件 Props 接口
 * 继承自 Ant Design Vue Cascader 的 Props
 */
export interface XCascaderProps extends Omit<AntCascaderProps, 'size' | 'value' | 'options' | 'modelValue'> {
  /**
   * 绑定值
   */
  modelValue?: ValueType
  
  /**
   * 选项数据
   */
  options?: CascaderOption[]
  
  /**
   * 输入框尺寸
   * @default 'middle'
   */
  size?: CascaderSize
  
  /**
   * 占位符
   * @default '请选择'
   */
  placeholder?: string
  
  /**
   * 是否可清除
   * @default false
   */
  clearable?: boolean
  
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  
  /**
   * 多选模式
   * @default false
   */
  multiple?: boolean
  
  /**
   * 选择即改变
   * @default false
   */
  changeOnSelect?: boolean
  
  /**
   * 显示策略（多选时有效）
   * @default 'SHOW_PARENT'
   */
  showCheckedStrategy?: ShowCheckedStrategy
  
  /**
   * 状态
   */
  status?: 'error' | 'warning' | ''
}

/**
 * XCascader 组件 Emits 接口
 */
export interface XCascaderEmits {
  /**
   * 绑定值变化时触发
   */
  (e: 'update:modelValue', value: ValueType | null): void
  
  /**
   * 选择变化时触发
   */
  (e: 'change', value: ValueType | null, selectedOptions: CascaderOption[]): void
  
  /**
   * 清除时触发
   */
  (e: 'clear'): void
  
  /**
   * 焦点时触发
   */
  (e: 'focus', event: FocusEvent): void
  
  /**
   * 失焦时触发
   */
  (e: 'blur', event: FocusEvent): void
}