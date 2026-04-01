// ============================================
// XEditor 组件类型定义
// ============================================

import type { IDomEditor } from '@wangeditor/editor'

/**
 * XEditor 组件 Props
 */
export interface XEditorProps {
  /**
   * 绑定值（编辑器内容）
   */
  modelValue?: string

  /**
   * 默认值（编辑器内容）
   */
  defaultValue?: string

  /**
   * 是否只读
   * @default false
   */
  readOnly?: boolean

  /**
   * 编辑器高度
   * @default '300px'
   */
  height?: string | number

  /**
   * 编辑器宽度
   * @default '100%'
   */
  width?: string | number

  /**
   * 占位符
   */
  placeholder?: string

  /**
   * 工具栏配置
   * 可传入数组自定义工具栏，或传入boolean控制显示/隐藏，或传入对象进行更详细的配置
   * @default true
   */
  toolbar?: any[] | boolean | {
    toolbarKeys?: any[];
    excludeKeys?: any[];
  }

  /**
   * 菜单配置
   * @default {}  // 使用默认配置
   */
  menuConfig?: any

  /**
   * 扩展配置
   * @default {}  // 使用默认配置
   */
  extendConfig?: any

  /**
   * 编辑器实例初始化回调
   */
  onCreated?: (editor: IDomEditor) => void

  /**
   * 编辑器内容变化回调
   */
  onChange?: (content: string) => void

  /**
   * 编辑器聚焦回调
   */
  onFocus?: () => void

  /**
   * 编辑器失焦回调
   */
  onBlur?: () => void

  /**
   * 编辑器销毁回调
   */
  onDestroyed?: () => void
}

/**
 * XEditor 组件 Events
 */
export interface XEditorEmits {
  /**
   * 更新绑定值
   */
  (e: 'update:modelValue', value: string): void

  /**
   * 编辑器内容变化事件
   */
  (e: 'change', content: string): void

  /**
   * 编辑器聚焦事件
   */
  (e: 'focus'): void

  /**
   * 编辑器失焦事件
   */
  (e: 'blur'): void

  /**
   * 编辑器实例创建完成事件
   */
  (e: 'created', editor: IDomEditor): void

  /**
   * 编辑器销毁事件
   */
  (e: 'destroyed'): void
}

/**
 * XEditor 组件实例方法
 */
export interface XEditorInstance {
  /**
   * 获取编辑器实例
   */
  getEditor: () => IDomEditor | undefined

  /**
   * 设置编辑器内容
   */
  setContent: (content: string) => void

  /**
   * 获取编辑器内容
   */
  getContent: () => string

  /**
   * 聚焦编辑器
   */
  focus: () => void

  /**
   * 失焦编辑器
   */
  blur: () => void

  /**
   * 清空编辑器内容
   */
  clear: () => void
}
