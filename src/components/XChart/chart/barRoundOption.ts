import chart, { ChartDataItem } from './chart';

/**
 * 文件描述：圆形柱状图
 * 创建时间：2026/4/3
 * 创建人：liyujie
 *
 * 参数：title {String} 标题
 * 参数：unit {String} 单位
 * 参数：data {Array} 数据
 * 参数：xKey {String} x轴字段
 * 参数：yKey {String} y轴字段
 */

// 颜色
interface GradientColor {
  min: string;
  max: string;
}

const gradientColorList: GradientColor[] = [
  {
    min: '#BCCFFF',
    max: '#638AEF',
  },
  {
    min: '#E5DBFF',
    max: '#B498F7',
  },
  {
    min: '#EEFEB7',
    max: '#B6D060',
  },
];

export default function barRoundOption(
  data: ChartDataItem[],
  title: string = '',
  unit: string = '',
  xKey: string = 'label',
  yKey: string = 'value'
): any {
  if (!data || data.length === 0) {
    return null;
  }

  // 最大，最小值
  const max = chart.maxNumber(data, yKey);

  return {
    grid: {
      top: title || unit ? '20%' : '10%',
      left: '3%',
      right: '4%',
      bottom: '6%',
      containLabel: true,
    },
    backgroundColor: '#ffffff',
    title: [
      {
        text: title, //主标题
        left: '10%', //标题的位置 默认是left，其余还有center、right属性
        top: '0%',
        textStyle: {
          fontSize: 16,
          fontWeight: 'normal',
        },
      },
      {
        subtext: unit, //副标题
        itemGap: 6, //主副标题间距
        left: '42%', //标题的位置 默认是left，其余还有center、right属性
        top: '6%',
        subtextStyle: {
          fontSize: 12,
          fontWeight: '600',
          textAlign: 'center',
        },
      },
    ],
    xAxis: {
      type: 'category',
      data: data.map((item) => item[xKey]),
    },
    yAxis: {
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
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        return params[0].value + `${unit || ''}`;
      },
    },
    series: [
      {
        name: '',
        type: 'bar',
        emphasis: {
          disabled: true,
        },
        itemStyle: {
          color: (params: any) => {
            const gradientColorData = gradientColorList[params.dataIndex % 3];
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: gradientColorData.min, // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: gradientColorData.max, // 100% 处的颜色
                },
              ],
            };
          },
        },
        barWidth: 20,
        label: {
          show: true,
          position: 'top', //柱形上方
          //数值样式
          color: '#151515',
        },
        data: data.map((item) => item[yKey]),
      },
      {
        //柱顶圆片
        name: '',
        type: 'pictorialBar',
        symbolSize: [20, 8], //调整截面形状
        symbolOffset: [0, 4],
        z: 12,
        emphasis: {
          disabled: true,
        },
        itemStyle: {
          color: (params: any) => {
            const gradientColorData = gradientColorList[params.dataIndex % 3];
            return gradientColorData.max;
          },
        },
        data: data.map((item) => item[yKey]),
      },
      {
        //柱底圆片
        name: '',
        type: 'pictorialBar',
        symbolSize: [20, 8], //调整截面形状
        symbolOffset: [0, '-50%'],
        symbolRotate: 0,
        z: 12,
        emphasis: {
          disabled: true,
        },
        symbolPosition: 'end',
        label: {
          show: false,
          position: 'top',
          color: '#fff',
        },
        itemStyle: {
          color: (params: any) => {
            const gradientColorData = gradientColorList[params.dataIndex % 3];
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: gradientColorData.min, // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: gradientColorData.max, // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            };
          },
        },
        data: data.map((item) => item[yKey]),
      },
    ],
  };
}