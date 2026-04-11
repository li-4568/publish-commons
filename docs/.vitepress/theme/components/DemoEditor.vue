<template>
  <div class="demo-editor">
    <div class="demo-block">
      <h4>基础用法</h4>
      <XEditor
        v-model="content1"
        placeholder="请输入内容..."
        height="200px"
      />
    </div>

    <div class="demo-block">
      <h4>只读模式</h4>
      <XEditor
        v-model="content2"
        :read-only="true"
        height="150px"
      />
    </div>

    <div class="demo-block">
      <h4>隐藏工具栏</h4>
      <XEditor
        v-model="content3"
        :toolbar="false"
        height="150px"
      />
    </div>

    <div class="demo-block">
      <h4>自定义高度</h4>
      <XEditor
        v-model="content4"
        height="300px"
        placeholder="这是一个高度为 300px 的编辑器"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

// 使用异步组件避免 SSR 问题
const XEditor = defineAsyncComponent(() => import('publish-commons').then(m => m.XEditor))

const content1 = ref('<p>欢迎使用 <b>XEditor</b> 富文本编辑器！</p><p>这是基础用法示例。</p>')
const content2 = ref('<p>这是只读模式的内容，<b>无法编辑</b>。</p><p>适用于展示场景。</p>')
const content3 = ref('<p>隐藏了工具栏的编辑器。</p><p>适用于简单的内容展示或受限编辑场景。</p>')
const content4 = ref('<p>自定义高度的编辑器。</p>')
</script>

<style scoped>
.demo-editor {
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

.demo-block:last-child {
  margin-bottom: 0;
}
</style>
