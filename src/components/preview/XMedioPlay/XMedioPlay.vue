<script lang="ts">
export default {
  name: 'XMedioPlay'
};
</script>
<script setup lang="ts">

defineProps({
  // 文件数据
  paramsData: {
    type: Object as () => {
      fileList: {
        name: string;
        url: string;
      };
    },
    required: true
  },
});
</script><template>
  <div class="x-medio-play">
    <video controls height="100%" width="100%">
      <source :src="paramsData.fileList.url" />
      您的浏览器不支持视频播放
    </video>
  </div>
</template>

<style scoped>
.x-medio-play {
  width: 100%;
  height: calc(100% - 20px);
}
</style>