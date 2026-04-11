import { type Ref } from 'vue'

export function useTableMethods(gridRef: Ref<any>) {
  // 设置行高亮并滚动到该行
  const selectRow = (row: any) => {
    const $grid = gridRef.value
    if ($grid) {
      $grid.setCurrentRow(row)
      $grid.scrollToRow(row)
    }
  }

  // 取消 checkbox 选中
  const clearCheckbox = (row: any) => {
    if (gridRef.value) {
      gridRef.value.setCheckboxRow(row, false)
    }
  }

  // 关闭悬浮提示
  const closeTooltip = () => {
    if (gridRef.value) {
      gridRef.value.closeTooltip()
    }
  }

  // 获取表格实例
  const getGridInstance = () => gridRef.value

  return {
    selectRow,
    clearCheckbox,
    closeTooltip,
    getGridInstance,
  }
}
