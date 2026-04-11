import { ref, computed, watch } from 'vue'
import type { IDomEditor } from '@wangeditor/editor'
import type { XEditorProps, XEditorEmits } from '../types'

export interface UseEditorOptions {
  props: XEditorProps
  emit: XEditorEmits
}

/**
 * 管理编辑器内容和状态
 */
export function useEditor({ props, emit }: UseEditorOptions) {
  const editorRef = ref<IDomEditor | undefined>()
  const editorContent = ref<string>(props.modelValue || props.defaultValue || '')
  const mode = ref<'default' | 'simple'>('default')

  // 容器样式
  const containerStyle = computed(() => ({
    width: props.width || '100%',
    height: props.height || '300px',
  }))

  // 监听 modelValue 变化
  watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue !== editorContent.value) {
        editorContent.value = newValue || ''
      }
    },
    { immediate: true }
  )

  // 监听 editorContent 变化
  watch(editorContent, (newValue) => {
    emit('update:modelValue', newValue)
    emit('change', newValue)
  })

  // 编辑器创建完成
  const handleCreated = (editor: IDomEditor) => {
    editorRef.value = editor
    props.onCreated?.(editor)
    emit('created', editor)
  }

  // 内容变化
  const handleChange = () => {
    if (editorContent.value) {
      props.onChange?.(editorContent.value)
    }
  }

  // 聚焦
  const handleFocus = () => {
    props.onFocus?.()
    emit('focus')
  }

  // 失焦
  const handleBlur = () => {
    props.onBlur?.()
    emit('blur')
  }

  return {
    editorRef,
    editorContent,
    mode,
    containerStyle,
    handleCreated,
    handleChange,
    handleFocus,
    handleBlur,
  }
}
