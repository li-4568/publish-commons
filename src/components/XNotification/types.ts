// ============================================
// XNotification 组件类型定义
// ============================================


export type XNotificationType = 'info' | 'success' | 'warning' | 'error'
export type XNotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

export interface XNotificationProps {
  // 通知类型
  type?: XNotificationType
  // 通知标题
  title?: string
  // 通知内容
  message?: string
  // 自动关闭的时间（毫秒），设为0则不自动关闭
  duration?: number
  // 关闭按钮
  closeable?: boolean
  // 位置
  placement?: XNotificationPlacement
  // 唯一标识
  key?: string
  // 自定义图标
  icon?: any
  // 自定义关闭图标
  closeIcon?: any
  // 点击事件
  onClick?: () => void
  // 关闭事件
  onClose?: () => void
}

export interface XNotificationOptions extends XNotificationProps {
  // 用于编程式调用的配置项
}

export interface XNotificationInstance {
  // 关闭当前通知
  close: () => void
}

export interface XNotificationApi {
  // 显示通知
  (options: XNotificationOptions): XNotificationInstance
  // 显示信息类型通知
  info(options: Omit<XNotificationOptions, 'type'>): XNotificationInstance
  // 显示成功类型通知
  success(options: Omit<XNotificationOptions, 'type'>): XNotificationInstance
  // 显示警告类型通知
  warning(options: Omit<XNotificationOptions, 'type'>): XNotificationInstance
  // 显示错误类型通知
  error(options: Omit<XNotificationOptions, 'type'>): XNotificationInstance
  // 关闭所有通知
  closeAll(): void
  // 根据key关闭指定通知
  close(key: string): void
}
