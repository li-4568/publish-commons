// 导出 XEditor 组件
import XEditor from './XEditor.vue'
import type { XEditorProps, XEditorEmits, XEditorInstance } from './types'

export { XEditor, type XEditorProps, type XEditorEmits, type XEditorInstance }

// 导出 composables
export { useEditor, useEditorConfig, useEditorMethods } from './composables'

export default XEditor
