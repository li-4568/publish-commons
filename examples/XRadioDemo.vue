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
      
      <div class="code-example">
        <h3>基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XRadio v-model="value1" value="option1" label="选项1" /&gt;
    &lt;XRadio v-model="value1" value="option2" label="选项2" /&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ value1 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio } from 'your-component-library'

// 响应式数据
const value1 = ref('option1')
&lt;/script&gt;</code></pre>
      </div>
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
      
      <div class="code-example">
        <h3>不同尺寸</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;大号&lt;/h3&gt;
      &lt;XRadio v-model="value2" value="large1" label="选项1" size="large" /&gt;
      &lt;XRadio v-model="value2" value="large2" label="选项2" size="large" /&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;中号&lt;/h3&gt;
      &lt;XRadio v-model="value2" value="middle1" label="选项1" size="middle" /&gt;
      &lt;XRadio v-model="value2" value="middle2" label="选项2" size="middle" /&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;小号&lt;/h3&gt;
      &lt;XRadio v-model="value2" value="small1" label="选项1" size="small" /&gt;
      &lt;XRadio v-model="value2" value="small2" label="选项2" size="small" /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio } from 'your-component-library'

// 响应式数据
const value2 = ref('large1')
&lt;/script&gt;

&lt;style scoped&gt;
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
&lt;/style&gt;</code></pre>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <XRadio v-model="value3" value="disabled1" label="禁用选项1" disabled />
        <XRadio v-model="value3" value="disabled2" label="禁用选项2" disabled />
      </div>
      
      <div class="code-example">
        <h3>禁用状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XRadio v-model="value3" value="disabled1" label="禁用选项1" disabled /&gt;
    &lt;XRadio v-model="value3" value="disabled2" label="禁用选项2" disabled /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio } from 'your-component-library'

// 响应式数据
const value3 = ref('disabled1')
&lt;/script&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>自定义标签</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XRadio v-model="value4" value="custom1"&gt;
      &lt;span style="color: #1890ff; font-weight: bold;"&gt;自定义标签1&lt;/span&gt;
    &lt;/XRadio&gt;
    &lt;XRadio v-model="value4" value="custom2"&gt;
      &lt;span style="color: #52c41a; font-style: italic;"&gt;自定义标签2&lt;/span&gt;
    &lt;/XRadio&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio } from 'your-component-library'

// 响应式数据
const value4 = ref('custom1')
&lt;/script&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>XRadioGroup 基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XRadioGroup v-model="groupValue1"&gt;
      &lt;XRadio value="apple" label="苹果" /&gt;
      &lt;XRadio value="banana" label="香蕉" /&gt;
      &lt;XRadio value="orange" label="橙子" /&gt;
      &lt;XRadio value="grape" label="葡萄" /&gt;
    &lt;/XRadioGroup&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ groupValue1 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio, XRadioGroup } from 'your-component-library'

// 响应式数据
const groupValue1 = ref('apple')
&lt;/script&gt;</code></pre>
      </div>
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
      
      <div class="code-example">
        <h3>XRadioGroup 不同尺寸</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;大号&lt;/h3&gt;
      &lt;XRadioGroup v-model="groupValue2" size="large"&gt;
        &lt;XRadio value="large1" label="选项1" /&gt;
        &lt;XRadio value="large2" label="选项2" /&gt;
        &lt;XRadio value="large3" label="选项3" /&gt;
      &lt;/XRadioGroup&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;中号&lt;/h3&gt;
      &lt;XRadioGroup v-model="groupValue2" size="middle"&gt;
        &lt;XRadio value="middle1" label="选项1" /&gt;
        &lt;XRadio value="middle2" label="选项2" /&gt;
        &lt;XRadio value="middle3" label="选项3" /&gt;
      &lt;/XRadioGroup&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;小号&lt;/h3&gt;
      &lt;XRadioGroup v-model="groupValue2" size="small"&gt;
        &lt;XRadio value="small1" label="选项1" /&gt;
        &lt;XRadio value="small2" label="选项2" /&gt;
        &lt;XRadio value="small3" label="选项3" /&gt;
      &lt;/XRadioGroup&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio, XRadioGroup } from 'your-component-library'

