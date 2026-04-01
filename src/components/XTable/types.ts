// 表格列配置类型
export interface TableColumnConfig {
  type?: string
  field?: string
  title?: string | (() => string) | any
  width?: number | string
  minWidth?: number | string
  maxWidth?: number | string
  fixed?: string | boolean
  formatter?: (params: any) => any
  renderCell?: (params: any) => any
  [key: string]: any
}

// 表格行配置类型
export interface TableRowConfig {
  useKey?: boolean
  keyField?: string
  isCurrent?: boolean
  isHover?: boolean
  drag?: boolean
  height?: number
  [key: string]: any
}

// 表格分页配置类型
export interface TablePagerConfig {
  total?: number
  currentPage?: number
  pageSize?: number
  pageSizes?: number[]
  layouts?: string[]
  [key: string]: any
}

// 表格排序配置类型
export interface TableSortConfig {
  field?: string
  order?: string
  remote?: boolean
  [key: string]: any
}

// 表格编辑配置类型
export interface TableEditConfig {
  trigger?: string
  mode?: string
  [key: string]: any
}

// 表格虚拟滚动配置类型
export interface TableVirtualConfig {
  enabled?: boolean
  gt?: number
  [key: string]: any
}

// 表格属性配置类型
export interface XTableProps {
  // 表格数据源
  dataSource: Array<any>
  // 表格列配置
  columns: TableColumnConfig[]
  // 是否显示边框
  border?: string | boolean
  // 是否圆角边框
  round?: boolean
  // 是否显示表头
  showHeader?: boolean
  // 点击是否高亮
  isCurrent?: boolean
  // 移入是否高亮
  isHover?: boolean
  // 是否启动行拖拽
  isRowDrag?: boolean
  // 是否启动列拖拽
  isColumnDrag?: boolean
  // 行分组字段
  groupFields?: string[]
  // 是否显示行分组总量
  groupShowTotal?: boolean
  // 是否可调整列宽
  isResizable?: boolean
  // 是否显示表尾
  showFooter?: boolean
  // 表尾数据
  footerData?: Array<any>
  // 文本对齐方式
  align?: string
  // 是否显示斑马线
  stripe?: boolean
  // 单元格class
  cellClassName?: (params: any) => string
  // 表格最小高度
  minHeight?: number | string
  // 表格最大高度
  maxHeight?: number | string
  // 表格高度
  height?: number | string
  // 是否显示滚动条
  showOverflow?: boolean
  // 表头滚动
  showHeaderOverflow?: boolean
  // 表尾滚动
  showFooterOverflow?: boolean
  // 是否加载中
  setLoading?: boolean
  // 序号列配置
  seqConfig?: any
  // 单选框配置
  radioConfig?: any
  // 复选框配置
  checkboxConfig?: any
  // 表头高度
  headerHeight?: number
  // 单元格高度
  cellHeight?: number
  // 表尾高度
  footerHeight?: number
  // 合并行方法
  spanMethod?: (params: any) => any
  // 排序配置
  sortConfig?: TableSortConfig
  // 树形结构配置
  treeConfig?: any
  // 分页配置
  pagerConfig?: TablePagerConfig
  // 分页总数量
  pagerTotal?: number
  // 当前页码
  currentPage?: number
  // 每页条数
  pageSize?: number
  // 分页布局
  pageLayouts?: string[]
  // 是否显示分页
  isShowPager?: boolean
  // 合并单元格
  mergeCells?: any[]
  // 表尾合并
  mergeFooterItems?: any[]
  // 单元格编辑触发方式
  editTrigger?: string
  // 单元格编辑模式
  editMode?: string
  // 单元格编辑规则
  editRules?: any
  // 是否保持原始值状态
  keepSource?: boolean
  // 主键字段
  keyField?: string
  // 合并字段
  mergeFields?: string[]
  // 合并条件
  mergeConditions?: any[]
  // 是否开启横向虚拟滚动
  isVirtualX?: boolean
  // 是否开启纵向虚拟滚动
  isVirtualY?: boolean
  // 行配置
  rowConfig?: TableRowConfig
  // 编辑配置
  editConfig?: TableEditConfig
  // 其他vxe-table支持的属性
  [key: string]: any
}

// 表格事件类型
export interface XTableEvents {
  // 排序变化事件
  sortChange?: (params: any) => void
  // 行拖拽开始事件
  rowDragStart?: (params: any) => void
  // 行拖拽结束事件
  rowDragEnd?: (params: any) => void
  // 列拖拽开始事件
  columnDragstart?: (params: any) => void
  // 列拖拽结束事件
  columnDragend?: (params: any) => void
  // 分页变化事件
  pageChange?: (params: { currentPage: number; pageSize: number }) => void
  // 单元格点击事件
  cellClick?: (params: any) => void
  // 单元格双击事件
  cellDblclick?: (params: any) => void
  // 滚动事件
  scroll?: (params: any) => void
  // 编辑激活事件
  editActivated?: (params: any) => void
  // 编辑关闭事件
  editClosed?: (params: any) => void
  // 列宽调整变化事件
  columnResizeChange?: (params: any) => void
  // 树节点展开/收起事件
  toggleTreeExpand?: (params: any) => void
  // 单选框变化事件
  radioChange?: (params: any) => void
  // 复选框全选变化事件
  checkboxAllChange?: (params: any) => void
  // 复选框变化事件
  checkboxChange?: (params: any) => void
  // 当前页变化事件
  'update:currentPage'?: (currentPage: number) => void
  // 每页条数变化事件
  'update:pageSize'?: (pageSize: number) => void
}

// 表格方法类型
export interface XTableExpose {
  gridRef: any
  selectRowEvent: (row: any) => void
  clearCheckbox: (row: any) => void
  tooltipClose: () => void
  [key: string]: any
}
