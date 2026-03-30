<template>
  <!-- XNotification组件是一个抽象组件，主要用于封装Ant Design Vue的Notification -->
  <!-- 实际使用时通过编程式API调用 -->
  <div class="xnotification-placeholder" style="display: none;">
    XNotification Placeholder
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-vue'
import './style.less'

// 定义组件选项
defineOptions({
  name: 'XNotification'
})

// 导出编程式API作为组件的静态方法
defineExpose({
  notification
})
</script>

<style scoped lang="less">
.xnotification-placeholder {
  display: none;
}
</style>
