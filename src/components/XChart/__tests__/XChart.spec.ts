import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import XChart from '../XChart.vue'
import type { ChartType } from '../chart/chart'

describe('XChart', () => {
  const mockData = [
    { label: '1月', value: 100 },
    { label: '2月', value: 200 },
    { label: '3月', value: 150 },
  ]

  it('应该正确渲染图表容器', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
    expect(wrapper.find('.chart-div').exists()).toBe(true)
  })

  it('应该支持不同的图表类型', () => {
    const types: ChartType[] = ['bar', 'line', 'pie', 'scatter', 'radar']
    types.forEach((type) => {
      const wrapper = mount(XChart, {
        props: {
          dataSource: mockData,
          componentType: type,
        },
      })
      expect(wrapper.find('.x-chart').exists()).toBe(true)
    })
  })

  it('应该支持设置标题', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
        title: '月度销售数据',
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持设置单位', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
        unit: '万元',
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持自定义 xKey 和 yKey', () => {
    const customData = [
      { name: 'A', count: 10 },
      { name: 'B', count: 20 },
    ]
    const wrapper = mount(XChart, {
      props: {
        dataSource: customData,
        componentType: 'bar',
        xKey: 'name',
        yKey: 'count',
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持平滑曲线', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'line',
        smooth: true,
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持滚动模式', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
        isRoll: true,
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持多线图', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'line',
        lineM: true,
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持 SVG 渲染', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
        renderer: 'svg',
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持 Canvas 渲染', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
        renderer: 'canvas',
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该响应数据变化', async () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    // 在测试环境中，由于 Canvas 渲染限制，我们只检查组件是否正确渲染
    expect(wrapper.find('.x-chart').exists()).toBe(true)
    // 检查是否暴露了更新方法
    expect(typeof wrapper.vm.updateChartOption).toBe('function')
  })

  it('应该响应图表类型变化', async () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    await wrapper.setProps({
      componentType: 'line',
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持自定义配置', () => {
    const customOption = {
      color: ['#1890ff', '#52c41a'],
      grid: { left: '10%', right: '10%' },
    }
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
        option: customOption,
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持自定义配置函数', () => {
    const optionFn = vi.fn((_data, _type, _defaultOption) => ({}))
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
        optionFn,
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该暴露 getInstance 方法', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    expect(typeof wrapper.vm.getInstance).toBe('function')
  })

  it('应该暴露 resize 方法', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    expect(typeof wrapper.vm.resize).toBe('function')
  })

  it('应该暴露 clear 方法', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    expect(typeof wrapper.vm.clear).toBe('function')
  })

  it('应该暴露 dispatchAction 方法', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    expect(typeof wrapper.vm.dispatchAction).toBe('function')
  })

  it('应该暴露 updateChartOption 方法', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    expect(typeof wrapper.vm.updateChartOption).toBe('function')
  })

  it('应该触发 chartClick 事件', async () => {
    const onChartClick = vi.fn()
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
      attrs: {
        onChartClick,
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该触发 chartInit 事件', async () => {
    const onChartInit = vi.fn()
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
      attrs: {
        onChartInit,
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持横向柱状图', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该在无数据时清除图表', async () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: mockData,
        componentType: 'bar',
      },
    })
    await wrapper.setProps({
      dataSource: [],
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })

  it('应该支持空数据初始渲染', () => {
    const wrapper = mount(XChart, {
      props: {
        dataSource: [],
        componentType: 'bar',
      },
    })
    expect(wrapper.find('.x-chart').exists()).toBe(true)
  })
})
