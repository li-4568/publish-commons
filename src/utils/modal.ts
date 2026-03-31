/**
 * Modal 工具函数
 * 基于 VxeUI.modal 封装，提供统一的弹窗功能
 */
import { h, type VNode, type Component } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeModalProps, VxeModalEmits } from 'vxe-pc-ui'

// 引入vxe-pc-ui样式
import 'vxe-pc-ui/es/style.min.css'

// 弹窗实例类型
export interface ModalInstance {
  id: string
  close: () => void
  componentRef?: any
}

// 所有弹窗实例的集合
const modalInstances: Map<string, ModalInstance> = new Map()

// VxeUI Modal支持的事件类型
type ModalEventKeys = Extract<VxeModalEmits[number], string>

// 配置参数类型
export interface ModalConfig extends Omit<Partial<VxeModalProps>, 'modelValue' | 'content' | ModalEventKeys> {
  /**
   * 弹窗内容
   */
  content?: string | (() => VNode | VNode[])
  /**
   * 弹窗主体组件
   */
  component?: Component | null
  /**
   * 组件属性
   */
  componentProps?: Record<string, any>
  /**
   * 最大高度，默认自动计算为窗口高度的80%
   */
  maxHeight?: number | string | null
  /**
   * 确认事件回调（可选）
   */
  confirm?: () => void
  /**
   * 取消事件回调（可选）
   */
  cancel?: () => void
  /**
   * 关闭事件回调（可选）
   */
  close?: () => void
  /**
   * 确认事件回调（可选，Vue 3 风格）
   */
  onConfirm?: () => void
  /**
   * 取消事件回调（可选，Vue 3 风格）
   */
  onCancel?: () => void
  /**
   * 关闭事件回调（可选，Vue 3 风格）
   */
  onClose?: () => void
  /**
   * 显示事件回调（可选）
   */
  onShow?: () => void
  /**
   * 隐藏事件回调（可选）
   */
  onHide?: () => void
  /**
   * 隐藏前事件回调（可选）
   */
  onBeforeHide?: () => void
  /**
   * 缩放事件回调（可选）
   */
  onZoom?: () => void
  /**
   * 大小调整事件回调（可选）
   */
  onResize?: () => void
  /**
   * 移动事件回调（可选）
   */
  onMove?: () => void
  /**
   * 模型值更新事件回调（可选）
   */
  'onUpdate:modelValue'?: () => void
}

// 回调函数类型
export type ModalCallback = {
  [key: string]: (...args: any[]) => any
}

/**
 * 打开弹窗
 * @param config 弹窗配置
 * @param callback 事件回调
 * @returns 弹窗实例，包含id和close方法
 */
