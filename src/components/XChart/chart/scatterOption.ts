/**
 * 文件描述：散点图
 * 创建时间：2026/4/3
 * 创建人：liyujie
 * 参数：title {String} 标题
 * 参数：unit {String} 单位
 * 参数：data {Array} 数据
 * 参数：xKey {String} x轴字段
 * 参数：yKey {String} y轴字段
 * 参数：seriesKey {String} 系列字段
 */
import { ChartDataItem } from './chart';

export default function scatterOption(
  data: ChartDataItem[],
  title: string = '',
  unit: string = '',
  xKey: string = 'x',
  yKey: string = 'y',
  seriesKey: string = 'series'
): any {
  if (!data || data.length === 0) {
    return null;
  }

  // 处理数据，按系列分组
  const seriesMap = new Map<string, number[][]>();
  const seriesNames: string[] = [];

  data.forEach((item) => {
    const seriesName = item[seriesKey] as string || '默认系列';
    if (!seriesMap.has(seriesName)) {
      seriesMap.set(seriesName, []);
      seriesNames.push(seriesName);
    }
    seriesMap.get(seriesName)?.push([Number(item[xKey] || 0), Number(item[yKey] || 0)]);
  });

  // 生成系列配置
  const series = seriesNames.map((name) => ({
    name,
    type: 'scatter',
    data: seriesMap.get(name) || [],
  }));

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
      formatter: (params: any) => {
        return `${params.seriesName}<br/>${xKey}: ${params.value[0]}<br/>${yKey}: ${params.value[1]}${unit ? unit : ''}`;
      },
    },
    legend: {
      data: seriesNames,
    },
    xAxis: {
      type: 'value',
      name: xKey,
    },
    yAxis: {
      type: 'value',
      name: yKey,
    },
    series: series,
  };
}