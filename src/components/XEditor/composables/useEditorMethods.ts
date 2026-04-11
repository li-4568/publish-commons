import type { IDomEditor } from '@wangeditor/editor'
import type { Ref } from 'vue'

/**
 * 管理编辑器实例方法
 */
export function useEditorMethods(
  editorRef: Ref<IDomEditor | undefined>,
  editorContent: Ref<string>
) {
  // 获取编辑器实例
  const getEditor = () => editorRef.value

  // 设置内容
  const setContent = (content: string) => {
    editorContent.value = content
  }

  // 获取内容
  const getContent = () => editorContent.value

  // 聚焦
  const focus = () => {
    editorRef.value?.focus()
  }

  // 失焦
  const blur = () => {
    editorRef.value?.blur()
  }

  // 清空
  const clear = () => {
    editorContent.value = ''
  }

  // 插入内容
  const insertText = (text: string) => {
    editorRef.value?.insertText(text)
  }

  // 获取 HTML
  const getHtml = () => {
    return editorRef.value?.getHtml() || ''
  }

  // 获取文本
  const getText = () => {
    return editorRef.value?.getText() || ''
  }

  return {
    getEditor,
    setContent,
    getContent,
    focus,
    blur,
    clear,
    insertText,
    getHtml,
    getText,
  }
}
