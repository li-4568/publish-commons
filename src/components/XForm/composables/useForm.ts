import { reactive, ref, computed, toRaw, inject, onMounted } from 'vue'

export interface FormParams {
  formList: any[]
  formListSet?: Record<string, any>
}

export interface UseFormOptions {
  paramsData: FormParams
}

export function useForm({ paramsData }: UseFormOptions) {
  const hideLoading = inject<(() => void) | null>('hideLoading', null)
  const formRef = ref()

  // 表单状态 - 使用响应式对象存储表单数据
  // 根据 formList 初始化所有字段，确保每个字段都有初始值
  const initFormState = () => {
    const state: Record<string, any> = {}
    paramsData?.formList?.forEach((field: any) => {
      const key = field.prop || field.field
      if (key) {
        // 优先使用 formListSet 中的值，如果没有则使用 defaultValue 或 undefined
        state[key] = paramsData?.formListSet?.[key] ?? field.defaultValue ?? undefined
      }
    })
    return state
  }

  const formState = reactive<Record<string, any>>(initFormState())

  // 表单项配置 - 将 prop 映射为 field 以兼容 FormItemRender
  const formFields = computed(() => {
    return (paramsData?.formList || []).map((item: any) => ({
      ...item,
      field: item.prop || item.field
    }))
  })

  // 组件挂载后执行
  onMounted(() => {
    if (hideLoading && typeof hideLoading === 'function') {
      hideLoading()
    }
  })

  /**
   * 提交表单
   * 触发表单验证，通过后返回表单数据
   */
  const submit = (): Promise<{ success: boolean; data?: any; error?: any }> => {
    return new Promise((resolve, reject) => {
      if (!formRef.value) {
        reject({
          success: false,
          error: '表单引用不存在'
        })
        return
      }

      formRef.value
        .validateFields()
        .then(() => {
          const rawData = toRaw(formState)
          console.log('✅ 表单验证通过:', rawData)
          resolve({
            success: true,
            data: rawData
          })
        })
        .catch((error: any) => {
          console.log('❌ 表单验证失败:', error)
          reject({
            success: false,
            error
          })
        })
    })
  }

  /**
   * 重置表单
   * 恢复表单到初始状态
   */
  const reset = () => {
    if (formRef.value) {
      formRef.value.resetFields()
    }
  }

  /**
   * 清除表单校验状态
   * 移除所有错误提示
   */
  const clearValidate = () => {
    if (formRef.value) {
      formRef.value.clearValidate()
    }
  }

  /**
   * 设置表单字段值
   */
  const setFieldValue = (field: string, value: any) => {
    formState[field] = value
  }

  /**
   * 获取表单字段值
   */
  const getFieldValue = (field: string) => {
    return formState[field]
  }

  /**
   * 批量设置表单值
   */
  const setFieldsValue = (values: Record<string, any>) => {
    Object.keys(values).forEach((key) => {
      formState[key] = values[key]
    })
  }

  return {
    formRef,
    formState,
    formFields,
    submit,
    reset,
    clearValidate,
    setFieldValue,
    getFieldValue,
    setFieldsValue,
  }
}
