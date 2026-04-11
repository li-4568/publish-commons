<template>
  <div class="demo-form">
    <div class="demo-block">
      <h4>基础表单</h4>
      <XForm :params-data="formParams" />
    </div>

    <div class="demo-block">
      <h4>垂直布局</h4>
      <XForm :params-data="formParamsVertical" layout="vertical" />
    </div>

    <div class="demo-block">
      <h4>内联布局</h4>
      <XForm :params-data="formParamsInline" layout="inline" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XForm } from 'publish-commons'

const formParams = ref({
  formList: [
    { prop: 'name', label: '姓名', type: 'input', required: true, placeholder: '请输入姓名' },
    { prop: 'age', label: '年龄', type: 'inputNum', placeholder: '请输入年龄' },
    { prop: 'status', label: '状态', type: 'select', placeholder: '请选择状态', options: [
      { label: '在职', value: 'active' },
      { label: '离职', value: 'inactive' },
    ]},
    { prop: 'date', label: '日期', type: 'date' },
  ],
  formListSet: {
    name: '',
    age: null,
    status: undefined,
    date: null,
  }
})

const formParamsVertical = ref({
  formList: [
    { prop: 'username', label: '用户名', type: 'input', required: true, placeholder: '请输入用户名' },
    { prop: 'password', label: '密码', type: 'input', required: true, placeholder: '请输入密码' },
  ],
  formListSet: {
    username: '',
    password: '',
  }
})

const formParamsInline = ref({
  formList: [
    { prop: 'name', label: '姓名', type: 'input', placeholder: '请输入' },
    { prop: 'age', label: '年龄', type: 'inputNum', placeholder: '请输入' },
    { prop: 'status', label: '状态', type: 'select', options: [
      { label: '全部', value: '' },
      { label: '在职', value: 'active' },
      { label: '离职', value: 'inactive' },
    ]},
  ],
  formListSet: {
    name: '',
    age: null,
    status: undefined,
  }
})
</script>

<style scoped>
.demo-form {
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

.demo-block:last-child {
  margin-bottom: 0;
}
</style>
