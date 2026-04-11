import { ref, watch } from 'vue'

export function useLoading(
  setLoadingGetter: () => boolean,
  dataSourceGetter: () => any[]
) {
  const localLoading = ref(setLoadingGetter())

  // 监听外部 setLoading 变化
  watch(
    setLoadingGetter,
    (newLoading) => {
      localLoading.value = newLoading
    },
    { immediate: true }
  )

  // 数据加载完成后自动关闭 loading
  watch(
    dataSourceGetter,
    () => {
      if (setLoadingGetter()) {
        localLoading.value = false
      }
    },
    { deep: true }
  )

  const showLoading = () => {
    localLoading.value = true
  }

  const hideLoading = () => {
    localLoading.value = false
  }

  return {
    localLoading,
    showLoading,
    hideLoading,
  }
}
