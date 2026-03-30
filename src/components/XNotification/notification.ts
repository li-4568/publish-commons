import { notification } from 'ant-design-vue'
import type { XNotificationApi, XNotificationOptions, XNotificationType } from './types'

// 创建唯一key生成函数
const generateKey = (): string => {
  return `notification_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`
}

// 存储通知实例的Map
const notificationInstances = new Map<string, any>()

// 基础通知配置
const defaultOptions = {
  duration: 4500,
  closeable: true,
  placement: 'topRight' as const
}

// 创建通知
const createNotification = (type: XNotificationType, options: XNotificationOptions): any => {
  const key = options.key || generateKey()
  
  // 确保message参数存在
  const message = options.message || ''
  
  // 创建通知实例
  const instance = notification[type]({
    ...defaultOptions,
    ...options,
    message,
    key,
    // 通知关闭时从Map中移除
    onClose: () => {
      notificationInstances.delete(key)
      if (options.onClose) {
        options.onClose()
      }
    }
  })
  
  // 存储通知实例
  notificationInstances.set(key, instance)
  
  return instance
}

// 实现XNotificationApi接口
// 先创建基础函数
const baseNotification = (options: XNotificationOptions): any => {
  const type = options.type || 'info'
  return createNotification(type, options)
}

// 添加类型方法
baseNotification.info = (options: Omit<XNotificationOptions, 'type'>): any => {
  return createNotification('info', options)
}

baseNotification.success = (options: Omit<XNotificationOptions, 'type'>): any => {
  return createNotification('success', options)
}

baseNotification.warning = (options: Omit<XNotificationOptions, 'type'>): any => {
  return createNotification('warning', options)
}

baseNotification.error = (options: Omit<XNotificationOptions, 'type'>): any => {
  return createNotification('error', options)
}

// 添加关闭方法
baseNotification.closeAll = (): void => {
  notification.destroy()
  // 清空实例Map
  notificationInstances.clear()
}

baseNotification.close = (key: string): void => {
  // 通过key获取并关闭指定通知实例
  const instance = notificationInstances.get(key)
  if (instance) {
    instance.destroy()
    notificationInstances.delete(key)
  }
}

// 类型断言确保符合XNotificationApi接口
const XNotification = baseNotification as XNotificationApi

export default XNotification
