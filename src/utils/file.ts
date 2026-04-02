/**
 * 文件工具函数
 * 提供文件预览、下载等功能
 */
import { message } from 'ant-design-vue'
import { api as viewerApi } from 'v-viewer'
import { openModal } from './modal'

// 文件类型映射
const fileTypeMap = {
  media: ['.mp3', '.wav', '.mp4', '.avi', '.rmvb', '.webm', '.ogg'],
  ppt: ['.ppt', '.pptx'],
  pdf: ['.pdf'],
  excel: ['.xls', '.xlsx'],
  word: ['.doc', '.docx'],
  image: ['.jpg', '.jpeg', '.gif', '.png', '.svg', '.bmp', '.webp'],
  txt: ['.txt'],
  rar: ['.rar'],
  zip: ['.zip']
}

// 可打印文件类型
const printableTypes = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.bmp': 'image/bmp',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain'
}

/**
 * 获取文件扩展名
 * @param file 文件对象
 * @returns 文件扩展名（包含点号）
 */
export const getFileExtension = (file: any): string => {
  const fileName = file?.name ?? file?.originalFilename
  if (!fileName) return ''
  const lastIndex = fileName.lastIndexOf('.')
  if (lastIndex !== -1) {
    return fileName.substring(lastIndex).toLowerCase()
  }
  return ''
}

/**
 * 获取文件类型
 * @param extension 文件扩展名
 * @returns 文件类型
 */
export const getFileType = (extension: string): string | null => {
  return Object.entries(fileTypeMap).find(([, extensions]) =>
    extensions.includes(extension)
  )?.[0] || null
}

/**
 * 字节转换为可读大小
 * @param bytes 字节数
 * @returns 可读大小字符串
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes / (1024 * 1024 * 1024) > 1) {
    return (bytes / (1024 * 1024 * 1024)).toFixed(1) + 'G'
  } else if (bytes / (1024 * 1024) > 1) {
    return (bytes / (1024 * 1024)).toFixed(1) + 'M'
  } else if (bytes / 1024 > 1) {
    return (bytes / 1024).toFixed(0) + 'KB'
  }
  return bytes + 'B'
}

/**
 * 预览图片
 * @param fileList 文件列表或单个文件对象
 */
export const previewImage = (fileList: any): void => {
  viewerApi({
    options: {
      toolbar: true,
      scalable: false,
      url: 'url',
      initialViewIndex: 0
    },
    images: Array.isArray(fileList) ? fileList : [fileList]
  })
}

/**
 * 预览媒体文件
 * @param file 文件对象
 */
export const previewMedia = async (file: any): Promise<void> => {
  // 动态导入媒体播放组件
  const { XMedioPlay } = await import('../components/preview/XMedioPlay/index')
  
  openModal({
    component: XMedioPlay,
    title: '查看视频',
    width: 1300,
    height: 800,
    showClose: true,
    showFooter: false,
    loading: false,
    componentProps: {
      paramsData: {
        fileList: file
      }
    }
  })
}

/**
 * 预览PDF文件
 * @param file 文件对象
 */
export const previewPdf = (file: any): void => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', file.url)
  xhr.responseType = 'blob'
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const url = window.URL.createObjectURL(
          new Blob([xhr.response], {
            type: 'application/pdf;'
          })
        )
        window.open(url)
      } else {
        message.error('文件加载失败，请检查网络连接')
      }
    }
  }
  xhr.onerror = function () {
    message.error('文件加载失败，请检查网络连接')
  }
  xhr.send()
}

/**
 * 预览文本文件
 * @param file 文件对象
 */
export const previewText = (file: any): void => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', file.url)
  xhr.responseType = 'blob'
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const url = window.URL.createObjectURL(
          new Blob([xhr.response], {
            type: 'application/json;charset=utf-8'
          })
        )
        window.open(url)
      } else {
        message.error('文件加载失败，请检查网络连接')
      }
    }
  }
  xhr.onerror = function () {
    message.error('文件加载失败，请检查网络连接')
  }
  xhr.send()
}

/**
 * 预览Excel文件
 * @param file 文件对象
 */
export const previewExcel = async (file: any): Promise<void> => {
  try {
    // 动态导入Office预览组件
    const { XVueOffice } = await import('../components/preview/XVueOffice/index')
    
    openModal({
      component: XVueOffice,
      title: '查看文档',
      width: '90%',
      height: '90%',
      maxHeight: '100%',
      showClose: true,
      showFooter: false,
      loading: false,
      componentProps: {
        fileType: 'xlsx',
        fileUrl: file.url
      }
    })
  } catch (error) {
    message.error('预览组件加载失败')
    console.error('预览Excel文件失败:', error)
  }
}

/**
 * 预览Word文件
 * @param file 文件对象
 */
