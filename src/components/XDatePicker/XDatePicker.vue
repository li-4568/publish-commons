<template>
  <div class="xdatepicker-wrapper" :class="wrapperClasses">
    <ConfigProvider :locale="zhCN">
      <!-- 单个日期选择器 -->
      <DatePicker
        v-if="type === 'date'"
        v-model:value="internalSingleValue"
        :size="size"
        :placeholder="placeholder"
        :disabled="disabled"
        :allow-clear="clearable"
        :status="error ? 'error' : undefined"
        style="width: 100%"
        @change="handleSingleChange"
      />
    
    <!-- 日期时间选择器 -->
    <DatePicker
      v-else-if="type === 'datetime'"
      v-model:value="internalSingleValue"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      :allow-clear="clearable"
      :status="error ? 'error' : undefined"
      show-time
      style="width: 100%"
      @change="handleSingleChange"
    />
    
    <!-- 月份选择器 -->
    <DatePicker.MonthPicker
      v-else-if="type === 'month'"
      v-model:value="internalSingleValue"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      :allow-clear="clearable"
      :status="error ? 'error' : undefined"
      style="width: 100%"
      @change="handleSingleChange"
    />
    
    <!-- 年份选择器 -->
    <DatePicker.YearPicker
      v-else-if="type === 'year'"
      v-model:value="internalSingleValue"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      :allow-clear="clearable"
      :status="error ? 'error' : undefined"
      style="width: 100%"
      @change="handleSingleChange"
    />
    
    <!-- 周选择器 -->
    <DatePicker.WeekPicker
      v-else-if="type === 'week'"
      v-model:value="internalSingleValue"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      :allow-clear="clearable"
      :status="error ? 'error' : undefined"
      style="width: 100%"
      @change="handleSingleChange"
    />
    
    <!-- 日期范围选择器 -->
    <DatePicker.RangePicker
      v-else-if="type === 'daterange'"
      v-model:value="internalRangeValue"
      :size="size"
      :placeholder="getRangePlaceholder"
      :disabled="disabled"
      :allow-clear="clearable"
      :status="error ? 'error' : undefined"
      style="width: 100%"
      @change="handleRangeChange"
    />
    
    <!-- 日期时间范围选择器 -->
    <DatePicker.RangePicker
      v-else-if="type === 'datetimerange'"
      v-model:value="internalRangeValue"
      :size="size"
      :placeholder="getRangePlaceholder"
      :disabled="disabled"
      :allow-clear="clearable"
      :status="error ? 'error' : undefined"
      show-time
      style="width: 100%"
      @change="handleRangeChange"
    />
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { DatePicker as ADatePicker, ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import type { XDatePickerProps } from './types'

// 设置 dayjs 为中文
dayjs.locale('zh-cn')

// 导入组件
const DatePicker = ADatePicker

// 定义组件属性
const props = withDefaults(defineProps<XDatePickerProps>(), {
  size: 'middle',
  type: 'date',
  clearable: false,
  disabled: false,
  error: false,
  placeholder: '',
  startPlaceholder: '开始日期',
  endPlaceholder: '结束日期'
})

// 定义事件
const emit = defineEmits<{
  'update:modelValue': [value: XDatePickerProps['modelValue']]
  'update:value': [value: XDatePickerProps['modelValue']]
  'change': [value: XDatePickerProps['modelValue']]
}>()

// 获取范围选择器的占位符
const getRangePlaceholder = computed(() => {
  if (props.placeholder && Array.isArray(props.placeholder)) {
    return props.placeholder
  }
  if (props.placeholder && typeof props.placeholder === 'string') {
    return [props.placeholder, props.placeholder]
  }
  return [props.startPlaceholder, props.endPlaceholder]
})

// 单个值转换函数
const convertToSingleDayjs = (value: XDatePickerProps['modelValue']): Dayjs | undefined => {
  if (value === undefined || value === null || value === '') return undefined
  if (Array.isArray(value)) return undefined
  if (typeof value === 'number' || typeof value === 'string') {
    const parsed = dayjs(value)
    // 检查是否有效日期
    return parsed.isValid() ? parsed : undefined
  }
  if (value instanceof Date) {
    return dayjs(value).isValid() ? dayjs(value) : undefined
  }
  return (value as Dayjs).isValid?.() ? value as Dayjs : undefined
}

// 范围值转换函数
const convertToRangeDayjs = (value: XDatePickerProps['modelValue']): [Dayjs, Dayjs] | undefined => {
  if (value === undefined || value === null) return undefined
  if (!Array.isArray(value)) return undefined
  const result = value.map((item: any) => {
    if (item === undefined || item === null || item === '') return undefined
    if (typeof item === 'number' || typeof item === 'string') {
      const parsed = dayjs(item)
      return parsed.isValid() ? parsed : undefined
    }
    if (item instanceof Date) {
      return dayjs(item).isValid() ? dayjs(item) : undefined
    }
    return (item as Dayjs).isValid?.() ? item as Dayjs : undefined
  }).filter(Boolean) as Dayjs[]
  return result.length === 2 ? (result as [Dayjs, Dayjs]) : undefined
}

// 从 Dayjs 转换为格式化的字符串
const convertFromDayjs = (value: Dayjs | [Dayjs, Dayjs] | undefined): XDatePickerProps['modelValue'] => {
  if (value === undefined || value === null) return undefined

  // 根据类型返回不同的格式
  const getFormat = () => {
    switch (props.type) {
      case 'date':
        return 'YYYY-MM-DD'
      case 'datetime':
        return 'YYYY-MM-DD HH:mm:ss'
      case 'month':
        return 'YYYY-MM'
      case 'year':
        return 'YYYY'
      case 'week':
        return 'YYYY-MM-DD'
      case 'daterange':
        return 'YYYY-MM-DD'
      case 'datetimerange':
        return 'YYYY-MM-DD HH:mm:ss'
      default:
        return 'YYYY-MM-DD'
    }
  }

  const format = getFormat()

  if (Array.isArray(value)) {
    return value.map(item => item.format(format)) as [string, string]
  }
  return value.format(format)
}

// 获取当前值（优先使用 value，其次 modelValue）
const currentValue = computed(() => props.value ?? props.modelValue)

// 内部单个值
const internalSingleValue = ref<Dayjs | undefined>(convertToSingleDayjs(currentValue.value))

// 内部范围值
const internalRangeValue = ref<[Dayjs, Dayjs] | undefined>(convertToRangeDayjs(currentValue.value))

// 监听外部值变化
watch(() => currentValue.value, (newValue) => {
  if (props.type === 'daterange' || props.type === 'datetimerange') {
    internalRangeValue.value = convertToRangeDayjs(newValue)
  } else {
    internalSingleValue.value = convertToSingleDayjs(newValue)
  }
}, { deep: true })

// 处理单个选择器的变化
const handleSingleChange = (value: string | Dayjs) => {
  const dayjsValue = typeof value === 'string' ? dayjs(value) : value
  const convertedValue = convertFromDayjs(dayjsValue)
  emit('update:modelValue', convertedValue)
  emit('update:value', convertedValue)
  emit('change', convertedValue)
}

// 处理范围选择器的变化
const handleRangeChange = (value: [string, string] | [Dayjs, Dayjs]) => {
  const dayjsValue = Array.isArray(value) ? value.map((item: any) =>
    typeof item === 'string' ? dayjs(item) : item
  ) as [Dayjs, Dayjs] : value as [Dayjs, Dayjs]
  const convertedValue = convertFromDayjs(dayjsValue)
  emit('update:modelValue', convertedValue)
  emit('update:value', convertedValue)
  emit('change', convertedValue)
}

// 计算包装类名
const wrapperClasses = computed(() => {
  return {
    'xdatepicker-wrapper': true,
    'xdatepicker-wrapper--disabled': props.disabled,
    'xdatepicker-wrapper--error': props.error,
    [`xdatepicker-wrapper--${props.size}`]: true
  }
})

// 暴露组件方法和属性
defineExpose({
  internalSingleValue,
  internalRangeValue,
  handleSingleChange,
  handleRangeChange
})
</script>

<style scoped lang="less">
  @import './style.less';
</style>
