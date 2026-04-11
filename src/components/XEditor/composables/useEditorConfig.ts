import { computed } from 'vue'
import type { XEditorProps } from '../types'

export interface UseEditorConfigOptions {
  props: XEditorProps
}

/**
 * 管理编辑器配置
 */
export function useEditorConfig({ props }: UseEditorConfigOptions) {
  // 工具栏配置
  const toolbarConfig = computed(() => {
    let config: any = {
      excludeKeys: [],
      ...props.menuConfig,
    }

    // 处理工具栏配置
    if (Array.isArray(props.toolbar)) {
      config.toolbarKeys = props.toolbar
    } else if (typeof props.toolbar === 'object' && props.toolbar !== null) {
      config = {
        ...config,
        ...props.toolbar,
      }
    }

    return config
  })

  // 编辑器配置
  const editorConfig = computed(() => ({
    placeholder: props.placeholder || '请输入内容...',
    autoFocus: false,
    readOnly: props.readOnly || false,
    ...props.extendConfig,
  }))

  return {
    toolbarConfig,
    editorConfig,
  }
}
