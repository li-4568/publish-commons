# Form 表单

基于 Ant Design Vue Form 封装，支持配置化表单生成。

## 效果演示

<DemoForm />

## 基础用法

```vue
<template>
  <XForm
    ref="formRef"
    :paramsData="formConfig"
    @submit="handleSubmit"
  />
  <XButton type="primary" @click="submitForm">提交</XButton>
  <XButton @click="resetForm">重置</XButton>
</template>

<script setup>
import { ref } from 'vue'
import { XForm, XButton } from 'publish-commons'

const formRef = ref()

const formConfig = {
  formList: [
    { prop: 'name', label: '姓名', type: 'input', required: true },
    { prop: 'age', label: '年龄', type: 'inputNum' },
    { prop: 'gender', label: '性别', type: 'select', options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' },
    ]},
  ],
  formListSet: {
    name: '',
    age: null,
    gender: undefined,
  }
}

const submitForm = async () => {
  try {
    const result = await formRef.value.submit()
    console.log('表单数据:', result.data)
  } catch (error) {
    console.error('验证失败:', error)
  }
}

const resetForm = () => {
  formRef.value.reset()
}
</script>
```

## 不同布局

```vue
<template>
  <XForm :paramsData="formConfig" layout="horizontal" />
  <XForm :paramsData="formConfig" layout="vertical" />
  <XForm :paramsData="formConfig" layout="inline" />
</template>
```

## 支持多种表单项类型

```vue
<script setup>
const formConfig = {
  formList: [
    { prop: 'name', label: '姓名', type: 'input' },
    { prop: 'age', label: '年龄', type: 'inputNum' },
    { prop: 'amount', label: '金额', type: 'inputFloat' },
    { prop: 'birthday', label: '生日', type: 'date' },
    { prop: 'city', label: '城市', type: 'select', options: [] },
    { prop: 'hobbies', label: '爱好', type: 'checkbox' },
    { prop: 'gender', label: '性别', type: 'radio' },
    { prop: 'address', label: '地址', type: 'cascader' },
    { prop: 'remark', label: '备注', type: 'textarea' },
    { prop: 'content', label: '内容', type: 'editor' },
  ]
}
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| paramsData | 表单配置数据 | `{ formList, formListSet }` | - |
| colon | 显示冒号 | `boolean` | `true` |
| hideRequiredMark | 隐藏必填标记 | `boolean` | `false` |
| labelAlign | 标签对齐 | `'left' \| 'right'` | `'right'` |
| layout | 表单布局 | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` |
| labelCol | 标签布局 | `object` | - |

### Methods

| 方法名 | 说明 | 返回值 |
|--------|------|--------|
| submit | 提交表单（含验证） | `Promise<{ success, data }>` |
| reset | 重置表单 | - |
| clearValidate | 清除验证状态 | - |
| setFieldValue | 设置单个字段值 | - |
| getFieldValue | 获取单个字段值 | `any` |
| setFieldsValue | 批量设置字段值 | - |

### formList 配置项

| 属性 | 说明 | 类型 |
|------|------|------|
| prop | 字段名 | `string` |
| label | 标签 | `string` |
| type | 类型 | `string` |
| required | 必填 | `boolean` |
| rules | 验证规则 | `object[]` |
| options | 选项（select/radio/checkbox） | `array` |
| defaultValue | 默认值 | `any` |
| colSpan | 占据列数 | `number` |
