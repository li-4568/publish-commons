<template>
  <div class="app">
    <aside class="aside">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="['menu-btn', { active: currentTab === tab.key }]"
        @click="currentTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </aside>

    <main class="main">
      <div class="content-card">
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
        <XFloatButtonDemo v-if="currentTab === 'floatbutton'" />
        <XModalDemo v-if="currentTab === 'modal'" />
        <XTableDemo v-if="currentTab === 'table'" />
        <XEditorDemo v-if="currentTab === 'editor'" />
        <XImageCropperDemo v-if="currentTab === 'imagecropper'" />
        <XFilePreviewDemo v-if="currentTab === 'filepreview'" />
      </div>
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
  import XFloatButtonDemo from './XFloatButtonDemo.vue'
  import XModalDemo from './XModalDemo.vue'
  import XTableDemo from './XTableDemo.vue'
  import XEditorDemo from './XEditorDemo.vue'
  import XImageCropperDemo from './XImageCropperDemo.vue'
  import XFilePreviewDemo from './XFilePreviewDemo.vue'

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
    { key: 'popconfirm', label: 'XPopconfirm 气泡确认框' },
    { key: 'floatbutton', label: 'XFloatButton 悬浮按钮' },
    { key: 'modal', label: 'XModal 弹窗' },
    { key: 'table', label: 'XTable 表格' },
    { key: 'editor', label: 'XEditor 富文本编辑器' },
    { key: 'imagecropper', label: 'XImageCropper 图片裁剪' },
    { key: 'filepreview', label: 'XFilePreview 文件预览' }
  ]

  const currentTab = ref('button')
</script>

<style>
  /* 全局样式重置 */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    overflow: hidden !important;
  }
  #app {
    height: 100%;
    overflow: hidden !important;
  }
  /* 确保所有可能的滚动区域都被正确控制 */
  .app, .aside, .main {
    overflow: hidden !important;
  }
  .aside {
    overflow-y: auto !important;
  }
  .main {
    overflow-y: auto !important;
  }
</style>

<style scoped lang="less">
  .app {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background: #f5f5f5;
    overflow: hidden;
  }

  .aside {
    width: 240px;
    background: #fff;
    border-right: 1px solid #e8e8e8;
    padding: 16px 0;
    overflow-y: auto;
  }

  .menu-btn {
    display: block;
    width: 100%;
    padding: 12px 24px;
    text-align: left;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;

    &:hover {
      background: #e6f7ff;
      color: #1890ff;
    }

    &.active {
      background: #1890ff;
      color: #fff;
    }
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 24px;
    box-sizing: border-box;
  }

  .content-card {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    padding: 24px;
  }

  /* 统一组件示例样式，与XButtonDemo保持一致 */
  [class$="-demo"] {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
  }

  [class$="-demo"] h1 {
    text-align: center;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 24px;
    font-weight: 600;
  }

  .demo-section {
    margin-bottom: 32px;
  }

  .demo-section h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.85);
    border-left: 4px solid #1890ff;
    padding-left: 12px;
  }

  .demo-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    width: 100%;
  }

  .demo-col {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .demo-value,
  .demo-tip {
    margin-top: 8px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }

  .demo-row.ghost-bg {
    background: #1890ff;
    padding: 16px;
    border-radius: 6px;
  }
</style>
