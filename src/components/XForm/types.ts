// ============================================
// XForm 组件类型定义
// ============================================

import type { VNode } from 'vue'

/**
 * 表单字段配置项
 */
export interface FormField {
  /**
   * 字段属性名
   */
  prop: string
  /**
   * 字段标签
   */
  label: string
  /**
   * 组件类型
   */
  type?: 'input' | 'inputNum' | 'select' | 'date' | 'datetime' | 'cascader' | 'checkbox' | 'radio' | 'treeSelect' | 'textarea'
  /**
   * 初始值
   */
  value?: any
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 是否只读
   */
  readonly?: boolean
  /**
   * 是否必填
   */
  required?: boolean
  /**
   * 校验规则
   */
  rules?: any[]
  /**
   * 选项数据（用于 select/radio/checkbox）
   */
  options?: { label: string; value: any; disabled?: boolean }[]
  /**
   * 级联选项
   */
  cascaderOptions?: any[]
  /**
   * 树形数据
   */
  treeData?: any[]
  /**
   * 字段宽度（栅格 1-24）
   */
  colSpan?: number
  /**
   * 额外属性
   */
  props?: Record<string, any>
  /**
   * 事件监听
   */
  events?: Record<string, Function>
  /**
   * 自定义渲染
   */
  render?: (params: { field: FormField; value: any }) => VNode
}

/**
 * 表单参数配置
 */
export interface FormParams {
  /**
   * 表单字段列表
   */
  formList: FormField[]
  /**
   * 表单初始值
   */
  formListSet?: Record<string, any>
}

/**
 * XForm 组件 Props 接口
 */
export interface XFormProps {
  /**
   * 配置数据
   */
  paramsData: FormParams
  /**
   * 是否显示 label 后面的冒号
   * @default true
   */
  colon?: boolean
  /**
   * 隐藏所有表单项的必选标记
   * @default false
   */
  hideRequiredMark?: boolean
  /**
   * label 标签的文本对齐方式
   * @default 'right'
   */
  labelAlign?: 'left' | 'right'
  /**
   * 表单布局
   * @default 'horizontal'
   */
  layout?: 'horizontal' | 'vertical' | 'inline'
  /**
   * label 标签布局
   */
  labelCol?: Record<string, any>
}

/**
 * XForm 组件暴露的方法
 */
export interface XFormExpose {
  /**
   * 提交表单
   */
  submit: () => Promise<{ success: boolean; data?: any; error?: any }>
  /**
   * 重置表单
   */
  reset: () => void
  /**
   * 清除校验状态
   */
  clearValidate: () => void
  /**
   * 设置单个字段值
   */
  setFieldValue: (field: string, value: any) => void
  /**
   * 获取单个字段值
   */
  getFieldValue: (field: string) => any
  /**
   * 批量设置字段值
   */
  setFieldsValue: (values: Record<string, any>) => void
  /**
   * 表单引用
   */
  formRef: any
}
