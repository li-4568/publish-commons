import type { XTableProps } from '../types'

export interface TableEmits {
  (e: 'update:currentPage', currentPage: number): void
  (e: 'update:pageSize', pageSize: number): void
  (e: 'radioChange', params: any): void
  (e: 'checkboxAllChange', params: any): void
  (e: 'checkboxChange', params: any): void
  (e: 'sortChange', params: any): void
  (e: 'rowDragStart', params: any): void
  (e: 'rowDragEnd', params: any): void
  (e: 'columnDragstart', params: any): void
  (e: 'columnDragend', params: any): void
  (e: 'pageChange', params: any): void
  (e: 'cellClick', params: any): void
  (e: 'cellDblclick', params: any): void
  (e: 'scroll', params: any): void
  (e: 'editActivated', params: any): void
  (e: 'editClosed', params: any): void
  (e: 'columnResizeChange', params: any): void
  (e: 'toggleTreeExpand', params: any): void
}

export function useEvents(
  props: XTableProps,
  emit: TableEmits,
  { showLoading }: { showLoading: () => void }
) {
  // 分页变化
  const handlePageChange = (info: any) => {
    showLoading()
    emit('update:currentPage', info.currentPage)
    emit('update:pageSize', info.pageSize)
    emit('pageChange', info)
  }

  // 排序变化
  const handleSortChange = (info: any) => {
    if (props.sortConfig?.remote) {
      showLoading()
      emit('sortChange', info)
    }
  }

  // 树节点展开/收起
  const handleToggleTreeExpand = (info: any) => {
    showLoading()
    emit('toggleTreeExpand', info)
  }

  // 行拖拽
  const handleRowDragStart = (info: any) => {
    if (props.isRowDrag) emit('rowDragStart', info)
  }
  const handleRowDragEnd = (info: any) => {
    if (props.isRowDrag) emit('rowDragEnd', info)
  }

  // 列拖拽
  const handleColumnDragStart = (info: any) => {
    if (props.isColumnDrag) emit('columnDragstart', info)
  }
  const handleColumnDragEnd = (info: any) => {
    if (props.isColumnDrag) emit('columnDragend', info)
  }

  // 简单透传的事件
  const handleCellClick = (info: any) => emit('cellClick', info)
  const handleCellDblclick = (info: any) => emit('cellDblclick', info)
  const handleScroll = (info: any) => emit('scroll', info)
  const handleEditActivated = (info: any) => emit('editActivated', info)
  const handleEditClosed = (info: any) => emit('editClosed', info)
  const handleColumnResizeChange = (info: any) => emit('columnResizeChange', info)
  const handleRadioChange = (params: any) => emit('radioChange', params)
  const handleCheckboxAllChange = (params: any) => emit('checkboxAllChange', params)
  const handleCheckboxChange = (params: any) => emit('checkboxChange', params)

  return {
    handlePageChange,
    handleSortChange,
    handleToggleTreeExpand,
    handleRowDragStart,
    handleRowDragEnd,
    handleColumnDragStart,
    handleColumnDragEnd,
    handleCellClick,
    handleCellDblclick,
    handleScroll,
    handleEditActivated,
    handleEditClosed,
    handleColumnResizeChange,
    handleRadioChange,
    handleCheckboxAllChange,
    handleCheckboxChange,
  }
}
