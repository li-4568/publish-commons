<template>
  <div class="xcheckbox-demo">
    <h1>XCheckbox 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XCheckbox v-model="value1" label="复选框" />
      </div>
      <p class="demo-value">选择值: {{ value1 }}</p>
    </section>

    <!-- 不同尺寸 -->
    <section class="demo-section">
      <h2>不同尺寸</h2>
      <div class="demo-row">
        <XCheckbox v-model="value2" label="大号复选框" size="large" />
        <XCheckbox v-model="value3" label="中号复选框" size="middle" />
        <XCheckbox v-model="value4" label="小号复选框" size="small" />
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <XCheckbox v-model="value5" label="禁用的复选框" disabled />
        <XCheckbox v-model="value6" label="禁用且选中的复选框" disabled />
      </div>
    </section>

    <!-- 不确定状态 -->
    <section class="demo-section">
      <h2>不确定状态</h2>
      <div class="demo-row">
        <XCheckbox v-model="value7" label="不确定的复选框" indeterminate />
      </div>
      <p class="demo-value">选择值: {{ value7 }}</p>
    </section>

    <!-- 状态 -->
    <section class="demo-section">
      <h2>状态</h2>
      <div class="demo-row">
        <XCheckbox v-model="value8" label="错误状态" status="error" />
        <XCheckbox v-model="value9" label="警告状态" status="warning" />
      </div>
    </section>

    <!-- 自定义标签 -->
    <section class="demo-section">
      <h2>自定义标签</h2>
      <div class="demo-row">
        <XCheckbox v-model="value10">
          <span style="color: #1890ff; font-weight: bold;">自定义标签内容</span>
        </XCheckbox>
      </div>
    </section>

    <!-- 事件监听 -->
    <section class="demo-section">
      <h2>事件监听</h2>
      <div class="demo-row">
        <XCheckbox v-model="value11" label="点击触发事件" @change="handleChange" @click="handleClick" />
      </div>
      <p class="demo-value">选择值: {{ value11 }}</p>
      <p class="demo-value">事件日志: {{ eventLog }}</p>
    </section>

    <!-- XCheckboxGroup 基础用法 -->
    <section class="demo-section">
      <h2>XCheckboxGroup 基础用法</h2>
      <div class="demo-row">
        <XCheckboxGroup v-model="groupValue1">
          <XCheckbox value="apple" label="苹果" />
          <XCheckbox value="banana" label="香蕉" />
          <XCheckbox value="orange" label="橙子" />
          <XCheckbox value="grape" label="葡萄" />
        </XCheckboxGroup>
      </div>
      <p class="demo-value">选择值: {{ groupValue1 }}</p>
    </section>

    <!-- XCheckboxGroup 不同尺寸 -->
    <section class="demo-section">
      <h2>XCheckboxGroup 不同尺寸</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>大号</h3>
          <XCheckboxGroup v-model="groupValue2" size="large">
            <XCheckbox value="apple" label="苹果" />
            <XCheckbox value="banana" label="香蕉" />
            <XCheckbox value="orange" label="橙子" />
          </XCheckboxGroup>
        </div>
        <div class="demo-col">
          <h3>中号</h3>
          <XCheckboxGroup v-model="groupValue3" size="middle">
            <XCheckbox value="apple" label="苹果" />
            <XCheckbox value="banana" label="香蕉" />
            <XCheckbox value="orange" label="橙子" />
          </XCheckboxGroup>
        </div>
        <div class="demo-col">
          <h3>小号</h3>
          <XCheckboxGroup v-model="groupValue4" size="small">
            <XCheckbox value="apple" label="苹果" />
            <XCheckbox value="banana" label="香蕉" />
            <XCheckbox value="orange" label="橙子" />
          </XCheckboxGroup>
        </div>
      </div>
    </section>

    <!-- XCheckboxGroup 禁用状态 -->
    <section class="demo-section">
      <h2>XCheckboxGroup 禁用状态</h2>
      <div class="demo-row">
        <XCheckboxGroup v-model="groupValue5" disabled>
          <XCheckbox value="apple" label="苹果" />
          <XCheckbox value="banana" label="香蕉" />
          <XCheckbox value="orange" label="橙子" />
          <XCheckbox value="grape" label="葡萄" />
        </XCheckboxGroup>
      </div>
      <p class="demo-value">选择值: {{ groupValue5 }}</p>
    </section>

    <!-- XCheckboxGroup 部分禁用 -->
    <section class="demo-section">
      <h2>XCheckboxGroup 部分禁用</h2>
      <div class="demo-row">
        <XCheckboxGroup v-model="groupValue6">
          <XCheckbox value="apple" label="苹果" />
          <XCheckbox value="banana" label="香蕉" disabled />
          <XCheckbox value="orange" label="橙子" />
          <XCheckbox value="grape" label="葡萄" disabled />
        </XCheckboxGroup>
      </div>
      <p class="demo-value">选择值: {{ groupValue6 }}</p>
    </section>

    <!-- XCheckboxGroup 事件监听 -->
    <section class="demo-section">
      <h2>XCheckboxGroup 事件监听</h2>
      <div class="demo-row">
        <XCheckboxGroup v-model="groupValue7" @change="handleGroupChange">
          <XCheckbox value="apple" label="苹果" />
          <XCheckbox value="banana" label="香蕉" />
          <XCheckbox value="orange" label="橙子" />
          <XCheckbox value="grape" label="葡萄" />
        </XCheckboxGroup>
      </div>
      <p class="demo-value">选择值: {{ groupValue7 }}</p>
      <p class="demo-value">事件日志: {{ groupEventLog }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { XCheckbox, XCheckboxGroup } from '../src/index'

// 响应式数据
const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const value4 = ref(false)
const value5 = ref(false)
const value6 = ref(true)
const value7 = ref(false)
const value8 = ref(false)
const value9 = ref(false)
const value10 = ref(false)
const value11 = ref(false)

// CheckboxGroup 数据
const groupValue1 = ref<string[]>([])
const groupValue2 = ref<string[]>([])
const groupValue3 = ref<string[]>([])
const groupValue4 = ref<string[]>([])
const groupValue5 = ref<string[]>(['apple'])
const groupValue6 = ref<string[]>([])
const groupValue7 = ref<string[]>([])

// 事件日志
const eventLog = ref('')
const groupEventLog = ref('')

// 事件处理函数
const handleChange = (checked: boolean) => {
  eventLog.value = `change: ${checked}`
}

const handleClick = (event: MouseEvent) => {
  eventLog.value = `click`
}

const handleGroupChange = (value: any[]) => {
  groupEventLog.value = `change: ${JSON.stringify(value)}`
}
</script>

<style scoped lang="less">
.xcheckbox-demo {
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