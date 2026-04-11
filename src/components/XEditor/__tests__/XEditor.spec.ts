import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import XEditor from '../XEditor.vue'

// 模拟 wangEditor
vi.mock('@wangeditor/editor-for-vue', () => ({
  Editor: {
    name: 'Editor',
    template: '<div class="editor-mock"><slot /></div>',
    props: ['modelValue', 'defaultConfig', 'mode', 'readOnly'],
  },
  Toolbar: {
    name: 'Toolbar',
    template: '<div class="toolbar-mock"></div>',
    props: ['editor', 'defaultConfig', 'mode'],
  },
}))

describe('XEditor', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('应该正确渲染编辑器', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '<p>测试内容</p>',
      },
    })
    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
    expect(wrapper.find('.x-editor-wrapper').exists()).toBe(true)
  })

  it('应该应用自定义宽高', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        width: '500px',
        height: '400px',
      },
    })
    const editorWrapper = wrapper.find('.x-editor-wrapper')
    expect(editorWrapper.attributes('style')).toContain('width: 500px')
    expect(editorWrapper.attributes('style')).toContain('height: 400px')
  })

  it('应该支持只读模式', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '只读内容',
        readOnly: true,
      },
    })
    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该显示占位符', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        placeholder: '请输入内容...',
      },
    })
    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该触发 update:modelValue 事件', async () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '初始内容',
      },
    })

    // 模拟内容变化
    const vm = wrapper.vm as any
    vm.setContent('新内容')

    await flushPromises()
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('应该触发 change 事件', async () => {
    const onChange = vi.fn()
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '初始内容',
      },
      attrs: {
        onChange,
      },
    })

    // 模拟内容变化
    const vm = wrapper.vm as any
    vm.setContent('新内容')

    await flushPromises()
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('应该支持隐藏工具栏', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        toolbar: false,
      },
    })
    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该支持自定义工具栏配置', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        toolbar: ['bold', 'italic', 'underline'],
      },
    })
    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该支持详细的工具栏配置', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        toolbar: {
          excludeKeys: ['video'],
        },
      },
    })
    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该支持菜单配置', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        menuConfig: {
          insertImage: {
            onInsertedImage: vi.fn(),
          },
        },
      },
    })
    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该支持扩展配置', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        extendConfig: {
          scroll: false,
        },
      },
    })
    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该响应 modelValue 变化', async () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '初始内容',
      },
    })

    await wrapper.setProps({
      modelValue: '更新后的内容',
    })

    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该暴露正确的方法', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '测试内容',
      },
    })

    const vm = wrapper.vm as any
    expect(typeof vm.getEditor).toBe('function')
    expect(typeof vm.setContent).toBe('function')
    expect(typeof vm.getContent).toBe('function')
    expect(typeof vm.focus).toBe('function')
    expect(typeof vm.blur).toBe('function')
    expect(typeof vm.clear).toBe('function')
    expect(typeof vm.insertText).toBe('function')
    expect(typeof vm.getHtml).toBe('function')
    expect(typeof vm.getText).toBe('function')
  })

  it('应该正确设置和获取内容', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
      },
    })

    const vm = wrapper.vm as any
    vm.setContent('<p>新内容</p>')
    expect(vm.getContent()).toBe('<p>新内容</p>')
  })

  it('应该正确清空内容', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '有内容',
      },
    })

    const vm = wrapper.vm as any
    vm.clear()
    expect(vm.getContent()).toBe('')
  })

  it('应该触发 created 事件', async () => {
    const onCreated = vi.fn()
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        onCreated,
      },
    })

    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该触发 focus 事件', async () => {
    const onFocus = vi.fn()
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        onFocus,
      },
    })

    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该触发 blur 事件', async () => {
    const onBlur = vi.fn()
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        onBlur,
      },
    })

    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })

  it('应该触发 destroyed 事件', async () => {
    const onDestroyed = vi.fn()
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        onDestroyed,
      },
    })

    wrapper.unmount()
    expect(onDestroyed).toHaveBeenCalled()
  })

  it('应该支持默认值', () => {
    const wrapper = mount(XEditor, {
      props: {
        modelValue: '',
        defaultValue: '<p>默认内容</p>',
      },
    })
    expect(wrapper.find('.x-editor-container').exists()).toBe(true)
  })
})
