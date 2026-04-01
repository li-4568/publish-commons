<template>
  <div class="ximagecropper-demo">
    <h1>XImageCropper 图片裁剪组件</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-desc">点击按钮上传图片，确认裁剪后会在控制台打印 base64 和 blob 数据</div>
      <div class="demo-row">
        <XImageCropper @crop="handleCrop" @cropblob="handleCropBlob" />
        <div class="result-box" v-if="cropResult">
          <h3>裁剪结果</h3>
          <img :src="cropResult" alt="裁剪结果" />
        </div>
      </div>

      <!-- 代码示例 -->
      <div class="code-block">
        <pre><code>&lt;template&gt;
  &lt;XImageCropper @crop="handleCrop" @cropblob="handleCropBlob" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleCrop = (data: string) =&gt; {
  console.log('Base64 数据长度:', data.length)
  // data 是裁剪后的 base64 图片数据
}

const handleCropBlob = (blob: Blob) =&gt; {
  console.log('Blob 数据大小:', blob.size, '类型:', blob.type)
  // blob 是裁剪后的 Blob 对象，可用于上传
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 自定义标题 -->
    <section class="demo-section">
      <h2>自定义标题</h2>
      <div class="demo-desc">自定义模态框标题</div>
      <div class="demo-row">
        <XImageCropper title="头像裁剪" @crop="handleCrop2" />
        <div class="result-box" v-if="cropResult2">
          <h3>裁剪结果</h3>
          <img :src="cropResult2" alt="裁剪结果" />
        </div>
      </div>

      <!-- 代码示例 -->
      <div class="code-block">
        <pre><code>&lt;XImageCropper title="头像裁剪" @crop="handleCrop" /&gt;</code></pre>
      </div>
    </section>

    <!-- 程序控制 -->
    <section class="demo-section">
      <h2>程序控制</h2>
      <div class="demo-desc">通过 ref 调用组件方法控制裁剪器</div>
      <div class="demo-row">
        <XImageCropper ref="cropperRef" @crop="handleCrop3" />
        <div class="control-panel">
          <button @click="rotateLeft">左旋转</button>
          <button @click="rotateRight">右旋转</button>
          <button @click="refresh">重置</button>
        </div>
        <div class="result-box" v-if="cropResult3">
          <h3>裁剪结果</h3>
          <img :src="cropResult3" alt="裁剪结果" />
        </div>
      </div>

      <!-- 代码示例 -->
      <div class="code-block">
        <pre><code>&lt;template&gt;
  &lt;XImageCropper ref="cropperRef" @crop="handleCrop" /&gt;
  &lt;button @click="rotateLeft"&gt;左旋转&lt;/button&gt;
  &lt;button @click="rotateRight"&gt;右旋转&lt;/button&gt;
  &lt;button @click="refresh"&gt;重置&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const cropperRef = ref()

const rotateLeft = () =&gt; cropperRef.value?.rotateLeft()
const rotateRight = () =&gt; cropperRef.value?.rotateRight()
const refresh = () =&gt; cropperRef.value?.refresh()
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- 控制台输出说明 -->
    <section class="demo-section">
      <h2>控制台输出</h2>
      <div class="demo-desc">点击确认裁剪后，控制台会输出以下信息：</div>
      <div class="code-block">
        <pre><code>// Base64 数据（前100个字符）
[XImageCropper] Base64 数据: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAABYlAAAWJQFJUUtw...

// Base64 数据长度
[XImageCropper] Base64 数据长度: 15234

// Blob 数据信息
[XImageCropper] Blob 数据: { size: 11445, type: 'image/png' }</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import XImageCropper from '../src/components/XImageCropper/XImageCropper.vue'

const cropResult = ref('')
const cropResult2 = ref('')
const cropResult3 = ref('')

const cropperRef = ref<InstanceType<typeof XImageCropper>>()

const handleCrop = (data: string) => {
  cropResult.value = data
  console.log('【Demo】裁剪成功 - base64长度:', data)
}

const handleCropBlob = (blob: Blob) => {
  console.log('【Demo】裁剪成功 - Blob:', { size: blob.size, type: blob.type })
}

const handleCrop2 = (data: string) => {
  cropResult2.value = data
}

const handleCrop3 = (data: string) => {
  cropResult3.value = data
}

const rotateLeft = () => (cropperRef.value as any)?.rotateLeft()
const rotateRight = () => (cropperRef.value as any)?.rotateRight()
const refresh = () => (cropperRef.value as any)?.refresh()
</script>

<style scoped>
.ximagecropper-demo {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  color: #303133;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #409eff;
}

h2 {
  color: #606266;
  margin-bottom: 10px;
  font-size: 18px;
}

h3 {
  color: #909399;
  margin-bottom: 10px;
  font-size: 14px;
}

.demo-section {
  margin-bottom: 40px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.demo-desc {
  color: #606266;
  font-size: 14px;
  margin-bottom: 15px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.result-box {
  padding: 15px;
  background: #f5f7fa;
  border-radius: 6px;
}

.result-box img {
  max-width: 200px;
  max-height: 200px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.control-panel {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.control-panel button {
  padding: 8px 16px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.3s;
}

.control-panel button:hover {
  background: #66b1ff;
}

.code-block {
  background: #f5f7fa;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 15px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 13px;
  color: #303133;
  line-height: 1.6;
}
</style>
