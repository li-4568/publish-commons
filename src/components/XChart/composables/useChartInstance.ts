import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

export function useChartInstance(
  chartRef: any,
  options: {
    renderer: 'canvas' | 'svg'
    onClick: (params: any) => void
    onInit: (instance: any) => void
  }
) {
  const myChart = ref<any>(null)
  const isInitialized = ref(false)

  /**
   * 销毁图表实例
   */
  const dispose = () => {
    if (myChart.value) {
      myChart.value.dispose()
      myChart.value = null
      isInitialized.value = false
    }
  }

  /**
   * 初始化图表
   */
  const init = (option: any) => {
    if (!chartRef.value) return

    // 销毁旧实例
    dispose()

    // 创建新实例
    myChart.value = echarts.init(chartRef.value, undefined, {
      renderer: options.renderer,
    })

    // 绑定事件
    myChart.value.on('click', options.onClick)

    // 设置配置
    if (option?.series?.length > 0) {
      myChart.value.setOption(option)
      isInitialized.value = true
      options.onInit(myChart.value)
    } else {
      console.warn('[XChart] 初始化失败：配置无效')
      dispose()
    }
  }

  /**
   * 更新图表配置（不重新初始化）
   */
  const updateOption = (option: any) => {
    if (!myChart.value || !option) return

    if (option.series?.length > 0) {
      myChart.value.setOption(option, true)
    } else {
      console.warn('[XChart] 配置无效，跳过更新')
    }
  }

  /**
   * 调整图表大小
   */
  const resize = () => {
    myChart.value?.resize()
  }

  /**
   * 清除图表
   */
  const clear = () => {
    myChart.value?.clear()
  }

  /**
   * 派发 ECharts 动作
   */
  const dispatchAction = (action: any) => {
    myChart.value?.dispatchAction(action)
  }

  /**
   * 获取 ECharts 实例
   */
  const getInstance = () => myChart.value

  // 自动处理 resize
  onMounted(() => {
    window.addEventListener('resize', resize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    dispose()
  })

  return {
    myChart,
    isInitialized,
    init,
    dispose,
    updateOption,
    resize,
    clear,
    dispatchAction,
    getInstance,
  }
}
