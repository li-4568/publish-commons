<template>
  <div class="x-editor-container">
    <div class="x-editor-wrapper" :style="containerStyle">
      <Toolbar
        v-if="toolbar !== false && editorRef"
        class="x-editor-toolbar"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />

      <Editor
        class="x-editor-content"
        v-model="editorContent"
        :defaultConfig="editorConfig"
        :mode="mode"
        :readOnly="readOnly"
        @onCreated="handleCreated"
        @onChange="handleChange"
        @onFocus="handleFocus"
        @onBlur="handleBlur"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { XEditorProps, XEditorEmits } from './types'
import { useEditor, useEditorConfig, useEditorMethods } from './composables'
import '@wangeditor/editor/dist/css/style.css'

defineOptions({
  name: 'XEditor',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<XEditorProps>(), {
  modelValue: '',
  defaultValue: '',
  readOnly: false,
  height: '300px',
  width: '100%',
  placeholder: '请输入内容...',
  toolbar: true,
  menuConfig: () => ({}),
  extendConfig: () => ({}),
})

const emit = defineEmits<XEditorEmits>()

const {
  editorRef,
  editorContent,
  mode,
  containerStyle,
  handleCreated,
  handleChange,
  handleFocus,
  handleBlur,
} = useEditor({ props, emit })

const { toolbarConfig, editorConfig } = useEditorConfig({ props })

const { getEditor, setContent, getContent, focus, blur, clear, insertText, getHtml, getText } =
  useEditorMethods(editorRef, editorContent)

// 组件销毁前清理
onBeforeUnmount(() => {
  props.onDestroyed?.()
  emit('destroyed')
})

// 暴露实例方法
defineExpose({
  getEditor,
  setContent,
  getContent,
  focus,
  blur,
  clear,
  insertText,
  getHtml,
  getText,
})
</script>

<style scoped lang="less">
.x-editor-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.x-editor-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: #1890ff;
  }

  &:focus-within {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
}

.x-editor-toolbar {
  border-bottom: 1px solid #d9d9d9;
  background-color: #ffffff;
  padding: 8px 10px;
  flex-shrink: 0;
}

.x-editor-content {
  flex: 1;
  overflow: auto;
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  min-height: 300px;
}

:deep(.w-e-text-container) {
  height: 100%;
  overflow: auto;
}

:deep(.w-e-text) {
  padding: 0;
  height: 100%;
  overflow: auto;
}
</style>
