<template>
  <div class="xmodal-demo">
    <h1>Modal 工具函数示例</h1>
    <!-- 函数式调用 -->
    <section class="demo-section">
      <h2>函数式调用</h2>
    <div class="demo-row">
      <XButton type="primary" @click="openSimpleModal">打开简单弹窗</XButton>
      <XButton type="primary" @click="openComplexModal">打开复杂弹窗</XButton>
      <XButton type="primary" @click="openComponentModal">打开组件弹窗</XButton>
      <XButton type="primary" @click="openScrollableModal">打开可滚动弹窗</XButton>
      <XButton type="primary" @click="closeAllModals">关闭所有弹窗</XButton>
    </div>

      <div class="code-example">
        <h3>函数式调用示例</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;XButton type="primary" @click="openSimpleModal"&gt;打开简单弹窗&lt;/XButton&gt;
    &lt;XButton type="primary" @click="openComplexModal"&gt;打开复杂弹窗&lt;/XButton&gt;
    &lt;XButton type="primary" @click="openComponentModal"&gt;打开组件弹窗&lt;/XButton&gt;
    &lt;XButton type="primary" @click="openScrollableModal"&gt;打开可滚动弹窗&lt;/XButton&gt;
    &lt;XButton type="primary" @click="openLoadingModal"&gt;打开加载弹窗&lt;/XButton&gt;
    &lt;XButton type="primary" @click="closeAllModals"&gt;关闭所有弹窗&lt;/XButton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref, h } from 'vue'
import XButton from '../src/components/XButton/XButton.vue'
import { openModal, closeAllModals } from '../src/utils/modal'
import XInputDemo from './XInputDemo.vue'

// 打开简单弹窗
const openSimpleModal = () => {
  const modal = openModal(
    {
      title: '简单弹窗',
      content: '这是一个简单的弹窗内容',
      // resize属性默认已设置为true
      // resize: true
      // showZoom属性默认已设置为true
      // showZoom: true
    },
    {
      confirm() {
        console.log('确认按钮被点击')
      },
      cancel() {
        console.log('取消按钮被点击')
      },
      close() {
        console.log('弹窗关闭')
      }
    }
  )

  console.log('弹窗实例:', modal)
}

// 打开复杂弹窗
const openComplexModal = () => {
  openModal(
    {
      title: '复杂弹窗',
      width: 600,
      height: 400,
      draggable: true,
      resize: true,
      // 显示底部按钮栏
      showFooter: true,
      // 显示确认按钮
      showConfirmButton: true,
      // 显示取消按钮
      showCancelButton: true,
      content: () => h('div', {
        style: { padding: '20px' }
      }, [
        h('h3', '自定义内容'),
        h('p', '这是一个使用render函数创建的复杂内容'),
        h('button', {
          onClick: () => {
            console.log('自定义按钮点击')
          },
          style: {
            padding: '8px 16px',
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }
        }, '自定义按钮')
      ])
    },
    {
      confirm() {
        console.log('确认按钮被点击')
      },
      cancel() {
        console.log('取消按钮被点击')
      },
      zoom(params) {
        console.log('弹窗缩放:', params)
      },
      move(params) {
        console.log('弹窗移动:', params)
      }
    }
  )
}


// 打开组件弹窗
const openComponentModal = () => {
  openModal(
    {
      title: '组件弹窗',
      width: 600,
      // 显示底部按钮栏
      showFooter: true,
      // 自定义按钮文本
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      component: XInputDemo,
      componentProps: {
        value: '我是弹出框传过来的值',
        placeholder: '请输入内容',
        disabled: false,
        readonly: false
      }
    },
    {
      confirm() {
        console.log('弹窗确认回调')
      },
      cancel() {
        console.log('弹窗取消回调')
      }
    }
  )
}
&lt;/script&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import XButton from '../src/components/XButton/XButton.vue'
import { openModal, closeAllModals } from '../src/utils/modal'
import XInputDemo from './XInputDemo.vue'

// 打开简单弹窗
const openSimpleModal = () => {
  const modal = openModal(
    {
      title: '简单弹窗',
      content: '这是一个简单的弹窗内容',
      // 显示底部按钮栏
      showFooter: true,
      // 显示确认按钮
      showConfirmButton: true,
      // 显示取消按钮
      showCancelButton: true
    },
    {
      confirm() {
        console.log('确认按钮被点击')
      },
      cancel() {
        console.log('取消按钮被点击')
      },
      close() {
        console.log('弹窗关闭')
      }
    }
  )

  console.log('弹窗实例:', modal)
}

