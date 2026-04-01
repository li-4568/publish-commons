<template>
  <div class="xeditor-demo">
    <h1>XEditor 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XEditor v-model="content1" placeholder="请输入内容..." />
      </div>
      <p class="demo-value">编辑器内容: {{ content1 }}</p>
      
      <div class="code-example">
        <h3>基础用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XEditor v-model="content1" placeholder="请输入内容..." /&gt;
  &lt;/div&gt;
  &lt;p class="demo-value"&gt;编辑器内容: {{ content1 }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XEditor from 'your-component-library/XEditor/XEditor.vue'

const content1 = ref('&lt;p&gt;Hello, XEditor!&lt;/p&gt;')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 自定义尺寸 -->
    <section class="demo-section">
      <h2>自定义尺寸</h2>
      <div class="demo-col">
        <XEditor v-model="content2" height="300px" placeholder="高度300px" />
        <XEditor v-model="content3" height="400px" placeholder="高度400px" />
        <XEditor v-model="content4" height="350px" width="600px" placeholder="高度350px，宽度600px" />
      </div>
      
      <div class="code-example">
        <h3>自定义尺寸</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XEditor v-model="content2" height="300px" placeholder="高度300px" /&gt;
    &lt;XEditor v-model="content3" height="400px" placeholder="高度400px" /&gt;
    &lt;XEditor v-model="content4" height="500px" width="600px" placeholder="高度500px，宽度600px" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XEditor from 'your-component-library/XEditor/XEditor.vue'

const content2 = ref('')
const content3 = ref('')
const content4 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 只读模式 -->
    <section class="demo-section">
      <h2>只读模式</h2>
      <div class="demo-col">
        <XEditor v-model="content5" readOnly placeholder="只读模式" />
      </div>
      
      <div class="code-example">
        <h3>只读模式</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XEditor v-model="content5" readOnly placeholder="只读模式" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XEditor from 'your-component-library/XEditor/XEditor.vue'

const content5 = ref('&lt;p&gt;这是只读内容，不能编辑。&lt;/p&gt;')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 自定义工具栏 -->
    <section class="demo-section">
      <h2>自定义工具栏</h2>
      <div class="demo-col">
        <h3>简化工具栏</h3>
        <XEditor 
          v-model="content7" 
          :toolbar="['bold', 'italic', 'underline', 'insertLink']" 
          placeholder="简化的工具栏" 
        />
        
        <h3>隐藏工具栏</h3>
        <XEditor v-model="content8" :toolbar="false" placeholder="没有工具栏" />
        
        <h3>详细工具栏配置</h3>
        <XEditor 
          v-model="content12" 
          :toolbar="{
            toolbarKeys: ['bold', 'italic', 'underline', 'insertLink', 'color', 'bgColor'],
            excludeKeys: ['fontSize', 'lineHeight']
          }" 
          placeholder="自定义工具栏按钮和排除项" 
        />
      </div>
      
      <div class="code-example">
        <h3>自定义工具栏</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;简化工具栏&lt;/h3&gt;
    &lt;XEditor 
      v-model="content7" 
      :toolbar="['bold', 'italic', 'underline', 'insertLink', 'orderedList', 'unorderedList']" 
      placeholder="简化的工具栏" 
    /&gt;
    
    &lt;h3&gt;隐藏工具栏&lt;/h3&gt;
    &lt;XEditor v-model="content8" :toolbar="false" placeholder="没有工具栏" /&gt;
    
    &lt;h3&gt;详细工具栏配置&lt;/h3&gt;
    &lt;XEditor 
      v-model="content12" 
      :toolbar="{
        toolbarKeys: ['bold', 'italic', 'underline', 'insertLink', 'color', 'bgColor'],
        excludeKeys: ['fontSize', 'lineHeight']
      }" 
      placeholder="自定义工具栏按钮和排除项" 
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XEditor from 'your-component-library/XEditor/XEditor.vue'

const content7 = ref('')
const content8 = ref('')
const content12 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 事件监听 -->
    <section class="demo-section">
      <h2>事件监听</h2>
      <div class="demo-col">
        <XEditor 
          v-model="content9" 
          @focus="handleFocus" 
          @blur="handleBlur" 
          @change="handleChange" 
          placeholder="监听各种事件（事件信息将在控制台打印）" 
        />
      </div>
      
      <div class="code-example">
        <h3>事件监听</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;XEditor 
      v-model="content9" 
      @focus="handleFocus" 
      @blur="handleBlur" 
      @change="handleChange" 
      placeholder="监听各种事件（事件信息将在控制台打印）" 
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XEditor from 'your-component-library/XEditor/XEditor.vue'

const content9 = ref('')

/**
 * 处理聚焦事件
 */
const handleFocus = () => {
  console.log('编辑器获得焦点')
}

/**
 * 处理失焦事件
 */
const handleBlur = () => {
  console.log('编辑器失去焦点')
}

/**
 * 处理内容变化事件
 */
