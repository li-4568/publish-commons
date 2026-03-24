<template>
  <div class="app">
    <nav class="nav">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="['nav-btn', { active: currentTab === tab.key }]"
        @click="currentTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </nav>

    <main class="main">
      <XButtonDemo v-if="currentTab === 'button'" />
      <XInputDemo v-if="currentTab === 'input'" />
      <XSelectDemo v-if="currentTab === 'select'" />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import XButtonDemo from './XButtonDemo.vue'
  import XInputDemo from './XInputDemo.vue'
  import XSelectDemo from './XSelectDemo.vue'

  const tabs = [
    { key: 'button', label: 'XButton 按钮' },
    { key: 'input', label: 'XInput 输入框' },
    { key: 'select', label: 'XSelect 下拉框' }
  ]

  const currentTab = ref('button')
</script>

<style scoped lang="less">
  .app {
    min-height: 100vh;
    background: #f5f5f5;
  }

  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    gap: 8px;
    padding: 16px 24px;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  .nav-btn {
    padding: 8px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    background: #fff;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;

    &:hover {
      border-color: #1890ff;
      color: #1890ff;
    }

    &.active {
      background: #1890ff;
      border-color: #1890ff;
      color: #fff;
    }
  }

  .main {
    padding: 24px;
  }
</style>
