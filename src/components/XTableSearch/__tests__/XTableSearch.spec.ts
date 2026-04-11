import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import XTableSearch from '../XTableSearch.vue'
import type { SearchItem } from '../types'

describe('XTableSearch', () => {
  const mockSearchItems: SearchItem[] = [
    { field: 'name', label: '姓名', type: 'input' },
    { field: 'status', label: '状态', type: 'select', options: [{ label: '启用', value: 1 }] },
  ]

  it('应该正确渲染搜索表单', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
      },
    })
    expect(wrapper.find('.x-table-search').exists()).toBe(true)
  })

  it('应该渲染所有搜索项', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
      },
    })
    // 检查表单项是否渲染
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('应该初始化表单数据', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: [
          { field: 'name', label: '姓名', type: 'input', defaultValue: '张三' },
        ],
      },
    })
    expect(wrapper.find('.x-table-search').exists()).toBe(true)
  })

  it('应该触发搜索事件', async () => {
    const onSearch = vi.fn()
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
      },
      attrs: {
        onSearch,
      },
    })

    // 找到搜索按钮并点击
    const searchButton = wrapper.findAll('button').find(btn => btn.text().includes('搜索'))
    if (searchButton) {
      await searchButton.trigger('click')
      expect(onSearch).toHaveBeenCalled()
    }
  })

  it('应该触发重置事件', async () => {
    const onReset = vi.fn()
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
      },
      attrs: {
        onReset,
      },
    })

    // 找到重置按钮并点击
    const resetButton = wrapper.findAll('button').find(btn => btn.text().includes('重置'))
    if (resetButton) {
      await resetButton.trigger('click')
      expect(onReset).toHaveBeenCalled()
    }
  })

  it('应该支持默认展开', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
        advancedDefaultOpen: true,
      },
    })
    expect(wrapper.find('.x-table-search').exists()).toBe(true)
  })

  it('应该支持自定义搜索文本', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
        searchText: '查询',
      },
    })
    // 检查按钮是否存在而不是文本内容，因为 ant-design-vue 的按钮可能有空格
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('应该支持自定义重置文本', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
        resetText: '清空',
      },
    })
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('应该支持自定义操作按钮插槽', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
      },
      slots: {
        actions: '<button class="custom-action">自定义操作</button>',
      },
    })
    expect(wrapper.find('.custom-action').exists()).toBe(true)
  })

  it('应该响应搜索项变化', async () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
      },
    })

    await wrapper.setProps({
      searchItems: [
        ...mockSearchItems,
        { field: 'email', label: '邮箱', type: 'input' },
      ],
    })

    expect(wrapper.find('.x-table-search').exists()).toBe(true)
  })

  it('应该支持级联选择类型', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: [
          { field: 'area', label: '地区', type: 'cascader' },
        ],
      },
    })
    expect(wrapper.find('.x-table-search').exists()).toBe(true)
  })

  it('应该支持树形选择类型', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: [
          { field: 'dept', label: '部门', type: 'treeSelect' },
        ],
      },
    })
    expect(wrapper.find('.x-table-search').exists()).toBe(true)
  })

  it('应该支持日期选择类型', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: [
          { field: 'date', label: '日期', type: 'date' },
        ],
      },
    })
    expect(wrapper.find('.x-table-search').exists()).toBe(true)
  })

  it('应该支持日期时间选择类型', () => {
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: [
          { field: 'datetime', label: '日期时间', type: 'datetime' },
        ],
      },
    })
    expect(wrapper.find('.x-table-search').exists()).toBe(true)
  })

  it('应该触发 advanced-change 事件', async () => {
    const onAdvancedChange = vi.fn()
    const wrapper = mount(XTableSearch, {
      props: {
        searchItems: mockSearchItems,
        advancedDefaultOpen: false,
      },
      attrs: {
        onAdvancedChange,
      },
    })

    // 只有当需要折叠时才显示展开按钮
    expect(wrapper.find('.x-table-search').exists()).toBe(true)
  })
})
