// ============================================
// XNotification 组件入口
// ============================================

import XNotification from './XNotification.vue'
import notification from './notification'

export { XNotification, notification }
export default XNotification

export type {
  XNotificationProps,
  XNotificationOptions,
  XNotificationInstance,
  XNotificationApi,
  XNotificationType,
  XNotificationPlacement
} from './types'
