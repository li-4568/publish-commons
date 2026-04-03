/**
 * 文件描述：折线图
 * 创建时间：2026/4/3
 * 创建人：liyujie
 * 参数：title {String} 标题
 * 参数：unit {String} 单位
 * 参数：data {Array} 数据
 * 参数：xKey {String} x轴字段
 * 参数：yKey {String} y轴字段
 * 参数：lineM {Boolean} 单线 false，多线 true
 * 参数：lineDefault {Array} 多折现默认值 ['label', 'data']
 * 参数：smooth {Boolean} 是否平滑
 */
import { ChartDataItem } from './chart';

export default function lineOption(
  data: ChartDataItem[],
  title: string = '',
  unit: string = '',
  xKey: string = 'label',
  yKey: string = 'value',
  lineM: boolean = false,
  lineDefault: string[] = ['label', 'data'],
  smooth: boolean = false
): any {
  if (!data || data.length === 0) {
    return null;
  }

  // 判断是单折现还是多折现 处理series结构
  let series: any[] = [];
  if (lineM) {
    // 多线
    if (!lineDefault || lineDefault.length < 2) {
      return null;
    }
    series = data.map((v) => ({
      name: v[lineDefault[0]],
      type: 'line',
      stack: 'Total',
      smooth: smooth,
      data: v[lineDefault[1]],
    }));
  } else {
    // 单线
    series = [
      {
        type: 'line',
        smooth: smooth,
        data: data.map((item) => item[yKey]),
      },
    ];
  }
  
  return {
    legend: {
      data: lineM ? data.map((item) => item[lineDefault[0]]) : [],
    },
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
      trigger: 'axis',
      formatter: lineM
        ? ''
        : (params: any) => {
            return params[0].value + `${unit || ''}`;
          },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map((item) => item[xKey]),
    },
    yAxis: {
      type: 'value',
    },
    series: series,
  };
}