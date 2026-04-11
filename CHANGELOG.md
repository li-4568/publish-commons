# Changelog

所有显著的变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [Semantic Versioning](https://semver.org/lang/zh-CN/)。

## [Unreleased]

### Added
- 新增 `peerDependencies` 完整依赖声明（vxe-table、echarts 等）

## [1.0.5] - 2024-04-07

### Added
- 完善组件类型导出
- 优化 Vite 构建配置

## [1.0.4] - 2024-04-01

### Fixed
- 修复类型定义导出问题
- 优化样式加载

## [1.0.0] - 2024-03-24

### Added
- 初始版本发布
- 包含 27+ 个业务组件
- 基于 Vue 3 + TypeScript + Ant Design Vue
- 核心组件：
  - XButton - 增强按钮组件
  - XInput - 输入框集合（支持数字、负数、浮点数）
  - XSelect - 下拉选择器
  - XTable - 基于 vxe-table 的高级表格
  - XForm - 表单组件
  - XEditor - 富文本编辑器（wangEditor）
  - XChart - 图表组件（ECharts）
  - XDatePicker/XRangePicker - 日期选择器
  - XTree/XTreeSelect - 树形组件
  - XImageCropper - 图片裁剪
  - XNotification - 通知组件
  - XFloatButton - 浮动按钮
  - XTableSearch - 表格搜索组件
  - 更多...

### Features
- 支持按需引入
- 完整的 TypeScript 类型支持
- 基于 Vite 的构建工具
- 支持 ES Module 和 UMD 格式

[Unreleased]: https://github.com/liyujie/publish-commons/compare/v1.0.5...HEAD
[1.0.5]: https://github.com/liyujie/publish-commons/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/liyujie/publish-commons/compare/v1.0.0...v1.0.4
[1.0.0]: https://github.com/liyujie/publish-commons/releases/tag/v1.0.0
