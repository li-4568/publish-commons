<template>
  <div class="demo-select">
    <div class="demo-block">
      <h4>基础用法</h4>
      <div class="demo-row">
        <XSelect v-model="value1" :options="options" placeholder="请选择" />
        <XSelect v-model="value2" :options="options" disabled placeholder="禁用状态" />
      </div>
    </div>

    <div class="demo-block">
      <h4>多选</h4>
      <div class="demo-row">
        <XSelect v-model="value3" :options="options" mode="multiple" placeholder="可多选" />
      </div>
    </div>

    <div class="demo-block">
      <h4>尺寸</h4>
      <div class="demo-row">
        <XSelect v-model="value4" :options="options" size="large" placeholder="大" />
        <XSelect v-model="value5" :options="options" size="middle" placeholder="中" />
        <XSelect v-model="value6" :options="options" size="small" placeholder="小" />
      </div>
    </div>

    <div class="demo-block">
      <h4>可清空</h4>
      <div class="demo-row">
        <XSelect v-model="value7" :options="options" clearable placeholder="可清空" />
      </div>
    </div>

    <div class="demo-block">
      <h4>带选项禁用</h4>
      <div class="demo-row">
        <XSelect v-model="value8" :options="optionsWithDisabled" placeholder="选项禁用示例" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XSelect } from 'publish-commons'

const value1 = ref('')
const value2 = ref('')
const value3 = ref([])
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')

const options = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
]

const optionsWithDisabled = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二（禁用）', disabled: true },
  { value: 'option3', label: '选项三' },
]
</script>

<style scoped>
.demo-select {
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
</style>
