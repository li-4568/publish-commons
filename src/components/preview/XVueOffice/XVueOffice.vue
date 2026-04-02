<script lang="ts">
export default {
  name: 'XVueOffice'
};
</script>

<script setup lang="ts">
import VueOfficeExcel from '@vue-office/excel';
import '@vue-office/excel/lib/index.css';
import VueOfficeDocx from '@vue-office/docx';
import '@vue-office/docx/lib/index.css';

defineProps({
  // 文件类型
  fileType: {
    type: String,
    required: true
  },
  // 文件地址
  fileUrl: {
    type: String,
    required: true
  },
});
</script>

<template>
  <div class="x-vue-office">
    <VueOfficeExcel
      :src="fileUrl"
      class="office"
      v-if="fileType === 'xlsx'"
    ></VueOfficeExcel>
    <VueOfficeDocx
      :src="fileUrl"
      class="office"
      v-if="fileType === 'word'"
    ></VueOfficeDocx>
  </div>
</template>

<style scoped>
.x-vue-office {
  width: 100%;
  height: 100%;
  .office {
    width: 100%;
    height: 100%;
  }
}
</style>