export const openModal = (config: ModalConfig, callback?: ModalCallback) => {
  // 生成或使用配置的id
  const id = config.id || `xmodal-${Date.now()}-${Math.floor(Math.random() * 10000)}`
  
  // 组件引用，用于在确认/取消时调用组件方法
  let componentRef: any = null
  
  // 从config中解构出需要特殊处理的属性，包括事件回调和maxHeight
  // 解构所有可能的事件回调属性，确保它们不会被传递给组件
  const { 
    content, 
    component, 
    componentProps, 
    confirm, 
    cancel, 
    close,
    onConfirm,
    onCancel,
    onClose,
    onShow,
    onHide,
    onBeforeHide,
    onZoom,
    onResize,
    onMove,
    'onUpdate:modelValue': onUpdateModelValue,
    maxHeight,
    ...restConfig 
  } = config
  
  // 计算最大高度
  const calculateMaxHeight = () => {
    if (maxHeight !== undefined) {
      return maxHeight
    }
    // 默认最大高度为窗口高度的80%
    return `${Math.floor(window.innerHeight * 0.8)}px`
  }
  
  const modalMaxHeight = calculateMaxHeight()
  
  // 准备VxeUI.modal.open需要的选项
  const modalOptions: any = {
    ...restConfig,
    // 默认开启窗口大小调整功能
    resize: 'resize' in restConfig ? restConfig.resize : true,
    // 默认开启窗口缩放功能
    showZoom: 'showZoom' in restConfig ? restConfig.showZoom : true,
    id,
    // 使用函数插槽
    slots: {
      default() {
        // 渲染实际内容
        const renderContent = () => {
          if (component) {
            // 确保componentProps中不包含confirm、cancel等事件回调属性
            const filteredComponentProps = {
              ...componentProps,
              // 排除事件回调属性
              confirm: undefined,
              cancel: undefined,
              close: undefined,
              onConfirm: undefined,
              onCancel: undefined,
              onClose: undefined
            }
            
            return h(component, {
              ...filteredComponentProps,
              ref: (el: any) => { componentRef = el }
            })
          } else if (typeof content === 'function') {
            return content()
          } else {
            return content
          }
        }
        
        // 如果设置了maxHeight，使用容器包裹内容
        if (modalMaxHeight) {
          return h('div', {
            style: {
              maxHeight: modalMaxHeight,
              overflow: 'auto',
              padding: '0 16px 16px'
            }
          }, [renderContent()])
        }
        
        // 否则直接返回内容
        return renderContent()
      }
    }
  }
  
  // 单独处理从config中解构出的事件回调，避免传递给组件
  // 将所有事件回调统一转换为 Vue 3 风格（onXxx 格式），避免被当作普通属性传递
  if (confirm) modalOptions.onConfirm = confirm
  if (cancel) modalOptions.onCancel = cancel
  if (close) modalOptions.onClose = close
  if (onConfirm) modalOptions.onConfirm = onConfirm
  if (onCancel) modalOptions.onCancel = onCancel
  if (onClose) modalOptions.onClose = onClose
  if (onShow) modalOptions.onShow = onShow
  if (onHide) modalOptions.onHide = onHide
  if (onBeforeHide) modalOptions.onBeforeHide = onBeforeHide
  if (onZoom) modalOptions.onZoom = onZoom
  if (onResize) modalOptions.onResize = onResize
  if (onMove) modalOptions.onMove = onMove
  if (onUpdateModelValue) modalOptions['onUpdate:modelValue'] = onUpdateModelValue
  
  // 处理callback参数中的事件回调
  // 将回调映射到 Vue 3 风格的事件处理器名称（onXxx 格式）
  const eventNameMap: Record<string, string> = {
    'confirm': 'onConfirm',
    'cancel': 'onCancel',
    'close': 'onClose',
    'show': 'onShow',
    'hide': 'onHide',
    'beforehide': 'onBeforeHide',
    'zoom': 'onZoom',
    'resize': 'onResize',
    'move': 'onMove',
    'update:modelValue': 'onUpdate:modelValue'
  }
  if (callback) {
    Object.entries(callback).forEach(([event, handler]) => {
      // 转换为小写用于查找映射
      const lowerEvent = event.toLowerCase()
      // 如果事件在映射表中，使用映射后的名称（onXxx 格式）
      if (eventNameMap[lowerEvent]) {
        modalOptions[eventNameMap[lowerEvent]] = handler
      }
    })
  }
  
  // 使用 VxeUI.modal.open 打开弹窗
  VxeUI.modal.open(modalOptions)
  
  // 创建弹窗实例
  const modalInstance: ModalInstance = {
    id,
    close() {
      // 使用 VxeUI.modal.close 关闭弹窗
      VxeUI.modal.close()
      modalInstances.delete(id)
    },
    componentRef,
  }
  
  // 存储弹窗实例
  modalInstances.set(id, modalInstance)
  
  // 返回弹窗实例，包含组件引用和setLoading方法
  return modalInstance
}

/**
 * 关闭所有弹窗
 */
export const closeAllModals = () => {
  modalInstances.forEach((instance) => {
    instance.close()
  })
}

/**
 * 关闭指定id的弹窗
 * @param id 弹窗id
 * @returns 是否成功关闭
 */
export const closeModalById = (id: string) => {
  const instance = modalInstances.get(id)
  if (instance) {
    instance.close()
    return true
  }
  return false
}
