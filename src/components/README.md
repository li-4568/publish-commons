# 组件分类

本组件库共包含 **27+** 个组件，按功能分为以下类别：

## 基础组件 (Basic)

通用基础 UI 组件，对应 Ant Design Vue 的基础组件封装。

| 组件 | 说明 | 对应 Ant Design |
|------|------|----------------|
| [XButton](./XButton/) | 按钮组件 | Button |
| [XInput](./XInput/) | 输入框集合 | Input |
| [XSelect](./XSelect/) | 选择器 | Select |
| [XCheckbox](./XCheckbox/) | 复选框 | Checkbox |
| [XRadio](./XRadio/) | 单选框 | Radio |
| [XTextarea](./XTextarea/) | 文本域 | Textarea |
| [XTooltip](./XTooltip/) | 文字提示 | Tooltip |
| [XPopover](./XPopover/) | 气泡卡片 | Popover |
| [XPopconfirm](./XPopconfirm/) | 气泡确认框 | Popconfirm |

## 表单组件 (Form)

表单相关组件，包含日期选择、级联选择等复杂表单控件。

| 组件 | 说明 | 依赖 |
|------|------|------|
| [XForm](./XForm/) | 表单容器 | Ant Design Vue |
| [XDatePicker](./XDatePicker/) | 日期选择 | dayjs |
| [XRangePicker](./XRangePicker/) | 日期范围选择 | dayjs |
| [XTimePicker](./XTimePicker/) | 时间选择 | dayjs |
| [XMonthPicker](./XMonthPicker/) | 月份选择 | dayjs |
| [XYearPicker](./XYearPicker/) | 年份选择 | dayjs |
| [XBothTimePicker](./XBothTimePicker/) | 日期时间选择 | dayjs |
| [XCascader](./XCascader/) | 级联选择 | Ant Design Vue |
| [XTreeSelect](./XTreeSelect/) | 树形选择 | Ant Design Vue |

## 数据展示 (Data Display)

用于展示大量数据的表格、树形、图表组件。

| 组件 | 说明 | 依赖 |
|------|------|------|
| [XTable](./XTable/) | 高级表格 | vxe-table |
| [XTree](./XTree/) | 树形控件 | Ant Design Vue |
| [XChart](./XChart/) | 图表组件 | ECharts |

## 高级组件 (Advanced)

复杂业务场景组件，通常依赖第三方库。

| 组件 | 说明 | 依赖 |
|------|------|------|
| [XTableSearch](./XTableSearch/) | 表格搜索 | - |
| [XEditor](./XEditor/) | 富文本编辑器 | wangEditor |
| [XImageCropper](./XImageCropper/) | 图片裁剪 | vue-cropper |
| [XNotification](./XNotification/) | 通知提醒 | Ant Design Vue |
| [XFloatButton](./XFloatButton/) | 浮动按钮 | Ant Design Vue |

## 文件预览 (Preview)

文件预览相关组件。

| 组件 | 说明 | 依赖 |
|------|------|------|
| [preview/XFilePreview](./preview/XFilePreview/) | 文件预览 | - |
| [preview/XVueOffice](./preview/XVueOffice/) | Office 文件预览 | @vue-office |
| [preview/XMedioPlay](./preview/XMedioPlay/) | 媒体播放 | - |

## 使用建议

1. **新项目**：建议从基础组件开始，逐步引入高级组件
2. **按需加载**：所有组件都支持按需引入，推荐配合 `unplugin-vue-components` 使用
3. **样式覆盖**：组件使用 `x-` 前缀的类名，可通过 CSS 变量覆盖样式

## 组件选择指南

| 场景 | 推荐组件 |
|------|----------|
| 简单数据表格 | XTable |
| 大数据量表格 | XTable (开启虚拟滚动) |
| 复杂表单 | XForm + 各种表单组件 |
| 数据可视化 | XChart |
| 文档预览 | preview 目录下的组件 |