// 响应式数据
const groupValue2 = ref('large1')
&lt;/script&gt;

&lt;style scoped&gt;
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
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>XRadioGroup 垂直排列</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用 direction="vertical" 设置垂直排列 --&gt;
    &lt;XRadioGroup v-model="groupValue3" direction="vertical"&gt;
      &lt;XRadio value="option1" label="选项1" /&gt;
      &lt;XRadio value="option2" label="选项2" /&gt;
      &lt;XRadio value="option3" label="选项3" /&gt;
      &lt;XRadio value="option4" label="选项4" /&gt;
    &lt;/XRadioGroup&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ groupValue3 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio, XRadioGroup } from 'your-component-library'

// 响应式数据
const groupValue3 = ref('option1')
&lt;/script&gt;</code></pre>
      </div>
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
      
      <div class="code-example">
        <h3>XRadioGroup 禁用状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用 disabled 属性禁用整个单选框组 --&gt;
    &lt;XRadioGroup v-model="groupValue4" disabled&gt;
      &lt;XRadio value="disabled1" label="选项1" /&gt;
      &lt;XRadio value="disabled2" label="选项2" /&gt;
      &lt;XRadio value="disabled3" label="选项3" /&gt;
    &lt;/XRadioGroup&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ groupValue4 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio, XRadioGroup } from 'your-component-library'

// 响应式数据
const groupValue4 = ref('disabled1')
&lt;/script&gt;</code></pre>
      </div>
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
      
      <div class="code-example">
        <h3>XRadioGroup 部分禁用</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XRadioGroup v-model="groupValue5"&gt;
      &lt;XRadio value="normal" label="普通选项" /&gt;
      &lt;!-- 在单个 XRadio 上使用 disabled 属性进行部分禁用 --&gt;
      &lt;XRadio value="disabled" label="禁用选项" disabled /&gt;
      &lt;XRadio value="normal2" label="普通选项2" /&gt;
    &lt;/XRadioGroup&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ groupValue5 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio, XRadioGroup } from 'your-component-library'

// 响应式数据
const groupValue5 = ref('normal')
&lt;/script&gt;</code></pre>
      </div>
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
      
      <div class="code-example">
        <h3>XRadioGroup 事件监听</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用 @change 监听选择变化事件 --&gt;
    &lt;XRadioGroup v-model="groupValue6" @change="handleGroupChange"&gt;
      &lt;XRadio value="event1" label="选项1" /&gt;
      &lt;XRadio value="event2" label="选项2" /&gt;
      &lt;XRadio value="event3" label="选项3" /&gt;
    &lt;/XRadioGroup&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ groupValue6 }}&lt;/p&gt;
  &lt;p class="demo-value"&gt;事件日志: {{ groupEventLog }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio, XRadioGroup } from 'your-component-library'

// 响应式数据
const groupValue6 = ref('event1')
const groupEventLog = ref('')

// 事件处理函数
const handleGroupChange = (value: any) => {
  groupEventLog.value = `change: ${JSON.stringify(value)}`
}
&lt;/script&gt;</code></pre>
      </div>
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
      
      <div class="code-example">
        <h3>XRadioGroup 状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XRadioGroup v-model="groupValue7"&gt;
      &lt;!-- 使用 status 属性设置不同状态 --&gt;
      &lt;XRadio value="error" label="错误状态" status="error" /&gt;
      &lt;XRadio value="warning" label="警告状态" status="warning" /&gt;
      &lt;XRadio value="normal" label="正常状态" /&gt;
    &lt;/XRadioGroup&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XRadio, XRadioGroup } from 'your-component-library'

// 响应式数据
const groupValue7 = ref('error')
&lt;/script&gt;</code></pre>
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

.code-example {
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;

  h3 {
    padding: 10px 16px;
    background-color: #fafafa;
    border-bottom: 1px solid #f0f0f0;
    font-size: 14px;
    margin: 0;
  }

  pre {
    padding: 16px;
    background: #fff;
    overflow-x: auto;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 13px;
    margin: 0;

    code {
      font-family: inherit;
      font-size: inherit;
      color: #333;
    }
  }
}
</style>