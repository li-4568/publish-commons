import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { XButton } from '../index'

describe('XButton', () => {
  it('应该正确渲染默认按钮', () => {
    const wrapper = mount(XButton, {
      slots: {
        default: '点击我',
      },
    })
    expect(wrapper.text()).toBe('点击我')
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('应该处理点击事件', async () => {
    const onClick = vi.fn()
    const wrapper = mount(XButton, {
      attrs: {
        onClick,
      },
    })
    await wrapper.find('button').trigger('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('禁用状态下应该阻止点击', async () => {
    const onClick = vi.fn()
    const wrapper = mount(XButton, {
      props: {
        disabled: true,
      },
      attrs: {
        onClick,
      },
    })
    await wrapper.find('button').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('加载状态应该显示加载图标', () => {
    const wrapper = mount(XButton, {
      props: {
        loading: true,
      },
    })
    expect(wrapper.find('.xbtn-loading').exists()).toBe(true)
  })

  it('应该支持不同的按钮类型', () => {
    const types = ['primary', 'default', 'dashed', 'text', 'link', 'success', 'warning', 'error'] as const
    types.forEach((type) => {
      const wrapper = mount(XButton, {
        props: { type },
      })
      expect(wrapper.find(`.xbtn-${type}`).exists()).toBe(true)
    })
  })

  it('应该支持不同的尺寸', () => {
    const sizes = ['large', 'middle', 'small'] as const
    sizes.forEach((size) => {
      const wrapper = mount(XButton, {
        props: { size },
      })
      expect(wrapper.find(`.xbtn-${size}`).exists()).toBe(true)
    })
  })

  it('应该支持危险按钮样式', () => {
    const wrapper = mount(XButton, {
      props: { danger: true },
    })
    expect(wrapper.find('.xbtn-danger').exists()).toBe(true)
  })

  it('应该支持幽灵按钮', () => {
    const wrapper = mount(XButton, {
      props: { ghost: true },
    })
    expect(wrapper.find('.xbtn-ghost').exists()).toBe(true)
  })

  it('应该支持块级按钮', () => {
    const wrapper = mount(XButton, {
      props: { block: true },
    })
    expect(wrapper.find('.xbtn-block').exists()).toBe(true)
  })

  it('应该支持图标', () => {
    const wrapper = mount(XButton, {
      props: { icon: '🔍' },
    })
    expect(wrapper.find('.xbtn-with-icon').exists()).toBe(true)
    expect(wrapper.find('.xbtn-custom-icon').exists()).toBe(true)
  })

  it('应该支持图标插槽', () => {
    const wrapper = mount(XButton, {
      slots: {
        icon: '<span class="custom-icon">⭐</span>',
      },
    })
    expect(wrapper.find('.xbtn-with-icon').exists()).toBe(true)
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
  })

  it('加载状态应该禁用按钮', () => {
    const onClick = vi.fn()
    const wrapper = mount(XButton, {
      props: { loading: true },
      attrs: { onClick },
    })
    expect(wrapper.find('.xbtn-loading').exists()).toBe(true)
    expect(wrapper.find('.xbtn-disabled').exists()).toBe(true)
  })

  it('应该同时支持加载和图标', () => {
    const wrapper = mount(XButton, {
      props: { loading: true, icon: '🔍' },
    })
    expect(wrapper.find('.xbtn-loading').exists()).toBe(true)
    expect(wrapper.find('.xbtn-with-icon').exists()).toBe(true)
  })

  it('应该正确传递原生属性', () => {
    const wrapper = mount(XButton, {
      attrs: {
        'data-testid': 'test-button',
        'aria-label': '测试按钮',
      },
    })
    expect(wrapper.find('button').attributes('data-testid')).toBe('test-button')
    expect(wrapper.find('button').attributes('aria-label')).toBe('测试按钮')
  })
})
