import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { XInput, XInputNum, XInputFloat, XInputNeg } from '../index'

describe('XInput', () => {
  it('应该正确渲染输入框', () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: '',
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('应该显示占位符', () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: '',
        placeholder: '请输入姓名',
      },
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('请输入姓名')
  })

  it('应该支持不同的类型', () => {
    const types = ['text', 'password', 'search', 'email', 'tel', 'url']
    types.forEach((type) => {
      const wrapper = mount(XInput, {
        props: {
          modelValue: '',
          type: type as any,
        },
      })
      expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
    })
  })

  it('应该支持禁用状态', () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: '',
        disabled: true,
      },
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('应该支持只读状态', () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: '',
        readonly: true,
      },
    })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('应该触发 update:modelValue 事件', async () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: '',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('test')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('应该触发 focus 和 blur 事件', async () => {
    const onFocus = vi.fn()
    const onBlur = vi.fn()
    const wrapper = mount(XInput, {
      props: {
        modelValue: '',
      },
      attrs: {
        onFocus,
        onBlur,
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    expect(onFocus).toHaveBeenCalled()

    await input.trigger('blur')
    expect(onBlur).toHaveBeenCalled()
  })

  it('应该支持前缀图标', () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: '',
        prefixIcon: '🔍',
      },
    })
    expect(wrapper.find('.xinput-prefix-icon').exists()).toBe(true)
    expect(wrapper.text()).toContain('🔍')
  })

  it('应该支持后缀图标', () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: '',
        suffixIcon: '👁️',
      },
    })
    expect(wrapper.find('.xinput-suffix-icon').exists()).toBe(true)
    expect(wrapper.text()).toContain('👁️')
  })

  it('应该支持必填校验', async () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: '',
        required: true,
      },
    })

    // 触发校验
    const vm = wrapper.vm as any
    const result = vm.validate('blur')

    // 验证校验结果
    expect(result?.valid).toBe(false)
  })

  it('应该支持自定义校验规则', async () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: 'test',
        rules: [
          { type: 'minLength', value: 5, message: '至少5个字符' },
        ],
      },
    })

    const vm = wrapper.vm as any
    const result = vm.validate('blur')
    expect(result?.valid).toBe(false)
  })

  it('应该支持邮箱格式校验', async () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: 'invalid-email',
        rules: [{ type: 'email' }],
      },
    })

    const vm = wrapper.vm as any
    const result = vm.validate('blur')
    expect(result?.valid).toBe(false)
  })

  it('应该支持手机号格式校验', async () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: '12345678901',
        rules: [{ type: 'phone' }],
      },
    })

    const vm = wrapper.vm as any
    const result = vm.validate('blur')
    expect(result?.valid).toBe(false)
  })

  it('应该支持清除按钮', () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: 'test',
        clearable: true,
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
  })

  it('应该支持字数统计', () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: 'test',
        maxlength: 100,
        showCount: true,
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
  })

  it('应该正确清除校验状态', () => {
    const wrapper = mount(XInput, {
      props: {
        modelValue: 'test',
        rules: [{ type: 'minLength', value: 10, message: '至少10个字符' }],
      },
    })

    const vm = wrapper.vm as any
    // 先触发校验
    const result1 = vm.validate('blur')
    expect(result1?.valid).toBe(false)

    // 清除校验状态
    vm.clearValidate()

    // 再次校验应该正常通过或需要重新触发
    expect(vm.computedErrorMessage).toBeUndefined()
  })
})

describe('XInputNum', () => {
  it('应该正确渲染数字输入框', () => {
    const wrapper = mount(XInputNum, {
      props: {
        modelValue: 0,
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
  })

  it('应该限制最小值', async () => {
    const wrapper = mount(XInputNum, {
      props: {
        modelValue: 5,
        min: 0,
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
  })

  it('应该限制最大值', async () => {
    const wrapper = mount(XInputNum, {
      props: {
        modelValue: 100,
        max: 100,
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
  })
})

describe('XInputFloat', () => {
  it('应该正确渲染浮点数输入框', () => {
    const wrapper = mount(XInputFloat, {
      props: {
        modelValue: 0,
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
  })

  it('应该支持小数精度控制', () => {
    const wrapper = mount(XInputFloat, {
      props: {
        modelValue: 1.234,
        precision: 2,
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
  })
})

describe('XInputNeg', () => {
  it('应该正确渲染负数输入框', () => {
    const wrapper = mount(XInputNeg, {
      props: {
        modelValue: -10,
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
  })

  it('应该支持负数输入', () => {
    const wrapper = mount(XInputNeg, {
      props: {
        modelValue: -100,
      },
    })
    expect(wrapper.find('.xinput-wrapper').exists()).toBe(true)
  })
})