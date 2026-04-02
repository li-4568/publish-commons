<template>
  <div class="x-form-item-demo">
    <h1>XFormItem 表单项目组件示例</h1>
    
    <!-- XInputFloat 示例 -->
    <div class="demo-section">
      <h2>XInputFloat 小数点输入框</h2>
      <div class="demo-row">
        <div style="width: 300px">
          <XInputFloat
            v-model="floatValue"
            placeholder="请输入小数"
            clearable
          />
          <div class="demo-value">当前值: {{ floatValue }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XInputFloat
            v-model="floatValue2"
            placeholder="请输入小数（禁用）"
            disabled
          />
          <div class="demo-value">当前值: {{ floatValue2 }}</div>
        </div>
      </div>
    </div>
    
    <!-- XInputNeg 示例 -->
    <div class="demo-section">
      <h2>XInputNeg 负数输入框</h2>
      <div class="demo-row">
        <div style="width: 300px">
          <XInputNeg
            v-model="negValue"
            placeholder="请输入负数"
            clearable
          />
          <div class="demo-value">当前值: {{ negValue }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XInputNeg
            v-model="negValue2"
            placeholder="请输入负数（禁用）"
            disabled
          />
          <div class="demo-value">当前值: {{ negValue2 }}</div>
        </div>
      </div>
    </div>
    
    <!-- XInputNum 示例 -->
    <div class="demo-section">
      <h2>XInputNum 数字输入框</h2>
      <div class="demo-row">
        <div style="width: 300px">
          <XInputNum
            v-model="numValue"
            placeholder="请输入数字"
            clearable
            controls
          />
          <div class="demo-value">当前值: {{ numValue }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XInputNum
            v-model="numValue2"
            placeholder="请输入数字（带范围）"
            :min="0"
            :max="100"
            :step="5"
            clearable
            controls
          />
          <div class="demo-value">当前值: {{ numValue2 }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XInputNum
            v-model="numValue3"
            placeholder="请输入数字（带精度）"
            :precision="2"
            :step="0.1"
            clearable
            controls
          />
          <div class="demo-value">当前值: {{ numValue3 }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XInputNum
            v-model="numValue4"
            placeholder="请输入数字（禁用）"
            disabled
          />
          <div class="demo-value">当前值: {{ numValue4 }}</div>
        </div>
      </div>
    </div>
    
    <!-- XTimePicker 示例 -->
    <div class="demo-section">
      <h2>XTimePicker 时间选择器</h2>
      <div class="demo-row">
        <div style="width: 300px">
          <XTimePicker
            v-model="timeValue"
            placeholder="请选择时间"
            clearable
          />
          <div class="demo-value">当前值: {{ timeValue }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XTimePicker
            v-model="timeValue2"
            placeholder="请选择时间（禁用）"
            disabled
          />
          <div class="demo-value">当前值: {{ timeValue2 }}</div>
        </div>
      </div>
    </div>
    
    <!-- XBothTimePicker 示例 -->
    <div class="demo-section">
      <h2>XBothTimePicker 双向时间选择器</h2>
      <div class="demo-row">
        <div style="width: 300px">
          <XBothTimePicker
            v-model="bothTimeValue"
            :placeholder="['开始时间', '结束时间']"
            clearable
          />
          <div class="demo-value">当前值: {{ bothTimeValue }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XBothTimePicker
            v-model="bothTimeValue2"
            :placeholder="['开始时间', '结束时间']"
            disabled
          />
          <div class="demo-value">当前值: {{ bothTimeValue2 }}</div>
        </div>
      </div>
    </div>
    
    <!-- XMonthPicker 示例 -->
    <div class="demo-section">
      <h2>XMonthPicker 月份选择器</h2>
      <div class="demo-row">
        <div style="width: 300px">
          <XMonthPicker
            v-model="monthValue"
            placeholder="请选择月份"
            clearable
          />
          <div class="demo-value">当前值: {{ monthValue }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XMonthPicker
            v-model="monthValue2"
            placeholder="请选择月份（禁用）"
            disabled
          />
          <div class="demo-value">当前值: {{ monthValue2 }}</div>
        </div>
      </div>
    </div>
    
    <!-- XRangePicker 示例 -->
    <div class="demo-section">
      <h2>XRangePicker 日期范围选择器</h2>
      <div class="demo-row">
        <div style="width: 300px">
          <XRangePicker
            v-model="rangeValue"
            :placeholder="['开始日期', '结束日期']"
            clearable
          />
          <div class="demo-value">当前值: {{ rangeValue }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XRangePicker
            v-model="rangeValue2"
            :placeholder="['开始日期', '结束日期']"
            disabled
          />
          <div class="demo-value">当前值: {{ rangeValue2 }}</div>
        </div>
      </div>
    </div>
    
    <!-- XYearPicker 示例 -->
    <div class="demo-section">
      <h2>XYearPicker 年份选择器</h2>
      <div class="demo-row">
        <div style="width: 300px">
          <XYearPicker
            v-model="yearValue"
            placeholder="请选择年份"
            clearable
          />
          <div class="demo-value">当前值: {{ yearValue }}</div>
        </div>
      </div>
      <div class="demo-row" style="margin-top: 16px">
        <div style="width: 300px">
          <XYearPicker
            v-model="yearValue2"
            placeholder="请选择年份（禁用）"
            disabled
          />
          <div class="demo-value">当前值: {{ yearValue2 }}</div>
        </div>
      </div>
    </div>
    
    <!-- 示例代码 -->
    <div class="demo-section">
      <h2>示例代码</h2>
      <div class="code-block">
        <h4>XInputFloat 使用</h4>
        <pre><code>&lt;XInputFloat
  v-model="floatValue"
  placeholder="请输入小数"
  clearable
/&gt;</code></pre>
        
        <h4>XInputNeg 使用</h4>
        <pre><code>&lt;XInputNeg
  v-model="negValue"
  placeholder="请输入负数"
  clearable
/&gt;</code></pre>
        
        <h4>XInputNum 使用</h4>
        <pre><code>&lt;XInputNum
  v-model="numValue"
  placeholder="请输入数字"
  clearable
  controls
/&gt;</code></pre>
        
        <h4>XInputNum 带范围和步长</h4>
        <pre><code>&lt;XInputNum
  v-model="numValue"
  placeholder="请输入数字（带范围）"
  :min="0"
  :max="100"
  :step="5"
  clearable
  controls
/&gt;</code></pre>
        
        <h4>XInputNum 带精度</h4>
        <pre><code>&lt;XInputNum
  v-model="numValue"
  placeholder="请输入数字（带精度）"
  :precision="2"
  :step="0.1"
  clearable
  controls
/&gt;</code></pre>
        
        <h4>XTimePicker 使用</h4>
        <pre><code>&lt;XTimePicker
  v-model="timeValue"
  placeholder="请选择时间"
  clearable
/&gt;</code></pre>
        
        <h4>XBothTimePicker 使用</h4>
        <pre><code>&lt;XBothTimePicker
  v-model="bothTimeValue"
  :placeholder="['开始时间', '结束时间']"
  clearable
/&gt;</code></pre>
        
        <h4>XMonthPicker 使用</h4>
        <pre><code>&lt;XMonthPicker
  v-model="monthValue"
  placeholder="请选择月份"
  clearable
/&gt;</code></pre>
        
        <h4>XRangePicker 使用</h4>
        <pre><code>&lt;XRangePicker
  v-model="rangeValue"
  :placeholder="['开始日期', '结束日期']"
  clearable
/&gt;</code></pre>
        
        <h4>XYearPicker 使用</h4>
        <pre><code>&lt;XYearPicker
  v-model="yearValue"
  placeholder="请选择年份"
  clearable
/&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XInputFloat, XInputNeg, XInputNum, XBothTimePicker, XMonthPicker, XRangePicker, XTimePicker, XYearPicker } from '../src'

// XInputFloat 示例值
const floatValue = ref('')
const floatValue2 = ref('')

// XInputNeg 示例值
const negValue = ref('')
const negValue2 = ref('')

// XInputNum 示例值
const numValue = ref(0)
const numValue2 = ref(0)
const numValue3 = ref(0)
const numValue4 = ref(0)

// XTimePicker 示例值
const timeValue = ref('')
const timeValue2 = ref('')

// XBothTimePicker 示例值
const bothTimeValue = ref(null)
const bothTimeValue2 = ref(null)

// XMonthPicker 示例值
const monthValue = ref('')
const monthValue2 = ref('')

// XRangePicker 示例值
const rangeValue = ref(null)
const rangeValue2 = ref(null)

// XYearPicker 示例值
const yearValue = ref('')
const yearValue2 = ref('')
</script>

<style scoped>
.code-block {
  margin-top: 10px;
  
  h4 {
    margin: 15px 0 5px;
    color: #666;
    font-size: 14px;
  }
  
  pre {
    margin: 5px 0 10px;
    padding: 10px;
    background-color: #fafafa;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
    line-height: 1.4;
  }
}
</style>