import XTableSearch from './XTableSearch.vue'
import type { XTableSearchProps, XTableSearchEmits, XTableSearchSlots, SearchItem } from './types'

export {
  XTableSearch,
  type XTableSearchProps,
  type XTableSearchEmits,
  type XTableSearchSlots,
  type SearchItem
}

// 导出 composables
export { useTableSearch } from './composables'

export default XTableSearch
