<template>
  <div class="xfloat-button-demo">
    <h1>XFloatButton 组件示例</h1>
    <!-- 增加高度用于测试滚动效果 -->
    <div class="scroll-content">

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XFloatButton text="帮助" position="bottom-left" />
        <XFloatButton text="联系我们" position="top-right" />
        <XFloatButton text="反馈" position="top-left" />
      </div>
      
      <div class="code-example">
        <h3>基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XFloatButton text="帮助" position="bottom-left" /&gt;
    &lt;XFloatButton text="联系我们" position="top-right" /&gt;
    &lt;XFloatButton text="反馈" position="top-left" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 不同类型 -->
    <section class="demo-section">
      <h2>不同类型</h2>
      <div class="demo-row">
        <XFloatButton text="主要" type="primary" position="bottom-right" />
        <XFloatButton text="成功" type="success" position="bottom-left" />
        <XFloatButton text="警告" type="warning" position="top-right" />
        <XFloatButton text="错误" type="error" position="top-left" />
      </div>
      
      <div class="code-example">
        <h3>不同类型</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XFloatButton text="主要" type="primary" position="bottom-right" /&gt;
    &lt;XFloatButton text="成功" type="success" position="bottom-left" /&gt;
    &lt;XFloatButton text="警告" type="warning" position="top-right" /&gt;
    &lt;XFloatButton text="错误" type="error" position="top-left" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="demo-section">
      <h2>不同尺寸</h2>
      <div class="demo-row">
        <XFloatButton text="大号" type="primary" size="large" position="bottom-right" />
        <XFloatButton text="中号" type="primary" size="middle" position="bottom-left" />
        <XFloatButton text="小号" type="primary" size="small" position="top-right" />
      </div>
      
      <div class="code-example">
        <h3>不同尺寸</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XFloatButton text="大号" type="primary" size="large" position="bottom-right" /&gt;
    &lt;XFloatButton text="中号" type="primary" size="middle" position="bottom-left" /&gt;
    &lt;XFloatButton text="小号" type="primary" size="small" position="top-right" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 图标按钮 -->
    <section class="demo-section">
      <h2>图标按钮</h2>
      <div class="demo-row">
        <XFloatButton text="🔔" type="primary" position="bottom-right" />
        <XFloatButton text="✉️" type="success" position="bottom-left" />
        <XFloatButton text="🔍" type="warning" position="top-right" />
        <XFloatButton text="📞" type="error" position="top-left" />
      </div>
      <div class="demo-row">
        <!-- 使用插槽自定义图标 -->
        <XFloatButton type="primary" position="bottom-right">
          <template #icon>
            <span style="color: #fff">⭐</span>
          </template>
          收藏
        </XFloatButton>
      </div>
      
      <div class="code-example">
        <h3>图标按钮</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XFloatButton text="🔔" type="primary" position="bottom-right" /&gt;
    &lt;XFloatButton text="✉️" type="success" position="bottom-left" /&gt;
    &lt;XFloatButton text="🔍" type="warning" position="top-right" /&gt;
    &lt;XFloatButton text="📞" type="error" position="top-left" /&gt;
  &lt;/div&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用插槽自定义图标 --&gt;
    &lt;XFloatButton type="primary" position="bottom-right"&gt;
      &lt;template #icon&gt;
        &lt;span style="color: #fff"&gt;⭐&lt;/span&gt;
      &lt;/template&gt;
      收藏
    &lt;/XFloatButton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 加载状态 -->
    <section class="demo-section">
      <h2>加载状态</h2>
      <div class="demo-row">
        <XFloatButton text="加载中" type="primary" loading position="bottom-right" />
        <XFloatButton text="保存中" type="success" loading position="bottom-left" />
      </div>
      
      <div class="code-example">
        <h3>加载状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XFloatButton text="加载中" type="primary" loading position="bottom-right" /&gt;
    &lt;XFloatButton text="保存中" type="success" loading position="bottom-left" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <XFloatButton text="禁用" type="primary" disabled position="bottom-right" />
        <XFloatButton text="不可用" type="success" disabled position="bottom-left" />
      </div>
      
      <div class="code-example">
        <h3>禁用状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XFloatButton text="禁用" type="primary" disabled position="bottom-right" /&gt;
    &lt;XFloatButton text="不可用" type="success" disabled position="bottom-left" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 点击事件 -->
    <section class="demo-section">
      <h2>点击事件</h2>
      <div class="demo-row">
        <XFloatButton text="点击我" type="primary" @click="showMessage" position="bottom-right" />
        <p class="demo-tip">点击按钮后会显示消息提示</p>
      </div>
      
      <div class="code-example">
        <h3>点击事件</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XFloatButton text="点击我" type="primary" @click="showMessage" position="bottom-right" /&gt;
    &lt;p class="demo-tip"&gt;点击按钮后会显示消息提示&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'

