<template>
  <div class="xradio-group-wrapper" :class="{ 'xradio-group-wrapper-vertical': direction === 'vertical' }">
    <ARadioGroup
      :value="value ?? modelValue"
      @update:value="(val: any) => { emit('update:modelValue', val); emit('update:value', val); }"
      :disabled="disabled"
      :size="antRadioSize"
      :name="name"
      v-bind="$attrs"
    >
      <slot></slot>
    </ARadioGroup>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup as ARadioGroup } from 'ant-design-vue'
import { provide, computed } from 'vue'
import type { XRadioGroupProps, XRadioGroupEmits } from './types'
import './style.less'

// 定义组件选项
defineOptions({
  name: 'XRadioGroup'
})

// 定义组件属性
const props = withDefaults(defineProps<XRadioGroupProps>(), {
  modelValue: undefined,
  size: 'default',
  disabled: false,
  direction: 'horizontal',
  name: ''
})

// 定义组件事件
const emit = defineEmits<XRadioGroupEmits>()

// 计算Ant Design Vue RadioGroup支持的size属性
const antRadioSize = computed(() => {
  // 将'middle'转换为'default'，因为Ant Design Vue的RadioGroup不支持'middle'尺寸
  return props.size === 'middle' ? 'default' : props.size
})

// 提供 RadioGroup 上下文，供子 Radio 组件使用
provide('RadioGroup', {
  get value() { return props.value ?? props.modelValue },  // 使用 getter 确保获取最新值
  get disabled() { return props.disabled },
  get size() { return props.size },
  get name() { return props.name },
  get direction() { return props.direction },
  onChange: (val: any) => { emit('update:modelValue', val); emit('update:value', val); }
})
</script>

<style scoped lang="less">
.xradio-group-wrapper {
  display: inline-block;
  
  // 修复子元素间的间距问题
  & > .ant-radio-group {
    display: flex;
    flex-wrap: wrap;
    
    & > .ant-radio-wrapper {
      margin-right: 16px;
      margin-bottom: 8px;
      
      &:last-child {
        margin-right: 0;
      }
    }
  }
  
  // 垂直排列样式
  &-vertical {
    & > .ant-radio-group {
      flex-direction: column;
      
      & > .ant-radio-wrapper {
        margin-right: 0;
        margin-bottom: 8px;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>