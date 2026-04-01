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

      <div class="code-example">
        <h3>基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XButton&gt;默认按钮&lt;/XButton&gt;
    &lt;XButton type="primary"&gt;主要按钮&lt;/XButton&gt;
    &lt;XButton type="dashed"&gt;虚线按钮&lt;/XButton&gt;
    &lt;XButton type="text"&gt;文本按钮&lt;/XButton&gt;
    &lt;XButton type="link"&gt;链接按钮&lt;/XButton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XButton from 'your-component-library/XButton/XButton.vue'
&lt;/script&gt;</code></pre>
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

      <div class="code-example">
        <h3>按钮尺寸</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XButton type="primary" size="large"&gt;大号按钮&lt;/XButton&gt;
    &lt;XButton type="primary" size="middle"&gt;中号按钮&lt;/XButton&gt;
    &lt;XButton type="primary" size="small"&gt;小号按钮&lt;/XButton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XButton from 'your-component-library/XButton/XButton.vue'
&lt;/script&gt;</code></pre>
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

      <div class="code-example">
        <h3>图标按钮</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XButton type="primary" icon="🔍"&gt;搜索&lt;/XButton&gt;
    &lt;XButton type="primary" icon="✓"&gt;确认&lt;/XButton&gt;
    &lt;XButton type="default" icon="✕"&gt;取消&lt;/XButton&gt;
  &lt;/div&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用插槽自定义图标 --&gt;
    &lt;XButton type="primary"&gt;
      &lt;template #icon&gt;
        &lt;span style="color: #fff"&gt;⭐&lt;/span&gt;
      &lt;/template&gt;
      收藏
    &lt;/XButton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XButton from 'your-component-library/XButton/XButton.vue'
&lt;/script&gt;</code></pre>
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

      <div class="code-example">
        <h3>加载状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XButton type="primary" loading&gt;加载中&lt;/XButton&gt;
    &lt;XButton type="primary" :loading="isLoading" @click="handleLoading"&gt;
      {{ isLoading ? '提交中...' : '点击加载' }}
    &lt;/XButton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XButton from 'your-component-library/XButton/XButton.vue'

// 加载状态
const isLoading = ref(false)

/**
 * 处理加载按钮点击
 */
const handleLoading = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
&lt;/script&gt;</code></pre>
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

      <div class="code-example">
        <h3>危险按钮</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XButton danger&gt;危险按钮&lt;/XButton&gt;
    &lt;XButton type="primary" danger&gt;危险主要&lt;/XButton&gt;
    &lt;XButton danger ghost&gt;危险幽灵&lt;/XButton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XButton from 'your-component-library/XButton/XButton.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 块级按钮 -->
    <section class="demo-section">
      <h2>块级按钮</h2>
      <div class="demo-col">
        <XButton type="primary" block>块级按钮</XButton>
        <XButton block>块级默认</XButton>
      </div>

      <div class="code-example">
        <h3>块级按钮</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XButton type="primary" block&gt;块级按钮&lt;/XButton&gt;
    &lt;XButton block&gt;块级默认&lt;/XButton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XButton from 'your-component-library/XButton/XButton.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 点击事件 -->
    <section class="demo-section">
      <h2>点击事件</h2>
      <div class="demo-row">
        <XButton type="primary" @click="handleClick">点击我</XButton>
      </div>
      <p class="demo-tip">点击次数: {{ clickCount }}</p>

      <div class="code-example">
        <h3>点击事件</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XButton type="primary" @click="handleClick"&gt;点击我&lt;/XButton&gt;
  &lt;/div&gt;
  &lt;p class="demo-tip"&gt;点击次数: {{ clickCount }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XButton from 'your-component-library/XButton/XButton.vue'

// 点击计数
const clickCount = ref(0)

/**
 * 处理点击事件
 */
const handleClick = () => {
  clickCount.value++
}
&lt;/script&gt;</code></pre>
      </div>
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
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}

.demo-col {
  width: 300px;
  margin-bottom: 20px;
}

.demo-tip {
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.65);
}

.code-example {
  margin-top: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;

  h3 {
    margin: 0;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    background-color: #fafafa;
    border-bottom: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.85);
  }

  pre {
    margin: 0;
    padding: 16px;
    background-color: #fafafa;
    overflow-x: auto;

    code {
      font-family: Menlo, Monaco, 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.6;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
</style>