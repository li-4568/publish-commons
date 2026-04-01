declare module '@wangeditor/editor-for-vue' {
  import { DefineComponent, PropType } from 'vue'
  import type { IDomEditor } from '@wangeditor/editor'

  export interface EditorProps {
    value?: string
    mode?: 'default' | 'simple'
    disabled?: boolean
    readOnly?: boolean
    defaultConfig?: any
    onCreated?: (editor: IDomEditor) => void
    onChange?: (editor: IDomEditor) => void
    onFocus?: (editor: IDomEditor) => void
    onBlur?: (editor: IDomEditor) => void
  }

  export interface ToolbarProps {
    editor: IDomEditor | undefined
    defaultConfig?: any
    mode?: 'default' | 'simple'
  }

  export const Editor: DefineComponent<EditorProps>
  export const Toolbar: DefineComponent<ToolbarProps>
}
