<template>
  <div class="xchart-demo">
    <h1>XChart 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <p class="demo-desc">最简单的使用方式，只需传入 type 和 data</p>
      <div class="chart-container">
        <XChart
          :dataSource="barData"
          componentType="bar"
          title="销售数据"
          unit="万元"
          xKey="month"
          yKey="sales"
          @chartClick="handleChartClick"
        />
      </div>

      <div class="code-example">
        <h3>代码</h3>
        <pre v-pre><code>&lt;XChart
  :dataSource="barData"
  componentType="bar"
  title="销售数据"
  unit="万元"
  xKey="month"
  yKey="sales"
  @chartClick="handleChartClick"
/&gt;</code></pre>
      </div>
    </section>

    <!-- 使用 option 自定义配置 -->
    <section class="demo-section">
      <h2>使用 option 自定义配置</h2>
      <p class="demo-desc">通过 option 属性覆盖或合并默认配置，实现自定义样式</p>
      <div class="chart-container">
        <XChart
          :dataSource="barData"
          componentType="bar"
          title="自定义颜色"
          unit="万元"
          xKey="month"
          yKey="sales"
          :option="customColorOption"
        />
      </div>

      <div class="code-example">
        <h3>代码</h3>
        <pre v-pre><code>// 自定义颜色配置
const customColorOption = {
  series: [{
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#83bff6' },
        { offset: 0.5, color: '#188df0' },
        { offset: 1, color: '#188df0' }
      ])
    }
  }]
}

&lt;XChart
  :dataSource="barData"
  componentType="bar"
  :option="customColorOption"
/&gt;</code></pre>
      </div>
    </section>

    <!-- 使用 optionFn 完全自定义 -->
    <section class="demo-section">
      <h2>使用 optionFn 完全自定义</h2>
      <p class="demo-desc">通过 optionFn 完全控制配置生成逻辑</p>
      <div class="chart-container">
        <XChart
          :dataSource="barData"
          componentType="bar"
          :optionFn="customBarOptionFn"
        />
      </div>

      <div class="code-example">
        <h3>代码</h3>
        <pre v-pre><code>// 完全自定义配置生成函数
const customBarOptionFn = (data: any[], type: string, defaultOption: any) => {
  return {
    ...defaultOption,
    title: {
      text: '完全自定义标题',
      left: 'center',
      textStyle: { color: '#1890ff', fontSize: 20 }
    },
    series: [{
      type: 'bar',
      data: data.map(item => item.sales),
      itemStyle: {
        borderRadius: [10, 10, 0, 0],
        color: '#52c41a'
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}万'
      }
    }]
  }
}

&lt;XChart
  :dataSource="barData"
  componentType="bar"
  :optionFn="customBarOptionFn"
/&gt;</code></pre>
      </div>
    </section>

    <!-- 使用 ref 调用实例方法 -->
    <section class="demo-section">
      <h2>使用 ref 调用实例方法</h2>
      <p class="demo-desc">通过 ref 获取图表实例，调用 resize、dispatchAction 等方法</p>
      <div class="chart-actions">
        <button @click="highlightRandom">高亮随机数据</button>
        <button @click="toggleTooltip">切换 tooltip 显示</button>
        <button @click="clearChart">清空图表</button>
        <button @click="restoreChart">恢复图表</button>
      </div>
      <div class="chart-container">
        <XChart
          ref="chartRef"
          :dataSource="barData"
          componentType="bar"
          title="可交互图表"
          unit="万元"
          xKey="month"
          yKey="sales"
        />
      </div>

      <div class="code-example">
        <h3>代码</h3>
        <pre v-pre><code>const chartRef = ref&lt;InstanceType&lt;typeof XChart&gt; | null&gt;(null)

// 高亮随机数据
const highlightRandom = () => {
  const randomIndex = Math.floor(Math.random() * barData.value.length)
  chartRef.value?.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: randomIndex
  })
}

// 调用 resize
chartRef.value?.resize()

// 获取 echarts 实例
const instance = chartRef.value?.getInstance()</code></pre>
      </div>
    </section>

    <!-- 圆形柱状图 -->
    <section class="demo-section">
      <h2>圆形柱状图</h2>
      <p class="demo-desc">带有圆角的柱状图，支持渐变色</p>
      <div class="chart-container">
        <XChart
          :dataSource="barRoundData"
          componentType="barRound"
          title="月度利润"
          unit="万元"
          xKey="month"
          yKey="profit"
        />
      </div>

      <div class="code-example">
        <h3>代码</h3>
        <pre v-pre><code>&lt;XChart
  :dataSource="barRoundData"
  componentType="barRound"
  title="月度利润"
  unit="万元"
  xKey="month"
  yKey="profit"
/&gt;

