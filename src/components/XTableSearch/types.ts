import type { VNode } from 'vue'

/**
 * 搜索项类型
 */
export interface SearchItem {
  /**
   * 搜索项类型：input | select | date | datetime | cascader | checkbox | radio | treeSelect
   */
  type: 'input' | 'select' | 'date' | 'datetime' | 'cascader' | 'checkbox' | 'radio' | 'treeSelect'
  /**
   * 搜索字段名
   */
  field: string
  /**
   * 搜索项标签
   */
  label: string
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 选择器选项（仅select类型）
   */
  options?: {
    value: string | number
    label: string
    disabled?: boolean
  }[]
  /**
   * 级联选择器选项（仅cascader类型）
   */
  cascaderOptions?: any[]
  /**
   * 单选框选项（仅radio类型）
   */
  radioOptions?: {
    value: string | number
    label: string
    disabled?: boolean
  }[]
  /**
   * 树形选择器数据（仅treeSelect类型）
   */
  treeData?: any[]
  /**
   * 是否必填
   */
  required?: boolean
  /**
   * 初始值
   */
  defaultValue?: string | number | Date | boolean | any[]
  /**
   * 自定义渲染函数
   */
  render?: (params: any) => VNode
  /**
   * 验证规则
   */
  rules?: any[]
  /**
   * 帮助信息
   */
  help?: string
  /**
   * 额外信息
   */
  extra?: string
  /**
   * 提示信息
   */
  tooltip?: string
  /**
   * 组件属性
   */
  props?: Record<string, any>
  /**
   * 组件事件
   */
  events?: Record<string, Function>
}

/**
 * 表格搜索组件属性
 */
export interface XTableSearchProps {
  /**
   * 搜索项配置
   */
  searchItems: SearchItem[]
  /**
   * 搜索按钮文本
   */
  searchText?: string
  /**
   * 重置按钮文本
   */
  resetText?: string
  /**
   * 是否显示高级搜索
   */
  showAdvanced?: boolean
  /**
   * 高级搜索默认展开状态
   */
  advancedDefaultOpen?: boolean
  /**
   * 每行显示的搜索项数量
   */
  itemsPerRow?: number
}

/**
 * 表格搜索组件事件
 */
export interface XTableSearchEmits {
  /**
   * 搜索事件
   */
  search: [params: Record<string, any>]
  /**
   * 重置事件
   */
  reset: []
  /**
   * 高级搜索展开/收起事件
   */
  'advanced-change': [isOpen: boolean]
}

/**
 * 表格搜索组件插槽
 */
export interface XTableSearchSlots {
  /**
   * 自定义操作按钮区域
   */
  actions: () => VNode
  /**
   * 自定义搜索项（参数为搜索项配置）
   */
  [field: string]: (item: SearchItem) => VNode
}
