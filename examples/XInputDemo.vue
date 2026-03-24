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
    </section>

    <!-- 输入框尺寸 -->
    <section class="demo-section">
      <h2>输入框尺寸</h2>
      <div class="demo-col">
        <XInput v-model="value6" size="large" placeholder="大号输入框" />
        <XInput v-model="value7" size="middle" placeholder="中号输入框" />
        <XInput v-model="value8" size="small" placeholder="小号输入框" />
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
    </section>

    <!-- 清除按钮 -->
    <section class="demo-section">
      <h2>清除按钮</h2>
      <div class="demo-row">
        <XInput v-model="value12" clearable placeholder="可清除的输入框" />
      </div>
    </section>

    <!-- 字数统计 -->
    <section class="demo-section">
      <h2>字数统计</h2>
      <div class="demo-row">
        <XInput v-model="value13" :maxlength="100" show-count placeholder="限制100字符" />
      </div>
    </section>

    <!-- 禁用和只读 -->
    <section class="demo-section">
      <h2>禁用和只读</h2>
      <div class="demo-col">
        <XInput v-model="value14" disabled placeholder="禁用状态" />
        <XInput v-model="value15" readonly placeholder="只读状态" />
      </div>
    </section>

    <!-- 错误提示 -->
    <section class="demo-section">
      <h2>错误提示</h2>
      <div class="demo-row">
        <XInput v-model="value16" error-message="请输入正确的格式" placeholder="错误状态" />
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

  // 基础用法
  const value1 = ref('')

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
    flex-direction: column;
    gap: 16px;
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
</style>
