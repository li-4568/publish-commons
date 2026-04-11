<template>
  <div class="demo-datepicker">
    <div class="demo-block">
      <h4>日期选择</h4>
      <div class="demo-row">
        <XDatePicker v-model="date1" placeholder="请选择日期" />
        <XDatePicker v-model="date2" type="datetime" placeholder="请选择日期时间" />
      </div>
    </div>

    <div class="demo-block">
      <h4>月份/年份选择</h4>
      <div class="demo-row">
        <XDatePicker v-model="month" type="month" placeholder="请选择月份" />
        <XDatePicker v-model="year" type="year" placeholder="请选择年份" />
        <XDatePicker v-model="week" type="week" placeholder="请选择周" />
      </div>
    </div>

    <div class="demo-block">
      <h4>范围选择</h4>
      <div class="demo-row">
        <XDatePicker
          v-model="dateRange"
          type="daterange"
          :placeholder="['开始日期', '结束日期']"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>日期时间范围</h4>
      <div class="demo-row">
        <XDatePicker
          v-model="datetimeRange"
          type="datetimerange"
          :placeholder="['开始时间', '结束时间']"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>尺寸</h4>
      <div class="demo-row">
        <XDatePicker v-model="date3" size="large" placeholder="大尺寸" />
        <XDatePicker v-model="date4" size="middle" placeholder="中尺寸" />
        <XDatePicker v-model="date5" size="small" placeholder="小尺寸" />
      </div>
    </div>

    <div class="demo-block">
      <h4>可清空</h4>
      <div class="demo-row">
        <XDatePicker v-model="date6" :clearable="true" placeholder="可清空" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XDatePicker } from 'publish-commons'

const date1 = ref()
const date2 = ref()
const month = ref()
const year = ref()
const week = ref()
const dateRange = ref()
const datetimeRange = ref()
const date3 = ref()
const date4 = ref()
const date5 = ref()
const date6 = ref('2024-01-15')
</script>

<style scoped>
.demo-datepicker {
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

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.demo-row > * {
  margin: 0;
  width: 200px;
}

.demo-block:last-child {
  margin-bottom: 0;
}
</style>
