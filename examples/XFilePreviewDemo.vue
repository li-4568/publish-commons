<template>
  <div class="x-file-preview-demo">
    <h2>文件预览示例</h2>
    
    <div class="demo-section">
      <h3>单文件预览</h3>
      <div class="button-group">
        <XButton type="primary" @click="previewImage">预览图片</XButton>
        <XButton type="primary" @click="previewVideo">预览视频</XButton>
        <XButton type="primary" @click="previewPdf">预览PDF</XButton>
        <XButton type="primary" @click="previewExcel">预览Excel</XButton>
        <XButton type="primary" @click="previewWord">预览Word</XButton>
      </div>
    </div>
    
    <div class="demo-section">
      <h3>多文件预览</h3>
      <XButton type="primary" @click="previewMultipleFiles">预览多个文件</XButton>
    </div>
    
    <div class="demo-section">
      <h3>文件下载</h3>
      <XButton type="primary" @click="handleDownloadFile">下载文件</XButton>
    </div>
    
    <div class="demo-section">
      <h3>文件打印</h3>
      <XButton type="primary" @click="handlePrintFile">打印文件</XButton>
    </div>
    
    <div class="demo-section">
      <h3>示例代码</h3>
      <div class="code-block">
        <h4>导入方法</h4>
        <pre><code>import { previewFile, downloadFile, printFile } from 'publish-commons';</code></pre>
        
        <h4>预览单个文件</h4>
        <pre><code>const file = {
  name: 'example.jpg',
  url: 'https://example.com/images/example.jpg',
  bytes: 1024000,
  uploadUserName: '张三',
  uploadTime: '2023-01-01 12:00:00'
};

previewFile(file);</code></pre>
        
        <h4>预览多个文件</h4>
        <pre><code>const files = [
  {
    name: 'image.jpg',
    url: 'https://example.com/images/image.jpg'
  },
  {
    name: 'video.mp4',
    url: 'https://example.com/videos/video.mp4'
  }
];

previewFile(files);</code></pre>
        
        <h4>下载文件</h4>
        <pre><code>downloadFile({
  name: 'example.pdf',
  url: 'https://example.com/files/example.pdf'
});</code></pre>
        
        <h4>打印文件</h4>
        <pre><code>printFile({
  name: 'example.pdf',
  url: 'https://example.com/files/example.pdf'
});</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { previewFile, downloadFile, printFile, XButton } from '../src';

// 模拟文件数据
const mockFiles = {
  image: {
    name: '8vlxVrUMw4.jpg',
    url: 'https://micgenerp-public.oss-cn-hangzhou.aliyuncs.com/测试文件/8vlxVrUMw4.jpg',
    bytes: 1024000,
    uploadUserName: '张三',
    uploadTime: '2023-01-01 12:00:00'
  },
  video: {
    name: 'motionplace.mp4',
    url: 'https://micgenerp-public.oss-cn-hangzhou.aliyuncs.com/测试文件/motionplace.mp4',
    bytes: 10240000,
    uploadUserName: '李四',
    uploadTime: '2023-01-02 13:00:00'
  },
  pdf: {
    name: 'example.pdf',
    url: 'https://micgenerp-public.oss-cn-hangzhou.aliyuncs.com/测试文件/希航光电.pdf',
    bytes: 512000,
    uploadUserName: '王五',
    uploadTime: '2023-01-03 14:00:00'
  },
  excel: {
    name: 'example.xlsx',
    url: 'https://test-micgenerp-enterprise-storage-space.oss-cn-hangzhou.aliyuncs.com/uploads/%E5%8E%86%E5%8F%B2%E9%94%80%E5%94%AE%E6%95%B0%E6%8D%AE%E6%89%B9%E9%87%8F%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF%20%282%29-42324dda34cd4a44826c2a50f13387b3.xls?Expires=1758079992&OSSAccessKeyId=LTAI5tR48AvzX7p8v8PxhgQA&Signature=TP2xKJiZMT4CaXfIGNETjT%2Fyvis%3D',
    bytes: 768000,
    uploadUserName: '赵六',
    uploadTime: '2023-01-04 15:00:00'
  },
  word: {
    name: 'example.docx',
    url: 'https://test-micgenerp-enterprise-storage-space.oss-cn-hangzhou.aliyuncs.com/uploads/word%E6%A8%A1%E6%9D%BF-4c054960df034683a636eaf696db5b5a.docx?Expires=1756448709&OSSAccessKeyId=LTAI5tR48AvzX7p8v8PxhgQA&Signature=0cpG7fowR0j%2B2e03B3nS8oxzv54%3D',
    bytes: 640000,
    uploadUserName: '孙七',
    uploadTime: '2023-01-05 16:00:00'
  }
};

// 预览图片
const previewImage = () => {
  previewFile(mockFiles.image);
};

// 预览视频
const previewVideo = () => {
  previewFile(mockFiles.video);
};

// 预览PDF
const previewPdf = () => {
  previewFile(mockFiles.pdf);
};

// 预览Excel
const previewExcel = () => {
  previewFile(mockFiles.excel);
};

// 预览Word
const previewWord = () => {
  previewFile(mockFiles.word);
};

// 预览多个文件
const previewMultipleFiles = () => {
  previewFile([
    mockFiles.image,
    mockFiles.video,
    mockFiles.pdf,
    mockFiles.excel,
    mockFiles.word
  ]);
};

// 下载文件
const handleDownloadFile = () => {
  downloadFile(mockFiles.image);
};

// 打印文件
const handlePrintFile = () => {
  printFile(mockFiles.image);
};
</script>

<style scoped>
.x-file-preview-demo {
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

h2 {
  margin-bottom: 24px;
  color: #333;
  font-size: 20px;
  font-weight: 600;
}

h3 {
  margin: 0 0 16px;
  color: #666;
  font-size: 16px;
  font-weight: 500;
}

.demo-section {
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

.demo-section:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-color: #d9d9d9;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

/* 确保XButton组件在示例中的样式一致 */
:deep(.x-button) {
  margin-right: 0;
}

/* 代码块样式 */
.code-block {
  margin-top: 16px;
}

.code-block h4 {
  margin: 16px 0 8px;
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

.code-block pre {
  margin: 0 0 16px;
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
}

.code-block code {
  color: #333;
}
</style>