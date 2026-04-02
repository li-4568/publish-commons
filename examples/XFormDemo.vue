<template>
  <div class="xform-demo">
    <h1>XForm 表单组件示例</h1>
    
    <section class="demo-section">
      <h2>基本用法</h2>
      <p>点击下方按钮打开表单弹框</p>
      
      <AButton type="primary" @click="showFormModal">
        打开表单
      </AButton>
    </section>

    <section class="demo-section">
      <h2>表单数据</h2>
      <pre>{{ JSON.stringify(submitData, null, 2) }}</pre>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref, h } from 'vue'
  import { message } from 'ant-design-vue'
  import { XForm } from '../src'
  import { Button as AButton } from 'ant-design-vue'
  import { openModal } from '../src/utils/modal'

  // 提交加载状态
  const loading = ref(false)
  // 表单引用
  const xFormRef = ref()
  // 提交的数据
  const submitData = ref<any>(null)

  // 表单配置数据
  const formData = {
    formList: [
      {
        prop: 'name',
        label: '姓名',
        type: 'input',
        placeholder: '请输入姓名',
        rules: [
          { required: true, message: '请输入姓名' }
        ]
      },
      {
        prop: 'age',
        label: '年龄',
        type: 'input',
        placeholder: '请输入年龄',
        props: {
          type: 'number'
        },
        rules: [
          { required: true, message: '请输入年龄' }
        ]
      },
      {
        prop: 'gender',
        label: '性别',
        type: 'select',
        placeholder: '请选择性别',
        options: [
          { label: '男', value: 'male' },
          { label: '女', value: 'female' }
        ],
        rules: [
          { required: true, message: '请选择性别' }
        ]
      },
      {
        prop: 'birthday',
        label: '生日',
        type: 'date',
        placeholder: '请选择生日',
        rules: [
          { required: true, message: '请选择生日' }
        ]
      },
      {
        prop: 'phone',
        label: '手机号',
        type: 'input',
        placeholder: '请输入手机号',
        rules: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
        ]
      },
      {
        prop: 'email',
        label: '邮箱',
        type: 'input',
        placeholder: '请输入邮箱',
        rules: [
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱' }
        ]
      }
    ],
    formListSet: {
      name: '',
      age: '',
      gender: '',
      birthday: '',
      phone: '',
      email: ''
    }
  }

  // 打开弹框
  const showFormModal = () => {
    openModal({
      title: '表单示例',
      width: 800,
      confirmButtonText: '提交',
      cancelButtonText: '取消',
      showFooter: true,
      component: XForm,
      componentProps: {
        paramsData: formData,
        colon: true,
        labelAlign: 'right',
        hideRequiredMark: false,
        layout: 'horizontal'
      },
      onConfirm: async (instance?: any) => {
        try {
          loading.value = true
          instance.setLoading(true)
          
          if (instance.componentRef) {
            const result = await instance.componentRef.handleSubmit()
            
            if (result.success) {
              submitData.value = result.data
              message.success('提交成功')
              instance.close()
            } else {
              message.error(result.error || '提交失败')
            }
          }
        } catch (error) {
          console.error('提交失败:', error)
          message.error('提交失败')
        } finally {
          loading.value = false
          instance.setLoading(false)
        }
      }
    })
  }

  // 处理确认（已移除，改用Modal.info的onOk）
  const handleOk = () => {
    // 不再使用
  }

  // 处理取消（已移除，改用Modal.info的onCancel）
  const handleCancel = () => {
    // 不再使用
  }
</script>

<style scoped lang="less">
  .xform-demo {
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

    p {
      margin-bottom: 16px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 1.6;
    }

    pre {
      margin: 0;
      padding: 16px;
      background-color: #fafafa;
      overflow-x: auto;
      border: 1px solid #d9d9d9;
      border-radius: 4px;

      code {
        font-family: Menlo, Monaco, 'Courier New', monospace;
        font-size: 13px;
        line-height: 1.6;
        color: rgba(0, 0, 0, 0.85);
      }
    }
  }

  .demo-row {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    width: 100%;
  }

  .demo-col {
    width: 300px;
    margin-bottom: 20px;
  }

  .demo-tip {
    margin-top: 16px;
    color: rgba(0, 0, 0, 0.65);
  }
</style>
