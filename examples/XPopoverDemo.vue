<template>
  <div class="xpopover-demo">
    <h1>XPopover 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XPopover content="这是一个简单的气泡卡片内容">
          <Button>鼠标悬停触发</Button>
        </XPopover>
      </div>
    </section>

    <!-- 不同触发方式 -->
    <section class="demo-section">
      <h2>不同触发方式</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>悬停</h3>
          <XPopover content="悬停触发的气泡卡片" trigger="hover">
            <Button type="primary">悬停</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>点击</h3>
          <XPopover content="点击触发的气泡卡片" trigger="click">
            <Button type="primary">点击</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>聚焦</h3>
          <XPopover content="聚焦触发的气泡卡片" trigger="focus">
            <Button type="primary">聚焦</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>右键菜单</h3>
          <XPopover content="右键触发的气泡卡片" trigger="contextmenu">
            <Button type="primary">右键</Button>
          </XPopover>
        </div>
      </div>
    </section>

    <!-- 不同位置 -->
    <section class="demo-section">
      <h2>不同位置</h2>
      <div class="demo-row position-demo">
        <div class="demo-col">
          <h3>上左</h3>
          <XPopover content="上左位置的气泡卡片" placement="topLeft">
            <Button>上左</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>上</h3>
          <XPopover content="上方位置的气泡卡片" placement="top">
            <Button>上方</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>上右</h3>
          <XPopover content="上右位置的气泡卡片" placement="topRight">
            <Button>上右</Button>
          </XPopover>
        </div>
      </div>
      <div class="demo-row position-demo">
        <div class="demo-col">
          <h3>左</h3>
          <XPopover content="左侧位置的气泡卡片" placement="left">
            <Button>左侧</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>右</h3>
          <XPopover content="右侧位置的气泡卡片" placement="right">
            <Button>右侧</Button>
          </XPopover>
        </div>
      </div>
      <div class="demo-row position-demo">
        <div class="demo-col">
          <h3>下左</h3>
          <XPopover content="下左位置的气泡卡片" placement="bottomLeft">
            <Button>下左</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>下</h3>
          <XPopover content="下方位置的气泡卡片" placement="bottom">
            <Button>下方</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>下右</h3>
          <XPopover content="下右位置的气泡卡片" placement="bottomRight">
            <Button>下右</Button>
          </XPopover>
        </div>
      </div>
    </section>

    <!-- 自定义内容 -->
    <section class="demo-section">
      <h2>自定义内容</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>带标题</h3>
          <XPopover title="气泡卡片标题" content="这是带有标题的气泡卡片内容">
            <Button type="primary">带标题</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>HTML内容</h3>
          <XPopover :html-content="htmlContent">
            <Button type="primary">HTML内容</Button>
          </XPopover>
        </div>
      </div>
    </section>

    <!-- 插槽内容 -->
    <section class="demo-section">
      <h2>插槽内容</h2>
      <div class="demo-row">
        <XPopover>
          <template #title>
            <div style="color: #1890ff; font-weight: bold;">自定义标题</div>
          </template>
          <template #content>
            <div>
              <p>这是通过插槽自定义的内容</p>
              <Button type="link" size="small" @click.stop>点击链接</Button>
            </div>
          </template>
          <Button type="primary">插槽内容</Button>
        </XPopover>
      </div>
    </section>

    <!-- 控制可见性 -->
    <section class="demo-section">
      <h2>控制可见性</h2>
      <div class="demo-row">
        <XPopover v-model:modelValue="visible" title="受控气泡卡片" content="这是一个受控的气泡卡片">
          <Button type="primary">受控气泡卡片</Button>
        </XPopover>
        <Button type="dashed" @click="visible = !visible" style="margin-left: 10px;">
          {{ visible ? '隐藏' : '显示' }}
        </Button>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <XPopover content="禁用的气泡卡片" disabled>
          <Button disabled>禁用状态</Button>
        </XPopover>
      </div>
    </section>

    <!-- 延迟显示 -->
    <section class="demo-section">
      <h2>延迟显示</h2>
      <div class="demo-row">
        <XPopover content="延迟显示的气泡卡片" :open-delay="1000" :close-delay="500">
          <Button type="primary">延迟显示(1秒)</Button>
        </XPopover>
      </div>
    </section>

    <!-- 自动调整溢出 -->
    <section class="demo-section">
      <h2>自动调整溢出</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>启用</h3>
          <XPopover content="气泡卡片会自动调整位置以避免溢出" placement="top" :auto-adjust-overflow="true">
            <Button type="primary">启用自动调整</Button>
          </XPopover>
        </div>
        <div class="demo-col">
          <h3>禁用</h3>
          <XPopover content="气泡卡片不会自动调整位置" placement="top" :auto-adjust-overflow="false">
            <Button type="primary">禁用自动调整</Button>
          </XPopover>
        </div>
      </div>
    </section>

    <!-- 自定义弹出容器 -->
    <section class="demo-section">
      <h2>自定义弹出容器</h2>
      <div class="demo-row">
        <XPopover content="气泡卡片渲染到当前容器内" placement="top" :get-popup-container="getCustomContainer">
          <Button type="primary">自定义容器</Button>
        </XPopover>
        <div id="custom-container" style="position: relative; border: 1px solid #d9d9d9; padding: 20px; margin-left: 20px;">
          这是自定义的弹出容器
        </div>
      </div>
    </section>

    <!-- 自定义触发器 -->
    <section class="demo-section">
      <h2>自定义触发器</h2>
      <div class="demo-row">
        <XPopover content="这是一个自定义触发器的气泡卡片">
          <div class="custom-trigger">
            <span style="color: #1890ff; cursor: pointer;">自定义文本触发器</span>
          </div>
        </XPopover>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from '../src/index'

// 响应式数据
const visible = ref(false)

// HTML内容
const htmlContent = '<div style="color: #f5222d;">这是HTML内容，可以包含样式和标签</div>'

// 自定义弹出容器函数
const getCustomContainer = () => {
  return document.getElementById('custom-container') || document.body
}
</script>

<style scoped lang="less">
.xpopover-demo {
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
  
  h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.65);
  }
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
  
  &.position-demo {
    justify-content: center;
  }
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.custom-trigger {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background-color: #f5f5f5;
  transition: all 0.3s;
  
  &:hover {
    background-color: #e6f7ff;
    border-color: #91d5ff;
  }
}
</style>