// 点击事件处理函数
const showMessage = () => {
  alert('XFloatButton 被点击了！')
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section class="demo-section">
      <h2>自定义样式</h2>
      <div class="demo-row">
        <XFloatButton 
          text="自定义" 
          type="primary" 
          position="bottom-right" 
          style="background-color: #8c8c8c; border-color: #8c8c8c;"
        />
        <XFloatButton 
          text="自定义样式" 
          type="dashed" 
          position="bottom-left" 
          style="color: #8c8c8c; border-color: #8c8c8c;"
        />
      </div>
      
      <div class="code-example">
        <h3>自定义样式</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XFloatButton 
      text="自定义" 
      type="primary" 
      position="bottom-right" 
      style="background-color: #8c8c8c; border-color: #8c8c8c;"
    /&gt;
    &lt;XFloatButton 
      text="自定义样式" 
      type="dashed" 
      position="bottom-left" 
      style="color: #8c8c8c; border-color: #8c8c8c;"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 悬浮菜单 -->
    <section class="demo-section">
      <h2>悬浮菜单</h2>
      <div class="demo-row">
        <div style="position: relative; height: 80px;">
          <XPopover 
            title="操作菜单" 
            placement="left"
            trigger="click"
          >
            <template #content>
              <div class="popover-menu">
                <a href="#" @click.prevent="showMenuAction('刷新')">刷新页面</a>
                <a href="#" @click.prevent="showMenuAction('设置')">设置</a>
                <a href="#" @click.prevent="showMenuAction('帮助')">帮助文档</a>
                <a href="#" @click.prevent="showMenuAction('反馈')">意见反馈</a>
              </div>
            </template>
            <XFloatButton text="📋" type="primary" position="bottom-right" />
          </XPopover>
        </div>
        <p class="demo-tip">点击按钮显示悬浮菜单</p>
      </div>
      
      <div class="code-example">
        <h3>悬浮菜单</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div style="position: relative; height: 80px;"&gt;
      &lt;XPopover 
        title="操作菜单" 
        placement="left"
        trigger="click"
      &gt;
        &lt;template #content&gt;
          &lt;div class="popover-menu"&gt;
            &lt;a href="#" @click.prevent="showMenuAction('刷新')"&gt;刷新页面&lt;/a&gt;
            &lt;a href="#" @click.prevent="showMenuAction('设置')"&gt;设置&lt;/a&gt;
            &lt;a href="#" @click.prevent="showMenuAction('帮助')"&gt;帮助文档&lt;/a&gt;
            &lt;a href="#" @click.prevent="showMenuAction('反馈')"&gt;意见反馈&lt;/a&gt;
          &lt;/div&gt;
        &lt;/template&gt;
        &lt;XFloatButton text="📋" type="primary" position="bottom-right" /&gt;
      &lt;/XPopover&gt;
    &lt;/div&gt;
    &lt;p class="demo-tip"&gt;点击按钮显示悬浮菜单&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'
import XPopover from 'your-component-library/XPopover/XPopover.vue'

// 悬浮菜单操作处理函数
const showMenuAction = (action: string) => {
  alert(`您点击了菜单选项：${action}`)
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 回到顶部按钮 - 放置在页面最底部 -->
    <div class="back-to-top-container">
      <XFloatButton text="回到顶部" type="primary" position="bottom-right" @click="scrollToTop" />
      
      <div class="code-example">
        <h3>回到顶部</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="back-to-top-container"&gt;
    &lt;XFloatButton text="回到顶部" type="primary" position="bottom-right" @click="scrollToTop" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XFloatButton from 'your-component-library/XFloatButton/XFloatButton.vue'

// 回到顶部函数
const scrollToTop = () => {
  // 操作滚动区域
  const scrollContent = document.querySelector('.scroll-content')
  if (scrollContent) {
    scrollContent.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
&lt;/script&gt;</code></pre>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import XFloatButton from '../src/components/XFloatButton/XFloatButton.vue'
import XPopover from '../src/components/XPopover/XPopover.vue'

// 点击事件处理函数
const showMessage = () => {
  alert('XFloatButton 被点击了！')
}

// 悬浮菜单操作处理函数
const showMenuAction = (action: string) => {
  alert(`您点击了菜单选项：${action}`)
}

// 回到顶部函数
const scrollToTop = () => {
  console.log('回到顶部按钮被点击')
  
  // 操作App.vue中的.main元素，这是实际的滚动区域
  const mainScroll = document.querySelector('.main')
  if (mainScroll) {
    mainScroll.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  // 同时也操作scroll-content的滚动
  const scrollContent = document.querySelector('.scroll-content')
  if (scrollContent) {
    scrollContent.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped lang="less">
/* 组件示例特有样式 */
.xfloat-button-demo {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.scroll-content {
  height: 2000px;
  overflow-y: auto;
  padding-right: 20px;
}

/* 为每个demo-section添加相对定位 */
.demo-section {
  position: relative;
  margin-bottom: 60px;
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}

/* 使每个section内的按钮相对该section定位 */
.demo-section :deep(.xfloat-button-wrapper) {
  position: absolute;
  z-index: 10;
}

/* 为不同位置的按钮添加间距 */
.demo-section :deep(.xfloat-button-top-left) {
  top: 20px;
  left: 20px;
}

.demo-section :deep(.xfloat-button-top-right) {
  top: 20px;
  right: 20px;
}

.demo-section :deep(.xfloat-button-bottom-left) {
  bottom: 20px;
  left: 20px;
}

.demo-section :deep(.xfloat-button-bottom-right) {
  bottom: 20px;
  right: 20px;
}

/* 为同section内同位置的多个按钮添加垂直间距 */
.demo-section :deep(.xfloat-button-wrapper + .xfloat-button-wrapper) {
  margin-top: 80px;
}

/* 回到顶部按钮容器样式 */
.back-to-top-container {
  position: relative;
  height: 100px;
}

/* 让回到顶部按钮相对于整个内容区域定位 */
.back-to-top-container :deep(.xfloat-button-wrapper) {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}

/* 悬浮菜单样式 */
.popover-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
}

.popover-menu a {
  display: block;
  padding: 6px 16px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
}

.popover-menu a:hover {
  background-color: #f5f5f5;
  color: #1890ff;
}

/* 代码示例块样式 */
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
}
</style>