// 数据
const barRoundData = ref([
  { month: '1月', profit: 80 },
  { month: '2月', profit: 120 },
  { month: '3月', profit: 90 },
  { month: '4月', profit: 150 },
  { month: '5月', profit: 110 },
])</code></pre>
      </div>
    </section>

    <!-- 折线图 -->
    <section class="demo-section">
      <h2>折线图</h2>
      <p class="demo-desc">支持平滑曲线和多线模式</p>
      <div class="chart-container">
        <XChart
          :dataSource="lineData"
          componentType="line"
          title="用户增长趋势"
          unit="人"
          xKey="month"
          yKey="users"
          :smooth="true"
        />
      </div>

      <div class="code-example">
        <h3>代码</h3>
        <pre v-pre><code>&lt;XChart
  :dataSource="lineData"
  componentType="line"
  title="用户增长趋势"
  unit="人"
  xKey="month"
  yKey="users"
  :smooth="true"
/&gt;

// 数据
const lineData = ref([
  { month: '1月', users: 1000 },
  { month: '2月', users: 1500 },
  { month: '3月', users: 2200 },
  { month: '4月', users: 3000 },
  { month: '5月', users: 3800 },
  { month: '6月', users: 4500 },
])</code></pre>
      </div>
    </section>

    <!-- 饼图 -->
    <section class="demo-section">
      <h2>饼图</h2>
      <p class="demo-desc">显示占比关系，自动计算百分比</p>
      <div class="chart-container">
        <XChart
          :dataSource="pieData"
          componentType="pie"
          title="销售渠道占比"
          xKey="channel"
          yKey="sales"
        />
      </div>

      <div class="code-example">
        <h3>代码</h3>
        <pre v-pre><code>&lt;XChart
  :dataSource="pieData"
  componentType="pie"
  title="销售渠道占比"
  xKey="channel"
  yKey="sales"
/&gt;

// 数据
const pieData = ref([
  { channel: '线上商城', sales: 45 },
  { channel: '线下门店', sales: 30 },
  { channel: '合作伙伴', sales: 15 },
  { channel: '其他', sales: 10 },
])</code></pre>
      </div>
    </section>

    <!-- 散点图 -->
    <section class="demo-section">
      <h2>散点图</h2>
      <p class="demo-desc">展示两个变量的关系，支持按系列分组</p>
      <div class="chart-container">
        <XChart
          :dataSource="scatterData"
          componentType="scatter"
          title="身高体重分布"
          xKey="height"
          yKey="weight"
          seriesKey="gender"
        />
      </div>

      <div class="code-example">
        <h3>代码</h3>
        <pre v-pre><code>&lt;XChart
  :dataSource="scatterData"
  componentType="scatter"
  title="身高体重分布"
  xKey="height"
  yKey="weight"
  seriesKey="gender"
/&gt;

// 数据
const scatterData = ref([
  { height: 160, weight: 50, gender: '女性' },
  { height: 165, weight: 55, gender: '女性' },
  { height: 170, weight: 60, gender: '女性' },
  { height: 175, weight: 65, gender: '男性' },
  { height: 180, weight: 70, gender: '男性' },
  { height: 185, weight: 75, gender: '男性' },
  { height: 190, weight: 80, gender: '男性' },
])</code></pre>
      </div>
    </section>

    <!-- 雷达图 -->
    <section class="demo-section">
      <h2>雷达图</h2>
      <p class="demo-desc">多维度数据对比展示</p>
      <div class="chart-container">
        <XChart
          :dataSource="radarData"
          componentType="radar"
          title="产品性能评估"
          indicatorKey="indicator"
          yKey="value"
          seriesKey="product"
        />
      </div>

      <div class="code-example">
        <h3>代码</h3>
        <pre v-pre><code>&lt;XChart
  :dataSource="radarData"
  componentType="radar"
  title="产品性能评估"
  indicatorKey="indicator"
  yKey="value"
  seriesKey="product"
/&gt;

// 数据
const radarData = ref([
  { indicator: '性能', value: 90, product: '产品A' },
  { indicator: '功能', value: 85, product: '产品A' },
  { indicator: '易用性', value: 95, product: '产品A' },
  { indicator: '稳定性', value: 88, product: '产品A' },
  { indicator: '价格', value: 75, product: '产品A' },
  { indicator: '性能', value: 85, product: '产品B' },
  { indicator: '功能', value: 90, product: '产品B' },
  { indicator: '易用性', value: 80, product: '产品B' },
  { indicator: '稳定性', value: 92, product: '产品B' },
  { indicator: '价格', value: 85, product: '产品B' },
])</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * XChart 组件使用示例
 */
import { ref } from 'vue'
import * as echarts from 'echarts'
import XChart from '../src/components/XChart/XChart.vue'

const chartRef = ref<InstanceType<typeof XChart> | null>(null)

// 柱状图数据
const barData = ref([
  { month: '1月', sales: 120 },
  { month: '2月', sales: 190 },
  { month: '3月', sales: 150 },
  { month: '4月', sales: 230 },
  { month: '5月', sales: 180 },
])

// 圆形柱状图数据
const barRoundData = ref([
  { month: '1月', profit: 80 },
  { month: '2月', profit: 120 },
  { month: '3月', profit: 90 },
  { month: '4月', profit: 150 },
  { month: '5月', profit: 110 },
])

