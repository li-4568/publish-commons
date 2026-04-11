<script lang="ts">
import type { ChartDataItem, ChartType } from './chart/chart'

export interface XChartProps {
  dataSource?: ChartDataItem[]
  componentType?: ChartType
  title?: string
  unit?: string
  xKey?: string
  yKey?: string
  isRoll?: boolean
  lineM?: boolean
  lineDefault?: string[]
  smooth?: boolean
  seriesKey?: string
  indicatorKey?: string
  renderer?: 'canvas' | 'svg'
  option?: any
  optionFn?: (data: ChartDataItem[], type: ChartType, defaultOption: any) => any
}

export default {
  name: 'XChart',
}
</script>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'
import { useChartRegistry, useChartInstance, useChartOption } from './composables'

const props = withDefaults(defineProps<XChartProps>(), {
  dataSource: () => [],
  componentType: 'bar',
  title: '',
  unit: '',
  xKey: 'label',
  yKey: 'value',
  isRoll: false,
  lineM: false,
  lineDefault: () => ['label', 'data'],
  smooth: false,
  seriesKey: 'series',
  indicatorKey: 'indicator',
  renderer: 'canvas',
  option: undefined,
  optionFn: undefined,
})

const emit = defineEmits<{
  (e: 'chartClick', params: any): void
  (e: 'chartInit', chart: any): void
}>()

const chartRef = ref<HTMLDivElement | null>(null)

// 使用 composables
const { registerBuiltInCharts, generateOptionByType } = useChartRegistry({
  title: props.title,
  unit: props.unit,
  xKey: props.xKey,
  yKey: props.yKey,
  isRoll: props.isRoll,
  lineM: props.lineM,
  lineDefault: props.lineDefault,
  smooth: props.smooth,
  seriesKey: props.seriesKey,
  indicatorKey: props.indicatorKey,
})
const { generateOption } = useChartOption(generateOptionByType)

const {
  isInitialized,
  init,
  updateOption,
  resize,
  clear,
  dispatchAction,
  getInstance,
} = useChartInstance(chartRef, {
  renderer: props.renderer,
  onClick: (params) => emit('chartClick', params),
  onInit: (chart) => emit('chartInit', chart),
})

// 生成当前配置
const currentOption = () =>
  generateOption({
    dataSource: props.dataSource,
    componentType: props.componentType,
    option: props.option,
    optionFn: props.optionFn,
  })

// 初始化图表
const initChart = () => {
  const option = currentOption()
  if (option) {
    init(option)
  }
}

// 监听数据变化
watch(
  () => props.dataSource,
  (newVal) => {
    if (!newVal?.length) {
      clear()
      return
    }
    if (isInitialized.value) {
      const option = currentOption()
      if (option) updateOption(option)
    } else {
      initChart()
    }
  },
  { deep: true }
)

// 监听类型变化
watch(() => props.componentType, () => {
  const option = currentOption()
  if (option) updateOption(option)
})

// 监听自定义配置变化
watch(
  () => props.option,
  () => {
    if (!isInitialized.value) return
    const option = currentOption()
    if (option) updateOption(option)
  },
  { deep: true }
)

// 生命周期
onMounted(() => {
  registerBuiltInCharts()
  nextTick(initChart)
})

// 暴露方法
defineExpose({
  getInstance,
  resize,
  dispatchAction,
  clear,
  updateChartOption: () => {
    const option = currentOption()
    if (option) updateOption(option)
  },
})
</script>

<template>
  <div class="x-chart">
    <div ref="chartRef" class="chart-div"></div>
  </div>
</template>

<style scoped>
.x-chart {
  width: 100%;
  height: 100%;
  min-height: 300px;
}
.x-chart .chart-div {
  width: 98%;
  height: 96%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
