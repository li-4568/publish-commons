<template>
  <div class="xinput-demo">
    <h1>XInput 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XInput v-model="value1" placeholder="请输入内容" />
      </div>
      <p class="demo-value">输入值: {{ value1 }}</p>
      
      <div class="code-example">
        <h3>基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XInput v-model="value1" placeholder="请输入内容" /&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;输入值: {{ value1 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value1 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 输入框类型 -->
    <section class="demo-section">
      <h2>输入框类型</h2>
      <div class="demo-col">
        <XInput v-model="value2" type="text" placeholder="文本输入" />
        <XInput v-model="value3" type="password" placeholder="密码输入" />
        <XInput v-model="value4" type="number" placeholder="数字输入" />
        <XInput v-model="value5" type="search" placeholder="搜索输入" />
      </div>
      
      <div class="code-example">
        <h3>输入框类型</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XInput v-model="value2" type="text" placeholder="文本输入" /&gt;
    &lt;XInput v-model="value3" type="password" placeholder="密码输入" /&gt;
    &lt;XInput v-model="value4" type="number" placeholder="数字输入" /&gt;
    &lt;XInput v-model="value5" type="search" placeholder="搜索输入" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 输入框尺寸 -->
    <section class="demo-section">
      <h2>输入框尺寸</h2>
      <div class="demo-col">
        <XInput v-model="value6" size="large" placeholder="大号输入框" />
        <XInput v-model="value7" size="middle" placeholder="中号输入框" />
        <XInput v-model="value8" size="small" placeholder="小号输入框" />
      </div>
      
      <div class="code-example">
        <h3>输入框尺寸</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XInput v-model="value6" size="large" placeholder="大号输入框" /&gt;
    &lt;XInput v-model="value7" size="middle" placeholder="中号输入框" /&gt;
    &lt;XInput v-model="value8" size="small" placeholder="小号输入框" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 前缀和后缀图标 -->
    <section class="demo-section">
      <h2>前缀和后缀图标</h2>
      <div class="demo-col">
        <XInput v-model="value9" prefix-icon="👤" placeholder="用户名" />
        <XInput v-model="value10" suffix-icon="📧" placeholder="邮箱" />
        <XInput v-model="value11" prefix-icon="🔍" placeholder="搜索" />
      </div>
      
      <div class="code-example">
        <h3>前缀和后缀图标</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XInput v-model="value9" prefix-icon="👤" placeholder="用户名" /&gt;
    &lt;XInput v-model="value10" suffix-icon="📧" placeholder="邮箱" /&gt;
    &lt;XInput v-model="value11" prefix-icon="🔍" placeholder="搜索" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 清除按钮 -->
    <section class="demo-section">
      <h2>清除按钮</h2>
      <div class="demo-row">
        <XInput v-model="value12" clearable placeholder="可清除的输入框" />
      </div>
      
      <div class="code-example">
        <h3>清除按钮</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XInput v-model="value12" clearable placeholder="可清除的输入框" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value12 = ref('可清除的内容')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 字数统计 -->
    <section class="demo-section">
      <h2>字数统计</h2>
      <div class="demo-row">
        <XInput v-model="value13" :maxlength="100" show-count placeholder="限制100字符" />
      </div>
      
      <div class="code-example">
        <h3>字数统计</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XInput v-model="value13" :maxlength="100" show-count placeholder="限制100字符" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value13 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 禁用和只读 -->
    <section class="demo-section">
      <h2>禁用和只读</h2>
      <div class="demo-col">
        <XInput v-model="value14" disabled placeholder="禁用状态" />
        <XInput v-model="value15" readonly placeholder="只读状态" />
      </div>
      
      <div class="code-example">
        <h3>禁用和只读</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XInput v-model="value14" disabled placeholder="禁用状态" /&gt;
    &lt;XInput v-model="value15" readonly placeholder="只读状态" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value14 = ref('禁用状态')
const value15 = ref('只读状态')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 错误提示 -->
    <section class="demo-section">
      <h2>错误提示</h2>
      <div class="demo-row">
        <XInput v-model="value16" error-message="请输入正确的格式" placeholder="错误状态" />
      </div>
      
      <div class="code-example">
        <h3>错误提示</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XInput v-model="value16" error-message="请输入正确的格式" placeholder="错误状态" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value16 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 前置/后置标签 -->
    <section class="demo-section">
      <h2>前置/后置标签</h2>
      <div class="demo-col">
        <XInput v-model="value17" placeholder="请输入金额">
          <template #addonBefore>¥</template>
        </XInput>
        <XInput v-model="value18" placeholder="请输入网址">
          <template #addonAfter>.com</template>
        </XInput>
      </div>
      
      <div class="code-example">
        <h3>前置/后置标签</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XInput v-model="value17" placeholder="请输入金额"&gt;
      &lt;template #addonBefore&gt;¥&lt;/template&gt;
    &lt;/XInput&gt;
    &lt;XInput v-model="value18" placeholder="请输入网址"&gt;
      &lt;template #addonAfter&gt;.com&lt;/template&gt;
    &lt;/XInput&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value17 = ref('')
const value18 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 事件演示 -->
    <section class="demo-section">
      <h2>事件演示</h2>
      <div class="demo-col">
        <XInput
          v-model="value19"
          placeholder="触发各种事件"
          clearable
          @focus="handleFocus"
          @blur="handleBlur"
          @pressEnter="handlePressEnter"
          @clear="handleClear"
        />
      </div>
      <div class="event-log">
        <p v-for="(log, index) in eventLogs" :key="index">{{ log }}</p>
      </div>
      
      <div class="code-example">
        <h3>事件演示</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XInput
      v-model="value19"
      placeholder="触发各种事件"
      clearable
      @focus="handleFocus"
      @blur="handleBlur"
      @pressEnter="handlePressEnter"
      @clear="handleClear"
    /&gt;
  &lt;/div&gt;
  &lt;div class="event-log"&gt;
    &lt;p v-for="(log, index) in eventLogs" :key="index">{{ log }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value19 = ref('')

/**
 * 添加事件日志
 */
const addLog = (message: string) => {
  const time = new Date().toLocaleTimeString()
  eventLogs.value.unshift(`[${time}] ${message}`)
  // 只保留最近10条
  if (eventLogs.value.length > 10) {
    eventLogs.value.pop()
  }
}

/**
 * 处理聚焦事件
 */
const handleFocus = () => {
  addLog('输入框获得焦点')
}

/**
 * 处理失焦事件
 */
const handleBlur = () => {
  addLog('输入框失去焦点')
}

/**
 * 处理回车事件
 */
const handlePressEnter = () => {
  addLog('按下回车键')
}

/**
 * 处理清除事件
 */
const handleClear = () => {
  addLog('内容已清除')
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 校验规则演示 -->
    <section class="demo-section">
      <h2>校验规则演示</h2>

      <!-- 必填校验 -->
      <div class="demo-col">
        <h3>必填校验</h3>
        <XInput
          v-model="value20"
          placeholder="必填项"
          :rules="[{ type: 'required', message: '此项为必填项' }]"
          validateOnChange
        />
      </div>

      <!-- 邮箱校验 -->
      <div class="demo-col">
        <h3>邮箱校验</h3>
        <XInput
          v-model="value21"
          type="email"
          placeholder="请输入邮箱"
          :rules="[{ type: 'email', message: '请输入有效的邮箱地址' }]"
          validateOnChange
        />
      </div>

      <!-- 手机号校验 -->
      <div class="demo-col">
        <h3>手机号校验</h3>
        <XInput
          v-model="value22"
          type="tel"
          placeholder="请输入手机号"
          :rules="[{ type: 'phone', message: '请输入有效的手机号码' }]"
          validateOnChange
        />
      </div>

      <!-- 网址校验 -->
      <div class="demo-col">
        <h3>网址校验</h3>
        <XInput
          v-model="value23"
          type="url"
          placeholder="请输入网址"
          :rules="[{ type: 'url', message: '请输入有效的网址' }]"
          validateOnChange
        />
      </div>
      
      <div class="code-example">
        <h3>校验规则演示</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;!-- 必填校验 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;必填校验&lt;/h3&gt;
    &lt;XInput
      v-model="value20"
      placeholder="必填项"
      :rules="[{ type: 'required', message: '此项为必填项' }]"
      validateOnChange
    /&gt;
  &lt;/div&gt;

  &lt;!-- 邮箱校验 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;邮箱校验&lt;/h3&gt;
    &lt;XInput
      v-model="value21"
      type="email"
      placeholder="请输入邮箱"
      :rules="[{ type: 'email', message: '请输入有效的邮箱地址' }]"
      validateOnChange
    /&gt;
  &lt;/div&gt;

  &lt;!-- 手机号校验 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;手机号校验&lt;/h3&gt;
    &lt;XInput
      v-model="value22"
      type="tel"
      placeholder="请输入手机号"
      :rules="[{ type: 'phone', message: '请输入有效的手机号码' }]"
      validateOnChange
    /&gt;
  &lt;/div&gt;

  &lt;!-- 网址校验 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;网址校验&lt;/h3&gt;
    &lt;XInput
      v-model="value23"
      type="url"
      placeholder="请输入网址"
      :rules="[{ type: 'url', message: '请输入有效的网址' }]"
      validateOnChange
    /&gt;
  &lt;/div&gt;

  &lt;!-- 长度校验 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;长度校验&lt;/h3&gt;
    &lt;XInput
      v-model="value24"
      placeholder="长度在6-12个字符之间"
      :rules="[
        { type: 'minLength', value: 6, message: '长度不能少于6个字符' },
        { type: 'maxLength', value: 12, message: '长度不能超过12个字符' }
      ]"
      validateOnChange
    /&gt;
  &lt;/div&gt;

  &lt;!-- 数字校验 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;数字校验&lt;/h3&gt;
    &lt;XInput
      v-model="value25"
      type="number"
      placeholder="请输入数字"
      :rules="[{ type: 'number', message: '请输入有效的数字' }]"
      validateOnChange
    /&gt;
  &lt;/div&gt;

  &lt;!-- 正则表达式校验 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;正则表达式校验&lt;/h3&gt;
    &lt;XInput
      v-model="value26"
      placeholder="只能输入字母"
      :rules="[
        {
          type: 'pattern',
          value: /^[a-zA-Z]+$/,
          message: '只能输入字母'
        }
      ]"
      validateOnChange
    /&gt;
  &lt;/div&gt;

  &lt;!-- 自定义校验函数 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;自定义校验函数&lt;/h3&gt;
    &lt;XInput
      v-model="value27"
      placeholder="必须包含大写字母"
      :rules="[
        {
          validator: (value) => {
            if (!/[A-Z]/.test(value as string)) {
              return '必须包含至少一个大写字母'
            }
            return true
          }
        }
      ]"
      validateOnChange
    /&gt;
  &lt;/div&gt;

  &lt;!-- 组合校验 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;组合校验&lt;/h3&gt;
    &lt;XInput
      v-model="value28"
      placeholder="用户名（6-12位字母数字组合）"
      :rules="[
        { type: 'required', message: '请输入用户名' },
        { type: 'minLength', value: 6, message: '用户名长度不能少于6位' },
        { type: 'maxLength', value: 12, message: '用户名长度不能超过12位' },
        {
          type: 'pattern',
          value: /^[a-zA-Z0-9]+$/,
          message: '只能包含字母和数字'
        }
      ]"
      validateOnChange
    /&gt;
  &lt;/div&gt;

  &lt;!-- 校验触发时机 --&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;校验触发时机&lt;/h3&gt;
    &lt;XInput
      v-model="value29"
      placeholder="失焦时才校验"
      :rules="[{ type: 'required', message: '此项为必填项' }]"
      :validateTrigger="['blur']"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XInput from 'your-component-library/XInput/XInput.vue'

