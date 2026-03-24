<template>
  <div class="xdatepicker-wrapper" :class="wrapperClasses">
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
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { DatePicker as ADatePicker } from 'ant-design-vue'
import dayjs, { Dayjs } from 'dayjs'
import type { XDatePickerProps } from './types'

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
  if (value === undefined || value === null) return undefined
  if (Array.isArray(value)) return undefined
  if (typeof value === 'number' || typeof value === 'string') {
    return dayjs(value)
  }
  if (value instanceof Date) {
    return dayjs(value)
  }
  return value as Dayjs
}

// 范围值转换函数
const convertToRangeDayjs = (value: XDatePickerProps['modelValue']): [Dayjs, Dayjs] | undefined => {
  if (value === undefined || value === null) return undefined
  if (!Array.isArray(value)) return undefined
  return value.map(item => {
    if (typeof item === 'number' || typeof item === 'string') {
      return dayjs(item)
    }
    if (item instanceof Date) {
      return dayjs(item)
    }
    return item as Dayjs
  }) as [Dayjs, Dayjs]
}

// 从 Dayjs 转换为 Date
const convertFromDayjs = (value: Dayjs | [Dayjs, Dayjs] | undefined): XDatePickerProps['modelValue'] => {
  if (value === undefined || value === null) return undefined
  if (Array.isArray(value)) {
    return value.map(item => item.toDate()) as [Date, Date]
  }
  return value.toDate()
}

// 内部单个值
const internalSingleValue = ref<Dayjs | undefined>(convertToSingleDayjs(props.modelValue))

// 内部范围值
const internalRangeValue = ref<[Dayjs, Dayjs] | undefined>(convertToRangeDayjs(props.modelValue))

// 监听外部值变化
watch(() => props.modelValue, (newValue) => {
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
  emit('change', convertedValue)
}

// 处理范围选择器的变化
const handleRangeChange = (value: [string, string] | [Dayjs, Dayjs]) => {
  const dayjsValue = Array.isArray(value) ? value.map(item => 
    typeof item === 'string' ? dayjs(item) : item
  ) as [Dayjs, Dayjs] : value as [Dayjs, Dayjs]
  const convertedValue = convertFromDayjs(dayjsValue)
  emit('update:modelValue', convertedValue)
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

<style scoped>
.xdatepicker-wrapper :deep(.ant-picker) {
  width: 100%;
}

.xdatepicker-wrapper :deep(.ant-picker-dropdown) {
  width: auto;
  min-width: 100%;
}
</style>
