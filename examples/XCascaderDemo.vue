<template>
  <div class="xcascader-demo">
    <h1>XCascader 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XCascader v-model="value1" :options="options" placeholder="请选择" />
      </div>
      <p class="demo-value">选择值: {{ value1 }}</p>
    </section>

    <!-- 多选模式 -->
    <section class="demo-section">
      <h2>多选模式</h2>
      <div class="demo-row">
        <XCascader v-model="value2" :options="options" placeholder="请选择" multiple clearable />
      </div>
      <p class="demo-value">选择值: {{ JSON.stringify(value2) }}</p>
    </section>

    <!-- 选择即改变 -->
    <section class="demo-section">
      <h2>选择即改变</h2>
      <div class="demo-row">
        <XCascader v-model="value3" :options="options" placeholder="请选择" change-on-select />
      </div>
      <p class="demo-value">选择值: {{ value3 }}</p>
    </section>

    <!-- 不同尺寸 -->
    <section class="demo-section">
      <h2>不同尺寸</h2>
      <div class="demo-col">
        <XCascader v-model="value4" :options="options" placeholder="大号选择器" size="large" />
        <XCascader v-model="value5" :options="options" placeholder="中号选择器" size="middle" />
        <XCascader v-model="value6" :options="options" placeholder="小号选择器" size="small" />
      </div>
    </section>

    <!-- 可清除 -->
    <section class="demo-section">
      <h2>可清除</h2>
      <div class="demo-row">
        <XCascader v-model="value7" :options="options" placeholder="请选择" clearable />
      </div>
      <p class="demo-value">选择值: {{ value7 }}</p>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <XCascader v-model="value8" :options="options" placeholder="禁用选择器" disabled />
      </div>
    </section>

    <!-- 错误状态 -->
    <section class="demo-section">
      <h2>错误状态</h2>
      <div class="demo-row">
        <XCascader v-model="value9" :options="options" placeholder="请选择" status="error" />
      </div>
      <p class="demo-value">选择值: {{ value9 }}</p>
    </section>

    <!-- 显示策略 -->
    <section class="demo-section">
      <h2>显示策略（多选）</h2>
      <div class="demo-col">
        <XCascader v-model="value10" :options="options" placeholder="显示父级" multiple clearable show-checked-strategy="SHOW_PARENT" />
        <XCascader v-model="value11" :options="options" placeholder="显示子级" multiple clearable show-checked-strategy="SHOW_CHILD" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XCascader } from '../src/index'
import type { CascaderOption } from '../src/components/XCascader/types'

// 示例数据
const options: CascaderOption[] = [
  {
    value: '1',
    label: '省份1',
    children: [
      {
        value: '1-1',
        label: '城市1-1',
        children: [
          { value: '1-1-1', label: '区县1-1-1' },
          { value: '1-1-2', label: '区县1-1-2' },
          { value: '1-1-3', label: '区县1-1-3' }
        ]
      },
      {
        value: '1-2',
        label: '城市1-2',
        children: [
          { value: '1-2-1', label: '区县1-2-1' },
          { value: '1-2-2', label: '区县1-2-2' }
        ]
      }
    ]
  },
  {
    value: '2',
    label: '省份2',
    children: [
      {
        value: '2-1',
        label: '城市2-1',
        children: [
          { value: '2-1-1', label: '区县2-1-1' },
          { value: '2-1-2', label: '区县2-1-2' }
        ]
      },
      {
        value: '2-2',
        label: '城市2-2',
        children: [
          { value: '2-2-1', label: '区县2-2-1' },
          { value: '2-2-2', label: '区县2-2-2' },
          { value: '2-2-3', label: '区县2-2-3' },
          { value: '2-2-4', label: '区县2-2-4' }
        ]
      }
    ]
  },
  {
    value: '3',
    label: '省份3',
    disabled: true,
    children: [
      { value: '3-1', label: '城市3-1', disabled: true },
      { value: '3-2', label: '城市3-2', disabled: true }
    ]
  }
]

// 响应式数据
const value1 = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref()
const value8 = ref()
const value9 = ref()
const value10 = ref()
const value11 = ref()
</script>

<style scoped lang="less">
.xcascader-demo {
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
  color: #666;
  margin-top: 10px;
  font-size: 14px;
  word-break: break-all;
}
</style>