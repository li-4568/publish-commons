# Chart 图表

基于 ECharts 封装的图表组件，支持多种图表类型。

## 效果演示

<DemoChart />

## 基础用法

```vue
<template>
  <XChart
    :dataSource="dataSource"
    componentType="bar"
    title="销售统计"
  />
</template>

<script setup>
import { ref } from 'vue'
import { XChart } from 'publish-commons'

const dataSource = ref([
  { label: '1月', value: 100 },
  { label: '2月', value: 200 },
  { label: '3月', value: 150 },
])
</script>
```

## 折线图

```vue
<template>
  <XChart
    :dataSource="dataSource"
    componentType="line"
    title="趋势图"
    :smooth="true"
  />
</template>
```

## 饼图

```vue
<template>
  <XChart
    :dataSource="dataSource"
    componentType="pie"
    title="占比图"
  />
</template>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| dataSource | 数据源 | `array` | `[]` |
| componentType | 图表类型 | `'bar' \| 'line' \| 'pie' \| 'scatter' \| 'radar' \| 'barRound'` | `'bar'` |
| title | 标题 | `string` | `''` |
| unit | 单位 | `string` | `''` |
| xKey | X轴字段 | `string` | `'label'` |
| yKey | Y轴字段 | `string` | `'value'` |
| width | 宽度 | `string` | `'100%'` |
| height | 高度 | `string` | `'300px'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| chartClick | 点击图表 | `params` |
| chartInit | 图表初始化 | `chart` |
