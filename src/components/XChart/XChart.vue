<script lang="ts">
import type { ChartDataItem, ChartType } from './chart/chart';

/**
 * 组件属性定义
 */
export interface XChartProps {
  /** 数据源 */
  dataSource?: ChartDataItem[];
  /** 图表类型 */
  componentType?: ChartType;
  /** 标题 */
  title?: string;
  /** 单位 */
  unit?: string;
  /** X轴字段名 */
  xKey?: string;
  /** Y轴字段名 */
  yKey?: string;
  /** 柱状图是否翻转（横向） */
  isRoll?: boolean;
  /** 折线图是否为多线模式 */
  lineM?: boolean;
  /** 多线模式默认字段 */
  lineDefault?: string[];
  /** 折线是否平滑 */
  smooth?: boolean;
  /** 散点图系列字段 */
  seriesKey?: string;
  /** 雷达图指标字段 */
  indicatorKey?: string;
  /** 渲染器类型 */
  renderer?: 'canvas' | 'svg';
  /**
   * 自定义 ECharts 配置
   * 会与自动生成的配置合并，优先级更高
   */
  option?: any;
  /**
   * 自定义配置生成函数
   * 如果提供，会完全替代内置的配置生成逻辑
   * 参数: (data, type, defaultOption) => finalOption
   */
  optionFn?: (data: ChartDataItem[], type: ChartType, defaultOption: any) => any;
}

export default {
  name: 'XChart',
};
</script>
<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import * as echarts from 'echarts';
import barOption from './chart/barOption';
import pieOption from './chart/pieOption';
import barRoundOption from './chart/barRoundOption';
import lineOption from './chart/lineOption';
import scatterOption from './chart/scatterOption';
import radarOption from './chart/radarOption';
import { getChartRegistry } from './registry';

/**
 * 图表注册表 - 支持动态扩展图表类型
 */
const chartRegistry = getChartRegistry();

/**
 * 内置图表是否已注册
 */
let builtInChartsRegistered = false;

/**
 * 注册内置图表类型
 */
const registerBuiltInCharts = () => {
  if (builtInChartsRegistered) return;

  chartRegistry.set('bar', barOption);
  chartRegistry.set('pie', pieOption);
  chartRegistry.set('barRound', barRoundOption);
  chartRegistry.set('line', lineOption);
  chartRegistry.set('scatter', scatterOption);
  chartRegistry.set('radar', radarOption);

  builtInChartsRegistered = true;
};

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
});

const emit = defineEmits<{
  (e: 'chartClick', params: any): void;
  (e: 'chartInit', chart: any): void;
}>();

const chartRef = ref<HTMLDivElement | null>(null);
const myChart = ref<any>(null);
const isInitialized = ref(false);

/**
 * 根据图表类型生成配置
 */
const generateOptionByType = (type: ChartType, data: ChartDataItem[]): any => {
  const optionFn = chartRegistry.get(type);
  if (!optionFn) {
    console.warn(`[XChart] 未知的图表类型: ${type}`);
    return null;
  }

  // 根据类型传递对应的参数
  switch (type) {
    case 'bar':
      return optionFn(data, props.title, props.unit, props.xKey, props.yKey, props.isRoll);
    case 'pie':
      return optionFn(data, props.title, props.unit, props.xKey, props.yKey);
    case 'barRound':
      return optionFn(data, props.title, props.unit, props.xKey, props.yKey);
    case 'line':
      return optionFn(data, props.title, props.unit, props.xKey, props.yKey, props.lineM, props.lineDefault, props.smooth);
    case 'scatter':
      return optionFn(data, props.title, props.unit, props.xKey, props.yKey, props.seriesKey);
    case 'radar':
      return optionFn(data, props.title, props.unit, props.indicatorKey, props.yKey, props.seriesKey);
    default:
      return optionFn(data, props.title, props.unit, props.xKey, props.yKey);
  }
};

/**
 * 深度合并对象（简单实现）
 * 对于数组，会合并每个数组项而不是完全替换
 */
const deepMerge = (target: any, source: any): any => {
  const result = { ...target };

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = deepMerge(result[key] || {}, source[key]);
      } else if (Array.isArray(source[key]) && Array.isArray(result[key])) {
        // 数组合并：合并每个数组项
        result[key] = result[key].map((item: any, index: number) => {
          if (index < source[key].length && source[key][index] && typeof source[key][index] === 'object') {
            return deepMerge(item, source[key][index]);
          }
          return item;
        });
      } else {
        result[key] = source[key];
      }
    }
  }

  return result;
};

/**
 * 合并配置
 * 优先级: 自定义 option > 自动生成的配置
 */
