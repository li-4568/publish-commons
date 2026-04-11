# Input 输入框

封装了多种输入框类型：普通输入、数字输入、负数输入、浮点数输入。

## 效果演示

<DemoInput />

## 基础用法

```vue
<template>
  <XInput v-model="value" placeholder="请输入" />
</template>

<script setup>
import { ref } from 'vue'
import { XInput } from 'publish-commons'

const value = ref('')
</script>
```

## 数字输入

```vue
<template>
  <!-- 整数 -->
  <XInputNum v-model="num" :min="0" :max="100" />

  <!-- 负数 -->
  <XInputNeg v-model="negNum" />

  <!-- 浮点数 -->
  <XInputFloat v-model="floatNum" :precision="2" />
</template>

<script setup>
const num = ref(0)
const negNum = ref(-10)
const floatNum = ref(1.23)
</script>
```

## 带前后缀

```vue
<template>
  <XInput v-model="value">
    <template #prefix>￥</template>
    <template #suffix>元</template>
  </XInput>
</template>
```

## API

### XInput Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 值 | `string` | `''` |
| type | 类型 | `'text' \| 'password' \| 'textarea'` | `'text'` |
| placeholder | 占位符 | `string` | - |
| disabled | 禁用 | `boolean` | `false` |
| readonly | 只读 | `boolean` | `false` |
| maxlength | 最大长度 | `number` | - |
| showCount | 显示字数 | `boolean` | `false` |
| clearable | 可清空 | `boolean` | `true` |

### XInputNum Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 值 | `number` | `0` |
| min | 最小值 | `number` | `-Infinity` |
| max | 最大值 | `number` | `Infinity` |
| step | 步长 | `number` | `1` |

### XInputFloat Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 值 | `number` | `0` |
| precision | 小数位数 | `number` | `2` |
| min | 最小值 | `number` | `-Infinity` |
| max | 最大值 | `number` | `Infinity` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化 | `string \| number` |
| change | 值变化 | `string \| number` |
| focus | 获得焦点 | `Event` |
| blur | 失去焦点 | `Event` |
| pressEnter | 按下回车 | `Event` |
