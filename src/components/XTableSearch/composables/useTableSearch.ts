import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import type { XTableSearchProps } from '../types'

export function useTableSearch(
  props: XTableSearchProps,
  emit: {
    (e: 'search', values: Record<string, any>): void
    (e: 'reset'): void
    (e: 'advanced-change', expanded: boolean): void
  }
) {
  const formState = ref<Record<string, any>>({})
  const searchRef = ref<HTMLElement | null>(null)
  const isExpanded = ref(props.advancedDefaultOpen || false)
  const rowSpan = ref(6)
  const spaceNum = ref(6)
  const expandIcon = ref(false)

  // 初始化表单数据
  const initFormData = () => {
    props.searchItems.forEach(item => {
      if (item.defaultValue !== undefined && item.defaultValue !== null) {
        formState.value[item.field] = item.defaultValue
      } else {
        switch (item.type) {
          case 'cascader':
            formState.value[item.field] = []
            break
          case 'treeSelect':
            formState.value[item.field] = undefined
            break
          case 'checkbox':
            formState.value[item.field] = false
            break
          case 'select':
            formState.value[item.field] = undefined
            break
          case 'date':
          case 'datetime':
            formState.value[item.field] = undefined
            break
          default:
            formState.value[item.field] = ''
        }
      }
    })
  }

  // 监听搜索项变化
  watch(
    () => [props.searchItems, props.advancedDefaultOpen],
    ([, newAdvancedDefaultOpen]) => {
      initFormData()
      isExpanded.value = Boolean(newAdvancedDefaultOpen)
    },
    { immediate: true }
  )

  // 计算每行显示的列数
  const maxVisiblePerRow = computed(() => Math.floor(24 / rowSpan.value))

  // 显示的字段列表
  const visibleFields = computed(() => {
    const formList = props.searchItems
    if (isExpanded.value) return formList
    return formList.slice(0, maxVisiblePerRow.value)
  })

  // 计算总行数
  const totalRows = computed(() => {
    return Math.ceil(props.searchItems.length / maxVisiblePerRow.value)
  })

  // 是否需要显示展开按钮
  const shouldCollapse = computed(() => totalRows.value >= 2)

  // 切换展开/收起
  const toggleMore = () => {
    isExpanded.value = !isExpanded.value
    emit('advanced-change', isExpanded.value)
  }

  // 搜索
  const handleSearch = () => {
    emit('search', { ...formState.value })
  }

  // 重置
  const handleReset = () => {
    initFormData()
    emit('reset')
  }

  // 响应式布局处理
  const handleResize = () => {
    if (!searchRef.value) return
    const width = searchRef.value.offsetWidth
    if (width >= 1600) {
      rowSpan.value = 6
    } else if (width >= 1200) {
      rowSpan.value = 8
    } else if (width >= 992) {
      rowSpan.value = 12
    } else if (width >= 768) {
      rowSpan.value = 12
    } else {
      rowSpan.value = 24
    }
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    formState,
    searchRef,
    isExpanded,
    rowSpan,
    spaceNum,
    expandIcon,
    visibleFields,
    shouldCollapse,
    toggleMore,
    handleSearch,
    handleReset,
  }
}
