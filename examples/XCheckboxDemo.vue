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
    
      <div class="code-example">
        <h3>基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckbox v-model="value1" label="复选框" /&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ value1 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox } from 'your-component-library'

const value1 = ref(false)
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="demo-section">
      <h2>不同尺寸</h2>
      <div class="demo-row">
        <XCheckbox v-model="value2" label="大号复选框" size="large" />
        <XCheckbox v-model="value3" label="中号复选框" size="middle" />
        <XCheckbox v-model="value4" label="小号复选框" size="small" />
      </div>
    
      <div class="code-example">
        <h3>不同尺寸</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckbox v-model="value2" label="大号复选框" size="large" /&gt;
    &lt;XCheckbox v-model="value3" label="中号复选框" size="middle" /&gt;
    &lt;XCheckbox v-model="value4" label="小号复选框" size="small" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox } from 'your-component-library'

const value2 = ref(false)
const value3 = ref(false)
const value4 = ref(false)
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <XCheckbox v-model="value5" label="禁用的复选框" disabled />
        <XCheckbox v-model="value6" label="禁用且选中的复选框" disabled />
      </div>
    
      <div class="code-example">
        <h3>禁用状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckbox v-model="value5" label="禁用的复选框" disabled /&gt;
    &lt;XCheckbox v-model="value6" label="禁用且选中的复选框" disabled /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox } from 'your-component-library'

const value5 = ref(false)
const value6 = ref(true)
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 不确定状态 -->
    <section class="demo-section">
      <h2>不确定状态</h2>
      <div class="demo-row">
        <XCheckbox v-model="value7" label="不确定的复选框" indeterminate />
      </div>
      <p class="demo-value">选择值: {{ value7 }}</p>
    
      <div class="code-example">
        <h3>不确定状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckbox v-model="value7" label="不确定的复选框" indeterminate /&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ value7 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox } from 'your-component-library'

const value7 = ref(false)
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 状态 -->
    <section class="demo-section">
      <h2>状态</h2>
      <div class="demo-row">
        <XCheckbox v-model="value8" label="错误状态" status="error" />
        <XCheckbox v-model="value9" label="警告状态" status="warning" />
      </div>
    
      <div class="code-example">
        <h3>状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckbox v-model="value8" label="错误状态" status="error" /&gt;
    &lt;XCheckbox v-model="value9" label="警告状态" status="warning" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox } from 'your-component-library'

const value8 = ref(false)
const value9 = ref(false)
&lt;/script&gt;</code></pre>
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
    
      <div class="code-example">
        <h3>自定义标签</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckbox v-model="value10"&gt;
      &lt;span style="color: #1890ff; font-weight: bold;"&gt;自定义标签内容&lt;/span&gt;
    &lt;/XCheckbox&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox } from 'your-component-library'

const value10 = ref(false)
&lt;/script&gt;</code></pre>
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
    
      <div class="code-example">
        <h3>事件监听</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckbox v-model="value11" label="点击触发事件" @change="handleChange" @click="handleClick" /&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ value11 }}&lt;/p&gt;
  &lt;p class="demo-value"&gt;事件日志: {{ eventLog }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox } from 'your-component-library'

const value11 = ref(false)
const eventLog = ref('')

// 事件处理函数
const handleChange = (checked: boolean) => {
  eventLog.value = `change: ${checked}`
}

const handleClick = (_event: MouseEvent) => {
  eventLog.value = `click`
}
&lt;/script&gt;</code></pre>
      </div>
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
    
      <div class="code-example">
        <h3>XCheckboxGroup 基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckboxGroup v-model="groupValue1"&gt;
      &lt;XCheckbox value="apple" label="苹果" /&gt;
      &lt;XCheckbox value="banana" label="香蕉" /&gt;
      &lt;XCheckbox value="orange" label="橙子" /&gt;
      &lt;XCheckbox value="grape" label="葡萄" /&gt;
    &lt;/XCheckboxGroup&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ groupValue1 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox, XCheckboxGroup } from 'your-component-library'

