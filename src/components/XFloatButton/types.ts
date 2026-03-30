// ============================================
// XFloatButton 组件类型定义
// ============================================

import type { ButtonProps as AntButtonProps } from 'ant-design-vue/es/button'
import type { VueNode } from 'ant-design-vue/es/_util/type'

/**
 * 悬浮按钮位置
 */
export type FloatButtonPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

/**
 * 悬浮按钮类型
 */
export type FloatButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'success' | 'error' | 'warning'

/**
 * 悬浮按钮尺寸
 */
export type FloatButtonSize = 'large' | 'middle' | 'small'

/**
 * XFloatButton 组件 Props
 */
export interface XFloatButtonProps extends Omit<AntButtonProps, 'size' | 'type' | 'danger'> {
  /**
   * 绑定值（按钮文字）
   */
  modelValue?: string

  /**
   * 按钮类型
   * @default 'primary'
   */
  type?: FloatButtonType

  /**
   * 按钮尺寸
   * @default 'middle'
   */
  size?: FloatButtonSize

  /**
   * 位置
   * @default 'bottom-right'
   */
  position?: FloatButtonPosition

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean

  /**
   * 是否幽灵按钮
   * @default false
   */
  ghost?: boolean

  /**
   * 是否危险按钮
   * @default false
   */
  danger?: boolean

  /**
   * 是否块级按钮
   * @default false
   */
  block?: boolean

  /**
   * 图标
   */
  icon?: VueNode

  /**
   * 文字
   */
  text?: string

  /**
   * 点击事件
   */
  onClick?: () => void
}

// XFloatButton 组件事件
export interface XFloatButtonEmits {
  /**
   * 更新绑定值
   */
  (e: 'update:modelValue', value: string): void

  /**
   * 点击事件
   */
  (e: 'click', event: MouseEvent): void
}

/**
 * XFloatButton 组件插槽
 */
export interface XFloatButtonSlots {
  /**
   * 默认插槽
   */
  default?: () => any

  /**
   * 图标插槽
   */
  icon?: () => any
}

export interface XFloatButtonInstance {
  /**
   * 点击按钮
   */
  click: () => void
}

export default XFloatButtonProps