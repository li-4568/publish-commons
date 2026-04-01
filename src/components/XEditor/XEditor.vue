<template>
  <div class="x-editor-container">
    <div class="x-editor-wrapper" :style="containerStyle">
      <!-- 工具栏 -->
      <Toolbar
        v-if="props.toolbar !== false && editorRef"
        class="x-editor-toolbar"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      
      <!-- 编辑器内容区 -->
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
import { ref, watch, computed, onBeforeUnmount } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import type { IDomEditor } from '@wangeditor/editor'
import { XEditorProps, XEditorEmits } from './types'
import '@wangeditor/editor/dist/css/style.css'

// Props
const props = withDefaults(defineProps<XEditorProps>(), {
  modelValue: '',
  defaultValue: '',
  readOnly: false,
  height: '300px',
  width: '100%',
  placeholder: '请输入内容...',
  toolbar: true,
  menuConfig: () => ({}),
  extendConfig: () => ({})
})

// Emits
const emit = defineEmits<XEditorEmits>()

// 编辑器实例
const editorRef = ref<IDomEditor | undefined>()

// 编辑器内容
const editorContent = ref<string>(props.modelValue || props.defaultValue)

// 模式（默认使用默认模式）
const mode = ref<'default' | 'simple'>('default')

// 容器样式
const containerStyle = computed(() => {
  return {
    width: props.width,
    height: props.height
  }
})

// 工具栏配置
const toolbarConfig = computed(() => {
  let config: any = {
    excludeKeys: [],
    ...props.menuConfig
  }
  
  // 处理工具栏配置
  if (Array.isArray(props.toolbar)) {
    // 自定义工具栏数组
    config.toolbarKeys = props.toolbar
  } else if (typeof props.toolbar === 'object' && props.toolbar !== null) {
    // 详细的工具栏配置
    config = {
      ...config,
      ...props.toolbar
    }
  }
  
  return config
})

// 编辑器配置
const editorConfig = computed(() => {
  return {
    placeholder: props.placeholder,
    autoFocus: false,
    readOnly: props.readOnly,
    ...props.extendConfig
  }
})

// 监听modelValue变化
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== editorContent.value) {
      editorContent.value = newValue || ''
    }
  },
  { immediate: true }
)

// 监听editorContent变化
watch(
  editorContent,
  (newValue) => {
    emit('update:modelValue', newValue)
    emit('change', newValue)
  }
)

// 编辑器创建完成
const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor
  if (props.onCreated) {
    props.onCreated(editor)
  }
  emit('created', editor)
}

// 内容变化
const handleChange = () => {
  if (props.onChange && editorContent.value) {
    props.onChange(editorContent.value)
  }
}

// 聚焦
const handleFocus = () => {
  if (props.onFocus) {
    props.onFocus()
  }
  emit('focus')
}

// 失焦
const handleBlur = () => {
  if (props.onBlur) {
    props.onBlur()
  }
  emit('blur')
}

// 组件销毁前清理
onBeforeUnmount(() => {
  if (props.onDestroyed) {
    props.onDestroyed()
  }
  emit('destroyed')
})

// 暴露实例方法
defineExpose({
  getEditor: () => editorRef.value,
  setContent: (content: string) => {
    editorContent.value = content
  },
  getContent: () => editorContent.value,
  focus: () => {
    editorRef.value?.focus()
  },
  blur: () => {
    editorRef.value?.blur()
  },
  clear: () => {
    editorContent.value = ''
  }
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
