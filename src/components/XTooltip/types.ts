// ============================================
// XTooltip 组件类型定义
// ============================================

import type { TooltipProps as AntTooltipProps } from 'ant-design-vue/es/tooltip'
import type { VueNode } from 'ant-design-vue/es/_util/type'

/**
 * 提示框位置
 */
export type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom' | 
  'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' |
  'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'

/**
 * 提示框触发方式
 */
export type TooltipTrigger = 'hover' | 'focus' | 'click' | 'contextmenu'

/**
 * XTooltip 组件 Props 接口
 * 继承自 Ant Design Vue Tooltip 的 Props
 */
export interface XTooltipProps extends Omit<AntTooltipProps, 'placement' | 'trigger' | 'title'> {
  /**
   * 提示框内容
   */
  title?: string | VueNode
  
  /**
   * HTML内容（支持富文本）
   */
  htmlTitle?: string
  
  /**
   * 提示框位置
   * @default 'top'
   */
  placement?: TooltipPlacement
  
  /**
   * 触发方式
   * @default 'hover'
   */
  trigger?: TooltipTrigger
  
  /**
   * 是否禁用提示框
   * @default false
   */
  disabled?: boolean
  
  /**
   * 提示框是否可见
   */
  modelValue?: boolean
  
  /**
   * 延迟显示时间（毫秒）
   */
  openDelay?: number
  
  /**
   * 延迟隐藏时间（毫秒）
   */
  closeDelay?: number
  
  /**
   * 自动调整溢出
   */
  autoAdjustOverflow?: boolean
  
  /**
   * 获取弹出层容器
   */
  getPopupContainer?: () => HTMLElement
}

/**
 * XTooltip 组件事件接口
 */
export interface XTooltipEmits {
  /**
   * 提示框可见性变化时触发
   */
  (e: 'update:modelValue', visible: boolean): void
  
  /**
   * 提示框显示时触发
   */
  (e: 'visibleChange', visible: boolean): void
  
  /**
   * 提示框显示动画开始时触发
   */
  (e: 'popupVisibleChange', visible: boolean): void
}

/**
 * XTooltip 组件 Slots 接口
 */
export interface XTooltipSlots {
  /**
   * 默认插槽：触发提示框的元素
   */
  default?: () => VueNode
  
  /**
   * 提示框内容插槽
   */
  title?: () => VueNode
}