import XChart from './XChart.vue';
import { registerChartType } from './registry';
import type { ChartType, ChartDataItem } from './chart/chart';

export default XChart;
export { registerChartType, ChartType, ChartDataItem };

// 导出 composables
export { useChartRegistry, useChartInstance, useChartOption } from './composables';
export type { XChartProps } from './XChart.vue';