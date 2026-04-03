/**
 * 文件描述：图表注册表
 * 创建时间：2026/4/3
 * 创建人：liyujie
 */
import type { ChartDataItem, ChartType } from './chart/chart';

/**
 * 图表配置生成函数类型
 */
export type ChartOptionFn = (
  data: ChartDataItem[],
  title: string,
  unit: string,
  ...args: any[]
) => any;

/**
 * 图表注册表 - 支持动态扩展图表类型
 */
const chartRegistry = new Map<ChartType, ChartOptionFn>();

/**
 * 注册自定义图表类型（供外部扩展使用）
 * @param type 图表类型标识
 * @param fn 配置生成函数
 */
export const registerChartType = (type: string, fn: ChartOptionFn) => {
  chartRegistry.set(type as ChartType, fn);
};

/**
 * 获取图表注册表
 */
export const getChartRegistry = () => chartRegistry;
