# Modal 弹窗工具函数

`publish-commons` 提供了基于 VxeUI.modal 封装的弹窗工具函数，支持动态加载组件、异步操作、loading 状态管理等功能。

## 基础用法

### 打开弹窗

使用 `openModal` 函数打开一个弹窗：

```typescript
import { openModal } from 'publish-commons'

// 基础弹窗
openModal({
  title: '提示',
  content: '这是一个基础弹窗',
  width: 500,
  onConfirm: () => {
    console.log('点击了确认')
  }
})
```

### 使用组件作为内容

可以传入 Vue 组件作为弹窗内容：

```typescript
import { openModal } from 'publish-commons'
import MyComponent from './MyComponent.vue'

openModal({
  component: MyComponent,
  title: '组件弹窗',
  width: 800,
  height: 600,
  componentProps: {
    // 传递给组件的 props
    data: someData,
    readonly: false
  },
  onConfirm: () => {
    console.log('确认')
  }
})
```

## 完整示例

### 导入弹窗组件示例

以下是一个完整的导入弹窗实现示例：

**ImportModal.vue**

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { XButton, XInput } from 'publish-commons'

interface ImportForm {
  file: File | null
  template: string
}

const form = reactive<ImportForm>({
  file: null,
  template: ''
})

const fileInputRef = ref<HTMLInputElement | null>(null)
const uploading = ref(false)

// 暴露给父组件的方法
defineExpose({
  // 获取表单数据
  getFormData: () => form,
  // 验证表单
  validate: async () => {
    if (!form.file) {
      message.error('请选择要导入的文件')
      return false
    }
    return true
  },
  // 上传文件
  upload: async () => {
    uploading.value = true
    try {
      // 模拟上传
      await new Promise(resolve => setTimeout(resolve, 1500))
      message.success('导入成功')
      return { success: true }
    } catch (error) {
      message.error('导入失败')
      return { success: false }
    } finally {
      uploading.value = false
    }
  }
})

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    form.file = target.files[0]
  }
}

const handleSelectFile = () => {
  fileInputRef.value?.click()
}

const handleDownloadTemplate = () => {
  // 下载模板文件
  const link = document.createElement('a')
  link.href = '/templates/import-template.xlsx'
  link.download = '导入模板.xlsx'
  link.click()
}
</script>

<template>
  <div class="import-modal">
    <div class="import-section">
      <h4>1. 下载模板</h4>
      <p class="desc">请先下载导入模板，按照模板格式填写数据</p>
      <XButton type="link" @click="handleDownloadTemplate">
        下载导入模板
      </XButton>
    </div>

    <div class="import-section">
      <h4>2. 上传文件</h4>
      <p class="desc">支持 .xlsx, .xls 格式，文件大小不超过 10MB</p>
      <div class="upload-area" @click="handleSelectFile">
        <input
          ref="fileInputRef"
          type="file"
          accept=".xlsx,.xls"
          style="display: none"
          @change="handleFileChange"
        />
        <div v-if="!form.file" class="upload-placeholder">
          <span class="upload-icon">📁</span>
          <span>点击选择文件</span>
        </div>
        <div v-else class="file-info">
          <span class="file-name">{{ form.file.name }}</span>
          <span class="file-size">{{ (form.file.size / 1024).toFixed(2) }} KB</span>
        </div>
      </div>
    </div>

    <div class="import-section">
      <h4>3. 导入设置</h4>
      <XInput
        v-model="form.template"
        placeholder="请输入模板编码（可选）"
      />
    </div>

    <div v-if="uploading" class="upload-progress">
      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>
      <span>正在导入...</span>
    </div>
  </div>
</template>

<style scoped>
.import-modal {
  padding: 16px 0;
}

.import-section {
  margin-bottom: 24px;
}

.import-section h4 {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 500;
}

.desc {
  margin: 0 0 12px 0;
  color: #999;
  font-size: 12px;
}

.upload-area {
  border: 2px dashed #d9d9d9;
  border-radius: 4px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s;
}

.upload-area:hover {
  border-color: #1890ff;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #999;
}

.upload-icon {
  font-size: 24px;
}

