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
      
      <div class="code-example">
        <h3>基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XPopover content="这是一个简单的气泡卡片内容"&gt;
      &lt;Button&gt;鼠标悬停触发&lt;/Button&gt;
    &lt;/XPopover&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'
&lt;/script&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>不同触发方式</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;悬停&lt;/h3&gt;
      &lt;XPopover content="悬停触发的气泡卡片" trigger="hover"&gt;
        &lt;Button type="primary"&gt;悬停&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;点击&lt;/h3&gt;
      &lt;XPopover content="点击触发的气泡卡片" trigger="click"&gt;
        &lt;Button type="primary"&gt;点击&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;聚焦&lt;/h3&gt;
      &lt;XPopover content="聚焦触发的气泡卡片" trigger="focus"&gt;
        &lt;Button type="primary"&gt;聚焦&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;右键菜单&lt;/h3&gt;
      &lt;XPopover content="右键触发的气泡卡片" trigger="contextmenu"&gt;
        &lt;Button type="primary"&gt;右键&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'
&lt;/script&gt;

&lt;style scoped&gt;
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>不同位置</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;!-- 上方位置 --&gt;
  &lt;div class="demo-row position-demo"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;上左&lt;/h3&gt;
      &lt;XPopover content="上左位置的气泡卡片" placement="topLeft"&gt;
        &lt;Button&gt;上左&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;上&lt;/h3&gt;
      &lt;XPopover content="上方位置的气泡卡片" placement="top"&gt;
        &lt;Button&gt;上方&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;上右&lt;/h3&gt;
      &lt;XPopover content="上右位置的气泡卡片" placement="topRight"&gt;
        &lt;Button&gt;上右&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;!-- 左右位置 --&gt;
  &lt;div class="demo-row position-demo"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;左&lt;/h3&gt;
      &lt;XPopover content="左侧位置的气泡卡片" placement="left"&gt;
        &lt;Button&gt;左侧&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;右&lt;/h3&gt;
      &lt;XPopover content="右侧位置的气泡卡片" placement="right"&gt;
        &lt;Button&gt;右侧&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;!-- 下方位置 --&gt;
  &lt;div class="demo-row position-demo"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;下左&lt;/h3&gt;
      &lt;XPopover content="下左位置的气泡卡片" placement="bottomLeft"&gt;
        &lt;Button&gt;下左&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;下&lt;/h3&gt;
      &lt;XPopover content="下方位置的气泡卡片" placement="bottom"&gt;
        &lt;Button&gt;下方&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;下右&lt;/h3&gt;
      &lt;XPopover content="下右位置的气泡卡片" placement="bottomRight"&gt;
        &lt;Button&gt;下右&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'
&lt;/script&gt;

&lt;style scoped&gt;
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}

