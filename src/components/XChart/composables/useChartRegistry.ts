import { getChartRegistry } from '../registry'
import type { ChartType, ChartDataItem } from '../chart/chart'
import barOption from '../chart/barOption'
import pieOption from '../chart/pieOption'
import barRoundOption from '../chart/barRoundOption'
import lineOption from '../chart/lineOption'
import scatterOption from '../chart/scatterOption'
import radarOption from '../chart/radarOption'

/**
 * 图表类型配置参数
 */
interface ChartConfigParams {
  title: string
  unit: string
  xKey: string
  yKey: string
  isRoll?: boolean
  lineM?: boolean
  lineDefault?: string[]
  smooth?: boolean
  seriesKey?: string
  indicatorKey?: string
}

/**
 * 管理图表注册表和配置生成
 */
export function useChartRegistry(props: ChartConfigParams) {
  const chartRegistry = getChartRegistry()
  let builtInChartsRegistered = false

  /**
   * 注册内置图表类型
   */
  const registerBuiltInCharts = () => {
    if (builtInChartsRegistered) return

    chartRegistry.set('bar', barOption)
    chartRegistry.set('pie', pieOption)
    chartRegistry.set('barRound', barRoundOption)
    chartRegistry.set('line', lineOption)
    chartRegistry.set('scatter', scatterOption)
    chartRegistry.set('radar', radarOption)

    builtInChartsRegistered = true
  }

  /**
   * 根据图表类型生成配置
   */
  const generateOptionByType = (
    type: ChartType,
    data: ChartDataItem[]
  ): any => {
    const optionFn = chartRegistry.get(type)
    if (!optionFn) {
      console.warn(`[XChart] 未知的图表类型: ${type}`)
      return null
    }

    // 根据类型传递对应的参数
    switch (type) {
      case 'bar':
        return optionFn(data, props.title, props.unit, props.xKey, props.yKey, props.isRoll)
      case 'pie':
      case 'barRound':
        return optionFn(data, props.title, props.unit, props.xKey, props.yKey)
      case 'line':
        return optionFn(data, props.title, props.unit, props.xKey, props.yKey, props.lineM, props.lineDefault, props.smooth)
      case 'scatter':
        return optionFn(data, props.title, props.unit, props.xKey, props.yKey, props.seriesKey)
      case 'radar':
        return optionFn(data, props.title, props.unit, props.indicatorKey, props.yKey, props.seriesKey)
      default:
        return optionFn(data, props.title, props.unit, props.xKey, props.yKey)
    }
  }

  return {
    chartRegistry,
    registerBuiltInCharts,
    generateOptionByType,
  }
}
