<template>
  <Button
    :type="type"
    :size="size"
    :disabled="isDisabled"
    :loading="loading"
    :ghost="ghost"
    :danger="danger"
    :block="block"
    :class="buttonClasses"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- 图标区域：加载状态优先显示加载图标 -->
    <template v-if="showIcon" #icon>
      <span class="xbtn-icon-wrapper">
        <!-- 加载状态显示加载图标 -->
        <LoadingOutlined v-if="loading" class="xbtn-loading-icon" />
        <!-- 非加载状态显示自定义图标 -->
        <slot v-else-if="$slots.icon" name="icon" />
        <span v-else-if="icon" class="xbtn-custom-icon">{{ icon }}</span>
      </span>
    </template>

    <!-- 默认插槽：按钮内容 -->
    <slot />
  </Button>
</template>

<script setup lang="ts">
  /**
   * XButton 组件
   * 基于 Ant Design Vue Button 封装，增加自定义图标、加载状态等功能
   */
  import { computed, useSlots } from 'vue'
  import { Button } from 'ant-design-vue'
  import { LoadingOutlined } from '@ant-design/icons-vue'
  import type { XButtonProps, XButtonEmits } from './types'

  // 定义组件名称
  defineOptions({
    name: 'XButton',
    inheritAttrs: false
  })

  // Props 定义 - 使用 withDefaults 设置默认值
  const props = withDefaults(defineProps<XButtonProps>(), {
    type: 'default',
    size: 'middle',
    disabled: false,
    loading: false,
    icon: '',
    ghost: false,
    danger: false,
    block: false,
    ripple: true
  })

  // Emits 定义
  const emit = defineEmits<XButtonEmits>()

  // 获取插槽
  const slots = useSlots()

  /**
   * 计算属性：是否禁用按钮
   * 当 disabled 或 loading 为 true 时禁用
   */
  const isDisabled = computed(() => props.disabled || props.loading)

  /**
   * 计算属性：是否显示图标区域
   */
  const showIcon = computed(() => {
    return props.loading || props.icon || slots.icon
  })

  /**
   * 计算属性：按钮类名
   */
  const buttonClasses = computed(() => {
    const classes = ['xbtn']

    // 尺寸类名
    if (props.size) {
      classes.push(`xbtn-${props.size}`)
    }

    // 类型类名
    if (props.type) {
      classes.push(`xbtn-${props.type}`)
    }

    // 加载状态类名
    if (props.loading) {
      classes.push('xbtn-loading')
    }

    // 禁用状态类名
    if (isDisabled.value) {
      classes.push('xbtn-disabled')
    }

    // 幽灵按钮类名
    if (props.ghost) {
      classes.push('xbtn-ghost')
    }

    // 危险按钮类名
    if (props.danger) {
      classes.push('xbtn-danger')
    }

    // 块级按钮类名
    if (props.block) {
      classes.push('xbtn-block')
    }

    // 带图标类名
    if (showIcon.value) {
      classes.push('xbtn-with-icon')
    }

    return classes
  })

  /**
   * 处理点击事件
   * 当按钮禁用时阻止点击
   */
  const handleClick = (event: MouseEvent) => {
    // 如果按钮处于禁用状态，不触发点击事件
    if (isDisabled.value) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    emit('click', event)
  }
</script>

<style scoped lang="less">
  @import './style.less';
</style>
