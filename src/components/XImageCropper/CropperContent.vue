<template>
  <div class="cropper-container">
    <div class="cropper-con">
      <!-- 左侧裁剪区域 -->
      <div class="cropper-left">
        <div class="cropper-image">
          <vue-cropper
            ref="cropperRef"
            :img="imageSrc"
            :mode="mode"
            :outputType="outputType"
            :canScale="canScale"
            :canMove="canMove"
            :canMoveBox="canMoveBox"
            :centerBox="centerBox"
            :infoTrue="infoTrue"
            :limitMinSize="limitMinSize"
            :autoCrop="true"
            @real-time="realTime"
          />
        </div>
        <div class="cropper-btn">
          <label class="file-btn" for="uploads">选择图片</label>
          <input
            type="file"
            id="uploads"
            class="file-input"
            accept="image/png, image/jpeg, image/jpg"
            @change="selectImage"
          />
          <button class="control-btn" @click="cropClick('refresh')">重置</button>
          <button class="control-btn" @click="cropClick('left')">左旋转</button>
          <button class="control-btn" @click="cropClick('right')">右旋转</button>
        </div>
      </div>

      <!-- 右侧预览区域 -->
      <div class="cropper-right">
        <div class="right-title">
          <div class="title-switch">实时预览：</div>
          <button v-if="previewImage.url" class="shape-btn" @click="switchPreview">
            切换图形
          </button>
        </div>
        <div class="preview-box" :style="{ borderRadius: switchRadius, ...previewStyle }">
          <img
            v-if="previewImage.url"
            :src="previewImage.url"
            :style="previewImage.img"
            alt="预览图片"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueCropper } from 'vue-cropper'
import 'vue-cropper/dist/index.css'

// Props
const props = defineProps<{
  title?: string
  mode?: 'cover' | 'contain'
  outputType?: 'jpeg' | 'png' | 'webp'
  canScale?: boolean
  canMove?: boolean
  canMoveBox?: boolean
  centerBox?: boolean
  infoTrue?: boolean
  limitMinSize?: number
  indicator?: any
  onConfirm?: () => void
  onCrop?: (data: string) => void
  onCropblob?: (data: Blob) => void
}>()

const cropperRef = ref<any>()
const isSwitch = ref(true)
const switchRadius = ref('')
const imageSrc = ref('')
const previewImage = ref<any>({})
const previewStyle = ref<any>({})

// 切换图形
const switchPreview = () => {
  isSwitch.value = !isSwitch.value
  switchRadius.value = isSwitch.value ? '4px' : '50%'
}

// 选择图片
const selectImage = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (!target.files || target.files.length === 0) return

  const file = target.files[0]

  // 图片类型验证
  if (!/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/.test(target.value)) {
    console.warn('图片类型要求：jpeg, jpg, png')
    return
  }

  // 转化为blob
  const reader = new FileReader()
  reader.onload = (e) => {
    let data
    if (typeof e.target?.result === 'object' && e.target.result !== null) {
      data = window.URL.createObjectURL(new Blob([e.target.result]))
    } else {
      data = e.target?.result as string
    }
    imageSrc.value = data || ''
  }
  // 转化为base64
  reader.readAsDataURL(file)

  // 重置文件输入
  target.value = ''
}

// 实时预览
const realTime = (data: any) => {
  previewStyle.value = {
    width: data.w + 'px',
    height: data.h + 'px',
    overflow: 'hidden',
    marginLeft: '40px',
    border: '1px solid #cecece'
  }
  previewImage.value = data
}

// 旋转
const cropClick = (type: string) => {
  if (type === 'left') {
    cropperRef.value?.rotateLeft()
  } else if (type === 'right') {
    cropperRef.value?.rotateRight()
  } else if (type === 'refresh') {
    cropperRef.value?.refresh()
  }
}

// 确认裁剪
const confirmCrop = () => {
  console.log('[XImageCropper] confirmCrop 被调用')
  console.log('[XImageCropper] cropperRef:', cropperRef.value)
  // base64 数据
  cropperRef.value?.getCropData((data: string) => {
    console.log('[XImageCropper] Base64 数据:', data.substring(0, 100) + '...')
    console.log('[XImageCropper] Base64 数据长度:', data.length)
    props.onCrop?.(data)
  })
  // blob 数据
  cropperRef.value?.getCropBlob((data: Blob) => {
    console.log('[XImageCropper] Blob 数据:', {
      size: data.size,
      type: data.type
    })
    props.onCropblob?.(data)
    props.onConfirm?.()
  })
}

// 暴露方法
defineExpose({
  confirmCrop,
  rotateLeft: () => cropperRef.value?.rotateLeft(),
  rotateRight: () => cropperRef.value?.rotateRight(),
  refresh: () => cropperRef.value?.refresh(),
  switchPreview
})
</script>

<style scoped>
.cropper-con {
  width: 840px;
  display: flex;
}

.cropper-left {
  width: 400px;
  padding: 10px;
}

.cropper-right {
  width: 400px;
}

.cropper-image {
  width: 400px;
  height: 400px;
  background-color: #f5f5f5;
  background-image:
    linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

.cropper-btn {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.file-btn {
  outline: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  font-weight: 500;
  padding: 8px 15px;
  font-size: 12px;
  border-radius: 3px;
  color: #fff;
  background-color: #409eff;
  border: 1px solid #409eff;
  margin-right: 10px;
}

.file-btn:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

.file-input {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  border: 0;
  opacity: 0;
}

.control-btn {
  padding: 6px 12px;
  background-color: #f5f7fa;
  color: #606266;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.control-btn:hover {
  background-color: #e6f7ff;
  color: #409eff;
  border-color: #91d5ff;
}

.right-title {
  margin: 6px 0 10px 10px;
  display: flex;
}

.title-switch {
  flex: 1;
  font-weight: 500;
  color: #303133;
}

.shape-btn {
  padding: 4px 12px;
  background-color: #f5f7fa;
  color: #606266;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
}

.shape-btn:hover {
  background-color: #ecf5ff;
  color: #409eff;
  border-color: #c6e2ff;
}

.preview-box {
  overflow: hidden;
  margin-left: 40px;
}

@media (max-width: 768px) {
  .cropper-con {
    flex-direction: column;
    width: 100%;
  }

  .cropper-left,
  .cropper-right {
    width: 100%;
  }

  .cropper-image {
    width: 100%;
    height: 300px;
  }
}
</style>
