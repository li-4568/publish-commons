/**
 * 文件描述：雷达图
 * 创建时间：2026/4/3
 * 创建人：liyujie
 * 参数：title {String} 标题
 * 参数：unit {String} 单位
 * 参数：data {Array} 数据
 * 参数：indicatorKey {String} 指标字段
 * 参数：valueKey {String} 值字段
 * 参数：seriesKey {String} 系列字段
 */
import { ChartDataItem } from './chart';

interface RadarIndicator {
  name: string;
  max: number;
}

export default function radarOption(
  data: ChartDataItem[],
  title: string = '',
  unit: string = '',
  indicatorKey: string = 'indicator',
  valueKey: string = 'value',
  seriesKey: string = 'series'
): any {
  if (!data || data.length === 0) {
    return null;
  }

  // 提取指标和最大值
  const indicatorsMap = new Map<string, number>();
  const seriesMap = new Map<string, number[]>();
  const seriesNames: string[] = [];

  data.forEach((item) => {
    const indicator = item[indicatorKey] as string;
    const value = Number(item[valueKey] || 0);
    const seriesName = item[seriesKey] as string || '默认系列';

    // 更新指标最大值
    if (!indicatorsMap.has(indicator) || value > indicatorsMap.get(indicator)!) {
      // 计算最大值并调整为更合理的刻度值，确保刻度可读
      const rawMax = Math.ceil(value * 1.2); // 留20%的余量
      // 调整为更合理的刻度值，避免ECharts警告
      let adjustedMax = rawMax;
      // 对于常见数值范围，调整为更合理的刻度值
      if (rawMax > 70 && rawMax < 120) {
        adjustedMax = 100;
      } else if (rawMax > 110 && rawMax < 160) {
        adjustedMax = 150;
      } else if (rawMax > 150 && rawMax < 210) {
        adjustedMax = 200;
      } else if (rawMax > 200 && rawMax < 260) {
        adjustedMax = 250;
      } else if (rawMax > 250 && rawMax < 310) {
        adjustedMax = 300;
      } else {
        // 其他情况调整为50的倍数，确保刻度更合理
        adjustedMax = Math.ceil(rawMax / 50) * 50;
      }
      indicatorsMap.set(indicator, adjustedMax);
    }

    // 按系列分组数据
    if (!seriesMap.has(seriesName)) {
      seriesMap.set(seriesName, []);
      seriesNames.push(seriesName);
    }
  });

  // 生成指标配置
  const indicators: RadarIndicator[] = Array.from(indicatorsMap.entries()).map(([name, max]) => ({
    name,
    max,
  }));

  // 生成系列数据
  const series = seriesNames.map((name) => {
    const values: number[] = [];
    indicators.forEach((indicator) => {
      const item = data.find((d) => d[seriesKey] === name && d[indicatorKey] === indicator.name);
      values.push(Number(item?.[valueKey] || 0));
    });
    return {
      name,
      type: 'radar',
      data: [{
        value: values,
        name,
      }],
    };
  });

  return {
    grid: {
      top: title || unit ? '20%' : '10%',
      left: '3%',
      right: '4%',
      bottom: '6%',
      containLabel: true,
    },
    title: [
      {
        text: title,
        left: '10%',
        top: '0%',
        textStyle: {
          fontSize: 16,
          fontWeight: 'normal',
        },
      },
      {
        subtext: unit,
        itemGap: 6,
        left: '42%',
        top: '2%',
        subtextStyle: {
          fontSize: 12,
          fontWeight: '600',
          textAlign: 'center',
        },
      },
    ],
    tooltip: {
      trigger: 'item',
    },
    legend: {
      data: seriesNames,
    },
    radar: {
      indicator: indicators,
    },
    series: series,
  };
}