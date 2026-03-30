<template>
  <div class="xradio-demo">
    <h1>XRadio 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XRadio v-model="value1" value="option1" label="选项1" />
        <XRadio v-model="value1" value="option2" label="选项2" />
      </div>
      <p class="demo-value">选择值: {{ value1 }}</p>
    </section>

    <!-- 不同尺寸 -->
    <section class="demo-section">
      <h2>不同尺寸</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>大号</h3>
          <XRadio v-model="value2" value="large1" label="选项1" size="large" />
          <XRadio v-model="value2" value="large2" label="选项2" size="large" />
        </div>
        <div class="demo-col">
          <h3>中号</h3>
          <XRadio v-model="value2" value="middle1" label="选项1" size="middle" />
          <XRadio v-model="value2" value="middle2" label="选项2" size="middle" />
        </div>
        <div class="demo-col">
          <h3>小号</h3>
          <XRadio v-model="value2" value="small1" label="选项1" size="small" />
          <XRadio v-model="value2" value="small2" label="选项2" size="small" />
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <XRadio v-model="value3" value="disabled1" label="禁用选项1" disabled />
        <XRadio v-model="value3" value="disabled2" label="禁用选项2" disabled />
      </div>
    </section>

    <!-- 自定义标签 -->
    <section class="demo-section">
      <h2>自定义标签</h2>
      <div class="demo-row">
        <XRadio v-model="value4" value="custom1">
          <span style="color: #1890ff; font-weight: bold;">自定义标签1</span>
        </XRadio>
        <XRadio v-model="value4" value="custom2">
          <span style="color: #52c41a; font-style: italic;">自定义标签2</span>
        </XRadio>
      </div>
    </section>

    <!-- XRadioGroup 基础用法 -->
    <section class="demo-section">
      <h2>XRadioGroup 基础用法</h2>
      <div class="demo-row">
        <XRadioGroup v-model="groupValue1">
          <XRadio value="apple" label="苹果" />
          <XRadio value="banana" label="香蕉" />
          <XRadio value="orange" label="橙子" />
          <XRadio value="grape" label="葡萄" />
        </XRadioGroup>
      </div>
      <p class="demo-value">选择值: {{ groupValue1 }}</p>
    </section>

    <!-- XRadioGroup 不同尺寸 -->
    <section class="demo-section">
      <h2>XRadioGroup 不同尺寸</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>大号</h3>
          <XRadioGroup v-model="groupValue2" size="large">
            <XRadio value="large1" label="选项1" />
            <XRadio value="large2" label="选项2" />
            <XRadio value="large3" label="选项3" />
          </XRadioGroup>
        </div>
        <div class="demo-col">
          <h3>中号</h3>
          <XRadioGroup v-model="groupValue2" size="middle">
            <XRadio value="middle1" label="选项1" />
            <XRadio value="middle2" label="选项2" />
            <XRadio value="middle3" label="选项3" />
          </XRadioGroup>
        </div>
        <div class="demo-col">
          <h3>小号</h3>
          <XRadioGroup v-model="groupValue2" size="small">
            <XRadio value="small1" label="选项1" />
            <XRadio value="small2" label="选项2" />
            <XRadio value="small3" label="选项3" />
          </XRadioGroup>
        </div>
      </div>
    </section>

    <!-- XRadioGroup 垂直排列 -->
    <section class="demo-section">
      <h2>XRadioGroup 垂直排列</h2>
      <div class="demo-row">
        <XRadioGroup v-model="groupValue3" direction="vertical">
          <XRadio value="option1" label="选项1" />
          <XRadio value="option2" label="选项2" />
          <XRadio value="option3" label="选项3" />
          <XRadio value="option4" label="选项4" />
        </XRadioGroup>
      </div>
      <p class="demo-value">选择值: {{ groupValue3 }}</p>
    </section>

    <!-- XRadioGroup 禁用状态 -->
    <section class="demo-section">
      <h2>XRadioGroup 禁用状态</h2>
      <div class="demo-row">
        <XRadioGroup v-model="groupValue4" disabled>
          <XRadio value="disabled1" label="选项1" />
          <XRadio value="disabled2" label="选项2" />
          <XRadio value="disabled3" label="选项3" />
        </XRadioGroup>
      </div>
      <p class="demo-value">选择值: {{ groupValue4 }}</p>
    </section>

    <!-- XRadioGroup 部分禁用 -->
    <section class="demo-section">
      <h2>XRadioGroup 部分禁用</h2>
      <div class="demo-row">
        <XRadioGroup v-model="groupValue5">
          <XRadio value="normal" label="普通选项" />
          <XRadio value="disabled" label="禁用选项" disabled />
          <XRadio value="normal2" label="普通选项2" />
        </XRadioGroup>
      </div>
      <p class="demo-value">选择值: {{ groupValue5 }}</p>
    </section>

    <!-- XRadioGroup 事件监听 -->
    <section class="demo-section">
      <h2>XRadioGroup 事件监听</h2>
      <div class="demo-row">
        <XRadioGroup v-model="groupValue6" @change="handleGroupChange">
          <XRadio value="event1" label="选项1" />
          <XRadio value="event2" label="选项2" />
          <XRadio value="event3" label="选项3" />
        </XRadioGroup>
      </div>
      <p class="demo-value">选择值: {{ groupValue6 }}</p>
      <p class="demo-value">事件日志: {{ groupEventLog }}</p>
    </section>

    <!-- XRadioGroup 状态 -->
    <section class="demo-section">
      <h2>XRadioGroup 状态</h2>
      <div class="demo-row">
        <XRadioGroup v-model="groupValue7">
          <XRadio value="error" label="错误状态" status="error" />
          <XRadio value="warning" label="警告状态" status="warning" />
          <XRadio value="normal" label="正常状态" />
        </XRadioGroup>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XRadio, XRadioGroup } from '../src/index'

// 响应式数据
const value1 = ref('option1')
const value2 = ref('large1')
const value3 = ref('disabled1')
const value4 = ref('custom1')

// RadioGroup 数据
const groupValue1 = ref('apple')
const groupValue2 = ref('large1')
const groupValue3 = ref('option1')
const groupValue4 = ref('disabled1')
const groupValue5 = ref('normal')
const groupValue6 = ref('event1')
const groupValue7 = ref('error')

// 事件日志
const groupEventLog = ref('')

// 事件处理函数
const handleGroupChange = (value: any) => {
  groupEventLog.value = `change: ${JSON.stringify(value)}`
}
</script>

<style scoped lang="less">
.xradio-demo {
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
  
  h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.65);
  }
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
} max-width: 300px;
}

.demo-value {
  color: #666;
  margin-top: 10px;
  font-size: 14px;
  word-break: break-all;
}
</style>