<template>
  <div class="demo-image-cropper">
    <div class="demo-block">
      <h4>基础用法</h4>
      <div class="demo-row">
        <XImageCropper
          title="裁剪图片"
          mode="cover"
          output-type="png"
          @crop="handleCrop"
          @cropblob="handleCropBlob"
        />
      </div>
      <p class="demo-desc">点击按钮打开图片裁剪对话框</p>
    </div>

    <div class="demo-block">
      <h4>裁剪预览</h4>
      <div v-if="croppedImage" class="preview-box">
        <img :src="croppedImage" alt="裁剪结果" />
      </div>
      <p v-else class="demo-desc">裁剪后的图片将显示在这里</p>
    </div>

    <div class="demo-block">
      <h4>组件说明</h4>
      <ul class="feature-list">
        <li>支持图片上传和裁剪</li>
        <li>支持缩放、旋转、移动</li>
        <li>支持自定义裁剪框大小</li>
        <li>支持输出为 base64 或 Blob</li>
        <li>基于 vue-cropper 封装</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XImageCropper } from 'publish-commons'

const croppedImage = ref('')

const handleCrop = (data) => {
  console.log('裁剪结果(base64):', data)
  croppedImage.value = data
}

const handleCropBlob = (blob) => {
  console.log('裁剪结果(blob):', blob)
}
</script>

<style scoped>
.demo-image-cropper {
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

.demo-desc {
  margin: 12px 0 0 0;
  color: #666;
  font-size: 13px;
}

.preview-box {
  width: 200px;
  height: 200px;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.preview-box img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.feature-list {
  margin: 0;
  padding-left: 20px;
  color: #666;
  font-size: 13px;
  line-height: 2;
}

.feature-list li {
  margin-bottom: 4px;
}

.demo-block:last-child {
  margin-bottom: 0;
}
</style>
