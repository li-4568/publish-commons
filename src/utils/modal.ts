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
  setLoading: (loading: boolean) => void
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
   * 确认按钮文本
   */
  confirmButtonText?: string
  /**
   * 取消按钮文本
   */
  cancelButtonText?: string
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
  /**
   * 是否显示loading状态（可选）
   * 默认：使用 component 时为 true，使用 content 时为 false
   */
  loading?: boolean
  /**
   * 是否显示表尾（可选）
   * 默认：true
   */
  showFooter?: boolean
  /**
   * 是否显示确认按钮（可选）
   * 需配合 showFooter 使用
   * 默认：true
   */
  showConfirmButton?: boolean
  /**
   * 是否显示取消按钮（可选）
   * 需配合 showFooter 使用
   * 默认：true
   */
  showCancelButton?: boolean
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
    loading,
    confirmButtonText,
    cancelButtonText,
    showFooter,
    showConfirmButton,
    showCancelButton,
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
  
  // loading 状态
  // 如果显式设置了 loading，使用设置值；否则根据是否有 component 决定（有 component 默认 true，否则 false）
  let currentLoading = loading !== undefined ? loading : !!component
  // 标记是否已经自动关闭过 loading（防止重复执行）
  let hasAutoClosedLoading = false

  const updateModalLoading = () => {
    // 通过 DOM 查找 VxeUI 的 loading 元素并控制显示/隐藏
    const wrappers = document.querySelectorAll('.vxe-modal--wrapper')
    for (const wrapper of wrappers) {
      const htmlWrapper = wrapper as HTMLElement

      // 控制整体 loading
      const loadingEl = htmlWrapper.querySelector('.vxe-loading') as HTMLElement
      if (loadingEl) {
        loadingEl.style.display = currentLoading ? 'flex' : 'none'
      }

      // 控制确认按钮 loading
      const confirmBtn = htmlWrapper.querySelector('.vxe-modal--footer .vxe-button--primary, .vxe-modal--footer .vxe-button:last-child') as HTMLElement
      if (confirmBtn) {
        // 查找 loading 图标
        const loadingIcon = confirmBtn.querySelector('.vxe-button--loading-icon, .vxe-icon-loading, .vxe-loading__icon, .vxe-icon-spinner') as HTMLElement

        if (currentLoading) {
          // 开启按钮 loading 状态
          confirmBtn.classList.add('is--loading', 'is--disabled')
          confirmBtn.setAttribute('disabled', 'true')
          if (loadingIcon) {
            loadingIcon.style.display = 'inline-block'
          }
        } else {
          // 关闭按钮 loading 状态
          confirmBtn.classList.remove('is--loading', 'is--disabled')
          confirmBtn.removeAttribute('disabled')
          if (loadingIcon) {
            loadingIcon.style.display = 'none'
          }
        }
      }
    }
  }

  // 声明 modalInstance 变量，用于在回调中引用
  let modalInstance!: ModalInstance

  // 包装 confirm 回调以支持异步操作，并传入弹窗实例
  const wrapConfirmCallback = (callback?: (instance: ModalInstance) => void | Promise<void>) => {
    return () => {
      const result = callback?.(modalInstance)
      // 如果返回的是 Promise，确保错误被捕获
      if (result instanceof Promise) {
        result.catch(() => {
          // 错误已处理
        })
      }
    }
  }

  // 准备VxeUI.modal.open需要的选项
  const modalOptions: any = {
    ...restConfig,
    // 默认开启窗口大小调整功能
    resize: 'resize' in restConfig ? restConfig.resize : true,
    // 默认开启窗口缩放功能
    showZoom: 'showZoom' in restConfig ? restConfig.showZoom : true,
    // 使用 VxeUI 原生 loading
    loading: currentLoading,
    id,
    // 传递确认和取消按钮文本
    confirmButtonText,
    cancelButtonText,
    // 表尾和按钮显示控制
    showFooter: showFooter !== undefined ? showFooter : true,
    showConfirmButton: showConfirmButton !== undefined ? showConfirmButton : true,
    showCancelButton: showCancelButton !== undefined ? showCancelButton : true,
    // 使用函数插槽
    slots: {
      default() {
        // 渲染实际内容
        const renderContent = () => {
          if (component) {
            // 从 componentProps 中排除事件回调和按钮文本属性
            const {
              confirm: _confirm,
              cancel: _cancel,
              close: _close,
              onConfirm: _onConfirm,
              onCancel: _onCancel,
              onClose: _onClose,
              confirmButtonText: _confirmButtonText,
              cancelButtonText: _cancelButtonText,
              ...filteredComponentProps
            } = componentProps || {}

            return h(component, {
              ...filteredComponentProps,
              ref: (el: any) => {
                componentRef = el
                // 组件加载完成后关闭 loading（只执行一次）
                if (!hasAutoClosedLoading && el) {
                  hasAutoClosedLoading = true
                  // 使用延迟确保弹窗已完全渲染到 DOM
                  setTimeout(() => {
                    currentLoading = false
                    updateModalLoading()
                  }, 300)
                }
              }
            })
          } else if (typeof content === 'function') {
            return content()
          } else {
            return content
          }
        }

        // 如果设置了maxHeight，使用容器包裹内容
        if (modalMaxHeight) {
          const isFullHeight = modalMaxHeight === '100%' || modalMaxHeight === '100vh'
          return h('div', {
            style: {
              height: isFullHeight ? '100%' : undefined,
              maxHeight: isFullHeight ? undefined : modalMaxHeight,
              overflow: 'auto',
              padding: '0 16px 16px',
              boxSizing: 'border-box'
            }
          }, [renderContent()])
        }

        // 否则直接返回内容
        return renderContent()
      }
    }
  }

  // 创建弹窗实例
  modalInstance = {
    id,
    close() {
      // 使用 VxeUI.modal.close 关闭弹窗
      VxeUI.modal.close()
      modalInstances.delete(id)
    },
    // 使用 getter 确保获取最新的 componentRef
    get componentRef() {
      return componentRef
    },
    /**
     * 设置弹窗 loading 状态
     * @param loading 是否显示 loading
     */
    setLoading(loading: boolean) {
      currentLoading = loading
      updateModalLoading()
    },
  }

  // 存储弹窗实例
  modalInstances.set(id, modalInstance)

  // 单独处理从config中解构出的事件回调，避免传递给组件
  // 设置 confirm 和 onConfirm 回调
  if (confirm) modalOptions.onConfirm = wrapConfirmCallback(confirm)
  if (onConfirm) modalOptions.onConfirm = wrapConfirmCallback(onConfirm)
  if (cancel) modalOptions.onCancel = cancel
  if (onCancel) modalOptions.onCancel = onCancel
  if (close) modalOptions.onClose = close
  if (onClose) modalOptions.onClose = onClose

  // 包装 onShow 回调，用于初始化 loading 状态
  modalOptions.onShow = () => {
    // 延迟一点确保 DOM 已渲染
    setTimeout(() => {
      updateModalLoading()
    }, 50)
    // 调用用户自定义的 onShow
    onShow?.()
  }
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
        const eventKey = eventNameMap[lowerEvent]
        // 对于 show 事件，需要合并回调以确保 loading 能正确初始化
        if (lowerEvent === 'show' && modalOptions[eventKey]) {
          const originalHandler = modalOptions[eventKey]
          modalOptions[eventKey] = () => {
            originalHandler()
            handler()
          }
        } else {
          modalOptions[eventKey] = handler
        }
      }
    })
  }

  // 使用 VxeUI.modal.open 打开弹窗
  VxeUI.modal.open(modalOptions)

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

/**
 * 设置指定弹窗的 loading 状态
 * @param id 弹窗id
 * @param loading 是否显示 loading
 * @returns 是否成功设置
 */
export const setModalLoading = (id: string, loading: boolean) => {
  const instance = modalInstances.get(id)
  if (instance) {
    instance.setLoading(loading)
    return true
  }
  return false
}

/**
 * 启动弹窗 loading（简写方法）
 * @param id 弹窗id
 * @returns 是否成功启动
 */
export const showModalLoading = (id: string) => {
  return setModalLoading(id, true)
}

/**
 * 关闭弹窗 loading（简写方法）
 * @param id 弹窗id
 * @returns 是否成功关闭
 */
export const hideModalLoading = (id: string) => {
  return setModalLoading(id, false)
}
