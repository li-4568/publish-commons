# Notification 通知提醒

全局展示通知提醒信息。

## 基础用法

```vue
<template>
  <XButton @click="openNotification">显示通知</XButton>
  <XNotification ref="notificationRef" />
</template>

<script setup>
import { ref } from 'vue'
import { XButton, XNotification } from 'publish-commons'

const notificationRef = ref()

const openNotification = () => {
  notificationRef.value.open({
    type: 'success',
    message: '操作成功',
    description: '数据已成功保存',
  })
}
</script>
```

## 不同类型的通知

```vue
<script setup>
const showSuccess = () => {
  notification.success({
    message: '成功',
    description: '操作已成功完成',
  })
}

const showError = () => {
  notification.error({
    message: '错误',
    description: '操作失败，请重试',
  })
}

const showWarning = () => {
  notification.warning({
    message: '警告',
    description: '请注意检查输入',
  })
}

const showInfo = () => {
  notification.info({
    message: '提示',
    description: '这是一条提示信息',
  })
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 类型 | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` |
| message | 标题 | `string` | - |
| description | 描述 | `string` | - |
| duration | 显示时长 | `number` | `4500` |
| placement | 位置 | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'` |

### 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| open | 打开通知 | `config` |
| success | 成功通知 | `config` |
| error | 错误通知 | `config` |
| warning | 警告通知 | `config` |
| info | 信息通知 | `config` |
| close | 关闭通知 | `key` |
| destroy | 销毁所有 | - |
