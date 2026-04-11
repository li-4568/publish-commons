<template>
  <div class="demo-chart">
    <div class="demo-block">
      <h4>柱状图</h4>
      <div class="chart-container">
        <XChart
          :data-source="barData"
          component-type="bar"
          title="月度销售额"
          unit="万元"
          style="height: 300px"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>折线图</h4>
      <div class="chart-container">
        <XChart
          :data-source="lineData"
          component-type="line"
          title="访问量趋势"
          unit="次"
          :smooth="true"
          style="height: 300px"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>饼图</h4>
      <div class="chart-container">
        <XChart
          :data-source="pieData"
          component-type="pie"
          title="用户分布"
          style="height: 300px"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>散点图</h4>
      <div class="chart-container">
        <XChart
          :data-source="scatterData"
          component-type="scatter"
          title="数据分布"
          style="height: 300px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XChart } from 'publish-commons'

const barData = ref([
  { label: '1月', value: 120 },
  { label: '2月', value: 200 },
  { label: '3月', value: 150 },
  { label: '4月', value: 80 },
  { label: '5月', value: 70 },
  { label: '6月', value: 110 },
])

const lineData = ref([
  { label: '周一', value: 820 },
  { label: '周二', value: 932 },
  { label: '周三', value: 901 },
  { label: '周四', value: 934 },
  { label: '周五', value: 1290 },
  { label: '周六', value: 1330 },
  { label: '周日', value: 1320 },
])

const pieData = ref([
  { label: '直接访问', value: 335 },
  { label: '邮件营销', value: 310 },
  { label: '联盟广告', value: 234 },
  { label: '视频广告', value: 135 },
  { label: '搜索引擎', value: 1548 },
])

const scatterData = ref([
  { label: 'A', value: [10, 8] },
  { label: 'B', value: [15, 12] },
  { label: 'C', value: [20, 18] },
  { label: 'D', value: [25, 22] },
  { label: 'E', value: [30, 28] },
])
</script>

<style scoped>
.demo-chart {
  padding: 20px;
  border: 1px solid #e0e0e6;
  border-radius: 8px;
  background: #fff;
}

.demo-block {
  margin-bottom: 24px;
}

.demo-block h4 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 14px;
}

.chart-container {
  width: 100%;
  min-height: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 10px;
}

.demo-block:last-child {
  margin-bottom: 0;
}
</style>
