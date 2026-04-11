<template>
  <div class="demo-cascader">
    <div class="demo-block">
      <h4>基础用法</h4>
      <div class="demo-row">
        <XCascader
          v-model="value1"
          :options="options"
          placeholder="请选择"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>多选</h4>
      <div class="demo-row">
        <XCascader
          v-model="value2"
          :options="options"
          :multiple="true"
          placeholder="多选级联"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>选择即改变</h4>
      <div class="demo-row">
        <XCascader
          v-model="value3"
          :options="options"
          :change-on-select="true"
          placeholder="选择任意一级"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>尺寸</h4>
      <div class="demo-row">
        <XCascader
          v-model="value4"
          :options="options"
          size="large"
          placeholder="大尺寸"
        />
        <XCascader
          v-model="value5"
          :options="options"
          size="middle"
          placeholder="中尺寸"
        />
        <XCascader
          v-model="value6"
          :options="options"
          size="small"
          placeholder="小尺寸"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>可清空</h4>
      <div class="demo-row">
        <XCascader
          v-model="value7"
          :options="options"
          :clearable="true"
          placeholder="可清空"
        />
      </div>
    </div>

    <div class="demo-block">
      <h4>禁用状态</h4>
      <div class="demo-row">
        <XCascader
          v-model="value8"
          :options="options"
          :disabled="true"
          placeholder="禁用状态"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XCascader } from 'publish-commons'

const value1 = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref(['zhejiang', 'hangzhou'])
const value5 = ref(['zhejiang', 'hangzhou'])
const value6 = ref(['zhejiang', 'hangzhou'])
const value7 = ref(['zhejiang', 'hangzhou'])
const value8 = ref(['zhejiang', 'hangzhou'])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'binjiang', label: '滨江' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          { value: 'yinzhou', label: '鄞州' },
          { value: 'haishu', label: '海曙' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'xuanwu', label: '玄武' },
          { value: 'gulou', label: '鼓楼' },
        ],
      },
      {
        value: 'suzhou',
        label: '苏州',
        children: [
          { value: 'gusu', label: '姑苏' },
          { value: 'kunshan', label: '昆山' },
        ],
      },
    ],
  },
]
</script>

<style scoped>
.demo-cascader {
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
  width: 250px;
}

.demo-block:last-child {
  margin-bottom: 0;
}
</style>