// 折线图数据
const lineData = ref([
  { month: '1月', users: 1000 },
  { month: '2月', users: 1500 },
  { month: '3月', users: 2200 },
  { month: '4月', users: 3000 },
  { month: '5月', users: 3800 },
  { month: '6月', users: 4500 },
])

// 饼图数据
const pieData = ref([
  { channel: '线上商城', sales: 45 },
  { channel: '线下门店', sales: 30 },
  { channel: '合作伙伴', sales: 15 },
  { channel: '其他', sales: 10 },
])

// 散点图数据
const scatterData = ref([
  { height: 160, weight: 50, gender: '女性' },
  { height: 165, weight: 55, gender: '女性' },
  { height: 170, weight: 60, gender: '女性' },
  { height: 175, weight: 65, gender: '男性' },
  { height: 180, weight: 70, gender: '男性' },
  { height: 185, weight: 75, gender: '男性' },
  { height: 190, weight: 80, gender: '男性' },
])

// 雷达图数据
const radarData = ref([
  { indicator: '性能', value: 90, product: '产品A' },
  { indicator: '功能', value: 85, product: '产品A' },
  { indicator: '易用性', value: 95, product: '产品A' },
  { indicator: '稳定性', value: 88, product: '产品A' },
  { indicator: '价格', value: 75, product: '产品A' },
  { indicator: '性能', value: 85, product: '产品B' },
  { indicator: '功能', value: 90, product: '产品B' },
  { indicator: '易用性', value: 80, product: '产品B' },
  { indicator: '稳定性', value: 92, product: '产品B' },
  { indicator: '价格', value: 85, product: '产品B' },
])

/**
 * 自定义颜色配置
 */
const customColorOption = {
  series: [{
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#83bff6' },
        { offset: 0.5, color: '#188df0' },
        { offset: 1, color: '#188df0' }
      ])
    }
  }]
}

/**
 * 完全自定义配置生成函数
 */
const customBarOptionFn = (data: any[], type: string, defaultOption: any) => {
  return {
    ...defaultOption,
    title: {
      text: '完全自定义标题',
      left: 'center',
      textStyle: {
        color: '#1890ff',
        fontSize: 20,
        fontWeight: 'bold'
      }
    },
    grid: {
      top: '15%',
      left: '3%',
      right: '4%',
      bottom: '6%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: data.map(item => item.month),
      axisLabel: {
        color: '#666',
        fontSize: 12
      }
    },
    yAxis: {
      type: 'value',
      name: '销售额（万元）',
      axisLabel: {
        color: '#666'
      }
    },
    series: [{
      type: 'bar',
      data: data.map(item => ({
        value: item.sales,
        itemStyle: {
          color: item.sales > 180 ? '#ff4d4f' : '#52c41a'
        }
      })),
      barWidth: '50%',
      label: {
        show: true,
        position: 'top',
        formatter: '{c}万',
        color: '#333',
        fontWeight: 'bold'
      }
    }]
  }
}

/**
 * 处理图表点击
 */
const handleChartClick = (params: any) => {
  console.log('Chart clicked:', params)
}

/**
 * 高亮随机数据
 */
const highlightRandom = () => {
  if (!chartRef.value) return

  // 先取消所有高亮
  chartRef.value.dispatchAction({
    type: 'downplay',
    seriesIndex: 0
  })

  // 随机高亮一个
  const randomIndex = Math.floor(Math.random() * barData.value.length)
  chartRef.value.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: randomIndex
  })

  // 显示 tooltip
  chartRef.value.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: randomIndex
  })
}

/**
 * 切换 tooltip 显示
 */
let tooltipVisible = false
const toggleTooltip = () => {
  if (!chartRef.value) return
  tooltipVisible = !tooltipVisible

  if (tooltipVisible) {
    chartRef.value.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: 0
    })
  } else {
    chartRef.value.dispatchAction({
      type: 'hideTip'
    })
  }
}

/**
 * 清空图表
 */
const clearChart = () => {
  chartRef.value?.clear()
}

/**
 * 恢复图表
 */
const restoreChart = () => {
  chartRef.value?.updateChartOption()
}
</script>

<style scoped lang="less">
.xchart-demo {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;

  h1 {
    text-align: center;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.85);
  }
}

.demo-section {
  margin-bottom: 48px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.85);
    border-left: 4px solid #1890ff;
    padding-left: 12px;
  }
}

.demo-desc {
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 16px;
  font-size: 14px;
}

.chart-actions {
  margin-bottom: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  button {
    padding: 8px 16px;
    background: #1890ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background: #40a9ff;
    }
  }
}

.chart-container {
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
}

.code-example {
  margin-top: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;

  h3 {
    margin: 0;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    background-color: #fafafa;
    border-bottom: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.85);
  }

  pre {
    margin: 0;
    padding: 16px;
    background-color: #fafafa;
    overflow-x: auto;

    code {
      font-family: Menlo, Monaco, 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.6;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
</style>
