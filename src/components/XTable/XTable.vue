<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { VxeGrid } from 'vxe-table'
import 'vxe-table/lib/style.css'
import './style.less'
import type { XTableProps, XTableExpose } from './types'

// 定义组件属性
const props = withDefaults(defineProps<XTableProps>(), {
  // 表格数据源
  dataSource: () => [],
  // 是否显示边框
  border: 'none',
  // 是否圆角边框
  round: true,
  // 是否显示表头
  showHeader: true,
  // 点击是否高亮
  isCurrent: true,
  // 移入是否高亮
  isHover: true,
  // 是否启动行拖拽
  isRowDrag: true,
  // 是否启动列拖拽
  isColumnDrag: false,
  // 行分组字段
  groupFields: () => [],
  // 是否显示行分组总量
  groupShowTotal: false,
  // 是否可调整列宽
  isResizable: true,
  // 是否显示表尾
  showFooter: false,
  // 文本对齐方式
  align: 'center',
  // 是否显示斑马线
  stripe: true,
  // 表格最小高度
  minHeight: 300,
  // 表格最大高度
  maxHeight: '100%',
  // 表格高度
  height: '100%',
  // 是否显示滚动条
  showOverflow: true,
  // 表头滚动
  showHeaderOverflow: true,
  // 表尾滚动
  showFooterOverflow: true,
  // 是否加载中
  setLoading: false,
  // 分页总数量
  pagerTotal: 0,
  // 当前页码
  currentPage: 1,
  // 每页条数
  pageSize: 10,
  // 分页布局
  pageLayouts: () => [
    'PrevJump',
    'PrevPage',
    'Number',
    'NextPage',
    'NextJump',
    'Sizes',
    'Total',
  ],
  // 是否显示分页
  isShowPager: true,
  // 合并单元格
  mergeCells: () => [],
  // 表尾合并
  mergeFooterItems: () => [],
  // 单元格编辑触发方式
  editTrigger: 'click',
  // 单元格编辑模式
  editMode: 'cell',
  // 是否保持原始值状态
  keepSource: false,
  // 主键字段
  keyField: 'id',
  // 合并字段
  mergeFields: () => [],
  // 合并条件
  mergeConditions: () => [],
  // 是否开启横向虚拟滚动
  isVirtualX: true,
  // 是否开启纵向虚拟滚动
  isVirtualY: true,
})

// 定义组件事件
const emit = defineEmits<{
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
}>()

// 表格实例引用
const gridRef = ref()
// 合并单元格配置
const mergeCellsRef = ref([])
// 本地loading状态，用于自动控制加载状态
const localLoading = ref(props.setLoading)

// 工具函数：确保对象中的值都是函数
function ensureFunction(obj: any) {
  const result: any = {}
  for (const key in obj) {
    result[key] = typeof obj[key] === 'function' ? obj[key] : (() => {})
  }
  return result
}



// 监听数据源变化，处理合并单元格和自动关闭loading
watch(
  () => props.dataSource,
  (newData) => {
    if (newData.length > 0 && props.mergeFields.length > 0) {
      if (gridRef.value) {
        gridRef.value.reloadColumn(props.columns)
      }
    }
    
    // 数据加载完成后自动关闭loading状态
    if (props.setLoading) {
      localLoading.value = false
    }
  },
  { immediate: true, deep: true }
)

// 监听外部setLoading属性变化，同步到本地loading状态
watch(
  () => props.setLoading,
  (newLoading) => {
    localLoading.value = newLoading
  },
  { immediate: true }
)

// 表格配置选项
const gridOptions = computed(() => {
  // 提取VxeGridProps中定义的属性，避免类型错误
  const gridProps = {
    // 基础配置
    showHeader: props.showHeader,
    showFooter: props.showFooter,
    align: props.align as any,
    stripe: props.stripe,
    border: props.border as any,
    round: props.round,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    height: props.height,
    cellClassName: props.cellClassName,
    showOverflow: props.showOverflow,
    showHeaderOverflow: props.showHeaderOverflow,
    showFooterOverflow: props.showFooterOverflow,
    footerData: props.footerData,
    spanMethod: props.spanMethod,
    sortConfig: props.sortConfig,
    treeConfig: props.treeConfig,
    mergeCells: props.mergeCells,
    mergeFooterItems: props.mergeFooterItems,
    editRules: props.editRules,
    keepSource: props.keepSource,
    seqConfig: props.seqConfig,
    radioConfig: props.radioConfig,
    checkboxConfig: props.checkboxConfig,
    pagerConfig: props.pagerConfig,
  }

  return {
    ...gridProps,
    loading: localLoading.value,
    virtualXConfig: {
      enabled: props.isVirtualX,
      gt: 0,
    },
    virtualYConfig: {
      enabled: props.isVirtualY,
      gt: 0,
    },
    columns: props.columns as any,
    data: props.dataSource,
    rowConfig: {
      useKey: true,
      keyField: props.keyField,
      isCurrent: props.isCurrent,
      isHover: props.isHover,
      drag: props.isRowDrag,
    },
    rowDragConfig: {
      icon: 'vxe-icon-sort',
    },
    aggregateConfig: {
      groupFields: props.groupFields,
      showTotal: props.groupShowTotal,
    },
    columnConfig: {
      useKey: true,
      resizable: props.isResizable,
      drag: props.isColumnDrag,
    },
    resizableConfig: {
      showDragTip: false,
      isDblclickAutoWidth: true,
    },
    headerCellConfig: {
      height: props.headerHeight,
    },
    cellConfig: {
      height: props.cellHeight,
    },
    footerCellConfig: {
      height: props.footerHeight,
    },
    pagerConfig: {
      ...props.pagerConfig,
      total: props.pagerTotal,
      currentPage: props.currentPage,
      pageSize: props.pageSize,
      layouts: props.pageLayouts as any,
      pageSizes: [10, 20, 50, 100],
      enabled: props.isShowPager,
    },
    editConfig: {
      trigger: props.editTrigger as any,
      mode: props.editMode as any,
    },
    tooltipConfig: {
      enterable: true,
    },
    mergeCells: mergeCellsRef.value,
  }
})