const value20 = ref('')
const value21 = ref('')
const value22 = ref('')
const value23 = ref('')
const value24 = ref('')
const value25 = ref('')
const value26 = ref('')
const value27 = ref('')
const value28 = ref('')
const value29 = ref('')
&lt;/script&gt;</code></pre>
      </div>

      <!-- 长度校验 -->
      <div class="demo-col">
        <h3>长度校验</h3>
        <XInput
          v-model="value24"
          placeholder="长度在6-12个字符之间"
          :rules="[
            { type: 'minLength', value: 6, message: '长度不能少于6个字符' },
            { type: 'maxLength', value: 12, message: '长度不能超过12个字符' }
          ]"
          validateOnChange
        />
      </div>

      <!-- 数字校验 -->
      <div class="demo-col">
        <h3>数字校验</h3>
        <XInput
          v-model="value25"
          type="number"
          placeholder="请输入数字"
          :rules="[{ type: 'number', message: '请输入有效的数字' }]"
          validateOnChange
        />
      </div>

      <!-- 正则表达式校验 -->
      <div class="demo-col">
        <h3>正则表达式校验</h3>
        <XInput
          v-model="value26"
          placeholder="只能输入字母"
          :rules="[
            {
              type: 'pattern',
              value: /^[a-zA-Z]+$/,
              message: '只能输入字母'
            }
          ]"
          validateOnChange
        />
      </div>

      <!-- 自定义校验函数 -->
      <div class="demo-col">
        <h3>自定义校验函数</h3>
        <XInput
          v-model="value27"
          placeholder="必须包含大写字母"
          :rules="[
            {
              validator: (value) => {
                if (!/[A-Z]/.test(value as string)) {
                  return '必须包含至少一个大写字母'
                }
                return true
              }
            }
          ]"
          validateOnChange
        />
      </div>

      <!-- 组合校验 -->
      <div class="demo-col">
        <h3>组合校验</h3>
        <XInput
          v-model="value28"
          placeholder="用户名（6-12位字母数字组合）"
          :rules="[
            { type: 'required', message: '请输入用户名' },
            { type: 'minLength', value: 6, message: '用户名长度不能少于6位' },
            { type: 'maxLength', value: 12, message: '用户名长度不能超过12位' },
            {
              type: 'pattern',
              value: /^[a-zA-Z0-9]+$/,
              message: '只能包含字母和数字'
            }
          ]"
          validateOnChange
        />
      </div>

      <!-- 校验触发时机 -->
      <div class="demo-col">
        <h3>校验触发时机</h3>
        <XInput
          v-model="value29"
          placeholder="失焦时才校验"
          :rules="[{ type: 'required', message: '此项为必填项' }]"
          :validateTrigger="['blur']"
        />
      </div>
    </section>

    <!-- 表单提交演示 -->
    <section class="demo-section">
      <h2>表单提交演示</h2>
      <div class="form-demo">
        <div class="form-item">
          <label>用户名</label>
          <XInput
            v-model="formData.username"
            ref="usernameRef"
            placeholder="请输入用户名"
            :rules="[
              { type: 'required', message: '用户名不能为空' },
              { type: 'minLength', value: 6, message: '用户名至少6位' }
            ]"
          />
        </div>
        <div class="form-item">
          <label>邮箱</label>
          <XInput
            v-model="formData.email"
            ref="emailRef"
            type="email"
            placeholder="请输入邮箱"
            :rules="[
              { type: 'required', message: '邮箱不能为空' },
              { type: 'email', message: '请输入有效的邮箱' }
            ]"
          />
        </div>
        <div class="form-item">
          <label>手机号</label>
          <XInput
            v-model="formData.phone"
            ref="phoneRef"
            type="tel"
            placeholder="请输入手机号"
            :rules="[
              { type: 'required', message: '手机号不能为空' },
              { type: 'phone', message: '请输入有效的手机号' }
            ]"
          />
        </div>
        <div class="form-item">
          <XButton type="primary" @click="handleSubmit">提交表单</XButton>
          <XButton @click="handleReset">重置</XButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  /**
   * XInput 组件使用示例
   */
  import { ref } from 'vue'
  import XInput from '../src/components/XInput/XInput.vue'
  import XButton from '../src/components/XButton/XButton.vue'

  // 接受外部传入的props
  const props = defineProps<{
    value?: string
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
  }>()

  // 基础用法
  const value1 = ref(props.value || '')

  // 输入框类型
  const value2 = ref('')
  const value3 = ref('')
  const value4 = ref('')
  const value5 = ref('')

  // 输入框尺寸
  const value6 = ref('')
  const value7 = ref('')
  const value8 = ref('')

  // 前缀和后缀图标
  const value9 = ref('')
  const value10 = ref('')
  const value11 = ref('')

  // 清除按钮
  const value12 = ref('可清除的内容')

  // 字数统计
  const value13 = ref('')

  // 禁用和只读
  const value14 = ref('禁用状态')
  const value15 = ref('只读状态')

  // 错误提示
  const value16 = ref('')

  // 前置/后置标签
  const value17 = ref('')
  const value18 = ref('')

  // 事件演示
  const value19 = ref('')
  const eventLogs = ref<string[]>([])

  // 校验演示
  const value20 = ref('')
  const value21 = ref('')
  const value22 = ref('')
  const value23 = ref('')
  const value24 = ref('')
  const value25 = ref('')
  const value26 = ref('')
  const value27 = ref('')
  const value28 = ref('')
  const value29 = ref('')

  // 表单演示
  const formData = ref({
    username: '',
    email: '',
    phone: ''
  })

  // 表单引用
  const usernameRef = ref()
  const emailRef = ref()
  const phoneRef = ref()

  /**
   * 添加事件日志
   */
  const addLog = (message: string) => {
    const time = new Date().toLocaleTimeString()
    eventLogs.value.unshift(`[${time}] ${message}`)
    // 只保留最近10条
    if (eventLogs.value.length > 10) {
      eventLogs.value.pop()
    }
  }

  /**
   * 处理聚焦事件
   */
  const handleFocus = () => {
    addLog('输入框获得焦点')
  }

  /**
   * 处理失焦事件
   */
  const handleBlur = () => {
    addLog('输入框失去焦点')
  }

  /**
   * 处理回车事件
   */
  const handlePressEnter = () => {
    addLog('按下回车键')
  }

  /**
   * 处理清除事件
   */
  const handleClear = () => {
    addLog('内容已清除')
  }

  /**
   * 处理表单提交
   */
  const handleSubmit = async () => {
    // 手动触发所有输入框的校验
    const usernameValid = await usernameRef.value?.validate()
    const emailValid = await emailRef.value?.validate()
    const phoneValid = await phoneRef.value?.validate()

    if (usernameValid?.valid && emailValid?.valid && phoneValid?.valid) {
      addLog('表单验证通过！可以提交数据了')
      // 这里可以执行实际的表单提交逻辑
    } else {
      addLog('表单验证失败，请检查输入')
    }
  }

  /**
   * 重置表单
   */
  const handleReset = () => {
    formData.value = {
      username: '',
      email: '',
      phone: ''
    }

    // 清除校验状态
    usernameRef.value?.clearValidate()
    emailRef.value?.clearValidate()
    phoneRef.value?.clearValidate()

    addLog('表单已重置')
  }
</script>

<style scoped lang="less">
  .xinput-demo {
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

    p {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 1.8;
      font-family: monospace;
    }
  }

  // 表单演示样式
  .form-demo {
    max-width: 500px;
    padding: 24px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .form-item {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
    }

    :deep(.xinput-wrapper) {
      width: 100%;
    }
  }

  // 代码示例样式
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
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 13px;
    line-height: 1.5;
    color: #333;
  }
</style>
