<template>
  <div class="demo-input">
    <div class="demo-block">
      <h4>基础用法</h4>
      <div class="demo-row">
        <XInput v-model="value1" placeholder="请输入内容" />
        <XInput v-model="value2" placeholder="禁用状态" disabled />
        <XInput v-model="value3" placeholder="只读状态" readonly />
      </div>
    </div>

    <div class="demo-block">
      <h4>尺寸</h4>
      <div class="demo-row">
        <XInput v-model="value4" size="large" placeholder="大输入框" />
        <XInput v-model="value5" size="middle" placeholder="中输入框" />
        <XInput v-model="value6" size="small" placeholder="小输入框" />
      </div>
    </div>

    <div class="demo-block">
      <h4>密码输入</h4>
      <div class="demo-row">
        <XInput v-model="value7" type="password" placeholder="请输入密码" />
        <XInput v-model="value8" type="password" show-password placeholder="显示密码" />
      </div>
    </div>

    <div class="demo-block">
      <h4>可清空</h4>
      <div class="demo-row">
        <XInput v-model="value9" clearable placeholder="输入后可清空" />
      </div>
    </div>

    <div class="demo-block">
      <h4>字数统计</h4>
      <div class="demo-row">
        <XInput v-model="value10" show-count maxlength="20" placeholder="最多输入20个字符" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XInput } from 'publish-commons'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('输入内容')
const value10 = ref('')
</script>

<style scoped>
.demo-input {
  padding: 20px;
  border: 1px solid #e0e0e6;
  border-radius: 8px;
  background: #fff;
}

.demo-block {
  margin-bottom: 24px;
}

.demo-block h4 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 14px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.demo-row > * {
  margin: 0;
  width: 200px;
}
</style>
