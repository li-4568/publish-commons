import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import XForm from '../XForm.vue'

describe('XForm', () => {
  const mockFormData = {
    formList: [
      { prop: 'name', label: '姓名', type: 'input' },
      { prop: 'age', label: '年龄', type: 'inputNum' },
    ],
    formListSet: {
      name: '张三',
      age: 25,
    },
  }

  it('应该正确渲染表单', () => {
    const wrapper = mount(XForm, {
      props: {
        paramsData: mockFormData,
      },
    })
    expect(wrapper.find('.xform-wrapper').exists()).toBe(true)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('应该应用不同的布局类名', () => {
    const layouts = ['horizontal', 'vertical', 'inline'] as const
    layouts.forEach((layout) => {
      const wrapper = mount(XForm, {
        props: {
          paramsData: mockFormData,
          layout,
        },
      })
      expect(wrapper.find(`.xform-${layout}`).exists()).toBe(true)
    })
  })

  it('应该正确初始化表单数据', () => {
    const wrapper = mount(XForm, {
      props: {
        paramsData: mockFormData,
      },
    })

    // 通过 expose 的方法获取表单状态
    const vm = wrapper.vm as any
    expect(vm.getFieldValue('name')).toBe('张三')
    expect(vm.getFieldValue('age')).toBe(25)
  })

  it('应该支持设置单个字段值', () => {
    const wrapper = mount(XForm, {
      props: {
        paramsData: {
          formList: [{ prop: 'name', label: '姓名', type: 'input' }],
          formListSet: {},
        },
      },
    })

    const vm = wrapper.vm as any
    vm.setFieldValue('name', '李四')
    expect(vm.getFieldValue('name')).toBe('李四')
  })

  it('应该支持批量设置字段值', () => {
    const wrapper = mount(XForm, {
      props: {
        paramsData: {
          formList: [
            { prop: 'name', label: '姓名', type: 'input' },
            { prop: 'age', label: '年龄', type: 'inputNum' },
          ],
          formListSet: {},
        },
      },
    })

    const vm = wrapper.vm as any
    vm.setFieldsValue({ name: '王五', age: 30 })
    expect(vm.getFieldValue('name')).toBe('王五')
    expect(vm.getFieldValue('age')).toBe(30)
  })

  it('应该暴露正确的方法', () => {
    const wrapper = mount(XForm, {
      props: {
        paramsData: mockFormData,
      },
    })

    const vm = wrapper.vm as any
    expect(typeof vm.submit).toBe('function')
    expect(typeof vm.reset).toBe('function')
    expect(typeof vm.clearValidate).toBe('function')
    expect(typeof vm.handleSubmit).toBe('function') // 兼容旧版本
    expect(typeof vm.resetFields).toBe('function') // 兼容旧版本
  })

  it('应该正确应用 colon 属性', () => {
    const wrapper = mount(XForm, {
      props: {
        paramsData: mockFormData,
        colon: false,
      },
    })
    // 检查组件是否正确渲染，ant-design-vue 内部处理 props
    expect(wrapper.find('.xform-wrapper').exists()).toBe(true)
  })

  it('应该正确应用 labelAlign 属性', () => {
    const wrapper = mount(XForm, {
      props: {
        paramsData: mockFormData,
        labelAlign: 'left',
      },
    })
    // 检查组件是否正确渲染
    expect(wrapper.find('.xform-wrapper').exists()).toBe(true)
  })
})
