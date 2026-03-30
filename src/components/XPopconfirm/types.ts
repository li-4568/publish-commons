import type { VueNode } from 'ant-design-vue/es/_util/type'

export type XPopconfirmPlacement = 
  | 'top' 
  | 'left' 
  | 'right' 
  | 'bottom' 
  | 'topLeft' 
  | 'topRight' 
  | 'bottomLeft' 
  | 'bottomRight' 
  | 'leftTop' 
  | 'leftBottom' 
  | 'rightTop' 
  | 'rightBottom'

export type XPopconfirmTrigger = 'hover' | 'focus' | 'click' | 'contextmenu'

export interface XPopconfirmProps {
  title?: string | number
  description?: string | number
  placement?: XPopconfirmPlacement
  trigger?: XPopconfirmTrigger
  modelValue?: boolean
  defaultOpen?: boolean
  okText?: string
  cancelText?: string
  okType?: 'primary' | 'danger' | 'default'
  okButtonProps?: Record<string, any>
  cancelButtonProps?: Record<string, any>
  closeable?: boolean
  closeIcon?: VueNode
  disabled?: boolean
  icon?: VueNode
  iconColor?: string
  clickOutsideToClose?: boolean
  getPopupContainer?: () => HTMLElement
  autoAdjustOverflow?: boolean
  zIndex?: number
} 

export interface XPopconfirmEmits {
  (e: 'confirm'): void
  (e: 'cancel'): void
  (e: 'update:modelValue', visible: boolean): void
  (e: 'open-change', visible: boolean): void
  (e: 'open'): void
  (e: 'close'): void
} 

export interface XPopconfirmSlots {
  default?: () => VueNode
  title?: () => VueNode
  description?: () => VueNode
  okText?: () => VueNode
  cancelText?: () => VueNode
}