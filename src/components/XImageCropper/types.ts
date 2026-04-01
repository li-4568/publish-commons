/**
 * XImageCropper 组件类型定义
 */

// 组件props类型
export interface XImageCropperProps {
  /**
   * 按钮文字
   * @default '裁剪图片'
   */
  title?: string

  /**
   * 图片默认渲染方式
   * @default 'cover'
   */
  mode?: 'cover' | 'contain'

  /**
   * 裁剪生成图片的格式
   * @default 'png'
   */
  outputType?: 'jpeg' | 'png' | 'webp'

  /**
   * 是否允许滚轮缩放
   * @default true
   */
  canScale?: boolean

  /**
   * 上传图片是否可以移动
   * @default true
   */
  canMove?: boolean

  /**
   * 截图框能否拖动
   * @default true
   */
  canMoveBox?: boolean

  /**
   * 截图框是否被限制在图片里面
   * @default true
   */
  centerBox?: boolean

  /**
   * true 为展示真实输出图片宽高 false 展示看到的截图框宽高
   * @default true
   */
  infoTrue?: boolean

  /**
   * 裁剪框限制最小区域
   * @default 10
   */
  limitMinSize?: number
}

// 组件emits类型
export interface XImageCropperEmits {
  /**
   * 裁剪完成事件，返回base64数据
   */
  (e: 'crop', base64Data: string): void

  /**
   * 裁剪完成事件，返回blob数据
   */
  (e: 'cropblob', blobData: Blob): void
}
