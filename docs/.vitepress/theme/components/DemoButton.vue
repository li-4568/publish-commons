<template>
  <div class="demo-button">
    <div class="demo-block">
      <h4>基础用法</h4>
      <div class="demo-row">
        <XButton>默认按钮</XButton>
        <XButton type="primary">主要按钮</XButton>
        <XButton type="success">成功按钮</XButton>
        <XButton type="warning">警告按钮</XButton>
        <XButton type="error">危险按钮</XButton>
      </div>
    </div>

    <div class="demo-block">
      <h4>按钮尺寸</h4>
      <div class="demo-row">
        <XButton size="large">大按钮</XButton>
        <XButton size="middle">中按钮</XButton>
        <XButton size="small">小按钮</XButton>
      </div>
    </div>

    <div class="demo-block">
      <h4>按钮状态</h4>
      <div class="demo-row">
        <XButton loading>加载中</XButton>
        <XButton disabled>禁用</XButton>
        <XButton ghost>幽灵按钮</XButton>
        <XButton danger>危险</XButton>
      </div>
    </div>

    <div class="demo-block">
      <h4>块级按钮</h4>
      <XButton block type="primary">块级按钮</XButton>
    </div>
  </div>
</template>

<script setup>
import { XButton } from 'publish-commons'
</script>

<style scoped>
.demo-button {
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
}
</style>
