import XChart from './XChart.vue';
import { registerChartType } from './registry';
import type { ChartType, ChartDataItem } from './chart/chart';

export default XChart;
export { registerChartType, ChartType, ChartDataItem };