export const previewWord = async (file: any): Promise<void> => {
  try {
    // 动态导入Office预览组件
    const { XVueOffice } = await import('../components/preview/XVueOffice/index')
    
    openModal({
      component: XVueOffice,
      title: '查看文档',
      width: '90%',
      height: '90%',
      showClose: true,
      showFooter: false,
      loading: false,
      componentProps: {
        fileType: 'word',
        fileUrl: file.url
      }
    })
  } catch (error) {
    message.error('预览组件加载失败')
    console.error('预览Word文件失败:', error)
  }
}

/**
 * 预览文件
 * @param fileList 文件列表或单个文件对象
 */
export async function previewFile(fileList: any = {}): Promise<void> {
  // 判断是单文件直接预览还是多文件
  if (Array.isArray(fileList) && fileList.length > 1) {
    // 多文件弹框查看
    try {
      const { XFilePreview } = await import('../components/preview/XFilePreview/index')
      
      openModal({
        component: XFilePreview,
        title: '查看',
        width: 1140,
        height: 800,
        showClose: true,
        showFooter: false,
        loading: false,
        componentProps: {
          paramsData: {
            fileList: fileList
          }
        }
      })
    } catch (error) {
      message.error('文件预览组件加载失败')
      console.error('预览多文件失败:', error)
    }
  } else {
    // 单文件直接预览
    let fileObj = {}
    if (typeof fileList === 'object' && !Array.isArray(fileList)) {
      fileObj = fileList
    } else if (Array.isArray(fileList)) {
      fileObj = fileList[0]
    } else {
      message.warning('预览文件格式不正确')
      return
    }
    
    // 验证文件对象
    if (!fileObj || !Object.prototype.hasOwnProperty.call(fileObj, 'url') || !(fileObj as any).url) {
      message.warning('文件URL不存在')
      return
    }
    
    const fileExtension = getFileExtension(fileObj)
    const fileType = getFileType(fileExtension)
    
    // 暂时兼容xls文件预览
    if (fileExtension === '.xls') {
      try {
        const { XFilePreview } = await import('../components/preview/XFilePreview/index')
        
        openModal({
          component: XFilePreview,
          title: '查看',
          width: 1140,
          height: 800,
          showClose: true,
          showFooter: false,
          loading: false,
          componentProps: {
            paramsData: {
              fileList: fileList
            }
          }
        })
      } catch (error) {
        message.error('文件预览组件加载失败')
        console.error('预览xls文件失败:', error)
      }
      return
    }
    
    if (fileExtension) {
      switch (fileType) {
        case 'image':
          // 图片查看器
          previewImage(fileList)
          break
        case 'media':
          // 媒体播放器
          await previewMedia(fileObj)
          break
        case 'pdf':
          // PDF预览
          previewPdf(fileObj)
          break
        case 'txt':
          // 文本预览
          previewText(fileObj)
          break
        case 'excel':
          // Excel预览
          await previewExcel(fileObj)
          break
        case 'word':
          // Word预览
          await previewWord(fileObj)
          break
        case 'ppt':
          message.warning('暂不支持PPT预览')
          break
        default:
          message.warning('文件格式不正确或文件已损坏')
      }
    } else {
      message.warning('文件扩展名为空')
    }
  }
}

/**
 * 下载文件
 * @param file 文件对象
 */
export const downloadFile = (file: any): void => {
  if (!file || !file.url) {
    message.warning('文件URL不存在')
    return
  }
  
  const link = document.createElement('a')
  link.href = file.url
  link.download = file.name || file.originalFilename || 'download'
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * 打印文件
 * @param file 文件对象
 */
export const printFile = (file: any): void => {
  if (!file || !file.url) {
    message.warning('文件URL不存在')
    return
  }
  
  const fileExtension = getFileExtension(file)
  const printType = printableTypes[fileExtension as keyof typeof printableTypes]
  
  if (!printType) {
    message.warning('该文件类型不支持打印')
    return
  }
  
  message.loading('准备打印中....')
  
  // 清理之前的iframe
  if (document.getElementById('printPdf')) {
    const iframe = document.getElementById('printPdf')
    if (iframe) {
      document.body.removeChild(iframe)
    }
  }
  
  const xhr = new XMLHttpRequest()
  xhr.open('GET', file.url)
  xhr.responseType = 'blob'
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      message.destroy()
      if (xhr.status === 200) {
        const url = window.URL.createObjectURL(
          new Blob([xhr.response], {
            type: printType
          })
        )
        const iframe = document.createElement('iframe')
        iframe.src = url
        iframe.style.display = 'none'
        iframe.setAttribute('id', 'printPdf')
        document.body.appendChild(iframe)
        iframe.onload = () => {
          setTimeout(() => {
            iframe.contentWindow?.focus()
            iframe.contentWindow?.print()
          }, 500)
        }
      } else {
        message.error('打印网络错误，请稍后再试！')
      }
    }
  }
  xhr.onerror = function () {
    message.destroy()
    message.error('打印网络错误，请稍后再试！')
  }
  xhr.send()
}