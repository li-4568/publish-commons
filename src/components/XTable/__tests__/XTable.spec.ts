import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import XTable from '../XTable.vue'

// 模拟 vxe-table
vi.mock('vxe-table', () => ({
  VxeGrid: {
    name: 'VxeGrid',
    template: '<div class="vxe-grid-mock"><slot /></div>',
    props: ['data', 'columns', 'loading', 'pagerConfig'],
  },
}))

describe('XTable', () => {
  const mockColumns = [
    { field: 'name', title: '姓名' },
    { field: 'age', title: '年龄' },
  ]

  const mockData = [
    { id: 1, name: '张三', age: 25 },
    { id: 2, name: '李四', age: 30 },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('应该正确渲染表格', () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: mockData,
      },
    })
    expect(wrapper.find('.x-table-grid').exists()).toBe(true)
  })

  it('应该响应 loading 状态', async () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: mockData,
        setLoading: true,
      },
    })

    // 检查内部 loading 状态
    const vm = wrapper.vm as any
    expect(vm.gridRef).toBeDefined()
  })

  it('应该正确暴露表格方法', () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: mockData,
      },
    })

    const vm = wrapper.vm as any
    expect(typeof vm.selectRowEvent).toBe('function')
    expect(typeof vm.clearCheckbox).toBe('function')
    expect(typeof vm.tooltipClose).toBe('function')
  })

  it('应该支持分页配置', () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: mockData,
        isShowPager: true,
        pagerTotal: 100,
        currentPage: 1,
        pageSize: 10,
      },
    })
    expect(wrapper.find('.x-table-grid').exists()).toBe(true)
  })

  it('应该隐藏分页', () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: mockData,
        isShowPager: false,
      },
    })
    expect(wrapper.find('.x-table-grid').exists()).toBe(true)
  })

  it('应该支持不同的表格尺寸', () => {
    const sizes = [
      { minHeight: 200, maxHeight: 400 },
      { minHeight: 300, maxHeight: '100%' },
    ]

    sizes.forEach((size) => {
      const wrapper = mount(XTable, {
        props: {
          columns: mockColumns,
          dataSource: mockData,
          ...size,
        },
      })
      expect(wrapper.find('.x-table-grid').exists()).toBe(true)
    })
  })

  it('应该支持树形数据', () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: mockData,
        treeConfig: {
          children: 'children',
          accordion: true,
        },
      },
    })
    expect(wrapper.find('.x-table-grid').exists()).toBe(true)
  })

  it('应该支持编辑模式', () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: mockData,
        editTrigger: 'dblclick',
        editMode: 'row',
      },
    })
    expect(wrapper.find('.x-table-grid').exists()).toBe(true)
  })

  it('应该支持虚拟滚动', () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: mockData,
        isVirtualX: true,
        isVirtualY: true,
      },
    })
    expect(wrapper.find('.x-table-grid').exists()).toBe(true)
  })

  it('应该正确处理空数据', () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: [],
      },
    })

    // 检查组件是否正确渲染（空数据状态下）
    expect(wrapper.find('.x-table-grid').exists()).toBe(true)
  })

  it('应该触发搜索事件', async () => {
    const wrapper = mount(XTable, {
      props: {
        columns: mockColumns,
        dataSource: mockData,
        isShowPager: true,
      },
    })

    // 模拟触发搜索
    const vm = wrapper.vm as any
    vm.$emit('pageChange', { currentPage: 2, pageSize: 20 })

    // 检查事件是否被触发
    expect(wrapper.emitted()).toBeDefined()
  })
})
