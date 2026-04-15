# Preview 文件预览

`publish-commons` 提供了文件预览工具函数，支持图片、PDF、Word、Excel、视频、音频等多种文件格式的预览。

## 引入

```typescript
import { previewFile, downloadFile, printFile } from 'publish-commons'
```

## 基础用法

### 预览单个文件

```typescript
import { previewFile } from 'publish-commons'

const file = {
  name: 'document.pdf',
  url: 'https://example.com/files/document.pdf'
}

// 点击预览
const handlePreview = () => {
  previewFile(file)
}
```

### 预览多个文件

```typescript
const fileList = [
  { name: 'image1.jpg', url: 'https://example.com/files/image1.jpg' },
  { name: 'image2.png', url: 'https://example.com/files/image2.png' },
  { name: 'document.pdf', url: 'https://example.com/files/document.pdf' }
]

// 传入数组会打开多文件预览弹窗
const handlePreview = () => {
  previewFile(fileList)
}
```

## 完整示例

### 文件列表组件

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { previewFile, downloadFile, printFile } from 'publish-commons'
import { message } from 'ant-design-vue'

interface FileItem {
  id: string
  name: string
  url: string
  size?: number
  uploadTime?: string
}

const props = defineProps<{
  files: FileItem[]
}>()

// 获取文件图标
const getFileIcon = (fileName: string): string => {
  const ext = fileName.slice(fileName.lastIndexOf('.')).toLowerCase()
  const iconMap: Record<string, string> = {
    '.pdf': '📄',
    '.doc': '📝',
    '.docx': '📝',
    '.xls': '📊',
    '.xlsx': '📊',
    '.ppt': '📽️',
    '.pptx': '📽️',
    '.jpg': '🖼️',
    '.jpeg': '🖼️',
    '.png': '🖼️',
    '.gif': '🖼️',
    '.mp4': '🎬',
    '.avi': '🎬',
    '.mp3': '🎵',
    '.wav': '🎵',
    '.zip': '📦',
    '.rar': '📦',
    '.txt': '📃'
  }
  return iconMap[ext] || '📎'
}

// 判断是否可打印
const isPrintable = (fileName: string): boolean => {
  const printableExts = ['.pdf', '.png', '.jpg', '.jpeg', '.gif', '.txt']
  const ext = fileName.slice(fileName.lastIndexOf('.')).toLowerCase()
  return printableExts.includes(ext)
}

// 格式化文件大小
const formatSize = (bytes?: number): string => {
  if (!bytes) return '-'
  if (bytes >= 1024 * 1024) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB'
  }
  return (bytes / 1024).toFixed(2) + ' KB'
}

// 预览文件
const handlePreview = (file: FileItem) => {
  previewFile(file)
}

// 下载文件
const handleDownload = (file: FileItem) => {
  downloadFile(file)
  message.success('开始下载')
}

// 打印文件
const handlePrint = (file: FileItem) => {
  if (!isPrintable(file.name)) {
    message.warning('该文件类型暂不支持打印')
    return
  }
  printFile(file)
}

// 预览全部
const handlePreviewAll = () => {
  if (props.files.length === 0) {
    message.warning('暂无文件')
    return
  }
  previewFile(props.files)
}
</script>

<template>
  <div class="file-list">
    <div class="file-list-header">
      <span class="title">附件列表 ({{ files.length }})</span>
      <a-button type="link" size="small" @click="handlePreviewAll">
        预览全部
      </a-button>
    </div>
    
    <div class="file-items">
      <div
        v-for="file in files"
        :key="file.id"
        class="file-item"
        @click="handlePreview(file)"
      >
        <span class="file-icon">{{ getFileIcon(file.name) }}</span>
        <div class="file-info">
          <span class="file-name" :title="file.name">{{ file.name }}</span>
          <span class="file-meta">{{ formatSize(file.size) }}</span>
        </div>
        <div class="file-actions" @click.stop>
          <a-button type="text" size="small" @click="handleDownload(file)">
            下载
          </a-button>
          <a-button
            v-if="isPrintable(file.name)"
            type="text"
            size="small"
            @click="handlePrint(file)"
          >
            打印
          </a-button>
        </div>
      </div>
    </div>
    
    <div v-if="files.length === 0" class="empty">
      暂无附件
    </div>
  </div>
