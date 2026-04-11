import { computed, type Ref } from 'vue'
import type { XTableProps } from '../types'

export function useGridOptions(
  props: XTableProps,
  localLoading: Ref<boolean>
) {
  const gridOptions = computed(() => {
    // 基础配置 - 只提取必要的属性
    const baseConfig = {
      showHeader: props.showHeader,
      showFooter: props.showFooter,
      align: props.align,
      stripe: props.stripe,
      border: props.border,
      round: props.round,
      minHeight: props.minHeight,
      maxHeight: props.maxHeight,
      height: props.height,
      showOverflow: props.showOverflow,
      showHeaderOverflow: props.showHeaderOverflow,
      showFooterOverflow: props.showFooterOverflow,
      keepSource: props.keepSource,
      headerHeight: 40,
      footerHeight: 40,
      cellHeight: 40,
    }

    // 单元格样式配置
    const cellConfig = {
      cellClassName: props.cellClassName,
    }

    // 排序配置
    const sortConfig = props.sortConfig

    // 树形配置
    const treeConfig = props.treeConfig

    // 序列号配置
    const seqConfig = props.seqConfig

    // 单选/多选配置
    const radioConfig = props.radioConfig
    const checkboxConfig = props.checkboxConfig

    // 分页配置
    const pagerConfig = props.isShowPager
      ? {
          total: props.pagerTotal || props.dataSource.length,
          currentPage: props.currentPage,
          pageSize: props.pageSize,
          layouts: props.pageLayouts as any,
          pageSizes: [10, 20, 50, 100],
          enabled: true,
          ...props.pagerConfig,
        }
      : { enabled: false }

    // 行配置
    const rowConfig = {
      isCurrent: props.isCurrent,
      isHover: props.isHover,
      drag: props.isRowDrag,
    }

    // 列配置
    const columnConfig = {
      useKey: true,
      resizable: props.isResizable,
      drag: props.isColumnDrag,
    }

    // 拖拽配置
    const rowDragConfig = props.isRowDrag
      ? { icon: 'vxe-icon-sort' }
      : undefined

    // 聚合配置（分组）
    const aggregateConfig =
      props.groupFields && props.groupFields.length > 0
        ? {
            groupFields: props.groupFields,
            showTotal: props.groupShowTotal,
          }
        : undefined

    // 编辑配置
    const editConfig = props.editConfig || {
      trigger: props.editTrigger,
      mode: props.editMode,
    }

    // 虚拟滚动配置
    const virtualXConfig = {
      enabled: props.isVirtualX,
      gt: 0,
    }

    const virtualYConfig = {
      enabled: props.isVirtualY,
      gt: 0,
    }

    // 合并单元格
    const mergeCells = props.mergeCells?.length
      ? props.mergeCells
      : undefined

    const mergeFooterItems = props.mergeFooterItems?.length
      ? props.mergeFooterItems
      : undefined

    // 其他可选配置
    const resizableConfig = props.isResizable
      ? {
          showDragTip: false,
          isDblclickAutoWidth: true,
        }
      : undefined

    const tooltipConfig = {
      enterable: true,
    }

    return {
      ...baseConfig,
      ...cellConfig,
      loading: localLoading.value,
      columns: props.columns,
      data: props.dataSource,
      sortConfig,
      treeConfig,
      seqConfig,
      radioConfig,
      checkboxConfig,
      pagerConfig,
      rowConfig,
      columnConfig,
      rowDragConfig,
      aggregateConfig,
      editConfig,
      editRules: props.editRules,
      virtualXConfig,
      virtualYConfig,
      mergeCells,
      mergeFooterItems,
      resizableConfig,
      tooltipConfig,
      footerData: props.footerData,
      spanMethod: props.spanMethod,
    }
  })

  return {
    // 返回 any 类型以兼容 vxe-grid 的复杂类型要求
    gridOptions: gridOptions as any,
  }
}