const mergeOption = (generatedOption: any): any => {
  if (!generatedOption) return null;

  // 如果提供了自定义配置，进行合并
  if (props.option && typeof props.option === 'object') {
    return deepMerge(generatedOption, props.option);
  }

  return generatedOption;
};

/**
 * 生成最终配置
 */
const generateOption = (): any => {
  const { dataSource, componentType, optionFn } = props;

  // 1. 如果没有数据，返回 null
  if (!dataSource || dataSource.length === 0) {
    return null;
  }

  let finalOption: any;

  // 2. 如果提供了自定义配置生成函数，优先使用
  if (optionFn && typeof optionFn === 'function') {
    const defaultOption = generateOptionByType(componentType, dataSource);
    finalOption = optionFn(dataSource, componentType, defaultOption);
  } else {
    // 3. 使用内置配置生成
    const generatedOption = generateOptionByType(componentType, dataSource);
    finalOption = mergeOption(generatedOption);
  }

  // 4. 验证 series 是否有效
  if (finalOption && finalOption.series) {
    const originalLength = finalOption.series.length;
    // 过滤掉无效的 series 项
    finalOption.series = finalOption.series.filter((item: any) => {
      return item && item.type;
    });
    if (finalOption.series.length === 0 && originalLength > 0) {
      console.warn('[XChart] 所有 series 项都无效，请检查数据格式或 option 配置');
    }
  } else if (finalOption && !finalOption.series) {
    console.warn('[XChart] 生成的配置缺少 series 字段');
  }

  return finalOption;
};

/**
 * 销毁图表实例
 */
const disposeChart = () => {
  if (myChart.value) {
    myChart.value.dispose();
    myChart.value = null;
    isInitialized.value = false;
  }
};

/**
 * 更新图表配置（不重新初始化）
 */
const updateChartOption = () => {
  if (!myChart.value) return;

  const option = generateOption();
  if (option && option.series && option.series.length > 0) {
    myChart.value.setOption(option, true);
  } else {
    console.warn('[XChart] 配置无效，跳过更新', { option });
  }
};

/**
 * 初始化图表
 */
const initChart = () => {
  if (!chartRef.value) return;

  // 检查是否有数据
  if (!props.dataSource || props.dataSource.length === 0) {
    return;
  }

  // 销毁旧实例
  disposeChart();

  // 创建新实例
  myChart.value = echarts.init(chartRef.value, undefined, {
    renderer: props.renderer,
  });

  // 绑定事件
  myChart.value.on('click', (params: any) => {
    emit('chartClick', params);
  });

  // 设置配置
  const option = generateOption();
  if (option && option.series && option.series.length > 0) {
    myChart.value.setOption(option);
    isInitialized.value = true;
    // 触发初始化完成事件
    emit('chartInit', myChart.value);
  } else {
    console.warn('[XChart] 初始化失败：配置无效');
    disposeChart();
  }
};

/**
 * 调整图表大小
 */
const resize = () => {
  myChart.value?.resize();
};

/**
 * 获取 ECharts 实例
 */
const getInstance = () => myChart.value;

/**
 * 派发 ECharts 动作
 */
const dispatchAction = (action: any) => {
  myChart.value?.dispatchAction(action);
};

/**
 * 清除图表
 */
const clear = () => {
  if (myChart.value) {
    myChart.value.clear();
  }
};

// 暴露方法供外部调用
defineExpose({
  /** 获取 ECharts 实例 */
  getInstance,
  /** 调整图表大小 */
  resize,
  /** 派发 ECharts 动作 */
  dispatchAction,
  /** 清除图表 */
  clear,
  /** 更新图表配置 */
  updateChartOption,
});

// 生命周期钩子
onMounted(() => {
  // 注册内置图表类型
  registerBuiltInCharts();

  nextTick(() => {
    initChart();
  });

  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  disposeChart();
  window.removeEventListener('resize', resize);
});

// 监听数据变化 - 只更新配置，不重新初始化
watch(
  () => props.dataSource,
  (newVal) => {
    if (!newVal || newVal.length === 0) {
      // 数据为空时清空图表
      clear();
      return;
    }
    if (isInitialized.value) {
      updateChartOption();
    } else {
      initChart();
    }
  },
  { deep: true }
);

// 监听图表类型变化 - 需要重新生成配置
watch(
  () => props.componentType,
  () => {
    updateChartOption();
  }
);

// 监听自定义配置变化
watch(
  () => props.option,
  () => {
    if (isInitialized.value) {
      updateChartOption();
    }
  },
  { deep: true }
);
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
