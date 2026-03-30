// ============================================
// XPopover 组件类型定义
// ============================================

import type { PopoverProps as AntPopoverProps } from 'ant-design-vue/es/popover'
import type { VueNode } from 'ant-design-vue/es/_util/type'

/**
 * 弹出框位置
 */
export type PopoverPlacement = 'top' | 'left' | 'right' | 'bottom' | 
  'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' |
  'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'

/**
 * 弹出框触发方式
 */
export type PopoverTrigger = 'hover' | 'focus' | 'click' | 'contextmenu'

/**
 * XPopover 组件 Props 接口
 * 继承自 Ant Design Vue Popover 的 Props
 */
export interface XPopoverProps extends Omit<AntPopoverProps, 'placement' | 'trigger' | 'content' | 'title'> {
  /**
   * 弹出框标题
   */
  title?: string | VueNode
  
  /**
   * 弹出框内容
   */
  content?: string | VueNode
  
  /**
   * HTML内容（支持富文本）
   */
  htmlContent?: string
  
  /**
   * 弹出框位置
   * @default 'top'
   */
  placement?: PopoverPlacement
  
  /**
   * 触发方式
   * @default 'hover'
   */
  trigger?: PopoverTrigger
  
  /**
   * 是否禁用弹出框
   * @default false
   */
  disabled?: boolean
  
  /**
   * 弹出框是否可见
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
   * 是否允许点击外部区域关闭弹出框
   * @default true
   */
  autoAdjustOverflow?: boolean
  
  /**
   * 是否将弹出框内容渲染到 body 元素下
   * @default true
   */
  getPopupContainer?: () => HTMLElement
}

/**
 * XPopover 组件 Emits 接口
 */
export interface XPopoverEmits {
  /**
   * 弹出框可见性变化时触发
   */
  (e: 'update:modelValue', visible: boolean): void
  
  /**
   * 弹出框显示时触发
   */
  (e: 'visibleChange', visible: boolean): void
  
  /**
   * 弹出框显示动画开始时触发
   */
  (e: 'popupVisibleChange', visible: boolean): void
  
  /**
   * 点击弹出框内容时触发
   */
  (e: 'click', event: MouseEvent): void
}

/**
 * XPopover 组件 Slots 接口
 */
export interface XPopoverSlots {
  /**
   * 默认插槽：触发弹出框的元素
   */
  default?: () => VueNode
  
  /**
   * 弹出框标题插槽
   */
  title?: () => VueNode
  
  /**
   * 弹出框内容插槽
   */
  content?: () => VueNode
}