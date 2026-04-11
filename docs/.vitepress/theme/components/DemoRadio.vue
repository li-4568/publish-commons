<template>
  <div class="demo-radio">
    <div class="demo-block">
      <h4>基础用法</h4>
      <div class="demo-row">
        <XRadio v-model="radio1" value="1">选项一</XRadio>
        <XRadio v-model="radio1" value="2">选项二</XRadio>
        <XRadio v-model="radio1" value="3" disabled>禁用</XRadio>
      </div>
    </div>

    <div class="demo-block">
      <h4>尺寸</h4>
      <div class="demo-row">
        <XRadio v-model="radio2" value="1" size="large">大尺寸</XRadio>
        <XRadio v-model="radio2" value="2" size="middle">中尺寸</XRadio>
        <XRadio v-model="radio2" value="3" size="small">小尺寸</XRadio>
      </div>
    </div>

    <div class="demo-block">
      <h4>单选组</h4>
      <div class="demo-row">
        <XRadioGroup v-model="radioGroup" :options="groupOptions" />
      </div>
    </div>

    <div class="demo-block">
      <h4>垂直排列</h4>
      <div class="demo-row">
        <XRadioGroup v-model="radioVertical" :options="groupOptions" direction="vertical" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XRadio, XRadioGroup } from 'publish-commons'

const radio1 = ref('1')
const radio2 = ref('1')
const radioGroup = ref('option1')
const radioVertical = ref('option1')

const groupOptions = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
]
</script>

<style scoped>
.demo-radio {
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
  gap: 20px;
  align-items: center;
}
</style>
