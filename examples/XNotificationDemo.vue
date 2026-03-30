<template>
  <div class="notification-demo">
    <h1>XNotification 通知提醒框示例</h1>
    
    <!-- 基本用法 -->
    <section class="demo-section">
      <h2>基本用法</h2>
      <div class="demo-row">
        <a-button type="primary" @click="showInfo">信息通知</a-button>
        <a-button type="success" @click="showSuccess">成功通知</a-button>
        <a-button type="warning" @click="showWarning">警告通知</a-button>
        <a-button type="error" @click="showError">错误通知</a-button>
      </div>
    </section>
    
    <!-- 自定义内容 -->
    <section class="demo-section">
      <h2>自定义内容</h2>
      <div class="demo-row">
        <a-button @click="showWithTitle">标题+内容</a-button>
        <a-button @click="showOnlyMessage">仅内容</a-button>
        <a-button @click="showLongMessage">长文本内容</a-button>
      </div>
    </section>
    
    <!-- 自动关闭设置 -->
    <section class="demo-section">
      <h2>自动关闭设置</h2>
      <div class="demo-row">
        <a-button @click="showFast">快速关闭 (2秒)</a-button>
        <a-button @click="showSlow">缓慢关闭 (8秒)</a-button>
        <a-button @click="showNoAutoClose">不自动关闭</a-button>
      </div>
    </section>
    
    <!-- 位置设置 -->
    <section class="demo-section">
      <h2>位置设置</h2>
      <div class="demo-row">
        <a-button @click="showTopLeft">左上角</a-button>
        <a-button @click="showTopRight">右上角</a-button>
        <a-button @click="showBottomLeft">左下角</a-button>
        <a-button @click="showBottomRight">右下角</a-button>
      </div>
    </section>
    
    <!-- 事件处理 -->
    <section class="demo-section">
      <h2>事件处理</h2>
      <div class="demo-row">
        <a-button @click="showWithClick">点击事件</a-button>
        <a-button @click="showWithClose">关闭事件</a-button>
      </div>
    </section>
    
    <!-- 编程式关闭 -->
    <section class="demo-section">
      <h2>编程式关闭</h2>
      <div class="demo-row">
        <a-button @click="showClosable">显示通知</a-button>
        <a-button @click="closeNotification" :disabled="!notificationInstance">关闭通知</a-button>
        <a-button @click="closeAll">关闭所有</a-button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button as AButton } from 'ant-design-vue'
import XNotification from '../src/components/XNotification/notification'
import type { XNotificationInstance } from '../src/components/XNotification/types'

// 通知实例引用
const notificationInstance = ref<XNotificationInstance | null>(null)

// 基本通知类型
const showInfo = () => {
  XNotification.info({
    title: '信息',
    message: '这是一条信息类型的通知',
    duration: 3000
  })
}

const showSuccess = () => {
  XNotification.success({
    title: '成功',
    message: '操作执行成功',
    duration: 3000
  })
}

const showWarning = () => {
  XNotification.warning({
    title: '警告',
    message: '请检查输入信息',
    duration: 4000
  })
}

const showError = () => {
  XNotification.error({
    title: '错误',
    message: '操作执行失败，请重试',
    duration: 4000
  })
}

// 自定义内容
const showWithTitle = () => {
  XNotification({
    type: 'info',
    title: '自定义标题',
    message: '这是一条带有标题和内容的通知',
    duration: 4500
  })
}

const showOnlyMessage = () => {
  XNotification({
    type: 'success',
    message: '这是一条只有内容的通知',
    duration: 3500
  })
}

const showLongMessage = () => {
  XNotification({
    type: 'warning',
    title: '长文本通知',
    message: '这是一条包含大量文本内容的通知示例，用于展示长文本在通知中的显示效果。通知组件会自动处理长文本的换行和溢出问题。',
    duration: 6000
  })
}

// 自动关闭设置
const showFast = () => {
  XNotification.success({
    title: '快速关闭',
    message: '这条通知将在2秒后自动关闭',
    duration: 2000
  })
}

const showSlow = () => {
  XNotification.info({
    title: '缓慢关闭',
    message: '这条通知将在8秒后自动关闭',
    duration: 8000
  })
}

const showNoAutoClose = () => {
  XNotification.warning({
    title: '不自动关闭',
    message: '这条通知不会自动关闭，需要手动点击关闭按钮',
    duration: 0,
    closeable: true
  })
}

// 位置设置
const showTopLeft = () => {
  XNotification({
    type: 'info',
    title: '左上角通知',
    message: '这条通知显示在左上角',
    placement: 'topLeft',
    duration: 3000
  })
}

const showTopRight = () => {
  XNotification({
    type: 'success',
    title: '右上角通知',
    message: '这条通知显示在右上角',
    placement: 'topRight',
    duration: 3000
  })
}

const showBottomLeft = () => {
  XNotification({
    type: 'warning',
    title: '左下角通知',
    message: '这条通知显示在左下角',
    placement: 'bottomLeft',
    duration: 3000
  })
}

const showBottomRight = () => {
  XNotification({
    type: 'error',
    title: '右下角通知',
    message: '这条通知显示在右下角',
    placement: 'bottomRight',
    duration: 3000
  })
}

// 事件处理
const showWithClick = () => {
  XNotification({
    type: 'info',
    title: '点击事件',
    message: '点击这条通知查看效果',
    onClick: () => {
      alert('通知被点击了！')
    },
    duration: 4000
  })
}

const showWithClose = () => {
  XNotification({
    type: 'success',
    title: '关闭事件',
    message: '关闭这条通知查看效果',
    onClose: () => {
      console.log('通知被关闭了！')
    },
    duration: 4000
  })
}

// 编程式关闭
const showClosable = () => {
  notificationInstance.value = XNotification({
    type: 'warning',
    title: '可关闭通知',
    message: '点击下面的按钮可以关闭这条通知',
    duration: 0
  })
}

const closeNotification = () => {
  if (notificationInstance.value) {
    notificationInstance.value.close()
    notificationInstance.value = null
  }
}

const closeAll = () => {
  XNotification.closeAll()
}
</script>

<style scoped lang="less">
.notification-demo {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 32px;
}

.demo-section h2 {
  font-size: 18px;
  margin-bottom: 16px;
  color: #262626;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
}
</style>