// 表格事件处理
const gridEvents = ensureFunction({
  // 排序变化事件
  sortChange(info: any) {
    if (props.sortConfig?.remote) {
      // 远程排序时重新启用loading状态
      localLoading.value = true
      emit('sortChange', info)
    }
  },
  // 行拖拽开始事件
  rowDragstart(info: any) {
    if (props.isRowDrag) {
      emit('rowDragStart', info)
    }
  },
  // 行拖拽结束事件
  rowDragend(info: any) {
    if (props.isRowDrag) {
      emit('rowDragEnd', info)
    }
  },
  // 列拖拽开始事件
  columnDragstart(info: any) {
    if (props.isColumnDrag) {
      emit('columnDragstart', info)
    }
  },
  // 列拖拽结束事件
  columnDragend(info: any) {
    if (props.isColumnDrag) {
      emit('columnDragend', info)
    }
  },
  // 分页变化事件
  pageChange(info: any) {
    localLoading.value = true
    emit('update:currentPage', info.currentPage)
    emit('update:pageSize', info.pageSize)
    emit('pageChange', info)
  },
  // 单元格点击事件
  cellClick(info: any) {
    emit('cellClick', info)
  },
  // 单元格双击事件
  cellDblclick(info: any) {
    emit('cellDblclick', info)
  },
  // 滚动事件
  scroll(info: any) {
    emit('scroll', info)
  },
  // 编辑激活事件
  editActivated(info: any) {
    emit('editActivated', info)
  },
  // 编辑关闭事件
  editClosed(info: any) {
    emit('editClosed', info)
  },
  // 列宽调整变化事件
  columnResizeChange(info: any) {
    emit('columnResizeChange', info)
  },
  // 树节点展开/收起事件
  toggleTreeExpand(info: any) {
    // 树节点展开/收起时重新启用loading状态
    localLoading.value = true
    emit('toggleTreeExpand', info)
  },
})

// 设置行高亮
const selectRowEvent = (row: any) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.setCurrentRow(row)
    $grid.scrollToRow(row)
  }
}

// 取消checkbox选中
const clearCheckbox = (row: any) => {
  if (gridRef.value) {
    gridRef.value.setCheckboxRow(row, false)
  }
}

// 关闭悬浮提示
const tooltipClose = () => {
  if (gridRef.value) {
    gridRef.value.closeTooltip()
  }
}

// 暴露给父组件的方法
defineExpose<XTableExpose>({
  gridRef,
  selectRowEvent,
  clearCheckbox,
  tooltipClose,
})
</script>

<template>
  <vxe-grid
    class="x-table-grid"
    ref="gridRef"
    v-bind="gridOptions"
    :header-cell-style="{
      background: '#f9fafd',
      color: '#333333',
      fontWeight: 'bold',
    }"
    @sort-change="gridEvents.sortChange"
    @row-dragstart="gridEvents.rowDragstart"
    @row-dragend="gridEvents.rowDragend"
    @column-dragstart="gridEvents.columnDragstart"
    @column-dragend="gridEvents.columnDragend"
    @page-change="gridEvents.pageChange"
    @cell-click="gridEvents.cellClick"
    @cell-dblclick="gridEvents.cellDblclick"
    @scroll="gridEvents.scroll"
    @edit-activated="gridEvents.editActivated"
    @edit-closed="gridEvents.editClosed"
    @column-resizable-change="gridEvents.columnResizeChange"
    @toggle-tree-expand="gridEvents.toggleTreeExpand"
    @radio-change="(params: any) => emit('radioChange', params)"
    @checkbox-all="(params: any) => emit('checkboxAllChange', params)"
    @checkbox-change="(params: any) => emit('checkboxChange', params)"
  >
    <!-- 自定义空数据模板 -->
    <template #empty>
      <div style="text-align: center; padding: 40px 0; color: #999;">
        <div style="font-size: 48px; margin-bottom: 16px;">📊</div>
        <div>暂无数据</div>
      </div>
    </template>
    
    <!-- 插槽透传 -->
    <template v-for="(slot, name) in $slots" #[name]="slotProps">
      <slot v-if="slot" :name="name" v-bind="slotProps"></slot>
    </template>
  </vxe-grid>
</template>

<style scoped lang="less">
  .x-table-grid {
    width: 100%;
  }
</style>