.file-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.file-name {
  font-weight: 500;
}

.file-size {
  color: #999;
  font-size: 12px;
}

.upload-progress {
  margin-top: 16px;
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: #1890ff;
  animation: progress 1.5s ease-in-out infinite;
}

@keyframes progress {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}
</style>
```

**使用导入弹窗**

```typescript
import { openModal } from 'publish-commons'
import ImportModal from './ImportModal.vue'

const handleImport = () => {
  const modal = openModal({
    component: ImportModal,
    title: '数据导入',
    width: 600,
    height: 500,
    // 显示确认和取消按钮
    showFooter: true,
    confirmButtonText: '开始导入',
    cancelButtonText: '取消',
    // 确认回调
    async confirm() {
      // 获取组件实例
      const componentRef = modal.componentRef
      if (!componentRef) return

      // 调用组件的验证方法
      const valid = await componentRef.validate()
      if (!valid) return

      // 显示 loading
      modal.setLoading(true)

      try {
        // 调用组件的上传方法
        const result = await componentRef.upload()
        if (result.success) {
          // 关闭弹窗
          modal.close()
          // 刷新列表等操作
          refreshList()
        }
      } finally {
        modal.setLoading(false)
      }
    }
  })
}
```

## API 参考

### openModal

打开一个弹窗，返回弹窗实例。

```typescript
function openModal(config: ModalConfig, callback?: ModalCallback): ModalInstance
```

#### ModalConfig

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | - | 弹窗标题 |
| content | string \| (() => VNode) | - | 弹窗内容（与 component 二选一） |
| component | Component | - | 弹窗组件（与 content 二选一） |
| componentProps | Record<string, any> | - | 传递给组件的 props |
| width | number \| string | - | 弹窗宽度 |
| height | number \| string | - | 弹窗高度 |
| maxHeight | number \| string | 窗口高度80% | 最大高度 |
| showFooter | boolean | true | 是否显示底部按钮 |
| showConfirmButton | boolean | true | 是否显示确认按钮 |
| showCancelButton | boolean | true | 是否显示取消按钮 |
| confirmButtonText | string | - | 确认按钮文本 |
| cancelButtonText | string | - | 取消按钮文本 |
| loading | boolean | 有组件时true | 初始 loading 状态 |
| onConfirm | () => void | - | 确认事件回调 |
| onCancel | () => void | - | 取消事件回调 |
| onClose | () => void | - | 关闭事件回调 |

#### ModalInstance

| 属性/方法 | 类型 | 说明 |
|-----------|------|------|
| id | string | 弹窗唯一标识 |
| close | () => void | 关闭弹窗 |
| componentRef | any | 弹窗内组件的引用 |
| setLoading | (loading: boolean) => void | 设置 loading 状态 |

### closeAllModals

关闭所有弹窗。

```typescript
function closeAllModals(): void
```

### closeModalById

根据 ID 关闭指定弹窗。

```typescript
function closeModalById(id: string): boolean
```

## 进阶用法

### 异步确认操作

```typescript
const modal = openModal({
  component: MyForm,
  title: '提交表单',
  async confirm() {
    const formRef = modal.componentRef
    if (!formRef) return

    // 表单验证
    const values = await formRef.validate()
    if (!values) return

    // 显示 loading 并提交
    modal.setLoading(true)
    try {
      await submitData(values)
      message.success('提交成功')
      modal.close()
    } catch (error) {
      message.error('提交失败')
    } finally {
      modal.setLoading(false)
    }
  }
})
```

### 动态内容弹窗

```typescript
import { h } from 'vue'

openModal({
  title: '动态内容',
  content: () => h('div', { class: 'custom-content' }, [
    h('p', '第一行内容'),
    h('p', '第二行内容')
  ])
})
```

### 嵌套弹窗

```typescript
const outerModal = openModal({
  component: OuterComponent,
  title: '外层弹窗',
  onConfirm: () => {
    // 打开内层弹窗
    const innerModal = openModal({
      component: InnerComponent,
      title: '内层弹窗',
      width: 400,
      onConfirm: () => {
        innerModal.close()
      }
    })
  }
})
```
