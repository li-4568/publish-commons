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
      
      <div class="code-example">
        <h3>基本用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 基础提示，通过title属性设置提示内容 --&gt;
    &lt;XTooltip title="这是一个简单的提示"&gt;
      &lt;Button type="primary"&gt;基本提示&lt;/Button&gt;
    &lt;/XTooltip&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { Button } from 'ant-design-vue'
import XTooltip from 'your-component-library/XTooltip/XTooltip.vue'
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>不同触发方式</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 通过trigger属性设置不同的触发方式 --&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;悬停&lt;/h3&gt;
      &lt;XTooltip title="悬停触发" trigger="hover"&gt;
        &lt;Button&gt;悬停触发&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;点击&lt;/h3&gt;
      &lt;XTooltip title="点击触发" trigger="click"&gt;
        &lt;Button&gt;点击触发&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;聚焦&lt;/h3&gt;
      &lt;XTooltip title="聚焦触发" trigger="focus"&gt;
        &lt;Button&gt;聚焦触发&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;右键&lt;/h3&gt;
      &lt;XTooltip title="右键触发" trigger="contextmenu"&gt;
        &lt;Button&gt;右键触发&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { Button } from 'ant-design-vue'
import XTooltip from 'your-component-library/XTooltip/XTooltip.vue'
&lt;/script&gt;

&lt;style scoped&gt;
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
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>不同位置</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 基本位置 --&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;上&lt;/h3&gt;
      &lt;XTooltip title="顶部提示" placement="top"&gt;
        &lt;Button&gt;顶部提示&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;下&lt;/h3&gt;
      &lt;XTooltip title="底部提示" placement="bottom"&gt;
        &lt;Button&gt;底部提示&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;左&lt;/h3&gt;
      &lt;XTooltip title="左侧提示" placement="left"&gt;
        &lt;Button&gt;左侧提示&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;右&lt;/h3&gt;
      &lt;XTooltip title="右侧提示" placement="right"&gt;
        &lt;Button&gt;右侧提示&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 边角位置 --&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;左上&lt;/h3&gt;
      &lt;XTooltip title="左上提示" placement="topLeft"&gt;
        &lt;Button&gt;左上提示&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;右上&lt;/h3&gt;
      &lt;XTooltip title="右上提示" placement="topRight"&gt;
        &lt;Button&gt;右上提示&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;左下&lt;/h3&gt;
      &lt;XTooltip title="左下提示" placement="bottomLeft"&gt;
        &lt;Button&gt;左下提示&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;右下&lt;/h3&gt;
      &lt;XTooltip title="右下提示" placement="bottomRight"&gt;
        &lt;Button&gt;右下提示&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { Button } from 'ant-design-vue'
import XTooltip from 'your-component-library/XTooltip/XTooltip.vue'
&lt;/script&gt;

&lt;style scoped&gt;
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
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>HTML内容</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用html-title属性设置HTML格式的提示内容 --&gt;
    &lt;XTooltip :html-title="htmlContent"&gt;
      &lt;Button type="primary"&gt;HTML内容&lt;/Button&gt;
    &lt;/XTooltip&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import XTooltip from 'your-component-library/XTooltip/XTooltip.vue'

// HTML格式的提示内容
const htmlContent = '&lt;div style="color: #1890ff;"&gt;&lt;b&gt;加粗&lt;/b&gt; &lt;i&gt;斜体&lt;/i&gt; &lt;u&gt;下划线&lt;/u&gt;&lt;/div&gt;'
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>插槽内容</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用title插槽自定义提示内容 --&gt;
    &lt;XTooltip&gt;
      &lt;template #title&gt;
        &lt;div style="color: #1890ff; font-weight: bold;"&gt;
          &lt;p&gt;自定义标题&lt;/p&gt;
          &lt;p&gt;这是通过插槽自定义的内容&lt;/p&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;Button type="primary"&gt;插槽内容&lt;/Button&gt;
    &lt;/XTooltip&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { Button } from 'ant-design-vue'
import XTooltip from 'your-component-library/XTooltip/XTooltip.vue'
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>控制可见性</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用v-model:modelValue控制提示的显示与隐藏 --&gt;
    &lt;XTooltip v-model:modelValue="visible" title="受控提示"&gt;
      &lt;Button type="primary"&gt;受控提示&lt;/Button&gt;
    &lt;/XTooltip&gt;
    &lt;Button type="dashed" @click="visible = !visible" style="margin-left: 10px;"&gt;
      {{ visible ? '隐藏' : '显示' }}
    &lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import XTooltip from 'your-component-library/XTooltip/XTooltip.vue'

// 控制提示可见性的状态
const visible = ref(false)
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>禁用状态</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用disabled属性禁用提示功能 --&gt;
    &lt;XTooltip content="禁用的提示" disabled&gt;
      &lt;Button disabled&gt;禁用状态&lt;/Button&gt;
    &lt;/XTooltip&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { Button } from 'ant-design-vue'
import XTooltip from 'your-component-library/XTooltip/XTooltip.vue'
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>延迟显示</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用open-delay和close-delay属性设置延迟时间(单位：毫秒) --&gt;
    &lt;XTooltip title="延迟显示的提示" :open-delay="1000" :close-delay="500"&gt;
      &lt;Button type="primary"&gt;延迟显示(1秒)&lt;/Button&gt;
    &lt;/XTooltip&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { Button } from 'ant-design-vue'
import XTooltip from 'your-component-library/XTooltip/XTooltip.vue'
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
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
      
      <div class="code-example">
        <h3>自动调整溢出</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;启用&lt;/h3&gt;
      &lt;!-- 启用自动调整溢出 --&gt;
      &lt;XTooltip 
        title="提示会自动调整位置以避免溢出" 
        placement="top" 
        :auto-adjust-overflow="true"
      &gt;
        &lt;Button type="primary"&gt;启用自动调整&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;禁用&lt;/h3&gt;
      &lt;!-- 禁用自动调整溢出 --&gt;
      &lt;XTooltip 
        title="提示不会自动调整位置" 
        placement="top" 
        :auto-adjust-overflow="false"
      &gt;
        &lt;Button type="primary"&gt;禁用自动调整&lt;/Button&gt;
      &lt;/XTooltip&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { Button } from 'ant-design-vue'
import XTooltip from 'your-component-library/XTooltip/XTooltip.vue'
&lt;/script&gt;

&lt;style scoped&gt;
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
&lt;/style&gt;</code></pre>
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