.position-demo {
  justify-content: center;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>自定义内容</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;带标题&lt;/h3&gt;
      &lt;XPopover title="气泡卡片标题" content="这是带有标题的气泡卡片内容"&gt;
        &lt;Button type="primary"&gt;带标题&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;HTML内容&lt;/h3&gt;
      &lt;XPopover :html-content="htmlContent"&gt;
        &lt;Button type="primary"&gt;HTML内容&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'

// HTML内容
const htmlContent = '&lt;div style="color: #f5222d;"&gt;这是HTML内容，可以包含样式和标签&lt;/div&gt;'
&lt;/script&gt;

&lt;style scoped&gt;
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>插槽内容</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XPopover&gt;
      &lt;!-- 自定义标题插槽 --&gt;
      &lt;template #title&gt;
        &lt;div style="color: #1890ff; font-weight: bold;"&gt;自定义标题&lt;/div&gt;
      &lt;/template&gt;
      &lt;!-- 自定义内容插槽 --&gt;
      &lt;template #content&gt;
        &lt;div&gt;
          &lt;p&gt;这是通过插槽自定义的内容&lt;/p&gt;
          &lt;Button type="link" size="small" @click.stop&gt;点击链接&lt;/Button&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;Button type="primary"&gt;插槽内容&lt;/Button&gt;
    &lt;/XPopover&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'
&lt;/script&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>控制可见性</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用 v-model 控制气泡卡片的显示隐藏 --&gt;
    &lt;XPopover v-model:modelValue="visible" title="受控气泡卡片" content="这是一个受控的气泡卡片"&gt;
      &lt;Button type="primary"&gt;受控气泡卡片&lt;/Button&gt;
    &lt;/XPopover&gt;
    &lt;Button 
      type="dashed" 
      @click="visible = !visible" 
      style="margin-left: 10px;"
    &gt;
      {{ visible ? '隐藏' : '显示' }}
    &lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'

// 控制气泡卡片可见性的响应式变量
const visible = ref(false)
&lt;/script&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>禁用状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用 disabled 属性禁用气泡卡片 --&gt;
    &lt;XPopover content="禁用的气泡卡片" disabled&gt;
      &lt;Button disabled&gt;禁用状态&lt;/Button&gt;
    &lt;/XPopover&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'
&lt;/script&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>延迟显示</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用 open-delay 和 close-delay 设置延迟时间(毫秒) --&gt;
    &lt;XPopover 
      content="延迟显示的气泡卡片" 
      :open-delay="1000" 
      :close-delay="500"
    &gt;
      &lt;Button type="primary"&gt;延迟显示(1秒)&lt;/Button&gt;
    &lt;/XPopover&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'
&lt;/script&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>自动调整溢出</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;启用&lt;/h3&gt;
      &lt;!-- 启用自动调整溢出 --&gt;
      &lt;XPopover 
        content="气泡卡片会自动调整位置以避免溢出" 
        placement="top" 
        :auto-adjust-overflow="true"
      &gt;
        &lt;Button type="primary"&gt;启用自动调整&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;禁用&lt;/h3&gt;
      &lt;!-- 禁用自动调整溢出 --&gt;
      &lt;XPopover 
        content="气泡卡片不会自动调整位置" 
        placement="top" 
        :auto-adjust-overflow="false"
      &gt;
        &lt;Button type="primary"&gt;禁用自动调整&lt;/Button&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'
&lt;/script&gt;

&lt;style scoped&gt;
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>自定义弹出容器</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用 get-popup-container 指定弹出容器 --&gt;
    &lt;XPopover 
      content="气泡卡片渲染到当前容器内" 
      placement="top" 
      :get-popup-container="getCustomContainer"
    &gt;
      &lt;Button type="primary"&gt;自定义容器&lt;/Button&gt;
    &lt;/XPopover&gt;
    
    &lt;!-- 自定义容器元素 --&gt;
    &lt;div 
      id="custom-container" 
      style="position: relative; border: 1px solid #d9d9d9; padding: 20px; margin-left: 20px;"
    &gt;
      这是自定义的弹出容器
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import { XPopover } from 'your-component-library'

// 自定义弹出容器函数
const getCustomContainer = () => {
  return document.getElementById('custom-container') || document.body
}
&lt;/script&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>自定义触发器</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XPopover content="这是一个自定义触发器的气泡卡片"&gt;
      &lt;!-- 自定义触发器元素 --&gt;
      &lt;div class="custom-trigger"&gt;
        &lt;span style="color: #1890ff; cursor: pointer;"&gt;自定义文本触发器&lt;/span&gt;
      &lt;/div&gt;
    &lt;/XPopover&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { XPopover } from 'your-component-library'
&lt;/script&gt;

&lt;style scoped&gt;
.custom-trigger {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background-color: #f5f5f5;
  transition: all 0.3s;
  cursor: pointer;
}

.custom-trigger:hover {
  background-color: #e6f7ff;
  border-color: #91d5ff;
}
&lt;/style&gt;</code></pre>
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

// 代码示例样式
.code-example {
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
}

.code-example h3 {
  padding: 10px 16px;
  margin: 0;
  background-color: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  font-weight: 500;
}

.code-example pre {
  margin: 0;
  padding: 16px;
  background: #fff;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #333;
}
</style>