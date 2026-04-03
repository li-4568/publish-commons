/**
 * 文件描述：设置图表属性值
 * 创建时间：2026/4/3
 * 创建人：liyujie
 */

/** 图表类型 */
export type ChartType = 'bar' | 'pie' | 'barRound' | 'line' | 'scatter' | 'radar';

/** 图表数据项 */
export interface ChartDataItem {
  [key: string]: any;
}

interface ChartUtils {
  maxNumber: (data: ChartDataItem[], yKey: string) => number;
  // 可以添加更多工具方法
}

const chart: ChartUtils = {
  // 获取最大值
  maxNumber(data, yKey) {
    if (!data || data.length === 0) {
      return 100;
    }
    
    const values = data.map((v) => Number(v[yKey]) || 0);
    const maxValue = Math.max(...values);
    
    if (maxValue === 0) {
      return 100;
    }
    
    const absMax = Math.abs(maxValue);
    const firstDigit = parseInt(String(absMax)[0], 10) + 1;
    const maxLength = absMax.toString().length - 1;
    const maxN = maxLength > 0 ? '0'.repeat(maxLength) : '00';
    
    return parseInt(firstDigit + maxN, 10);
  },
};

export default chart;