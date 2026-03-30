// ============================================
// XTree 组件类型定义
// ============================================

import type { TreeProps as AntTreeProps } from 'ant-design-vue/es/tree'
import type { VueNode } from 'ant-design-vue/es/_util/type'

/**
 * 树节点数据结构
 */
export interface XTreeNode {
  /**
   * 节点唯一标识
   */
  key: string | number
  
  /**
   * 节点标题
   */
  title: string | VueNode
  
  /**
   * 子节点
   */
  children?: XTreeNode[]
  
  /**
   * 是否展开
   */
  expanded?: boolean
  
  /**
   * 是否选中
   */
  selected?: boolean
  
  /**
   * 是否禁用
   */
  disabled?: boolean
  
  /**
   * 是否选中复选框
   */
  checked?: boolean
  
  /**
   * 是否半选中（用于复选框）
   */
  halfChecked?: boolean
  
  /**
   * 是否可拖拽
   */
  draggable?: boolean
  
  /**
   * 自定义图标
   */
  icon?: VueNode
  
  /**
   * 其他自定义属性
   */
  [key: string]: any
}

/**
 * XTree 组件 Props 接口
 * 继承自 Ant Design Vue Tree 的 Props
 */
export interface XTreeProps extends Omit<AntTreeProps, 'treeData' | 'defaultExpandAll' | 'defaultExpandedKeys' | 'defaultSelectedKeys' | 'defaultCheckedKeys' | 'selectedKeys' | 'checkedKeys' | 'expandedKeys'> {
  /**
   * 树数据
   */
  treeData?: XTreeNode[]
  
  /**
   * 是否默认展开所有节点
   * @default false
   */
  defaultExpandAll?: boolean
  
  /**
   * 默认展开的节点 key 数组
   */
  defaultExpandedKeys?: (string | number)[]
  
  /**
   * 默认选中的节点 key 数组
   */
  defaultSelectedKeys?: (string | number)[]
  
  /**
   * 默认选中复选框的节点 key 数组
   */
  defaultCheckedKeys?: (string | number)[]
  
  /**
   * 选中的节点 key 数组（受控）
   */
  selectedKeys?: (string | number)[]
  
  /**
   * 选中复选框的节点 key 数组（受控）
   */
  checkedKeys?: (string | number)[] | { checked: (string | number)[]; halfChecked: (string | number)[] }
  
  /**
   * 展开的节点 key 数组（受控）
   */
  expandedKeys?: (string | number)[]
  
  /**
   * 是否支持单选
   * @default false
   */
  selectable?: boolean
  
  /**
   * 是否支持复选框
   * @default false
   */
  checkable?: boolean
  
  /**
   * 是否支持拖拽
   * @default false
   */
  draggable?: boolean
  
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  
  /**
   * 是否显示连接线
   * @default true
   */
  showLine?: boolean
  
  /**
   * 是否显示图标
   * @default true
   */
  showIcon?: boolean
  
  /**
   * 展开/折叠图标
   */
  switcherIcon?: VueNode
}

/**
 * XTree 组件事件接口
 */
export interface XTreeEmits {
  /**
   * 节点选中状态变化时触发
   */
  (e: 'update:selectedKeys', keys: (string | number)[]): void
  
  /**
   * 节点复选框状态变化时触发
   */
  (e: 'update:checkedKeys', keys: (string | number)[] | { checked: (string | number)[]; halfChecked: (string | number)[] }): void
  
  /**
   * 节点展开状态变化时触发
   */
  (e: 'update:expandedKeys', keys: (string | number)[]): void
  
  /**
   * 节点点击时触发
   */
  (e: 'select', selectedKeys: (string | number)[], info: any): void
  
  /**
   * 节点复选框点击时触发
   */
  (e: 'check', checkedKeys: (string | number)[], info: any): void
  
  /**
   * 节点展开/折叠时触发
   */
  (e: 'expand', expandedKeys: (string | number)[], info: any): void
  
  /**
   * 节点右键菜单时触发
   */
  (e: 'rightClick', info: any): void
  
  /**
   * 节点双击时触发
   */
  (e: 'doubleClick', info: any): void
  
  /**
   * 拖拽开始时触发
   */
  (e: 'dragStart', info: any): void
  
  /**
   * 拖拽结束时触发
   */
  (e: 'dragEnd', info: any): void
  
  /**
   * 拖拽进入节点时触发
   */
  (e: 'dragEnter', info: any): void
  
  /**
   * 拖拽离开节点时触发
   */
  (e: 'dragLeave', info: any): void
  
  /**
   * 拖拽放置时触发
   */
  (e: 'drop', info: any): void
}

/**
 * XTree 组件 Slots 接口
 */
export interface XTreeSlots {
  /**
   * 自定义节点内容
   */
  title?: (record: XTreeNode) => VueNode
  
  /**
   * 自定义树节点图标
   */
  icon?: (record: XTreeNode) => VueNode
  
  /**
   * 自定义展开/折叠图标
   */
  switcherIcon?: () => VueNode
  
}
