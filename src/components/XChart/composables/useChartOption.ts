import type { ChartDataItem, ChartType } from '../chart/chart'

interface OptionParams {
  dataSource: ChartDataItem[]
  componentType: ChartType
  option?: any
  optionFn?: (data: ChartDataItem[], type: ChartType, defaultOption: any) => any
}

/**
 * 深度合并对象
 */
const deepMerge = (target: any, source: any): any => {
  if (!target || typeof target !== 'object') return source
  if (!source || typeof source !== 'object') return source

  const result = { ...target }

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = deepMerge(result[key] || {}, source[key])
      } else {
        result[key] = source[key]
      }
    }
  }

  return result
}

/**
 * 管理图表配置生成
 */
export function useChartOption(
  generateOptionByType: (type: ChartType, data: ChartDataItem[]) => any
) {
  /**
   * 合并配置
   * 优先级: 自定义 option > 自动生成的配置
   */
  const mergeOption = (generatedOption: any, customOption?: any): any => {
    if (!generatedOption) return null
    if (!customOption) return generatedOption

    return deepMerge(generatedOption, customOption)
  }

  /**
   * 验证配置有效性
   */
  const validateOption = (option: any): boolean => {
    if (!option?.series?.length) {
      console.warn('[XChart] 生成的配置缺少有效的 series 字段')
      return false
    }
    return true
  }

  /**
   * 生成最终配置
   */
  const generateOption = (params: OptionParams): any => {
    const { dataSource, componentType, option, optionFn } = params

    // 1. 如果没有数据，返回 null
    if (!dataSource?.length) {
      return null
    }

    let finalOption: any

    // 2. 如果提供了自定义配置生成函数，优先使用
    if (optionFn) {
      const defaultOption = generateOptionByType(componentType, dataSource)
      finalOption = optionFn(dataSource, componentType, defaultOption)
    } else {
      // 3. 使用内置配置生成
      const generatedOption = generateOptionByType(componentType, dataSource)
      finalOption = mergeOption(generatedOption, option)
    }

    // 4. 验证并返回
    return validateOption(finalOption) ? finalOption : null
  }

  return {
    generateOption,
    mergeOption,
    validateOption,
  }
}