&lt;/script&gt;</code></pre>
      </div>
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
    
      <div class="code-example">
        <h3>XCheckboxGroup 不同尺寸</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;大号&lt;/h3&gt;
      &lt;XCheckboxGroup v-model="groupValue2" size="large"&gt;
        &lt;XCheckbox value="apple" label="苹果" /&gt;
        &lt;XCheckbox value="banana" label="香蕉" /&gt;
        &lt;XCheckbox value="orange" label="橙子" /&gt;
      &lt;/XCheckboxGroup&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;中号&lt;/h3&gt;
      &lt;XCheckboxGroup v-model="groupValue3" size="middle"&gt;
        &lt;XCheckbox value="apple" label="苹果" /&gt;
        &lt;XCheckbox value="banana" label="香蕉" /&gt;
        &lt;XCheckbox value="orange" label="橙子" /&gt;
      &lt;/XCheckboxGroup&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;小号&lt;/h3&gt;
      &lt;XCheckboxGroup v-model="groupValue4" size="small"&gt;
        &lt;XCheckbox value="apple" label="苹果" /&gt;
        &lt;XCheckbox value="banana" label="香蕉" /&gt;
        &lt;XCheckbox value="orange" label="橙子" /&gt;
      &lt;/XCheckboxGroup&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox, XCheckboxGroup } from 'your-component-library'

&lt;/script&gt;</code></pre>
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
    
      <div class="code-example">
        <h3>XCheckboxGroup 禁用状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckboxGroup v-model="groupValue5" disabled&gt;
      &lt;XCheckbox value="apple" label="苹果" /&gt;
      &lt;XCheckbox value="banana" label="香蕉" /&gt;
      &lt;XCheckbox value="orange" label="橙子" /&gt;
      &lt;XCheckbox value="grape" label="葡萄" /&gt;
    &lt;/XCheckboxGroup&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ groupValue5 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox, XCheckboxGroup } from 'your-component-library'

&lt;/script&gt;</code></pre>
      </div>
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
    
      <div class="code-example">
        <h3>XCheckboxGroup 部分禁用</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckboxGroup v-model="groupValue6"&gt;
      &lt;XCheckbox value="apple" label="苹果" /&gt;
      &lt;XCheckbox value="banana" label="香蕉" disabled /&gt;
      &lt;XCheckbox value="orange" label="橙子" /&gt;
      &lt;XCheckbox value="grape" label="葡萄" disabled /&gt;
    &lt;/XCheckboxGroup&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ groupValue6 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox, XCheckboxGroup } from 'your-component-library'

&lt;/script&gt;</code></pre>
      </div>
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
    
      <div class="code-example">
        <h3>XCheckboxGroup 事件监听</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XCheckboxGroup v-model="groupValue7" @change="handleGroupChange"&gt;
      &lt;XCheckbox value="apple" label="苹果" /&gt;
      &lt;XCheckbox value="banana" label="香蕉" /&gt;
      &lt;XCheckbox value="orange" label="橙子" /&gt;
      &lt;XCheckbox value="grape" label="葡萄" /&gt;
    &lt;/XCheckboxGroup&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;选择值: {{ groupValue7 }}&lt;/p&gt;
  &lt;p class="demo-value"&gt;事件日志: {{ groupEventLog }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XCheckbox, XCheckboxGroup } from 'your-component-library'

const groupEventLog = ref('')

// 事件处理函数
const handleGroupChange = (value: string[]) => {
  groupEventLog.value = `change: ${JSON.stringify(value)}`
}
&lt;/script&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
const handleChange = (checked: any) => {
  eventLog.value = `change: ${checked}`
}

const handleClick = (_event: MouseEvent) => {
  eventLog.value = `click`
}

const handleGroupChange = (value: string[]) => {
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