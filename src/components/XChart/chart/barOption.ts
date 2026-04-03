import chart, { ChartDataItem } from './chart';

/**
 * 文件描述：柱状图
 * 创建时间：2026/4/3
 * 创建人：liyujie
 * 参数：title {String} 标题
 * 参数：unit {String} 单位
 * 参数：data {Array} 数据
 * 参数：xKey {String} x轴字段
 * 参数：yKey {String} y轴字段
 * 参数：isRoll {Boolean} 是否翻转
 */

export default function barOption(
  data: ChartDataItem[],
  title: string = '',
  unit: string = '',
  xKey: string = 'label',
  yKey: string = 'value',
  isRoll: boolean = false
): any {
  if (!data || data.length === 0) {
    return null;
  }

  // 最大，最小值
  const max = chart.maxNumber(data, yKey);

  // 是否翻转
  let xAxis: any = {
    type: 'category',
    data: data.map((item) => item[xKey]),
    axisTick: {
      alignWithLabel: true,
    },
  };
  let yAxis: any = {
    type: 'value',
  };
  
  // 翻转
  if (isRoll) {
    xAxis = {
      type: 'value',
      max: max,
      min: 0,
      interval: max / 5,
      splitNumber: 5,
      axisLabel: {
        formatter: (val: number) => {
          return val;
        },
      },
    };
    yAxis = {
      type: 'category',
      data: data.map((item) => item[xKey]),
    };
  }

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
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: xAxis,
    yAxis: yAxis,
    series: [
      {
        label: {
          show: true,
          position: 'top',
        },
        type: 'bar',
        barWidth: '40%',
        itemStyle: {
          color: () => {
            return '#228fff';
          },
        },
        data: data.map((item) => item[yKey]),
      },
    ],
  };
}