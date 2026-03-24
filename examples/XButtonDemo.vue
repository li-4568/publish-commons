<template>
  <div class="xbutton-demo">
    <h1>XButton 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XButton>默认按钮</XButton>
        <XButton type="primary">主要按钮</XButton>
        <XButton type="dashed">虚线按钮</XButton>
        <XButton type="text">文本按钮</XButton>
        <XButton type="link">链接按钮</XButton>
      </div>
    </section>

    <!-- 按钮尺寸 -->
    <section class="demo-section">
      <h2>按钮尺寸</h2>
      <div class="demo-row">
        <XButton type="primary" size="large">大号按钮</XButton>
        <XButton type="primary" size="middle">中号按钮</XButton>
        <XButton type="primary" size="small">小号按钮</XButton>
      </div>
    </section>

    <!-- 图标按钮 -->
    <section class="demo-section">
      <h2>图标按钮</h2>
      <div class="demo-row">
        <XButton type="primary" icon="🔍">搜索</XButton>
        <XButton type="primary" icon="✓">确认</XButton>
        <XButton type="default" icon="✕">取消</XButton>
      </div>
      <div class="demo-row">
        <!-- 使用插槽自定义图标 -->
        <XButton type="primary">
          <template #icon>
            <span style="color: #fff">⭐</span>
          </template>
          收藏
        </XButton>
      </div>
    </section>

    <!-- 加载状态 -->
    <section class="demo-section">
      <h2>加载状态</h2>
      <div class="demo-row">
        <XButton type="primary" loading>加载中</XButton>
        <XButton type="primary" :loading="isLoading" @click="handleLoading">
          {{ isLoading ? '提交中...' : '点击加载' }}
        </XButton>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <XButton disabled>禁用按钮</XButton>
        <XButton type="primary" disabled>禁用主要</XButton>
        <XButton type="primary" loading>加载中（自动禁用）</XButton>
      </div>
    </section>

    <!-- 危险按钮 -->
    <section class="demo-section">
      <h2>危险按钮</h2>
      <div class="demo-row">
        <XButton danger>危险按钮</XButton>
        <XButton type="primary" danger>危险主要</XButton>
        <XButton danger ghost>危险幽灵</XButton>
      </div>
    </section>

    <!-- 幽灵按钮 -->
    <section class="demo-section">
      <h2>幽灵按钮</h2>
      <div class="demo-row ghost-bg">
        <XButton ghost>幽灵按钮</XButton>
        <XButton type="primary" ghost>主要幽灵</XButton>
        <XButton danger ghost>危险幽灵</XButton>
      </div>
    </section>

    <!-- 块级按钮 -->
    <section class="demo-section">
      <h2>块级按钮</h2>
      <div class="demo-col">
        <XButton type="primary" block>块级按钮</XButton>
        <XButton block>块级默认</XButton>
      </div>
    </section>

    <!-- 点击事件 -->
    <section class="demo-section">
      <h2>点击事件</h2>
      <div class="demo-row">
        <XButton type="primary" @click="handleClick">点击我</XButton>
      </div>
      <p class="demo-tip">点击次数: {{ clickCount }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
  /**
   * XButton 组件使用示例
   */
  import { ref } from 'vue'
  import XButton from '../src/components/XButton/XButton.vue'

  // 加载状态
  const isLoading = ref(false)

  // 点击计数
  const clickCount = ref(0)

  /**
   * 处理加载按钮点击
   */
  const handleLoading = () => {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 2000)
  }

  /**
   * 处理普通点击
   */
  const handleClick = () => {
    clickCount.value++
  }
</script>

<style scoped lang="less">
  .xbutton-demo {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;

    h1 {
      text-align: center;
      margin-bottom: 32px;
      color: rgba(0, 0, 0, 0.85);
    }
  }

  .demo-section {
    margin-bottom: 32px;

    h2 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px;
      color: rgba(0, 0, 0, 0.85);
      border-left: 4px solid #1890ff;
      padding-left: 12px;
    }
  }

  .demo-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;

    &.ghost-bg {
      background: #1890ff;
      padding: 16px;
      border-radius: 6px;
    }
  }

  .demo-col {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .demo-tip {
    margin-top: 8px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
</style>
