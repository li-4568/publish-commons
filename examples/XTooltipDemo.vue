<template>
  <div class="tooltip-demo">
    <h1>XTooltip 文字提示组件示例</h1>
    
    <!-- 基本用法 -->
    <section class="demo-section">
      <h2>基本用法</h2>
      <div class="demo-row">
        <XTooltip title="这是一个简单的提示">
          <Button type="primary">基本提示</Button>
        </XTooltip>
      </div>
    </section>
    
    <!-- 不同触发方式 -->
    <section class="demo-section">
      <h2>不同触发方式</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>悬停</h3>
          <XTooltip title="悬停触发" trigger="hover">
            <Button>悬停触发</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>点击</h3>
          <XTooltip title="点击触发" trigger="click">
            <Button>点击触发</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>聚焦</h3>
          <XTooltip title="聚焦触发" trigger="focus">
            <Button>聚焦触发</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>右键</h3>
          <XTooltip title="右键触发" trigger="contextmenu">
            <Button>右键触发</Button>
          </XTooltip>
        </div>
      </div>
    </section>
    
    <!-- 不同位置 -->
    <section class="demo-section">
      <h2>不同位置</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>上</h3>
          <XTooltip title="顶部提示" placement="top">
            <Button>顶部提示</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>下</h3>
          <XTooltip title="底部提示" placement="bottom">
            <Button>底部提示</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>左</h3>
          <XTooltip title="左侧提示" placement="left">
            <Button>左侧提示</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>右</h3>
          <XTooltip title="右侧提示" placement="right">
            <Button>右侧提示</Button>
          </XTooltip>
        </div>
      </div>
      <div class="demo-row">
        <div class="demo-col">
          <h3>左上</h3>
          <XTooltip title="左上提示" placement="topLeft">
            <Button>左上提示</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>右上</h3>
          <XTooltip title="右上提示" placement="topRight">
            <Button>右上提示</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>左下</h3>
          <XTooltip title="左下提示" placement="bottomLeft">
            <Button>左下提示</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>右下</h3>
          <XTooltip title="右下提示" placement="bottomRight">
            <Button>右下提示</Button>
          </XTooltip>
        </div>
      </div>
    </section>
    
    <!-- HTML内容 -->
    <section class="demo-section">
      <h2>HTML内容</h2>
      <div class="demo-row">
        <XTooltip :html-title="htmlContent">
          <Button type="primary">HTML内容</Button>
        </XTooltip>
      </div>
    </section>
    
    <!-- 插槽内容 -->
    <section class="demo-section">
      <h2>插槽内容</h2>
      <div class="demo-row">
        <XTooltip>
          <template #title>
            <div style="color: #1890ff; font-weight: bold;">
              <p>自定义标题</p>
              <p>这是通过插槽自定义的内容</p>
            </div>
          </template>
          <Button type="primary">插槽内容</Button>
        </XTooltip>
      </div>
    </section>
    
    <!-- 控制可见性 -->
    <section class="demo-section">
      <h2>控制可见性</h2>
      <div class="demo-row">
        <XTooltip v-model:modelValue="visible" title="受控提示">
          <Button type="primary">受控提示</Button>
        </XTooltip>
        <Button type="dashed" @click="visible = !visible" style="margin-left: 10px;">
          {{ visible ? '隐藏' : '显示' }}
        </Button>
      </div>
    </section>
    
    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <XTooltip content="禁用的提示" disabled>
          <Button disabled>禁用状态</Button>
        </XTooltip>
      </div>
    </section>
    
    <!-- 延迟显示 -->
    <section class="demo-section">
      <h2>延迟显示</h2>
      <div class="demo-row">
        <XTooltip title="延迟显示的提示" :open-delay="1000" :close-delay="500">
          <Button type="primary">延迟显示(1秒)</Button>
        </XTooltip>
      </div>
    </section>
    
    <!-- 自动调整溢出 -->
    <section class="demo-section">
      <h2>自动调整溢出</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>启用</h3>
          <XTooltip title="提示会自动调整位置以避免溢出" placement="top" :auto-adjust-overflow="true">
            <Button type="primary">启用自动调整</Button>
          </XTooltip>
        </div>
        <div class="demo-col">
          <h3>禁用</h3>
          <XTooltip title="提示不会自动调整位置" placement="top" :auto-adjust-overflow="false">
            <Button type="primary">禁用自动调整</Button>
          </XTooltip>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Button } from 'ant-design-vue'
  import XTooltip from '../src/components/XTooltip/XTooltip.vue'
  
  // 受控模式状态
  const visible = ref(false)
  
  // HTML内容
  const htmlContent = '<div style="color: #1890ff;"><b>加粗</b> <i>斜体</i> <u>下划线</u></div>'
</script>

<style scoped lang="less">
  .tooltip-demo {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
  }
  
  .demo-section {
    margin-bottom: 32px;
  }
  
  .demo-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    width: 100%;
  }
  
  .demo-col {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.85);
  }
  
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.85);
    border-left: 4px solid #1890ff;
    padding-left: 12px;
  }
  
  h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.65);
  }
</style>