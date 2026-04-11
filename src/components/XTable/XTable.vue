<script setup lang="ts">
/**
 * XTable 高级表格组件
 * 基于 vxe-table 封装，支持虚拟滚动、大数据量、复杂表格场景
 */
import { ref } from 'vue'
import { VxeGrid } from 'vxe-table'
import 'vxe-table/lib/style.css'
import './style.less'
import type { XTableProps, XTableExpose } from './types'
import {
  useLoading,
  useEvents,
  useGridOptions,
  useTableMethods,
  type TableEmits,
} from './composables'

// 定义组件名称
defineOptions({
  name: 'XTable',
})

// 定义 Props 和默认值
const props = withDefaults(defineProps<XTableProps>(), {
  dataSource: () => [],
  border: 'none',
  round: true,
  showHeader: true,
  isCurrent: true,
  isHover: true,
  isRowDrag: true,
  isColumnDrag: false,
  groupFields: () => [],
  groupShowTotal: false,
  isResizable: true,
  showFooter: false,
  align: 'center',
  stripe: true,
  minHeight: 300,
  maxHeight: '100%',
  height: 480,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  setLoading: false,
  pagerTotal: 0,
  currentPage: 1,
  pageSize: 10,
  pageLayouts: () => ['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'Total'],
  isShowPager: true,
  mergeCells: () => [],
  mergeFooterItems: () => [],
  editTrigger: 'click',
  editMode: 'cell',
  keepSource: false,
  keyField: 'id',
  isVirtualX: true,
  isVirtualY: true,
})

// 定义事件
const emit = defineEmits<TableEmits>()

// 表格实例引用
const gridRef = ref()

// 使用 composables
const { localLoading, showLoading } = useLoading(
  () => props.setLoading,
  () => props.dataSource
)

const { gridOptions } = useGridOptions(props, localLoading)

const eventHandlers = useEvents(props, emit, { showLoading })

const { selectRow, clearCheckbox, closeTooltip } = useTableMethods(gridRef)

// 暴露给父组件的方法
defineExpose<XTableExpose>({
  gridRef,
  selectRowEvent: selectRow,
  clearCheckbox,
  tooltipClose: closeTooltip,
})
</script>

<template>
  <vxe-grid
    ref="gridRef"
    class="x-table-grid"
    v-bind="gridOptions"
    :header-cell-style="{
      background: '#f9fafd',
      color: '#333333',
      fontWeight: 'bold',
    }"
    @sort-change="eventHandlers.handleSortChange"
    @row-dragstart="eventHandlers.handleRowDragStart"
    @row-dragend="eventHandlers.handleRowDragEnd"
    @column-dragstart="eventHandlers.handleColumnDragStart"
    @column-dragend="eventHandlers.handleColumnDragEnd"
    @page-change="eventHandlers.handlePageChange"
    @cell-click="eventHandlers.handleCellClick"
    @cell-dblclick="eventHandlers.handleCellDblclick"
    @scroll="eventHandlers.handleScroll"
    @edit-activated="eventHandlers.handleEditActivated"
    @edit-closed="eventHandlers.handleEditClosed"
    @column-resizable-change="eventHandlers.handleColumnResizeChange"
    @toggle-tree-expand="eventHandlers.handleToggleTreeExpand"
    @radio-change="eventHandlers.handleRadioChange"
    @checkbox-all="eventHandlers.handleCheckboxAllChange"
    @checkbox-change="eventHandlers.handleCheckboxChange"
  >
    <!-- 自定义空数据模板 -->
    <template #empty>
      <div class="x-table-empty">
        <div class="x-table-empty-icon">📊</div>
        <div>暂无数据</div>
      </div>
    </template>

    <!-- 插槽透传 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </vxe-grid>
</template>

<style scoped lang="less">
.x-table-grid {
  width: 100%;
}

.x-table-empty {
  text-align: center;
  padding: 40px 0;
  color: #999;

  &-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }
}
</style>
