// ============================================
// XButton 组件类型定义
// ============================================

import type { ButtonProps as AntButtonProps } from 'ant-design-vue/es/button'

/**
 * 按钮类型
 */
export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link'

/**
 * 按钮尺寸
 */
export type ButtonSize = 'large' | 'middle' | 'small'

/**
 * XButton 组件 Props 接口
 * 继承自 Ant Design Vue Button 的 Props
 */
export interface XButtonProps extends Omit<AntButtonProps, 'type' | 'size' | 'icon'> {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: ButtonType

  /**
   * 按钮尺寸
   * @default 'middle'
   */
  size?: ButtonSize

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
   * 图标名称（自定义图标库）
   * @default ''
   */
  icon?: string

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
   * 点击时的波纹效果
   * @default true
   */
  ripple?: boolean
}

/**
 * XButton 组件事件
 */
export interface XButtonEmits {
  /**
   * 点击事件
   */
  (e: 'click', event: MouseEvent): void
}

/**
 * XButton 组件插槽
 */
export interface XButtonSlots {
  /**
   * 默认插槽 - 按钮内容
   */
  default?: () => any

  /**
   * 图标插槽 - 自定义图标
   */
  icon?: () => any
}
