<template>
  <div class="xdatepicker-demo">
    <h1>XDatePicker 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XDatePicker v-model="value1" placeholder="选择日期" />
      </div>
      <p class="demo-value">选择值: {{ value1 }}</p>
    </section>

    <!-- 日期选择器类型 -->
    <section class="demo-section">
      <h2>日期选择器类型</h2>
      <div class="demo-col">
        <XDatePicker v-model="value2" type="date" placeholder="选择日期" />
        <XDatePicker v-model="value3" type="datetime" placeholder="选择日期时间" />
        <XDatePicker v-model="value4" type="month" placeholder="选择月份" />
        <XDatePicker v-model="value5" type="year" placeholder="选择年份" />
        <XDatePicker v-model="value6" type="week" placeholder="选择周" />
      </div>
    </section>

    <!-- 范围选择器 -->
    <section class="demo-section">
      <h2>范围选择器</h2>
      <div class="demo-col">
        <XDatePicker v-model="value7" type="daterange" placeholder="选择日期范围" />
        <XDatePicker v-model="value8" type="datetimerange" placeholder="选择日期时间范围" />
        <XDatePicker v-model="value9" type="daterange" placeholder="自定义范围占位符" :start-placeholder="'开始日期'" :end-placeholder="'结束日期'" />
      </div>
    </section>

    <!-- 输入框尺寸 -->
    <section class="demo-section">
      <h2>输入框尺寸</h2>
      <div class="demo-col">
        <XDatePicker v-model="value10" type="date" size="large" placeholder="大号日期选择器" />
        <XDatePicker v-model="value11" type="date" size="middle" placeholder="中号日期选择器" />
        <XDatePicker v-model="value12" type="date" size="small" placeholder="小号日期选择器" />
      </div>
    </section>

    <!-- 带清除按钮 -->
    <section class="demo-section">
      <h2>带清除按钮</h2>
      <div class="demo-row">
        <XDatePicker v-model="value13" type="date" clearable placeholder="选择日期（可清除）" />
      </div>
      <p class="demo-value">选择值: {{ value13 }}</p>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-col">
        <XDatePicker v-model="value14" type="date" disabled placeholder="禁用的日期选择器" />
        <XDatePicker v-model="value15" type="daterange" disabled placeholder="禁用的范围选择器" />
      </div>
    </section>

    <!-- 错误状态 -->
    <section class="demo-section">
      <h2>错误状态</h2>
      <div class="demo-row">
        <XDatePicker v-model="value16" type="date" error placeholder="错误的日期选择器" />
      </div>
    </section>

    <!-- 事件演示 -->
    <section class="demo-section">
      <h2>事件演示</h2>
      <div class="demo-row">
        <XDatePicker v-model="value17" type="date" @change="handleDateChange" placeholder="选择日期" />
      </div>
      <p class="demo-value">选择值: {{ value17 }}</p>
      <div class="event-log">
        <h3>事件日志:</h3>
        <div v-if="eventLogs.length === 0" class="event-log-empty">暂无事件</div>
        <div v-else class="event-log-list">
          <div v-for="(log, index) in eventLogs" :key="index" class="event-log-item">{{ log }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * XDatePicker 组件使用示例
 */
import { ref } from 'vue'
import XDatePicker from '../src/components/XDatePicker/XDatePicker.vue'

// 基础用法
const value1 = ref(undefined)

// 日期选择器类型
const value2 = ref(undefined)
const value3 = ref(undefined)
const value4 = ref(undefined)
const value5 = ref(undefined)
const value6 = ref(undefined)

// 范围选择器
const value7 = ref(undefined)
const value8 = ref(undefined)
const value9 = ref(undefined)

// 输入框尺寸
const value10 = ref(undefined)
const value11 = ref(undefined)
const value12 = ref(undefined)

// 带清除按钮
const value13 = ref(undefined)

// 禁用状态
const value14 = ref(undefined)
const value15 = ref(undefined)

// 错误状态
const value16 = ref(undefined)

// 事件演示
const value17 = ref(undefined)
const eventLogs = ref<string[]>([])

// 处理日期变化事件
const handleDateChange = (value: any) => {
  const log = `日期变化: ${value ? JSON.stringify(value) : '清空'}`
  eventLogs.value.unshift(log)
  if (eventLogs.value.length > 10) {
    eventLogs.value.pop()
  }
}
</script>

<style scoped>
.xdatepicker-demo {
  max-width: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-section {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.demo-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.demo-section h2 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
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
  margin-bottom: 24px;
}

.demo-value {
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.event-log {
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
  min-height: 100px;
}

.event-log h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
}

.event-log-empty {
  color: #999;
  text-align: center;
  padding: 20px;
}

.event-log-list {
  max-height: 200px;
  overflow-y: auto;
}

.event-log-item {
  padding: 4px 0;
  font-size: 14px;
  color: #666;
  border-bottom: 1px solid #e0e0e0;
}

.event-log-item:last-child {
  border-bottom: none;
}
</style>