</template>

<style scoped>
.file-list {
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 16px;
}

.file-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
}

.title {
  font-weight: 500;
}

.file-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.file-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #fafafa;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.file-item:hover {
  background: #f0f0f0;
}

.file-icon {
  font-size: 24px;
  margin-right: 12px;
}

.file-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.file-name {
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-meta {
  font-size: 12px;
  color: #999;
}

.file-actions {
  display: flex;
  gap: 8px;
}

.empty {
  text-align: center;
  color: #999;
  padding: 24px 0;
}
</style>
```

### 在表单中使用

```vue
<script setup lang="ts">
import { reactive } from 'vue'
import { previewFile, downloadFile } from 'publish-commons'
import { message } from 'ant-design-vue'

const formState = reactive({
  contractFile: null as FileItem | null
})

// 上传成功后
const handleUploadSuccess = (file: FileItem) => {
  formState.contractFile = file
  message.success('上传成功')
}

// 预览合同
const handlePreviewContract = () => {
  if (!formState.contractFile) {
    message.warning('请先上传合同文件')
    return
  }
  previewFile(formState.contractFile)
}
</script>

<template>
  <a-form>
    <a-form-item label="合同文件">
      <div v-if="formState.contractFile" class="file-preview">
        <span>📄 {{ formState.contractFile.name }}</span>
        <a-space>
          <a-button type="link" @click="handlePreviewContract">
            预览
          </a-button>
          <a-button type="link" @click="downloadFile(formState.contractFile)">
            下载
          </a-button>
        </a-space>
      </div>
      <a-upload v-else @success="handleUploadSuccess">
        <a-button>上传合同</a-button>
      </a-upload>
    </a-form-item>
  </a-form>
</template>

<style scoped>
.file-preview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 4px;
}
</style>
```

## 支持的文件类型

| 文件类型 | 扩展名 | 预览方式 |
|---------|--------|---------|
| 图片 | .jpg, .jpeg, .png, .gif, .svg, .bmp, .webp | 图片查看器 |
| PDF | .pdf | 新窗口打开 |
| Word | .doc, .docx | 内置 Office 预览 |
| Excel | .xls, .xlsx | 内置 Office 预览 |
| 视频 | .mp4, .avi, .rmvb, .webm | 媒体播放器弹窗 |
| 音频 | .mp3, .wav, .ogg | 媒体播放器弹窗 |
| 文本 | .txt | 新窗口打开 |

## API 参考

### previewFile

预览文件函数。

```typescript
function previewFile(fileList: FileItem | FileItem[]): Promise<void>
```

**参数：**

| 参数 | 类型 | 说明 |
|-----|------|------|
| fileList | FileItem \| FileItem[] | 单个文件对象或文件数组 |

**FileItem 结构：**

```typescript
interface FileItem {
  name: string        // 文件名
  url: string         // 文件URL
  size?: number       // 文件大小（字节）
  originalFilename?: string  // 原始文件名（兼容字段）
}
```

### downloadFile

下载文件函数。

```typescript
function downloadFile(file: FileItem): void
```

### printFile

打印文件函数（仅支持图片和 PDF）。

```typescript
function printFile(file: FileItem): void
```

## 进阶用法

### 自定义预览组件

如果需要自定义特定文件的预览方式，可以直接使用 `openModal`：

```typescript
import { openModal } from 'publish-commons'
import CustomPreview from './CustomPreview.vue'

const handleCustomPreview = (file: FileItem) => {
  openModal({
    component: CustomPreview,
    title: file.name,
    width: '90%',
    height: '90%',
    showFooter: false,
    componentProps: {
      fileUrl: file.url
    }
  })
}
```

### 批量下载

```typescript
import { downloadFile } from 'publish-commons'

const handleBatchDownload = (files: FileItem[]) => {
  files.forEach((file, index) => {
    // 延迟下载避免浏览器拦截
    setTimeout(() => {
      downloadFile(file)
    }, index * 500)
  })
}
```