// 打开复杂弹窗
const openComplexModal = () => {
  openModal(
    {
      title: '复杂弹窗',
      width: 600,
      height: 400,
      draggable: true,
      resize: true,
      // 显示底部按钮栏
      showFooter: true,
      // 显示确认按钮
      showConfirmButton: true,
      // 显示取消按钮
      showCancelButton: true,
      content: () => h('div', {
        style: { padding: '20px' }
      }, [
        h('h3', '自定义内容'),
        h('p', '这是一个使用render函数创建的复杂内容'),
        h('button', {
          onClick: () => {
            console.log('自定义按钮点击')
          },
          style: {
            padding: '8px 16px',
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }
        }, '自定义按钮')
      ])
    },
    {
      confirm() {
        console.log('确认按钮被点击')
      },
      cancel() {
        console.log('取消按钮被点击')
      },
      zoom(params) {
        console.log('弹窗缩放:', params)
      },
      move(params) {
        console.log('弹窗移动:', params)
      }
    }
  )
}


// 打开组件弹窗
const openComponentModal = () => {
  openModal(
    {
      title: '组件弹窗',
      width: 600,
      // 显示底部按钮栏
      showFooter: true,
      // 显示确认按钮
      showConfirmButton: true,
      // 显示取消按钮
      showCancelButton: true,
      // 自定义按钮文本
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      // 确认按钮是否关闭弹窗
      confirmClosable: false,
      component: XInputDemo,
      componentProps: {
        value: '我是弹出框传过来的值',
        placeholder: '请输入内容',
        disabled: false,
        readonly: false
      }
    },
    {
      confirm() {
        console.log('弹窗确认回调')
      },
      cancel() {
        console.log('弹窗取消回调')
      }
    }
  )
}

// 打开可滚动弹窗
const openScrollableModal = () => {
  // 创建长内容
  const longContent = []
  for (let i = 1; i <= 100; i++) {
    longContent.push(h('p', `这是第 ${i} 行内容，用于测试弹窗的滚动功能。`))
  }
  
  openModal(
    {
      title: '可滚动弹窗',
      width: 600,
      maxHeight: '500px', // 设置最大高度
      // 显示底部按钮栏
      showFooter: true,
      // 显示确认按钮
      showConfirmButton: true,
      // 显示取消按钮
      showCancelButton: true,
      content: () => h('div', {
        style: { padding: '10px' }
      }, [
        h('h3', '长内容测试'),
        ...longContent
      ])
    },
    {
      confirm() {
        console.log('确认按钮被点击')
      },
      cancel() {
        console.log('取消按钮被点击')
      }
    }
  )
}

// 基础用法
const visible1 = ref(false)

const handleConfirm = () => {
  console.log('确认')
  visible1.value = false
}

const handleCancel = () => {
  console.log('取消')
}

// 不同尺寸
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const visible5 = ref(false)

// 不同位置
const visible6 = ref(false)
const visible7 = ref(false)
const visible8 = ref(false)
const visible9 = ref(false)

// 自定义内容
const visible10 = ref(false)

// 加载状态
const visible11 = ref(false)
const loading = ref(false)

const handleLoadingConfirm = () => {
  loading.value = true
  // 模拟异步操作
  setTimeout(() => {
    loading.value = false
    visible11.value = false
  }, 2000)
}

// 新特性演示
// 状态与尺寸控制
const visible12 = ref(false)

// 可拖拽与调整大小
const visible13 = ref(false)

const handleZoom = (params: any) => {
  console.log('弹窗缩放:', params)
}

const handleResize = (params: any) => {
  console.log('弹窗大小调整:', params)
}

const handleMove = (params: any) => {
  console.log('弹窗移动:', params)
}

// 高级配置
const visible14 = ref(false)

const handleShow = () => {
  console.log('弹窗显示')
}

const handleHide = () => {
  console.log('弹窗隐藏')
}

// 自定义插槽
const visible15 = ref(false)
</script>

<style scoped lang="less">
.xmodal-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;

  h1 {
    text-align: center;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.85);
  }
}

.demo-section {
  margin-bottom: 32px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.85);
    border-left: 4px solid #1890ff;
    padding-left: 12px;
  }
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.code-example {
    margin-top: 20px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    overflow: hidden;

    h3 {
      margin: 0;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 600;
      background-color: #fafafa;
      border-bottom: 1px solid #d9d9d9;
      color: rgba(0, 0, 0, 0.85);
    }

    pre {
      margin: 0;
      padding: 16px;
      background-color: #fafafa;
      overflow-x: auto;

      code {
        font-family: Menlo, Monaco, 'Courier New', monospace;
        font-size: 13px;
        line-height: 1.6;
        color: rgba(0, 0, 0, 0.85);
      }
    }
  }

  /* 自定义插槽样式 */
  .custom-left,
  .custom-right {
    width: 150px;
    padding: 16px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  .custom-content {
    padding: 16px;
    flex: 1;
  }

  .custom-footer {
    display: flex;
    gap: 12px;
  }
</style>