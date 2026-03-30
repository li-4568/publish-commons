// ============================================
// XTreeSelect 组件类型定义
// ============================================

import type { TreeSelectProps as AntTreeSelectProps } from 'ant-design-vue/es/tree-select'

/**
 * 树形数据节点
 */
export interface TreeNode {
  /**
   * 唯一标识（用于内部追踪）
   */
  key: string | number

  /**
   * 节点值（用于选择时返回的值，必需）
   */
  value: string | number

  /**
   * 显示标题
   */
  title: string

  /**
   * 子节点
   */
  children?: TreeNode[]

  /**
   * 是否禁用
   */
  disabled?: boolean

  /**
   * 是否可选
   */
  selectable?: boolean

  /**
   * 是否为叶子节点
   */
  isLeaf?: boolean

  /**
   * 自定义图标
   */
  icon?: string

  /**
   * 附加数据
   */
  data?: Record<string, any>
}

/**
 * 树选择器尺寸
 */
export type TreeSelectSize = 'large' | 'middle' | 'small'

/**
 * 选择模式
 */
export type TreeSelectMode = 'single' | 'multiple'

/**
 * XTreeSelect 组件 Props
 */
export interface XTreeSelectProps extends Omit<AntTreeSelectProps, 'size' | 'treeData' | 'value'> {
  /**
   * 绑定值
   */
  modelValue?: string | string[] | number | number[]

  /**
   * 树形数据
   */
  treeData: TreeNode[]

  /**
   * 选择模式
   * @default 'single'
   */
  mode?: TreeSelectMode

  /**
   * 尺寸
   * @default 'middle'
   */
  size?: TreeSelectSize

  /**
   * 占位符
   */
  placeholder?: string

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否显示清除按钮
   * @default false
   */
  clearable?: boolean

  /**
   * 是否可搜索
   * @default false
   */
  searchable?: boolean

  /**
   * 是否显示搜索输入框
   * @default false
   */
  showSearch?: boolean

  /**
   * 是否显示图标
   * @default false
   */
  showIcon?: boolean

  /**
   * 是否展开所有节点
   * @default false
   */
  treeDefaultExpandAll?: boolean

  /**
   * 默认展开的节点key
   */
  treeDefaultExpandedKeys?: (string | number)[]

  /**
   * 是否显示复选框（多选模式下有效）
   * @default false
   */
  treeCheckable?: boolean

  /**
   * 选中时是否勾选父节点（多选模式下有效）
   * @default true
   */
  treeCheckStrictly?: boolean

  /**
   * 多选时最多显示的标签数
   */
  maxTagCount?: number

  /**
   * 是否必填
   * @default false
   */
  required?: boolean

  /**
   * 错误信息
   */
  errorMessage?: string

  /**
   * 空数据提示文本
   * @default '暂无数据'
   */
  emptyText?: string

  /**
   * 节点过滤函数
   */
  filterTreeNode?: boolean | ((input: string, treeNode: any) => boolean)

  /**
   * 自定义字段名
   */
  fieldNames?: {
    key?: string
    title?: string
    children?: string
  }

  /**
   * 获取弹窗容器
   */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
}

/**
 * XTreeSelect 组件事件
 */
export interface XTreeSelectEmits {
  /**
   * 更新绑定值
   */
  (e: 'update:modelValue', value: XTreeSelectProps['modelValue']): void

  /**
   * 值改变事件
   */
  (e: 'change', value: XTreeSelectProps['modelValue']): void

  /**
   * 下拉框打开/关闭事件
   */
  (e: 'openChange', open: boolean): void

  /**
   * 搜索事件
   */
  (e: 'search', value: string): void

  /**
   * 选择事件
   */
  (e: 'select', value: string | number, node: TreeNode): void

  /**
   * 节点展开/收起事件
   */
  (e: 'treeExpand', expandedKeys: (string | number)[]): void

  /**
   * 清除事件
   */
  (e: 'clear'): void
}

/**
 * XTreeSelect 组件插槽
 */
export interface XTreeSelectSlots {
  /**
   * 自定义标题渲染
   */
  title?: (props: { node: TreeNode }) => any

  /**
   * 自定义图标
   */
  icon?: (props: { node: TreeNode }) => any

  /**
   * 空状态插槽
   */
  empty?: () => any

  /**
   * 标签渲染插槽（多选模式下）
   */
  tagRender?: (props: { label: string; value: string | number; closable: boolean; onClose: () => void }) => any
}
