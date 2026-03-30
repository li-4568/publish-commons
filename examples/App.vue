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
      <XDatePickerDemo v-if="currentTab === 'datepicker'" />
      <XCascaderDemo v-if="currentTab === 'cascader'" />
      <XCheckboxDemo v-if="currentTab === 'checkbox'" />
      <XRadioDemo v-if="currentTab === 'radio'" />
      <XPopoverDemo v-if="currentTab === 'popover'" />
      <XTreeSelectDemo v-if="currentTab === 'treeselect'" />
      <XTooltipDemo v-if="currentTab === 'tooltip'" />
      <XTreeDemo v-if="currentTab === 'tree'" />
      <XNotificationDemo v-if="currentTab === 'notification'" />
      <XPopconfirmDemo v-if="currentTab === 'popconfirm'" />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import XButtonDemo from './XButtonDemo.vue'
  import XInputDemo from './XInputDemo.vue'
  import XSelectDemo from './XSelectDemo.vue'
  import XDatePickerDemo from './XDatePickerDemo.vue'
  import XCascaderDemo from './XCascaderDemo.vue'
  import XCheckboxDemo from './XCheckboxDemo.vue'
  import XRadioDemo from './XRadioDemo.vue'
  import XPopoverDemo from './XPopoverDemo.vue'
  import XTreeSelectDemo from './XTreeSelectDemo.vue'
  import XTooltipDemo from './XTooltipDemo.vue'
  import XTreeDemo from './XTreeDemo.vue'
  import XNotificationDemo from './XNotificationDemo.vue'
  import XPopconfirmDemo from './XPopconfirmDemo.vue'

  const tabs = [
    { key: 'button', label: 'XButton 按钮' },
    { key: 'input', label: 'XInput 输入框' },
    { key: 'select', label: 'XSelect 下拉框' },
    { key: 'datepicker', label: 'XDatePicker 日期选择器' },
    { key: 'cascader', label: 'XCascader 级联选择' },
    { key: 'checkbox', label: 'XCheckbox 复选框' },
    { key: 'radio', label: 'XRadio 单选框' },
    { key: 'popover', label: 'XPopover 气泡卡片' },
    { key: 'treeselect', label: 'XTreeSelect 树形选择' },
    { key: 'tooltip', label: 'XTooltip 文字提示' },
    { key: 'tree', label: 'XTree 树形组件' },
    { key: 'notification', label: 'XNotification 通知提醒框' },
    { key: 'popconfirm', label: 'XPopconfirm 气泡确认框' }
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
