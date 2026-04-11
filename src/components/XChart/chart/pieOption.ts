/**
 * 文件描述：饼图
 * 创建时间：2026/4/3
 * 创建人：liyujie
 * 参数：title {String} 标题
 * 参数：unit {String} 单位
 * 参数：data {Array} 数据
 * 参数：xKey {String} x轴字段
 * 参数：yKey {String} y轴字段
 */
import { ChartDataItem } from './chart';

interface PieDataItem {
  name: string;
  value: any;
  percentage: string;
}

export default function pieOption(
  data: ChartDataItem[],
  title: string = '',
  unit: string = '',
  xKey: string = 'label',
  yKey: string = 'value'
): any {
  if (!data || data.length === 0) {
    return null;
  }
  
  const legendArr: string[] = [];
  let seriesArr: PieDataItem[] = [];

  // 计算总和
  const total = data.reduce((total, item) => total + Number(item[yKey] || 0), 0);

  // 处理数据
  seriesArr = data.map((item) => {
    const value = Number(item[yKey] || 0);
    const percentage = total > 0 ? `${Math.round((value / total) * 100)}%` : '0%';
    const name = item[xKey] as string;
    legendArr.push(name);
    
    return {
      name,
      value,
      percentage,
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
        top: '6%',
        subtextStyle: {
          fontSize: 12,
          fontWeight: '600',
          textAlign: 'center',
        },
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{b} :  {c} ({d}' + (unit ? unit : '') + ')',
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 10,
      bottom: 20,
      data: legendArr,
    },
    series: [
      {
        type: 'pie',
        radius: '60%',
        center: ['40%', '50%'],
        label: {
          formatter: '{d}%',
          show: true,
        },
        data: seriesArr,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
          },
        },
      },
    ],
  };
}