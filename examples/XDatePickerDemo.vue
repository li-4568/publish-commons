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
    
      <div class="code-example">
        <h3>基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XDatePicker v-model="value1" placeholder="选择日期" /&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ value1 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XDatePicker from 'your-component-library/XDatePicker/XDatePicker.vue'

const value1 = ref(undefined)
&lt;/script&gt;</code></pre>
      </div>
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
    
      <div class="code-example">
        <h3>日期选择器类型</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XDatePicker v-model="value2" type="date" placeholder="选择日期" /&gt;
    &lt;XDatePicker v-model="value3" type="datetime" placeholder="选择日期时间" /&gt;
    &lt;XDatePicker v-model="value4" type="month" placeholder="选择月份" /&gt;
    &lt;XDatePicker v-model="value5" type="year" placeholder="选择年份" /&gt;
    &lt;XDatePicker v-model="value6" type="week" placeholder="选择周" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XDatePicker from 'your-component-library/XDatePicker/XDatePicker.vue'

const value2 = ref(undefined)
const value3 = ref(undefined)
const value4 = ref(undefined)
const value5 = ref(undefined)
const value6 = ref(undefined)
&lt;/script&gt;</code></pre>
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
    
      <div class="code-example">
        <h3>范围选择器</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XDatePicker v-model="value7" type="daterange" placeholder="选择日期范围" /&gt;
    &lt;XDatePicker v-model="value8" type="datetimerange" placeholder="选择日期时间范围" /&gt;
    &lt;XDatePicker v-model="value9" type="daterange" placeholder="自定义范围占位符" :start-placeholder="'开始日期'" :end-placeholder="'结束日期'" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XDatePicker from 'your-component-library/XDatePicker/XDatePicker.vue'

const value7 = ref(undefined)
const value8 = ref(undefined)
const value9 = ref(undefined)
&lt;/script&gt;</code></pre>
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
    
      <div class="code-example">
        <h3>输入框尺寸</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XDatePicker v-model="value10" type="date" size="large" placeholder="大号日期选择器" /&gt;
    &lt;XDatePicker v-model="value11" type="date" size="middle" placeholder="中号日期选择器" /&gt;
    &lt;XDatePicker v-model="value12" type="date" size="small" placeholder="小号日期选择器" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XDatePicker from 'your-component-library/XDatePicker/XDatePicker.vue'

const value10 = ref(undefined)
const value11 = ref(undefined)
const value12 = ref(undefined)
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 带清除按钮 -->
    <section class="demo-section">
      <h2>带清除按钮</h2>
      <div class="demo-row">
        <XDatePicker v-model="value13" type="date" clearable placeholder="选择日期（可清除）" />
      </div>
      <p class="demo-value">选择值: {{ value13 }}</p>
    
      <div class="code-example">
        <h3>带清除按钮</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XDatePicker v-model="value13" type="date" clearable placeholder="选择日期（可清除）" /&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ value13 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XDatePicker from 'your-component-library/XDatePicker/XDatePicker.vue'

const value13 = ref(undefined)
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-col">
        <XDatePicker v-model="value14" type="date" disabled placeholder="禁用的日期选择器" />
        <XDatePicker v-model="value15" type="daterange" disabled placeholder="禁用的范围选择器" />
      </div>
    
      <div class="code-example">
        <h3>禁用状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XDatePicker v-model="value14" type="date" disabled placeholder="禁用的日期选择器" /&gt;
    &lt;XDatePicker v-model="value15" type="daterange" disabled placeholder="禁用的范围选择器" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XDatePicker from 'your-component-library/XDatePicker/XDatePicker.vue'

const value14 = ref(undefined)
const value15 = ref(undefined)
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 错误状态 -->
    <section class="demo-section">
      <h2>错误状态</h2>
      <div class="demo-row">
        <XDatePicker v-model="value16" type="date" error placeholder="错误的日期选择器" />
      </div>
    
      <div class="code-example">
        <h3>错误状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XDatePicker v-model="value16" type="date" error placeholder="错误的日期选择器" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XDatePicker from 'your-component-library/XDatePicker/XDatePicker.vue'

const value16 = ref(undefined)
&lt;/script&gt;</code></pre>
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
    
      <div class="code-example">
        <h3>事件演示</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XDatePicker v-model="value17" type="date" @change="handleDateChange" placeholder="选择日期" /&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ value17 }}&lt;/p&gt;
  &lt;div class="event-log"&gt;
    &lt;h3&gt;事件日志:&lt;/h3&gt;
    &lt;div v-if="eventLogs.length === 0" class="event-log-empty"&gt;暂无事件&lt;/div&gt;
    &lt;div v-else class="event-log-list"&gt;
      &lt;div v-for="(log, index) in eventLogs" :key="index" class="event-log-item">{{ log }}&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XDatePicker from 'your-component-library/XDatePicker/XDatePicker.vue'

const value17 = ref(undefined)

// 处理日期变化事件
const handleDateChange = (value: XDatePickerProps['modelValue']) => {
  const log = `日期变化: ${value ? JSON.stringify(value) : '清空'}`
  eventLogs.value.unshift(log)
  if (eventLogs.value.length > 10) {
    eventLogs.value.pop()
  }
}
&lt;/script&gt;</code></pre>
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
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  
  h1 {
    text-align: center;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.85);
  }
}

.demo-section {
  margin-bottom: 32px;
  
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.85);
    border-left: 4px solid #1890ff;
    padding-left: 12px;
  }
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

.code-example {
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
}

.code-example h3 {
  padding: 10px 16px;
  margin: 0;
  background-color: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  font-weight: 500;
}

.code-example pre {
  margin: 0;
  padding: 16px;
  background: #fff;
  overflow-x: auto;
}
</style>
