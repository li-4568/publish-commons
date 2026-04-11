<template>
  <div class="demo-checkbox">
    <div class="demo-block">
      <h4>基础用法</h4>
      <div class="demo-row">
        <XCheckbox v-model="checked1">选项一</XCheckbox>
        <XCheckbox v-model="checked2" disabled>禁用（未选）</XCheckbox>
        <XCheckbox v-model="checked3" disabled>禁用（已选）</XCheckbox>
      </div>
    </div>

    <div class="demo-block">
      <h4>尺寸</h4>
      <div class="demo-row">
        <XCheckbox v-model="checked4" size="large">大尺寸</XCheckbox>
        <XCheckbox v-model="checked5" size="middle">中尺寸（默认）</XCheckbox>
        <XCheckbox v-model="checked6" size="small">小尺寸</XCheckbox>
      </div>
    </div>

    <div class="demo-block">
      <h4>多选组</h4>
      <div class="demo-row">
        <XCheckboxGroup v-model="checkedGroup" :options="groupOptions" />
      </div>
    </div>

    <div class="demo-block">
      <h4>全选</h4>
      <div class="demo-row vertical">
        <XCheckbox
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
        >
          全选
        </XCheckbox>
        <XCheckboxGroup v-model="checkedCities" :options="cityOptions" @change="handleCheckedChange" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { XCheckbox, XCheckboxGroup } from 'publish-commons'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
const checked4 = ref(true)
const checked5 = ref(true)
const checked6 = ref(true)

const checkedGroup = ref(['option1'])
const groupOptions = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
]

// 全选逻辑
const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['shanghai', 'beijing'])
const cityOptions = [
  { value: 'shanghai', label: '上海' },
  { value: 'beijing', label: '北京' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
]

const handleCheckAllChange = (val) => {
  checkedCities.value = val ? cityOptions.map(item => item.value) : []
  isIndeterminate.value = false
}

watch(checkedCities, (val) => {
  const checkedCount = val.length
  checkAll.value = checkedCount === cityOptions.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cityOptions.length
})
</script>

<style scoped>
.demo-checkbox {
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

.demo-row.vertical {
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}
</style>