const handleChange = (content: string) => {
  console.log(`内容变化，当前长度: ${content.length} 字符`)
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 使用实例方法 -->
    <section class="demo-section">
      <h2>使用实例方法</h2>
      <div>
        <XEditor ref="editorRef" v-model="content10" placeholder="使用实例方法操作编辑器" />
        <div class="demo-row">
          <XButton type="primary" @click="handleGetContent">获取内容</XButton>
          <XButton @click="handleSetContent">设置内容</XButton>
          <XButton @click="handleFocusEditor">聚焦</XButton>
          <XButton @click="handleClear">清空</XButton>
        </div>
      </div>
      
      <div class="code-example">
        <h3>使用实例方法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;XEditor ref="editorRef" v-model="content10" placeholder="使用实例方法操作编辑器" /&gt;
    &lt;div class="demo-row"&gt;
      &lt;XButton type="primary" @click="handleGetContent"&gt;获取内容&lt;/XButton&gt;
      &lt;XButton @click="handleSetContent"&gt;设置内容&lt;/XButton&gt;
      &lt;XButton @click="handleFocusEditor"&gt;聚焦&lt;/XButton&gt;
      &lt;XButton @click="handleClear"&gt;清空&lt;/XButton&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XEditor from 'your-component-library/XEditor/XEditor.vue'
import XButton from 'your-component-library/XButton/XButton.vue'

const content10 = ref('')

/**
 * 获取编辑器内容
 */
const handleGetContent = () => {
  if (editorRef.value) {
    const content = (editorRef.value as any).getContent()
    console.log(`获取到内容: ${content}`)
  }
}

/**
 * 设置编辑器内容
 */
const handleSetContent = () => {
  if (editorRef.value) {
    (editorRef.value as any).setContent('<p>通过实例方法设置的内容</p><p>支持HTML格式</p>')
    console.log('已设置新内容')
  }
}

/**
 * 聚焦编辑器
 */
const handleFocusEditor = () => {
  if (editorRef.value) {
    (editorRef.value as any).focus()
    console.log('编辑器已聚焦')
  }
}

/**
 * 清空编辑器
 */
const handleClear = () => {
  if (editorRef.value) {
    (editorRef.value as any).clear()
    console.log('编辑器已清空')
  }
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 自定义配置 -->
    <section class="demo-section">
      <h2>自定义配置</h2>
      <div class="demo-col">
        <h3>自定义菜单配置</h3>
        <XEditor 
          v-model="content11" 
          :menuConfig="{
            fontSize: {
              options: ['12px', '14px', '16px', '18px', '20px', '24px', '32px'],
              default: '14px'
            }
          }" 
          placeholder="自定义字体大小选项" 
        />
      </div>
      
      <div class="code-example">
        <h3>自定义配置</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-col"&gt;
    &lt;h3&gt;自定义菜单配置&lt;/h3&gt;
    &lt;XEditor 
      v-model="content11" 
      :menuConfig="{
        fontSize: {
          options: ['12px', '14px', '16px', '18px', '20px', '24px', '32px'],
          default: '14px'
        }
      }" 
      placeholder="自定义字体大小选项" 
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XEditor from 'your-component-library/XEditor/XEditor.vue'

const content11 = ref('')
&lt;/script&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  /**
   * XEditor 组件使用示例
   */
  import { ref } from 'vue'
  import XEditor from '../src/components/XEditor/XEditor.vue'
  import XButton from '../src/components/XButton/XButton.vue'

  // 基础用法
  const content1 = ref('<p>Hello, XEditor!</p>')

  // 自定义尺寸
  const content2 = ref('')
  const content3 = ref('')
  const content4 = ref('')

  // 只读模式
  const content5 = ref('<p>这是只读内容，不能编辑。</p>')

  // 自定义工具栏
  const content7 = ref('')
  const content8 = ref('')
  // 详细工具栏配置
  const content12 = ref('')

  // 事件监听
  const content9 = ref('')

  // 实例方法
  const content10 = ref('')
  const editorRef = ref<InstanceType<typeof XEditor> | null>(null)

  // 自定义配置
  const content11 = ref('')



  /**
   * 处理聚焦事件
   */
  const handleFocus = () => {
    console.log('编辑器获得焦点')
  }

  /**
   * 处理失焦事件
   */
  const handleBlur = () => {
    console.log('编辑器失去焦点')
  }

  /**
   * 处理内容变化事件
   */
  const handleChange = (content: string) => {
    console.log(`内容变化，当前长度: ${content.length} 字符`)
  }

  /**
   * 获取编辑器内容
   */
  const handleGetContent = () => {
    if (editorRef.value) {
      const content = (editorRef.value as any).getContent()
      console.log(`获取到内容: ${content}`)
    }
  }

  /**
   * 设置编辑器内容
   */
  const handleSetContent = () => {
    if (editorRef.value) {
      (editorRef.value as any).setContent('<p>通过实例方法设置的内容</p><p>支持HTML格式</p>')
      console.log('已设置新内容')
    }
  }

  /**
   * 聚焦编辑器
   */
  const handleFocusEditor = () => {
    if (editorRef.value) {
      (editorRef.value as any).focus()
      console.log('编辑器已聚焦')
    }
  }

  /**
   * 清空编辑器
   */
  const handleClear = () => {
    if (editorRef.value) {
      (editorRef.value as any).clear()
      console.log('编辑器已清空')
    }
  }
</script>

<style scoped lang="less">
  .xeditor-demo {
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

    :deep(.ant-btn) {
      margin-bottom: 10px;
    }
  }

  .demo-col {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .demo-value {
    margin-top: 8px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }

  .event-log {
    margin-top: 16px;
    padding: 12px;
    background: #f5f5f5;
    border-radius: 6px;
    min-height: 100px;

    p {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 1.8;
      font-family: monospace;
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
