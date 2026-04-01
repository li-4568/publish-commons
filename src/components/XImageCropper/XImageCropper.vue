<template>
  <div class="XImageCropper">
    <button class="upload-btn" @click="openModalClick">上传图像</button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { LoadingOutlined } from '@ant-design/icons-vue'
import { openModal } from '../../utils/modal'
import CropperContent from './CropperContent.vue'
import type { XImageCropperProps, XImageCropperEmits } from './types'

const props = withDefaults(defineProps<XImageCropperProps>(), {
  title: '裁剪图片',
  mode: 'cover',
  outputType: 'png',
  canScale: true,
  canMove: true,
  canMoveBox: true,
  centerBox: true,
  infoTrue: true,
  limitMinSize: 10
})

const emit = defineEmits<XImageCropperEmits>()

// loading 图标
const indicator = h(LoadingOutlined, {
  style: { fontSize: '24px' },
  spin: true
})

// 打开模态框
const openModalClick = () => {
  let modalInstance: any = null

  modalInstance = openModal({
    title: props.title,
    width: 840,
    height: 'auto',
    maxHeight: '90vh',
    draggable: true,
    showFooter: true,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    component: CropperContent,
    componentProps: {
      ...props,
      indicator,
      onConfirm: () => {
        modalInstance?.close()
      },
      onCrop: (data: string) => {
        emit('crop', data)
      },
      onCropblob: (data: Blob) => {
        emit('cropblob', data)
      }
    },
    onConfirm: () => {
      console.log('[XImageCropper] 确认按钮被点击')
      console.log('[XImageCropper] modalInstance:', modalInstance)
      console.log('[XImageCropper] componentRef:', modalInstance?.componentRef)
      modalInstance?.componentRef?.confirmCrop()
    }
  })
}

// 暴露方法
defineExpose({
  openModal: openModalClick
})
</script>

<style scoped>
.XImageCropper {
  width: 100%;
  height: 100%;
}

.upload-btn {
  padding: 8px 16px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.upload-btn:hover {
  background-color: #66b1ff;
}
</style>
