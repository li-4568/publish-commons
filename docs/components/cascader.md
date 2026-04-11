# Cascader 级联选择

级联选择组件，用于选择具有层级关系的数据。

## 效果演示

<DemoCascader />

## 基础用法

```vue
<template>
  <XCascader v-model="value" :options="options" />
</template>

<script setup>
import { ref } from 'vue'
import { XCascader } from 'publish-commons'

const value = ref([])
const options = ref([
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'zhonghuamen', label: '中华门' },
        ],
      },
    ],
  },
])
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 选中的值 | `array` | `[]` |
| options | 选项数据 | `array` | `[]` |
| placeholder | 占位符 | `string` | `'请选择'` |
| disabled | 禁用 | `boolean` | `false` |
| allowClear | 允许清除 | `boolean` | `true` |
| showSearch | 支持搜索 | `boolean` | `false` |
| changeOnSelect | 点击即改变 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化 | `array` |
| change | 值变化 | `array` |
