<script lang="ts">
export default {
  name: 'XFilePreview'
};
</script>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { previewFile, downloadFile, printFile, formatFileSize, getFileExtension, getFileType } from '@/utils/file';
import { message } from 'ant-design-vue';
import { CloseOutlined } from '@ant-design/icons-vue';
import type { FileItem } from './types';

const props = defineProps({
  // 文件数据
  paramsData: {
    type: Object as () => {
      fileList: FileItem[];
    },
    required: true
  },
  // 是否删除
  isDelete: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['deleteClick']);

// 增强的文件列表
const enhancedFileList = computed(() => {
  return (
    props.paramsData?.fileList?.map((file) => {
      file.name = (file?.name ?? file?.originalFilename) || '';
      const fileExtension = getFileExtension(file);
      const fileType = getFileType(fileExtension);
      return {
        ...file,
        typeStatus: fileType || 'other',
        printType: fileExtension,
      };
    }) || []
  );
});

const newEnhancedFileList = ref<FileItem[]>([]);
onMounted(() => {
  newEnhancedFileList.value = enhancedFileList.value;
});

// 播放
const filePlay = async (file) => {
  await previewFile(file);
};

// 预览
const filePreview = async (file) => {
  await previewFile(file);
};

// 下载
const fileDownload = (file) => {
  downloadFile(file);
};

// 打印
const filePrint = (file) => {
  printFile(file);
};

// 删除
const deleteClick = (item, index) => {
  newEnhancedFileList.value.splice(index, 1);
  emit('deleteClick', item, index);
};

// 暂时控制xls不能预览
const xlsIsShow = (item) => {
  if (!item.name) {
    message.warning('文件名称不能为空');
    return false;
  }
  const itemArr = item.name.lastIndexOf('.');
  const suffix = item.name.slice(itemArr + 1);
  return suffix === 'xls';
};
</script>

<template>
  <div class="x-file-preview">
    <div class="file-title">文件列表</div>
    <div class="file-con">
      <div class="file-list">
        <div
          class="list-ul"
          v-for="(item, index) in newEnhancedFileList"
          :key="index"
        >
          <div class="list-li">
            <div class="li-left">
              <div class="li-icon">
                <div
                  :class="['fileIcon', item.typeStatus + 'Box']"
                ></div>
              </div>
              <div class="li-btn">
                <div
                  class="btn-label"
                  v-if="item.typeStatus === 'media'"
                  @click="filePlay(item)"
                >
                  播放
                </div>
                <div
                  class="btn-label"
                  v-if="item.typeStatus !== 'media' && !xlsIsShow(item)"
                  @click="filePreview(item)"
                >
                  预览
                </div>
                <div class="btn-label" @click="fileDownload(item)">下载</div>
                <div
                  class="btn-label"
                  v-if="item.printType"
                  @click="filePrint(item)"
                >
                  打印
                </div>
              </div>
            </div>
            <div class="li-right">
              <div class="right-li">
                <div class="right-title">文件名称：</div>
                <div class="right-value" :title="item.name">
                  {{ item.name }}
                </div>
              </div>
              <div class="right-li">
                <div class="right-title">文件大小：</div>
                <div class="right-value">
                  {{ formatFileSize(item.bytes || 0) }}
                </div>
              </div>
              <div class="right-li">
                <div class="right-title">上传用户：</div>
                <div class="right-value">{{ item.uploadUserName }}</div>
              </div>
              <div class="right-li">
                <div class="right-title">上传时间：</div>
                <div class="right-value">{{ item.uploadTime }}</div>
              </div>
            </div>
          </div>
          <div
            class="file-delete"
            v-if="isDelete"
            @click="deleteClick(item, index)"
          >
            <CloseOutlined />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.x-file-preview {
  height: calc(100% - 20px);
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
}
.file-title {
  border-left: 6px solid #228fff;
  padding-left: 10px;
  margin-bottom: 10px;
}
.file-con {
  width: 100%;
  height: calc(100% - 24px);
  overflow: auto;
}
.file-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: 16px;
  padding: 8px;
}
.list-ul {
  flex: 1;
  min-width: 300px;
  max-width: calc(33.333% - 12px);
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 0 10px #cecece;
  position: relative;
}
.list-li {
  height: 120px;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.file-delete {
  position: absolute;
  right: 10px;
  top: 6px;
  cursor: pointer;
  color: #888;
  font-size: 14px;
}
.li-left {
  width: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.li-icon {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
}
/* 雪碧图片文件类型 */
.fileIcon {
  display: inline-block;
  margin: 6px 0;
  width: 68px;
  height: 70px;
  vertical-align: middle;
  background-repeat: repeat;
  background-image: url('@/assets/images/css_sprites.png');
}
.pptBox {
  background-position: -109px -20px;
}
.pdfBox {
  background-position: -196px -20px;
}
.excelBox {
  background-position: -284px -20px;
}
.txtBox {
  background-position: -19px -20px;
}
.wordBox {
  background-position: -372px -20px;
}
.mediaBox {
  background-position: -198px -108px;
}
.imageBox {
  background-position: -284px -108px;
}
.rarBox {
  background-position: -22px -108px;
}
.zipBox {
  background-position: -108px -108px;
}
.otherBox {
  background-position: -368px -108px;
}
.li-btn {
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: 14px;
  color: #13c2c2;
  padding: 8px 0;
  flex-wrap: nowrap;
}
.btn-label {
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
}
.btn-label:hover {
  color: #0da8a8;
}
.li-right {
  flex: 1;
  height: auto;
  line-height: 24px;
  font-size: 12px;
  padding-left: 12px;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.right-li {
  display: flex;
  width: 100%;
}
.right-title {
  width: 60px;
  text-align: right;
  margin-right: 8px;
  flex-shrink: 0;
}
.right-value {
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
</style>