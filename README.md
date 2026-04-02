# publish-commons

公共组件库，封装通用组件、业务需求组件和可定制组件，提高开发效率，实现组件化、模块化。

## 核心优势

- **AI 智能导入** - 支持 AI 辅助的组件智能识别与自动导入，根据上下文自动推荐最合适的组件
- **丰富的组件生态** - 涵盖表单、数据展示、反馈、导航等多种类型组件
- **TypeScript 支持** - 完整的类型定义，提供优秀的开发体验和代码提示
- **按需加载** - 支持组件按需引入，减少打包体积
- **主题定制** - 灵活的样式配置，支持自定义主题

## 技术栈

- **框架**: Vue 3 (Composition API，`<script setup>` 语法)
- **语言**: TypeScript
- **UI 库**: Ant Design Vue (^4.0)
- **构建工具**: Vite
- **样式**: Less

## 安装

```bash
npm install publish-commons
# 或
pnpm add publish-commons
```

## 使用方式

### 全局引入

```typescript
import { createApp } from 'vue'
import PublishCommons from 'publish-commons'
import 'publish-commons/dist/style.css'

const app = createApp(App)
app.use(PublishCommons)
```

### 按需引入

```typescript
import { XButton, XTable } from 'publish-commons'
import 'publish-commons/dist/style.css'

export default {
  components: { XButton, XTable }
}
```

#### 按需引入单个组件

```typescript
import { XButton } from 'publish-commons'
import { XTable } from 'publish-commons'
import 'publish-commons/dist/style.css'

export default {
  components: { XButton, XTable }
}
```

## 组件列表

| 组件名称 | 描述 |
|---------|------|
| [XButton](#xbutton) | 按钮组件，支持多种类型、尺寸和自定义样式 |
| [XInput](#xinput) | 输入框组件，支持多种类型、尺寸、验证规则和自定义样式 |
| [XSelect](#xselect) | 下拉选择组件，支持单选、多选、标签模式等功能 |
| [XDatePicker](#xdatepicker) | 日期选择组件，支持多种日期格式、范围选择等功能 |
| [XCascader](#xcascader) | 级联选择组件，支持单选、多选、自定义选项等功能 |
| [XCheckbox](#xcheckbox) | 复选框组件，支持单独使用和分组使用 |
| [XRadio](#xradio) | 单选框组件，支持单独使用和分组使用 |
| [XPopover](#xpopover) | 弹出框组件，支持多种触发方式和位置 |
| [XTooltip](#xtooltip) | 提示框组件，用于显示简短的提示信息 |
| [XTree](#xtree) | 树形组件，支持选择、展开、拖拽等功能 |
| [XTreeSelect](#xtreeselect) | 树形选择组件，支持单选、多选、搜索等功能 |
| [XPopconfirm](#xpopconfirm) | 确认弹窗组件，用于需要用户确认操作的场景 |
| [XNotification](#xnotification) | 通知组件，支持四种通知类型，提供编程式调用和组件两种使用方式 |
| [XFloatButton](#xfloatbutton) | 悬浮按钮组件，用于在页面角落显示固定的操作按钮 |
| [XTable](#xtable) | 表格组件，支持分页、排序、筛选、自定义列等功能 |
| [XEditor](#xeditor) | 富文本编辑器组件，基于wangEditor封装，支持多种配置和自定义 |
| [XImageCropper](#ximagcropper) | 图片裁剪组件，基于vue-cropper封装，支持多种配置和自定义 |
| [XTableSearch](#xtablesearch) | 表格搜索组件，支持多类型搜索项、高级搜索和自定义操作 |

## 工具函数

### 文件操作工具

| 函数名称 | 描述 |
|---------|------|
| [previewFile](#previewfile) | 预览文件，支持图片、视频、PDF、Excel、Word等多种文件类型 |
| [downloadFile](#downloadfile) | 下载文件，支持指定文件名和URL |
| [printFile](#printfile) | 打印文件，支持PDF等可打印文件类型 |

### XButton

基于 Ant Design Vue Button 封装的增强按钮组件，支持多种类型、尺寸和自定义样式。

#### Props

| 名称     | 类型                                                     | 默认值      | 说明          |
| -------- | -------------------------------------------------------- | ----------- | ------------- |
| type     | `'primary' \| 'default' \| 'dashed' \| 'text' \| 'link' \| 'success' \| 'error' \| 'warning'` | `'default'` | 按钮类型      |
| size     | `'large' \| 'middle' \| 'small'`                         | `'middle'`  | 按钮尺寸      |
| disabled | `boolean`                                                | `false`     | 是否禁用      |
| loading  | `boolean`                                                | `false`     | 是否加载中    |
| icon     | `string`                                                 | `''`        | 图标名称/字符 |
| ghost    | `boolean`                                                | `false`     | 是否幽灵按钮  |
| danger   | `boolean`                                                | `false`     | 是否危险按钮  |
| block    | `boolean`                                                | `false`     | 是否块级按钮  |
| ripple   | `boolean`                                                | `true`      | 是否启用波纹效果 |

#### Events

| 名称  | 说明     | 回调参数                      |
| ----- | -------- | ----------------------------- |
| click | 点击事件 | `(event: MouseEvent) => void` |

#### Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 按钮内容   |
| icon    | 自定义图标 |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XButton type="primary">主要按钮</XButton>

  <!-- 带图标 -->
  <XButton type="primary" icon="✓">确认</XButton>

  <!-- 加载状态 -->
  <XButton type="primary" loading>加载中</XButton>

  <!-- 自定义图标插槽 -->
  <XButton type="primary">
    <template #icon>
      <span>⭐</span>
    </template>
    收藏
  </XButton>

  <!-- 不同类型的按钮 -->
  <XButton type="default">默认按钮</XButton>
  <XButton type="dashed">虚线按钮</XButton>
  <XButton type="text">文本按钮</XButton>
  <XButton type="link">链接按钮</XButton>
  <XButton type="success">成功按钮</XButton>
  <XButton type="error">错误按钮</XButton>
  <XButton type="warning">警告按钮</XButton>

  <!-- 不同尺寸的按钮 -->
  <XButton type="primary" size="large">大号按钮</XButton>
  <XButton type="primary" size="middle">中号按钮</XButton>
  <XButton type="primary" size="small">小号按钮</XButton>
</template>

<script setup lang="ts">
import { XButton } from 'publish-commons'
</script>
```

### XInput

基于 Ant Design Vue Input 封装的增强输入框组件，支持多种类型、尺寸、验证规则和自定义样式。

#### Props

| 名称               | 类型                                  | 默认值              | 说明                                   |
|--------------------|---------------------------------------|---------------------|----------------------------------------|
| modelValue         | `string \| number`                    | `''`                | 输入框内容                             |
| type               | `'text' \| 'password' \| 'number' \| 'search' \| 'tel' \| 'url' \| 'email' \| 'textarea'` | `'text'`            | 输入框类型                             |
| size               | `'large' \| 'middle' \| 'small'`      | `'middle'`          | 输入框尺寸                             |
| placeholder        | `string`                               | `''`                | 占位提示文字                           |
| disabled           | `boolean`                              | `false`             | 是否禁用                               |
| readonly           | `boolean`                              | `false`             | 是否只读                               |
| clearable          | `boolean`                              | `false`             | 是否显示清除按钮                       |
| maxlength          | `number`                               | -                   | 最大输入长度                           |
| showCount          | `boolean`                              | `false`             | 是否显示字数统计                       |
| prefixIcon         | `string`                               | -                   | 前缀图标                               |
| suffixIcon         | `string`                               | -                   | 后缀图标                               |
| required           | `boolean`                              | `false`             | 是否必填                               |
| rules              | `ValidationRule[]`                     | -                   | 校验规则数组                           |
| validateTrigger    | `ValidationTrigger[]`                  | `['change', 'blur']`| 校验触发时机                           |
| validateOnChange   | `boolean`                              | `true`              | 是否在输入变化时自动校验               |
| errorMessage       | `string`                               | -                   | 自定义错误提示信息                     |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 输入值变化事件           | `(value: string) => void`                 |
| input              | 实时输入事件             | `(value: string, event: Event) => void`   |
| change             | 值改变事件（失焦后）     | `(value: string, event: Event) => void`   |
| focus              | 聚焦事件                 | `(event: FocusEvent) => void`             |
| blur               | 失焦事件                 | `(event: FocusEvent) => void`             |
| clear              | 清除事件                 | `() => void`                              |
| pressEnter         | 按下回车事件             | `(event: KeyboardEvent) => void`          |
| validate           | 校验结果事件             | `(valid: boolean, message?: string) => void` |

#### Slots

| 名称         | 说明             | 参数   |
|--------------|------------------|--------|
| prefix       | 自定义前缀内容   | -      |
| suffix       | 自定义后缀内容   | -      |
| addonBefore  | 前置标签内容     | -      |
| addonAfter   | 后置标签内容     | -      |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XInput v-model="value1" placeholder="请输入内容" />

  <!-- 不同类型的输入框 -->
  <XInput v-model="value2" type="text" placeholder="文本输入" />
  <XInput v-model="value3" type="password" placeholder="密码输入" />
  <XInput v-model="value4" type="number" placeholder="数字输入" />
  <XInput v-model="value5" type="search" placeholder="搜索输入" />

  <!-- 不同尺寸的输入框 -->
  <XInput v-model="value6" size="large" placeholder="大号输入框" />
  <XInput v-model="value7" size="middle" placeholder="中号输入框" />
  <XInput v-model="value8" size="small" placeholder="小号输入框" />

  <!-- 带图标的输入框 -->
  <XInput v-model="value9" prefix-icon="👤" placeholder="用户名" />
  <XInput v-model="value10" suffix-icon="📧" placeholder="邮箱" />

  <!-- 带清除按钮的输入框 -->
  <XInput v-model="value11" clearable placeholder="可清除的输入框" />

  <!-- 带字数统计的输入框 -->
  <XInput v-model="value12" :maxlength="100" show-count placeholder="限制100字符" />

  <!-- 带前后标签的输入框 -->
  <XInput v-model="value13" placeholder="请输入金额">
    <template #addonBefore>¥</template>
  </XInput>
  <XInput v-model="value14" placeholder="请输入网址">
    <template #addonAfter>.com</template>
  </XInput>

  <!-- 带校验规则的输入框 -->
  <XInput
    v-model="value15"
    placeholder="请输入邮箱"
    :rules="[{ type: 'email', message: '请输入有效的邮箱地址' }]"
    validateOnChange
  />

  <!-- 带错误提示的输入框 -->
  <XInput v-model="value16" error-message="请输入正确的格式" placeholder="错误状态" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XInput } from 'publish-commons'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
const value12 = ref('')
const value13 = ref('')
const value14 = ref('')
const value15 = ref('')
const value16 = ref('')
</script>
```

### XSelect

基于 Ant Design Vue Select 封装的下拉选择组件，支持单选、多选、标签模式等功能。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `string  number  (string  number)[]` | `''`        | 绑定值                                 |
| size               | `'large'  'middle'  'small'`      | `'middle'`  | 下拉框尺寸                             |
| mode               | `'multiple'  'tags'  undefined`   | `undefined` | 下拉框模式，支持单选、多选、标签模式   |
| options            | `SelectOption[]`                      | `[]`        | 选项数据                               |
| placeholder        | `string`                               | `''`        | 占位提示文字                           |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| clearable          | `boolean`                              | `false`     | 是否显示清除按钮                       |
| required           | `boolean`                              | `false`     | 是否必填                               |
| maxTagCount        | `number`                               | -           | 最大显示标签数量（仅在多选或标签模式下生效） |
| errorMessage       | `string`                               | -           | 自定义错误提示信息                     |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: string  number  (string  number)[]) => void` |
| change             | 值变化事件               | `(value: string  number  (string  number)[]) => void` |
| openChange         | 下拉框打开/关闭事件      | `(open: boolean) => void`                 |
| focus              | 聚焦事件                 | `(event: FocusEvent) => void`             |
| blur               | 失焦事件                 | `(event: FocusEvent) => void`             |
| clear              | 清除事件                 | `() => void`                              |
| tagRemove          | 标签移除事件             | `(removedTag: string  number) => void`  |

#### Slots

| 名称             | 说明               | 参数                                  |
|------------------|--------------------|---------------------------------------|
| prefix           | 自定义前缀内容     | -                                     |
| suffix           | 自定义后缀内容     | -                                     |
| option           | 自定义选项内容     | `{ option: SelectOption }`            |
| tagRender        | 自定义标签内容     | `{ label, value, closable, onClose }` |
| dropdownRender   | 下拉框底部内容     | `{ menu, props }`                     |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XSelect v-model="value1" :options="options" placeholder="请选择" />

  <!-- 多选模式 -->
  <XSelect v-model="value2" :options="options" placeholder="请选择" mode="multiple" />

  <!-- 标签模式 -->
  <XSelect v-model="value3" :options="options" placeholder="请选择" mode="tags" />

  <!-- 不同尺寸 -->
  <XSelect v-model="value4" :options="options" placeholder="大号" size="large" />
  <XSelect v-model="value5" :options="options" placeholder="中号" size="middle" />
  <XSelect v-model="value6" :options="options" placeholder="小号" size="small" />

  <!-- 带清除按钮 -->
  <XSelect v-model="value7" :options="options" placeholder="可清除" clearable />

  <!-- 禁用状态 -->
  <XSelect v-model="value8" :options="options" placeholder="禁用状态" disabled />

  <!-- 自定义选项 -->
  <XSelect v-model="value9" :options="options" placeholder="自定义选项">
    <template #option="{ option }">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>{{ option.label }}</span>
        <span style="color: #999; font-size: 12px;">{{ option.value }}</span>
      </div>
    </template>
  </XSelect>

  <!-- 自定义标签 -->
  <XSelect v-model="value10" :options="options" placeholder="自定义标签" mode="multiple">
    <template #tagRender="{ label, value, closable, onClose }">
      <span style="background: #e6f7ff; padding: 0 8px; border-radius: 4px;">
        {{ label }}
        <span v-if="closable" @click="onClose" style="margin-left: 4px; cursor: pointer;">×</span>
      </span>
    </template>
  </XSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XSelect } from 'publish-commons'

// 基础选项数据
const options = [
  { value: '1', label: '选项一' },
  { value: '2', label: '选项二' },
  { value: '3', label: '选项三' },
  { value: '4', label: '选项四' },
  { value: '5', label: '选项五' }
]

// 单选值
const value1 = ref('')

// 多选值
const value2 = ref<string[]>([])

// 标签模式值
const value3 = ref<string[]>([])

// 不同尺寸
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')

// 带清除按钮
const value7 = ref('')

// 禁用状态
const value8 = ref('')

// 自定义选项
const value9 = ref('')

// 自定义标签
const value10 = ref<string[]>([])
</script>
```

### XTable

基于 vxe-table 封装的表格组件，支持分页、排序、筛选、自定义列等功能。

#### Props

| 名称           | 类型          | 默认值  | 说明                           |
| -------------- | ------------- | ------- | ------------------------------ |
| dataSource     | `any[]`       | `[]`    | 表格数据源                     |
| columns        | `TableColumnConfig[]` | `[]` | 表格列配置                     |
| setLoading     | `boolean`     | `false` | 是否显示加载状态               |
| pagerTotal     | `number`      | `0`     | 分页总条数                     |
| currentPage    | `number`      | `1`     | 当前页码                       |
| pageSize       | `number`      | `10`    | 每页条数                       |
| isShowPager    | `boolean`     | `true`  | 是否显示分页                   |
| pageLayouts    | `string[]`    | -       | 分页布局                       |
| keyField       | `string`      | -       | 主键字段，用于行标识           |
| rowConfig      | `TableRowConfig` | -    | 行配置                         |
| sortConfig     | `TableSortConfig` | -   | 排序配置                       |
| editConfig     | `TableEditConfig` | -   | 编辑配置                       |
| virtualConfig  | `TableVirtualConfig` | - | 虚拟滚动配置                   |
| pagerConfig    | `TablePagerConfig` | -  | 分页配置                       |

#### Events

| 名称       | 说明             | 回调参数                                             |
| ---------- | ---------------- | -------------------------------------------------- |
| pageChange | 分页变化事件     | `(params: { currentPage: number; pageSize: number }) => void` |
| sortChange | 排序变化事件     | `(params: any) => void`                            |
| cellClick  | 单元格点击事件   | `(params: any) => void`                            |
| editActivated | 编辑激活事件    | `(params: any) => void`                            |
| editClosed | 编辑关闭事件     | `(params: any) => void`                            |

#### Slots

| 名称    | 说明                | 参数                |
| ------- | ------------------- | ------------------- |
| default | 自定义表格内容      | -                   |
| [field] | 自定义列内容        | `{ row, column, $index }` |
| action  | 操作列自定义内容    | `{ row, column, $index }` |

#### 使用示例

```vue
<template>
  <!-- 基础表格 -->
  <XTable
    :dataSource="tableData"
    :columns="columns"
  />

  <!-- 带分页的表格 -->
  <XTable
    :dataSource="tableData"
    :columns="columns"
    :pagerTotal="total"
    :currentPage="currentPage"
    :pageSize="pageSize"
    :setLoading="loading"
    @pageChange="handlePageChange"
  >
    <!-- 自定义操作列 -->
    <template #action="{ row }">
      <XButton type="primary" size="small" @click="handleEdit(row)">编辑</XButton>
      <XButton type="error" size="small" @click="handleDelete(row)">删除</XButton>
    </template>
  </XTable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XTable, XButton } from 'publish-commons'

// 表格数据
const tableData = ref([
  { id: 1, name: '张三', age: 25, status: 'active' },
  { id: 2, name: '李四', age: 30, status: 'inactive' },
  { id: 3, name: '王五', age: 35, status: 'active' }
])

// 列配置
const columns = [
  { field: 'name', title: '姓名', width: 120 },
  { field: 'age', title: '年龄', width: 80 },
  { field: 'status', title: '状态', width: 100 },
  { 
    title: '操作', 
    width: 180, 
    slots: { 
      default: 'action' // 使用 action 插槽
    }
  }
]

// 分页
const total = ref(100)
const currentPage = ref(1)
const pageSize = ref(10)
const loading = ref(false)

// 分页变化处理
const handlePageChange = (params: { currentPage: number; pageSize: number }) => {
  loading.value = true
  // 模拟加载数据
  setTimeout(() => {
    currentPage.value = params.currentPage
    pageSize.value = params.pageSize
    loading.value = false
  }, 1000)
}

// 编辑处理
const handleEdit = (row: any) => {
  console.log('编辑', row)
}

// 删除处理
const handleDelete = (row: any) => {
  console.log('删除', row)
}
</script>
```

### XDatePicker

基于 Ant Design Vue DatePicker 封装的日期选择组件，支持多种日期格式、范围选择等功能。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `string  number  Date  [Date, Date]  [string, string]  [number, number]` | - | 绑定值                                 |
| size               | `'large'  'middle'  'small'`      | `'middle'`  | 日期选择器尺寸                         |
| type               | `'date'  'datetime'  'month'  'year'  'week'  'daterange'  'datetimerange'` | `'date'` | 日期选择器类型                         |
| placeholder        | `string`                               | `''`        | 占位提示文字                           |
| startPlaceholder   | `string`                               | -           | 开始日期占位符（仅在范围选择器时有效） |
| endPlaceholder     | `string`                               | -           | 结束日期占位符（仅在范围选择器时有效） |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| clearable          | `boolean`                              | `false`     | 是否显示清除按钮                       |
| required           | `boolean`                              | `false`     | 是否必填                               |
| error              | `boolean`                              | `false`     | 是否为错误状态                         |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: XDatePickerProps['modelValue']) => void` |
| change             | 值变化事件               | `(value: XDatePickerProps['modelValue']) => void` |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XDatePicker v-model="dateValue" placeholder="选择日期" />

  <!-- 不同类型 -->
  <XDatePicker v-model="datetimeValue" type="datetime" placeholder="选择日期时间" />
  <XDatePicker v-model="monthValue" type="month" placeholder="选择月份" />
  <XDatePicker v-model="yearValue" type="year" placeholder="选择年份" />
  <XDatePicker v-model="weekValue" type="week" placeholder="选择周" />

  <!-- 日期范围选择 -->
  <XDatePicker v-model="rangeValue" type="daterange" placeholder="选择日期范围" />
  <XDatePicker v-model="datetimeRangeValue" type="datetimerange" placeholder="选择日期时间范围" />

  <!-- 不同尺寸 -->
  <XDatePicker v-model="largeValue" size="large" placeholder="大号" />
  <XDatePicker v-model="middleValue" size="middle" placeholder="中号" />
  <XDatePicker v-model="smallValue" size="small" placeholder="小号" />

  <!-- 带清除按钮 -->
  <XDatePicker v-model="clearableValue" clearable placeholder="可清除" />

  <!-- 禁用状态 -->
  <XDatePicker v-model="disabledValue" disabled placeholder="禁用状态" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XDatePicker } from 'publish-commons'

// 基础用法
const dateValue = ref('')

// 不同类型
const datetimeValue = ref('')
const monthValue = ref('')
const yearValue = ref('')
const weekValue = ref('')

// 范围选择
const rangeValue = ref(['', ''])
const datetimeRangeValue = ref(['', ''])

// 不同尺寸
const largeValue = ref('')
const middleValue = ref('')
const smallValue = ref('')

// 带清除按钮
const clearableValue = ref('')

// 禁用状态
const disabledValue = ref('')
</script>
```

### XCascader

基于 Ant Design Vue Cascader 封装的级联选择组件，支持单选、多选、自定义选项等功能。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `ValueType`                           | -           | 绑定值                                 |
| options            | `CascaderOption[]`                    | `[]`        | 选项数据                               |
| size               | `'large'  'middle'  'small'`      | `'middle'`  | 级联选择器尺寸                         |
| placeholder        | `string`                               | `'请选择'`  | 占位提示文字                           |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| clearable          | `boolean`                              | `false`     | 是否显示清除按钮                       |
| multiple           | `boolean`                              | `false`     | 是否多选                               |
| changeOnSelect     | `boolean`                              | `false`     | 是否选择即改变                         |
| showCheckedStrategy| `ShowCheckedStrategy`                 | `'SHOW_PARENT'` | 显示策略（多选时有效）             |
| status             | `'error'  'warning'  ''`           | `''`        | 状态                                   |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: ValueType  null) => void`      |
| change             | 选择变化事件             | `(value: ValueType  null, selectedOptions: CascaderOption[]) => void` |
| clear              | 清除事件                 | `() => void`                              |
| focus              | 聚焦事件                 | `(event: FocusEvent) => void`             |
| blur               | 失焦事件                 | `(event: FocusEvent) => void`             |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XCascader v-model="value1" :options="options" placeholder="请选择" />

  <!-- 多选模式 -->
  <XCascader v-model="value2" :options="options" placeholder="请选择" multiple />

  <!-- 选择即改变 -->
  <XCascader v-model="value3" :options="options" placeholder="请选择" changeOnSelect />

  <!-- 不同尺寸 -->
  <XCascader v-model="value4" :options="options" placeholder="大号" size="large" />
  <XCascader v-model="value5" :options="options" placeholder="中号" size="middle" />
  <XCascader v-model="value6" :options="options" placeholder="小号" size="small" />

  <!-- 带清除按钮 -->
  <XCascader v-model="value7" :options="options" placeholder="可清除" clearable />

  <!-- 禁用状态 -->
  <XCascader v-model="value8" :options="options" placeholder="禁用状态" disabled />

  <!-- 错误状态 -->
  <XCascader v-model="value9" :options="options" placeholder="错误状态" status="error" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XCascader } from 'publish-commons'

// 基础选项数据
const options = [
  {
    value: '1',
    label: '中国',
    children: [
      {
        value: '11',
        label: '北京',
        children: [
          { value: '111', label: '朝阳区' },
          { value: '112', label: '海淀区' },
          { value: '113', label: '东城区' }
        ]
      },
      {
        value: '12',
        label: '上海',
        children: [
          { value: '121', label: '浦东新区' },
          { value: '122', label: '黄浦区' },
          { value: '123', label: '徐汇区' }
        ]
      }
    ]
  },
  {
    value: '2',
    label: '美国',
    children: [
      {
        value: '21',
        label: '纽约',
        children: [
          { value: '211', label: '曼哈顿' },
          { value: '212', label: '布鲁克林' }
        ]
      },
      {
        value: '22',
        label: '洛杉矶',
        children: [
          { value: '221', label: '好莱坞' },
          { value: '222', label: '比佛利山庄' }
        ]
      }
    ]
  }
]

// 单选值
const value1 = ref('')

// 多选值
const value2 = ref([])

// 选择即改变
const value3 = ref('')

// 不同尺寸
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')

// 带清除按钮
const value7 = ref('')

// 禁用状态
const value8 = ref('')

// 错误状态
const value9 = ref('')
</script>
```

### XCheckbox

基于 Ant Design Vue Checkbox 封装的复选框组件，支持单独使用和分组使用。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `boolean`                              | `false`     | 绑定值（单独使用时）                   |
| value              | `any`                                 | -           | 选项值（在 CheckboxGroup 中使用时）    |
| size               | `'large'  'middle'  'small'`      | `'middle'`  | 复选框尺寸                             |
| label              | `string  VueNode`                    | -           | 标签文本                               |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| indeterminate      | `boolean`                              | `false`     | 是否为不确定状态                       |
| autofocus          | `boolean`                              | `false`     | 是否自动获取焦点                       |
| required           | `boolean`                              | `false`     | 是否必填                               |
| status             | `'error'  'warning'  ''`           | `''`        | 状态                                   |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: boolean  null) => void`        |
| change             | 状态变化事件             | `(checked: boolean) => void`              |
| click              | 点击事件                 | `(event: MouseEvent) => void`             |
| focus              | 聚焦事件                 | `(event: FocusEvent) => void`             |
| blur               | 失焦事件                 | `(event: FocusEvent) => void`             |

#### Slots

| 名称               | 说明                     |
|--------------------|--------------------------|
| default            | 标签内容                 |

### XCheckboxGroup

基于 Ant Design Vue CheckboxGroup 封装的复选框组组件，用于管理一组复选框。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `any[]`                               | `[]`        | 绑定值                                 |
| size               | `'large'  'middle'  'small'`      | `'middle'`  | 复选框组尺寸                           |
| disabled           | `boolean`                              | `false`     | 是否禁用所有选项                       |
| name               | `string`                               | -           | 表单名称                               |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: any[]) => void`                  |
| change             | 状态变化事件             | `(value: any[]) => void`                  |

#### 使用示例

```vue
<template>
  <!-- 单独使用 -->
  <XCheckbox v-model="checked1">同意协议</XCheckbox>
  <XCheckbox v-model="checked2" disabled>禁用状态</XCheckbox>
  <XCheckbox v-model="checked3" indeterminate>不确定状态</XCheckbox>

  <!-- 不同尺寸 -->
  <XCheckbox v-model="checked4" size="large">大号</XCheckbox>
  <XCheckbox v-model="checked5" size="middle">中号</XCheckbox>
  <XCheckbox v-model="checked6" size="small">小号</XCheckbox>

  <!-- 使用 label 属性 -->
  <XCheckbox v-model="checked7" label="使用 label 属性" />

  <!-- 分组使用 -->
  <XCheckboxGroup v-model="checkedList">
    <XCheckbox value="1">选项一</XCheckbox>
    <XCheckbox value="2">选项二</XCheckbox>
    <XCheckbox value="3">选项三</XCheckbox>
    <XCheckbox value="4" disabled>禁用选项</XCheckbox>
  </XCheckboxGroup>

  <!-- 分组使用不同尺寸 -->
  <XCheckboxGroup v-model="checkedList2" size="large">
    <XCheckbox value="a">选项A</XCheckbox>
    <XCheckbox value="b">选项B</XCheckbox>
    <XCheckbox value="c">选项C</XCheckbox>
  </XCheckboxGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XCheckbox, XCheckboxGroup } from 'publish-commons'

// 单独使用
const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)

// 不同尺寸
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)

// 使用 label 属性
const checked7 = ref(false)

// 分组使用
const checkedList = ref<string[]>([])
const checkedList2 = ref<string[]>([])
</script>
```

### XRadio

基于 Ant Design Vue Radio 封装的单选框组件，支持单独使用和分组使用。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `any`                                 | -           | 绑定值（单独使用时）                   |
| value              | `any`                                 | -           | 选项值（在 RadioGroup 中使用时）       |
| checked            | `boolean`                              | `false`     | 是否选中（单独使用时）                 |
| size               | `'large'  'small'  'default'  'middle'` | `'middle'` | 单选框尺寸                             |
| label              | `string  VueNode`                    | -           | 标签文本                               |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| autofocus          | `boolean`                              | `false`     | 是否自动获取焦点                       |
| required           | `boolean`                              | `false`     | 是否必填                               |
| name               | `string`                               | -           | 表单名称                               |
| status             | `'error'  'warning'  ''`           | `''`        | 状态                                   |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: any) => void`                    |
| change             | 状态变化事件             | `(value: any) => void`                    |
| click              | 点击事件                 | `(event: MouseEvent) => void`             |
| focus              | 聚焦事件                 | `(event: FocusEvent) => void`             |
| blur               | 失焦事件                 | `(event: FocusEvent) => void`             |

#### Slots

| 名称               | 说明                     |
|--------------------|--------------------------|
| default            | 标签内容                 |

### XRadioGroup

基于 Ant Design Vue RadioGroup 封装的单选框组组件，用于管理一组单选框。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `any`                                 | -           | 绑定值                                 |
| defaultValue       | `any`                                 | -           | 默认值                                 |
| size               | `'large'  'small'  'default'  'middle'` | `'middle'` | 单选框组尺寸                           |
| disabled           | `boolean`                              | `false`     | 是否禁用所有选项                       |
| name               | `string`                               | -           | 表单名称                               |
| direction          | `'horizontal'  'vertical'`          | `'horizontal'` | 单选框方向                            |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: any) => void`                    |
| change             | 状态变化事件             | `(value: any) => void`                    |

#### Slots

| 名称               | 说明                     |
|--------------------|--------------------------|
| default            | 自定义内容               |

#### 使用示例

```vue
<template>
  <!-- 单独使用 -->
  <XRadio v-model="radioValue" value="1">单独使用</XRadio>

  <!-- 不同尺寸 -->
  <XRadio v-model="radioValue2" value="a" size="large">大号</XRadio>
  <XRadio v-model="radioValue2" value="b" size="middle">中号</XRadio>
  <XRadio v-model="radioValue2" value="c" size="small">小号</XRadio>

  <!-- 禁用状态 -->
  <XRadio v-model="radioValue3" value="disabled" disabled>禁用状态</XRadio>

  <!-- 分组使用 -->
  <XRadioGroup v-model="radioGroupValue">
    <XRadio value="1">选项一</XRadio>
    <XRadio value="2">选项二</XRadio>
    <XRadio value="3">选项三</XRadio>
    <XRadio value="4" disabled>禁用选项</XRadio>
  </XRadioGroup>

  <!-- 分组垂直排列 -->
  <XRadioGroup v-model="radioGroupValue2" direction="vertical">
    <XRadio value="a">选项A</XRadio>
    <XRadio value="b">选项B</XRadio>
    <XRadio value="c">选项C</XRadio>
  </XRadioGroup>

  <!-- 分组使用不同尺寸 -->
  <XRadioGroup v-model="radioGroupValue3" size="small">
    <XRadio value="x">选项X</XRadio>
    <XRadio value="y">选项Y</XRadio>
    <XRadio value="z">选项Z</XRadio>
  </XRadioGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XRadio, XRadioGroup } from 'publish-commons'

// 单独使用
const radioValue = ref('1')

// 不同尺寸
const radioValue2 = ref('a')

// 禁用状态
const radioValue3 = ref('disabled')

// 分组使用
const radioGroupValue = ref('1')
const radioGroupValue2 = ref('a')
const radioGroupValue3 = ref('x')
</script>
```

### XPopover

基于 Ant Design Vue Popover 封装的弹出框组件，支持多种触发方式和位置。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| title              | `string  VueNode`                    | -           | 弹出框标题                             |
| content            | `string  VueNode`                    | -           | 弹出框内容                             |
| htmlContent        | `string`                               | -           | HTML内容（支持富文本）                 |
| placement          | `PopoverPlacement`                     | `'top'`     | 弹出框位置                             |
| trigger            | `PopoverTrigger`                       | `'hover'`   | 触发方式                               |
| disabled           | `boolean`                              | `false`     | 是否禁用弹出框                         |
| modelValue         | `boolean`                              | `false`     | 弹出框是否可见                         |
| openDelay          | `number`                               | -           | 延迟显示时间（毫秒）                   |
| closeDelay         | `number`                               | -           | 延迟隐藏时间（毫秒）                   |
| autoAdjustOverflow | `boolean`                              | `true`      | 是否允许点击外部区域关闭弹出框         |
| getPopupContainer  | `() => HTMLElement`                    | -           | 是否将弹出框内容渲染到 body 元素下     |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 可见性变化事件           | `(visible: boolean) => void`              |
| visibleChange      | 弹出框显示/隐藏时触发    | `(visible: boolean) => void`              |
| popupVisibleChange | 弹出框显示动画开始时触发 | `(visible: boolean) => void`              |
| click              | 点击弹出框内容时触发     | `(event: MouseEvent) => void`             |

#### Slots

| 名称               | 说明                     |
|--------------------|--------------------------|
| default            | 触发弹出框的元素         |
| title              | 弹出框标题               |
| content            | 弹出框内容               |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XPopover title="标题" content="内容">
    <XButton type="primary">悬浮显示</XButton>
  </XPopover>

  <!-- 不同触发方式 -->
  <XPopover title="点击触发" content="点击显示" trigger="click">
    <XButton type="default">点击显示</XButton>
  </XPopover>
  <XPopover title="聚焦触发" content="聚焦显示" trigger="focus">
    <XInput placeholder="聚焦显示" style="width: 200px;" />
  </XPopover>

  <!-- 不同位置 -->
  <XPopover title="位置：top" content="顶部显示" placement="top">
    <XButton>顶部</XButton>
  </XPopover>
  <XPopover title="位置：right" content="右侧显示" placement="right">
    <XButton>右侧</XButton>
  </XPopover>
  <XPopover title="位置：bottom" content="底部显示" placement="bottom">
    <XButton>底部</XButton>
  </XPopover>
  <XPopover title="位置：left" content="左侧显示" placement="left">
    <XButton>左侧</XButton>
  </XPopover>

  <!-- 使用插槽 -->
  <XPopover>
    <template #default>
      <XButton type="primary">自定义内容</XButton>
    </template>
    <template #title>
      <span style="color: red;">自定义标题</span>
    </template>
    <template #content>
      <div>
        <p>这是自定义内容</p>
        <XButton type="link" @click="handlePopoverClick">点击按钮</XButton>
      </div>
    </template>
  </XPopover>

  <!-- 使用 HTML 内容 -->
  <XPopover htmlContent="<p style='color: blue;'>这是<b>HTML</b>内容</p>">
    <XButton>HTML内容</XButton>
  </XPopover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XPopover, XButton, XInput } from 'publish-commons'

const handlePopoverClick = () => {
  console.log('点击了弹出框内的按钮')
}
</script>
```

### XTooltip

基于 Ant Design Vue Tooltip 封装的提示框组件，用于显示简短的提示信息。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| title              | `string  VueNode`                    | -           | 提示框内容                             |
| htmlTitle          | `string`                               | -           | HTML内容（支持富文本）                 |
| placement          | `TooltipPlacement`                     | `'top'`     | 提示框位置                             |
| trigger            | `TooltipTrigger`                       | `'hover'`   | 触发方式                               |
| disabled           | `boolean`                              | `false`     | 是否禁用提示框                         |
| modelValue         | `boolean`                              | `false`     | 提示框是否可见                         |
| openDelay          | `number`                               | -           | 延迟显示时间（毫秒）                   |
| closeDelay         | `number`                               | -           | 延迟隐藏时间（毫秒）                   |
| autoAdjustOverflow | `boolean`                              | `true`      | 是否自动调整溢出                       |
| getPopupContainer  | `() => HTMLElement`                    | -           | 获取弹出层容器                         |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 可见性变化事件           | `(visible: boolean) => void`              |
| visibleChange      | 提示框显示/隐藏时触发    | `(visible: boolean) => void`              |
| popupVisibleChange | 提示框显示动画开始时触发 | `(visible: boolean) => void`              |

#### Slots

| 名称               | 说明                     |
|--------------------|--------------------------|
| default            | 触发提示框的元素         |
| title              | 提示框内容               |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XTooltip title="这是提示内容">
    <XButton type="primary">悬停显示</XButton>
  </XTooltip>

  <!-- 不同触发方式 -->
  <XTooltip title="点击触发" trigger="click">
    <XButton type="default">点击显示</XButton>
  </XTooltip>
  <XTooltip title="聚焦触发" trigger="focus">
    <XInput placeholder="聚焦显示" style="width: 200px;" />
  </XTooltip>

  <!-- 不同位置 -->
  <XTooltip title="顶部" placement="top">
    <XButton>顶部</XButton>
  </XTooltip>
  <XTooltip title="右侧" placement="right">
    <XButton>右侧</XButton>
  </XTooltip>
  <XTooltip title="底部" placement="bottom">
    <XButton>底部</XButton>
  </XTooltip>
  <XTooltip title="左侧" placement="left">
    <XButton>左侧</XButton>
  </XTooltip>

  <!-- 使用 HTML 内容 -->
  <XTooltip htmlTitle="<b>粗体</b> 提示内容">
    <XButton>HTML内容</XButton>
  </XTooltip>

  <!-- 使用插槽 -->
  <XTooltip>
    <template #default>
      <XButton type="primary">自定义内容</XButton>
    </template>
    <template #title>
      <div>
        <p style="color: red;">自定义标题</p>
        <p>多行内容</p>
      </div>
    </template>
  </XTooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XTooltip, XButton, XInput } from 'publish-commons'
</script>
```

### XTree

基于 Ant Design Vue Tree 封装的树形组件，支持选择、展开、拖拽等功能。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| treeData           | `XTreeNode[]`                         | `[]`        | 树数据                                 |
| defaultExpandAll   | `boolean`                              | `false`     | 是否默认展开所有节点                   |
| defaultExpandedKeys| `(string  number)[]`                | `[]`        | 默认展开的节点 key 数组                |
| defaultSelectedKeys| `(string  number)[]`                | `[]`        | 默认选中的节点 key 数组                |
| defaultCheckedKeys | `(string  number)[]`                | `[]`        | 默认选中复选框的节点 key 数组          |
| selectedKeys       | `(string  number)[]`                | -           | 选中的节点 key 数组（受控）            |
| checkedKeys        | `(string  number)[]  { checked: (string  number)[]; halfChecked: (string  number)[] }` | - | 选中复选框的节点 key 数组（受控） |
| expandedKeys       | `(string  number)[]`                | -           | 展开的节点 key 数组（受控）            |
| selectable         | `boolean`                              | `true`      | 是否支持单选                           |
| checkable          | `boolean`                              | `false`     | 是否支持复选框                         |
| draggable          | `boolean`                              | `false`     | 是否支持拖拽                           |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| showLine           | `boolean`                              | `true`      | 是否显示连接线                         |
| showIcon           | `boolean`                              | `true`      | 是否显示图标                           |
| switcherIcon       | `VueNode`                              | -           | 展开/折叠图标                          |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:selectedKeys | 选中节点变化时触发       | `(keys: (string  number)[]) => void` |
| update:checkedKeys  | 复选框状态变化时触发     | `(keys: (string  number)[]  { checked: (string  number)[]; halfChecked: (string  number)[] }) => void` |
| update:expandedKeys | 展开节点变化时触发       | `(keys: (string  number)[]) => void` |
| select             | 节点点击时触发           | `(selectedKeys: (string  number)[], info: any) => void` |
| check              | 节点复选框点击时触发     | `(checkedKeys: (string  number)[], info: any) => void` |
| expand             | 节点展开/折叠时触发      | `(expandedKeys: (string  number)[], info: any) => void` |
| rightClick         | 节点右键菜单时触发       | `(info: any) => void`                    |
| doubleClick        | 节点双击时触发           | `(info: any) => void`                    |
| dragStart          | 拖拽开始时触发           | `(info: any) => void`                    |
| dragEnd            | 拖拽结束时触发           | `(info: any) => void`                    |
| dragEnter          | 拖拽进入节点时触发       | `(info: any) => void`                    |
| dragLeave          | 拖拽离开节点时触发       | `(info: any) => void`                    |
| drop               | 拖拽放置时触发           | `(info: any) => void`                    |

#### Slots

| 名称               | 说明                     | 参数                                  |
|--------------------|--------------------------|---------------------------------------|
| title              | 自定义节点内容           | `(record: XTreeNode) => VueNode`      |
| icon               | 自定义树节点图标         | `(record: XTreeNode) => VueNode`      |
| switcherIcon       | 自定义展开/折叠图标      | -                                     |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XTree :treeData="treeData" />

  <!-- 可选择 -->
  <XTree :treeData="treeData" :selectedKeys="selectedKeys" @update:selectedKeys="handleSelect" />

  <!-- 可复选 -->
  <XTree :treeData="treeData" checkable :checkedKeys="checkedKeys" @update:checkedKeys="handleCheck" />

  <!-- 默认展开所有节点 -->
  <XTree :treeData="treeData" defaultExpandAll />

  <!-- 自定义节点内容 -->
  <XTree :treeData="treeData">
    <template #title="{ record }">
      <span>
        <span>{{ record.title }}</span>
        <span style="color: #999; margin-left: 8px;">{{ record.key }}</span>
      </span>
    </template>
  </XTree>

  <!-- 自定义图标 -->
  <XTree :treeData="treeData">
    <template #icon="{ record }">
      <span v-if="record.children && record.children.length > 0">📁</span>
      <span v-else>📄</span>
    </template>
  </XTree>

  <!-- 可拖拽 -->
  <XTree :treeData="treeData" draggable @drop="handleDrop" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XTree } from 'publish-commons'

// 基础树数据
const treeData = ref([
  {
    key: '1',
    title: '父节点1',
    children: [
      {
        key: '1-1',
        title: '子节点1-1'
      },
      {
        key: '1-2',
        title: '子节点1-2',
        children: [
          {
            key: '1-2-1',
            title: '子节点1-2-1'
          },
          {
            key: '1-2-2',
            title: '子节点1-2-2'
          }
        ]
      }
    ]
  },
  {
    key: '2',
    title: '父节点2',
    children: [
      {
        key: '2-1',
        title: '子节点2-1'
      },
      {
        key: '2-2',
        title: '子节点2-2'
      }
    ]
  }
])

// 选中节点
const selectedKeys = ref<string[]>([])
const handleSelect = (keys: string[]) => {
  selectedKeys.value = keys
  console.log('选中节点:', keys)
}

// 复选节点
const checkedKeys = ref<string[]>([])
const handleCheck = (keys: string[] | { checked: string[]; halfChecked: string[] }) => {
  checkedKeys.value = keys
  console.log('复选节点:', keys)
}

// 拖拽放置
const handleDrop = (info: any) => {
  console.log('拖拽放置:', info)
  // 处理拖拽逻辑
}
</script>
```

### XTreeSelect

基于 Ant Design Vue TreeSelect 封装的树形选择组件，支持单选、多选、搜索等功能。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `string  string[]  number  number[]` | -           | 绑定值                                 |
| treeData           | `TreeNode[]`                          | `[]`        | 树形数据                               |
| mode               | `'single'  'multiple'`              | `'single'`  | 选择模式                               |
| size               | `'large'  'middle'  'small'`      | `'middle'`  | 树选择器尺寸                           |
| placeholder        | `string`                               | `'请选择'`  | 占位提示文字                           |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| clearable          | `boolean`                              | `false`     | 是否显示清除按钮                       |
| searchable         | `boolean`                              | `false`     | 是否可搜索                             |
| showSearch         | `boolean`                              | `false`     | 是否显示搜索输入框                     |
| showIcon           | `boolean`                              | `false`     | 是否显示图标                           |
| treeDefaultExpandAll | `boolean`                              | `false`     | 是否展开所有节点                       |
| treeDefaultExpandedKeys | `(string  number)[]`                | `[]`        | 默认展开的节点key                     |
| treeCheckable      | `boolean`                              | `false`     | 是否显示复选框（多选模式下有效）       |
| treeCheckStrictly  | `boolean`                              | `true`      | 选中时是否勾选父节点（多选模式下有效） |
| maxTagCount        | `number`                               | -           | 多选时最多显示的标签数                 |
| required           | `boolean`                              | `false`     | 是否必填                               |
| errorMessage       | `string`                               | -           | 错误信息                               |
| emptyText          | `string`                               | `'暂无数据'` | 空数据提示文本                         |
| filterTreeNode     | `boolean  ((input: string, treeNode: any) => boolean)` | - | 节点过滤函数                   |
| fieldNames         | `{ key?: string; title?: string; children?: string }` | - | 自定义字段名                       |
| getPopupContainer  | `(triggerNode: HTMLElement) => HTMLElement` | - | 获取弹窗容器                     |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: XTreeSelectProps['modelValue']) => void` |
| change             | 值改变事件               | `(value: XTreeSelectProps['modelValue']) => void` |
| openChange         | 下拉框打开/关闭事件      | `(open: boolean) => void`                 |
| search             | 搜索事件                 | `(value: string) => void`                 |
| select             | 选择事件                 | `(value: string  number, node: TreeNode) => void` |
| treeExpand         | 节点展开/收起事件        | `(expandedKeys: (string  number)[]) => void` |
| clear              | 清除事件                 | `() => void`                              |

#### Slots

| 名称               | 说明                     | 参数                                  |
|--------------------|--------------------------|---------------------------------------|
| title              | 自定义标题渲染           | `{ node: TreeNode }`                  |
| icon               | 自定义图标               | `{ node: TreeNode }`                  |
| empty              | 空状态插槽               | -                                     |
| tagRender          | 标签渲染插槽（多选模式下） | `{ label: string; value: string  number; closable: boolean; onClose: () => void }` |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XTreeSelect v-model="value1" :treeData="treeData" placeholder="请选择" />

  <!-- 多选模式 -->
  <XTreeSelect v-model="value2" :treeData="treeData" mode="multiple" placeholder="多选" />

  <!-- 可搜索 -->
  <XTreeSelect v-model="value3" :treeData="treeData" searchable placeholder="可搜索" />

  <!-- 显示复选框 -->
  <XTreeSelect v-model="value4" :treeData="treeData" mode="multiple" treeCheckable placeholder="显示复选框" />

  <!-- 不同尺寸 -->
  <XTreeSelect v-model="value5" :treeData="treeData" size="large" placeholder="大号" />
  <XTreeSelect v-model="value6" :treeData="treeData" size="middle" placeholder="中号" />
  <XTreeSelect v-model="value7" :treeData="treeData" size="small" placeholder="小号" />

  <!-- 带清除按钮 -->
  <XTreeSelect v-model="value8" :treeData="treeData" clearable placeholder="可清除" />

  <!-- 自定义标题渲染 -->
  <XTreeSelect v-model="value9" :treeData="treeData">
    <template #title="{ node }">
      <span>
        {{ node.title }}
        <span style="color: #999; margin-left: 8px;">({{ node.key }})</span>
      </span>
    </template>
  </XTreeSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XTreeSelect } from 'publish-commons'

// 树形数据
const treeData = ref([
  {
    key: '1',
    value: '1',
    title: '父节点1',
    children: [
      { key: '1-1', value: '1-1', title: '子节点1-1' },
      { key: '1-2', value: '1-2', title: '子节点1-2', children: [
        { key: '1-2-1', value: '1-2-1', title: '子节点1-2-1' },
        { key: '1-2-2', value: '1-2-2', title: '子节点1-2-2' }
      ]}
    ]
  },
  {
    key: '2',
    value: '2',
    title: '父节点2',
    children: [
      { key: '2-1', value: '2-1', title: '子节点2-1' },
      { key: '2-2', value: '2-2', title: '子节点2-2' }
    ]
  }
])

// 单选值
const value1 = ref('')

// 多选值
const value2 = ref<string[]>([])

// 可搜索
const value3 = ref('')

// 显示复选框
const value4 = ref<string[]>([])

// 不同尺寸
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')

// 带清除按钮
const value8 = ref('')

// 自定义标题渲染
const value9 = ref('')
</script>
```

### XPopconfirm

基于 Ant Design Vue Popconfirm 封装的确认弹窗组件，用于需要用户确认操作的场景。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| title              | `string  number`                     | -           | 确认框标题                             |
| description        | `string  number`                     | -           | 确认框描述                             |
| placement          | `XPopconfirmPlacement`                 | `'top'`     | 弹出位置                               |
| trigger            | `XPopconfirmTrigger`                   | `'click'`   | 触发方式                               |
| modelValue         | `boolean`                              | `false`     | 弹窗是否可见                           |
| defaultOpen        | `boolean`                              | `false`     | 默认是否打开                           |
| okText             | `string`                               | `'确定'`    | 确认按钮文本                           |
| cancelText         | `string`                               | `'取消'`    | 取消按钮文本                           |
| okType             | `'primary'  'danger'  'default'`   | `'primary'` | 确认按钮类型                           |
| okButtonProps      | `Record<string, any>`                  | -           | 确认按钮属性                           |
| cancelButtonProps  | `Record<string, any>`                  | -           | 取消按钮属性                           |
| closeable          | `boolean`                              | `true`      | 是否显示关闭图标                       |
| closeIcon          | `VueNode`                              | -           | 关闭图标                               |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| icon               | `VueNode`                              | -           | 自定义图标                             |
| iconColor          | `string`                               | -           | 图标颜色                               |
| clickOutsideToClose | `boolean`                              | `true`      | 点击外部是否关闭                       |
| getPopupContainer  | `() => HTMLElement`                    | -           | 获取弹窗容器                           |
| autoAdjustOverflow | `boolean`                              | `true`      | 是否自动调整溢出                       |
| zIndex             | `number`                               | -           | 弹窗层级                               |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| confirm            | 确认事件                 | `() => void`                              |
| cancel             | 取消事件                 | `() => void`                              |
| update:modelValue  | 可见性变化事件           | `(visible: boolean) => void`              |
| open-change        | 弹窗打开/关闭时触发      | `(visible: boolean) => void`              |
| open               | 弹窗打开时触发           | `() => void`                              |
| close              | 弹窗关闭时触发           | `() => void`                              |

#### Slots

| 名称               | 说明                     |
|--------------------|--------------------------|
| default            | 触发确认框的元素         |
| title              | 确认框标题               |
| description        | 确认框描述               |
| okText             | 确认按钮文本             |
| cancelText         | 取消按钮文本             |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XPopconfirm title="确定要删除吗？" @confirm="handleConfirm" @cancel="handleCancel">
    <XButton type="error">删除</XButton>
  </XPopconfirm>

  <!-- 带描述 -->
  <XPopconfirm title="删除确认" description="此操作将永久删除该记录，是否继续？" @confirm="handleConfirm">
    <XButton type="error">删除</XButton>
  </XPopconfirm>

  <!-- 自定义按钮文本 -->
  <XPopconfirm title="确认操作" okText="确认" cancelText="取消" @confirm="handleConfirm">
    <XButton type="primary">确认操作</XButton>
  </XPopconfirm>

  <!-- 不同触发方式 -->
  <XPopconfirm title="悬停触发" trigger="hover" @confirm="handleConfirm">
    <XButton type="default">悬停显示</XButton>
  </XPopconfirm>

  <!-- 不同位置 -->
  <XPopconfirm title="底部显示" placement="bottom" @confirm="handleConfirm">
    <XButton type="default">底部显示</XButton>
  </XPopconfirm>

  <!-- 自定义按钮类型 -->
  <XPopconfirm title="危险操作" okType="danger" @confirm="handleConfirm">
    <XButton type="danger">危险操作</XButton>
  </XPopconfirm>

  <!-- 使用插槽 -->
  <XPopconfirm @confirm="handleConfirm">
    <template #default>
      <XButton type="primary">自定义内容</XButton>
    </template>
    <template #title>
      <span style="color: red;">自定义标题</span>
    </template>
    <template #description>
      <p>这是自定义描述</p>
    </template>
    <template #okText>
      <span>👍 确认</span>
    </template>
    <template #cancelText>
      <span>👎 取消</span>
    </template>
  </XPopconfirm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XPopconfirm, XButton } from 'publish-commons'

const handleConfirm = () => {
  console.log('确认操作')
}

const handleCancel = () => {
  console.log('取消操作')
}
</script>
```

### XNotification

基于 Ant Design Vue Notification 封装的通知组件，支持四种通知类型（信息、成功、警告、错误），提供编程式调用和组件两种使用方式。

#### 编程式调用

```typescript
// 导入通知工具函数
import { notification } from 'publish-commons'

// 显示信息类型通知
notification.info({
  title: '提示',
  message: '这是一条信息通知'
})

// 显示成功类型通知
notification.success({
  title: '成功',
  message: '操作成功'
})

// 显示警告类型通知
notification.warning({
  title: '警告',
  message: '这是一条警告通知'
})

// 显示错误类型通知
notification.error({
  title: '错误',
  message: '操作失败'
})

// 自定义配置
notification({
  type: 'success',
  title: '成功',
  message: '操作成功',
  duration: 5000, // 5秒后自动关闭
  placement: 'topRight', // 显示位置
  closeable: true, // 显示关闭按钮
  onClick: () => console.log('通知被点击'),
  onClose: () => console.log('通知被关闭')
})
```

#### 组件方式使用

```vue
<template>
  <div>
    <XButton type="primary" @click="showNotification">显示通知</XButton>
    
    <!-- 直接使用组件 -->
    <XNotification
      v-model:open="notificationVisible"
      type="success"
      title="成功"
      message="操作成功"
      placement="topRight"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XNotification, XButton, notification } from 'publish-commons'

const notificationVisible = ref(false)

const showNotification = () => {
  notificationVisible.value = true
  // 或使用编程式调用
  // notification.success({ title: '成功', message: '操作成功' })
}
</script>
```

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| type               | `'info'  'success'  'warning'  'error'` | `'info'`    | 通知类型                               |
| title              | `string`                               | -           | 通知标题                               |
| message            | `string`                               | -           | 通知内容                               |
| duration           | `number`                               | `4500`      | 自动关闭的时间（毫秒），设为0则不自动关闭 |
| closeable          | `boolean`                              | `true`      | 是否显示关闭按钮                       |
| placement          | `'topLeft'  'topRight'  'bottomLeft'  'bottomRight'` | `'topRight'` | 显示位置                      |
| key                | `string`                               | -           | 唯一标识                               |
| icon               | `any`                                  | -           | 自定义图标                             |
| closeIcon          | `any`                                  | -           | 自定义关闭图标                         |
| onClick            | `() => void`                          | -           | 点击事件                               |
| onClose            | `() => void`                          | -           | 关闭事件                               |

#### API 方法

| 方法名             | 说明                     | 参数                                  | 返回值                                  |
|--------------------|--------------------------|---------------------------------------|-----------------------------------------|
| notification       | 显示通知                 | `options: XNotificationOptions`        | `XNotificationInstance`                 |
| notification.info  | 显示信息类型通知         | `options: Omit<XNotificationOptions, 'type'>` | `XNotificationInstance`         |
| notification.success | 显示成功类型通知       | `options: Omit<XNotificationOptions, 'type'>` | `XNotificationInstance`         |
| notification.warning | 显示警告类型通知       | `options: Omit<XNotificationOptions, 'type'>` | `XNotificationInstance`         |
| notification.error | 显示错误类型通知         | `options: Omit<XNotificationOptions, 'type'>` | `XNotificationInstance`         |
| notification.closeAll | 关闭所有通知           | -                                     | -                                       |
| notification.close | 根据key关闭指定通知     | `key: string`                         | -                                       |

### XFloatButton

基于 Ant Design Vue Button 封装的悬浮按钮组件，用于在页面角落显示固定的操作按钮。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `string`                               | -           | 绑定值（按钮文字）                     |
| type               | `'primary'  'default'  'dashed'  'text'  'link'  'success'  'error'  'warning'` | `'primary'` | 按钮类型                       |
| size               | `'large'  'middle'  'small'`      | `'middle'`  | 按钮尺寸                               |
| position           | `'top-left'  'top-right'  'bottom-left'  'bottom-right'` | `'bottom-right'` | 悬浮位置               |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| loading            | `boolean`                              | `false`     | 是否加载中                             |
| ghost              | `boolean`                              | `false`     | 是否幽灵按钮                           |
| danger             | `boolean`                              | `false`     | 是否危险按钮                           |
| block              | `boolean`                              | `false`     | 是否块级按钮                           |
| icon               | `VueNode`                              | -           | 图标                                   |
| text               | `string`                               | -           | 文字                                   |
| onClick            | `() => void`                          | -           | 点击事件                               |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: string) => void`                 |
| click              | 点击事件                 | `(event: MouseEvent) => void`             |

#### Slots

| 名称               | 说明                     |
|--------------------|--------------------------|
| default            | 默认插槽                 |
| icon               | 图标插槽                 |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XFloatButton text="返回顶部" @click="handleClick" />

  <!-- 不同位置 -->
  <XFloatButton text="联系客服" position="top-right" @click="handleClick" />
  <XFloatButton text="帮助" position="bottom-left" @click="handleClick" />
  <XFloatButton text="反馈" position="top-left" @click="handleClick" />

  <!-- 不同类型 -->
  <XFloatButton text="成功" type="success" @click="handleClick" />
  <XFloatButton text="警告" type="warning" @click="handleClick" />
  <XFloatButton text="错误" type="error" @click="handleClick" />

  <!-- 不同尺寸 -->
  <XFloatButton text="大" size="large" @click="handleClick" />
  <XFloatButton text="中" size="middle" @click="handleClick" />
  <XFloatButton text="小" size="small" @click="handleClick" />

  <!-- 带图标 -->
  <XFloatButton type="primary" @click="handleClick">
    <template #icon>
      <span>↑</span>
    </template>
    返回顶部
  </XFloatButton>

  <!-- 加载状态 -->
  <XFloatButton text="加载中" loading @click="handleClick" />

  <!-- 禁用状态 -->
  <XFloatButton text="禁用" disabled @click="handleClick" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XFloatButton } from 'publish-commons'

const handleClick = () => {
  console.log('悬浮按钮被点击')
  // 实现返回顶部功能示例
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
```

### XEditor

基于 wangEditor 封装的富文本编辑器组件，支持多种配置、工具栏定制和自定义扩展，提供简洁易用的API和丰富的功能。

#### Props

| 名称               | 类型                                  | 默认值      | 说明                                   |
|--------------------|---------------------------------------|-------------|----------------------------------------|
| modelValue         | `string`                               | -           | 绑定值（编辑器内容）                   |
| defaultValue       | `string`                               | -           | 默认值（编辑器内容）                   |
| disabled           | `boolean`                              | `false`     | 是否禁用                               |
| readOnly           | `boolean`                              | `false`     | 是否只读                               |
| height             | `string  number`                     | `'300px'`   | 编辑器高度                             |
| width              | `string  number`                     | `'100%'`    | 编辑器宽度                             |
| placeholder        | `string`                               | `'请输入内容...'` | 占位符                          |
| toolbar            | `any[]  boolean`                     | `true`      | 工具栏配置，可传入数组自定义工具栏，或传入boolean控制显示/隐藏 |
| menuConfig         | `any`                                  | `{}`        | 菜单配置                               |
| extendConfig       | `any`                                  | `{}`        | 扩展配置                               |
| onCreated          | `(editor: IDomEditor) => void`         | -           | 编辑器实例初始化回调                   |
| onChange           | `(content: string) => void`            | -           | 编辑器内容变化回调                     |
| onFocus            | `() => void`                          | -           | 编辑器聚焦回调                         |
| onBlur             | `() => void`                          | -           | 编辑器失焦回调                         |
| onDestroyed        | `() => void`                          | -           | 编辑器销毁回调                         |

#### Events

| 名称               | 说明                     | 回调参数                                  |
|--------------------|--------------------------|-------------------------------------------|
| update:modelValue  | 值变化事件               | `(value: string) => void`                 |
| change             | 内容变化事件             | `(content: string) => void`               |
| focus              | 聚焦事件                 | `() => void`                               |
| blur               | 失焦事件                 | `() => void`                               |
| created            | 实例创建完成事件         | `(editor: IDomEditor) => void`             |
| destroyed          | 销毁事件                 | `() => void`                               |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XEditor v-model="content" placeholder="请输入内容..." />

  <!-- 自定义尺寸 -->
  <XEditor v-model="content" height="400px" width="500px" />

  <!-- 只读模式 -->
  <XEditor v-model="content" readOnly />

  <!-- 禁用模式 -->
  <XEditor v-model="content" disabled />

  <!-- 自定义工具栏 -->
  <XEditor 
    v-model="content" 
    :toolbar="['bold', 'italic', 'underline', 'link', 'orderedList', 'unorderedList']" 
  />

  <!-- 隐藏工具栏 -->
  <XEditor v-model="content" :toolbar="false" />

  <!-- 监听事件 -->
  <XEditor 
    v-model="content" 
    @focus="handleFocus" 
    @blur="handleBlur" 
    @change="handleChange" 
  />

  <!-- 使用实例方法 -->
  <div>
    <XEditor ref="editorRef" v-model="content" />
    <XButton type="primary" @click="handleGetContent">获取内容</XButton>
    <XButton type="default" @click="handleSetContent">设置内容</XButton>
    <XButton type="default" @click="handleFocusEditor">聚焦</XButton>
    <XButton type="default" @click="handleClear">清空</XButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XEditor, XButton } from 'publish-commons'
import type { XEditorInstance } from 'publish-commons'

// 编辑器内容
const content = ref<string>('<p>Hello, XEditor!</p>')

// 编辑器引用
const editorRef = ref<InstanceType<typeof XEditor> | null>(null)

// 事件处理
const handleFocus = () => {
  console.log('编辑器聚焦')
}

const handleBlur = () => {
  console.log('编辑器失焦')
}

const handleChange = (newContent: string) => {
  console.log('内容变化:', newContent)
}

// 实例方法调用
const handleGetContent = () => {
  if (editorRef.value) {
    const currentContent = (editorRef.value as any).getContent()
    console.log('当前内容:', currentContent)
  }
}

const handleSetContent = () => {
  if (editorRef.value) {
    (editorRef.value as any).setContent('<p>通过实例方法设置的内容</p>')
  }
}

const handleFocusEditor = () => {
  if (editorRef.value) {
    (editorRef.value as any).focus()
  }
}

const handleClear = () => {
  if (editorRef.value) {
    (editorRef.value as any).clear()
  }
}
</script>
```

### XImageCropper

基于 vue-cropper 封装的图片裁剪组件，通过模态框展示，支持多种配置选项和事件。

#### Props

| 名称 | 类型 | 默认值 | 说明 |
|------|------|------|------|
| title | `string` | `'裁剪图片'` | 模态框标题 |
| mode | `'cover' \| 'contain'` | `'cover'` | 图片默认渲染方式 |
| outputType | `'jpeg' \| 'png' \| 'webp'` | `'png'` | 裁剪生成图片的格式 |
| canScale | `boolean` | `true` | 是否允许滚轮缩放 |
| canMove | `boolean` | `true` | 上传图片是否可以移动 |
| canMoveBox | `boolean` | `true` | 截图框能否拖动 |
| centerBox | `boolean` | `true` | 截图框是否被限制在图片里面 |
| infoTrue | `boolean` | `true` | 是否展示真实输出图片宽高 |
| limitMinSize | `number` | `10` | 裁剪框限制最小区域 |

#### Events

| 名称 | 说明 | 回调参数 |
|------|------|------|
| crop | 裁剪完成事件，返回base64数据 | `(base64Data: string) => void` |
| cropblob | 裁剪完成事件，返回blob数据 | `(blobData: Blob) => void` |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XImageCropper @crop="handleCrop" @cropblob="handleCropBlob" />

  <!-- 自定义配置 -->
  <XImageCropper
    title="图片裁剪"
    mode="contain"
    outputType="jpeg"
    :canScale="false"
    @crop="handleCrop"
  />

  <!-- 裁剪结果展示 -->
  <div v-if="croppedImage">
    <h3>裁剪结果：</h3>
    <img :src="croppedImage" alt="裁剪后的图片" style="max-width: 300px;" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XImageCropper } from 'publish-commons'

const croppedImage = ref('')

// 处理裁剪结果（base64）
const handleCrop = (base64Data: string) => {
  console.log('裁剪完成（base64）:', base64Data)
  croppedImage.value = base64Data
}

// 处理裁剪结果（blob）
const handleCropBlob = (blobData: Blob) => {
  console.log('裁剪完成（blob）:', blobData)
  // 可以将blob转换为文件上传到服务器
  const file = new File([blobData], 'cropped-image.png', { type: blobData.type })
  // uploadFile(file)
}
</script>
```

### XTableSearch

基于 Ant Design Vue 封装的表格搜索组件，支持多种搜索项类型、高级搜索和自定义操作按钮。

#### Props

| 名称 | 类型 | 默认值 | 说明 |
|------|------|------|------|
| searchItems | `SearchItem[]` | - | 搜索项配置数组 |
| searchText | `string` | `'搜索'` | 搜索按钮文本 |
| resetText | `string` | `'重置'` | 重置按钮文本 |
| showAdvanced | `boolean` | `false` | 是否显示高级搜索 |
| advancedDefaultOpen | `boolean` | `false` | 高级搜索默认展开状态 |
| itemsPerRow | `number` | `2` | 每行显示的搜索项数量 |

#### SearchItem 配置

| 名称 | 类型 | 说明 |
|------|------|------|
| type | `'input' \| 'select' \| 'date' \| 'datetime' \| 'cascader' \| 'checkbox' \| 'radio' \| 'treeSelect'` | 搜索项类型 |
| field | `string` | 搜索字段名 |
| label | `string` | 搜索项标签 |
| placeholder | `string` | 占位符 |
| options | `{ value: string \| number; label: string; disabled?: boolean }[]` | 选择器选项（仅select类型） |
| cascaderOptions | `any[]` | 级联选择器选项（仅cascader类型） |
| radioOptions | `{ value: string \| number; label: string; disabled?: boolean }[]` | 单选框选项（仅radio类型） |
| treeData | `any[]` | 树形选择器数据（仅treeSelect类型） |
| required | `boolean` | 是否必填 |
| defaultValue | `string \| number \| Date \| boolean \| any[]` | 初始值 |
| render | `(params: any) => VueNode` | 自定义渲染函数 |
| rules | `any[]` | 验证规则 |
| help | `string` | 帮助信息 |
| extra | `string` | 额外信息 |
| tooltip | `string` | 提示信息 |
| props | `Record<string, any>` | 组件属性 |
| events | `Record<string, Function>` | 组件事件 |

#### Events

| 名称 | 说明 | 回调参数 |
|------|------|------|
| search | 搜索事件 | `(params: Record<string, any>) => void` |
| reset | 重置事件 | `() => void` |
| advanced-change | 高级搜索展开/收起事件 | `(isOpen: boolean) => void` |

#### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| actions | 自定义操作按钮区域 | - |
| [field] | 自定义搜索项 | `{ item: SearchItem }` |

#### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <XTableSearch
    :searchItems="searchItems"
    @search="handleSearch"
    @reset="handleReset"
  />

  <!-- 带高级搜索 -->
  <XTableSearch
    :searchItems="advancedSearchItems"
    :showAdvanced="true"
    :advancedDefaultOpen="false"
    @search="handleAdvancedSearch"
    @reset="handleAdvancedReset"
    @advanced-change="handleAdvancedChange"
  />

  <!-- 自定义操作按钮 -->
  <XTableSearch
    :searchItems="searchItems"
    @search="handleSearch"
    @reset="handleReset"
  >
    <template #actions>
      <XButton @click="handleReset">重置</XButton>
      <XButton type="default" @click="handleClear">清空</XButton>
      <XButton type="primary" @click="handleSearch">搜索</XButton>
    </template>
  </XTableSearch>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XTableSearch, XButton } from 'publish-commons'
import type { SearchItem } from 'publish-commons'

// 基础搜索项
const searchItems: SearchItem[] = [
  {
    type: 'input',
    field: 'name',
    label: '姓名',
    placeholder: '请输入姓名',
    defaultValue: ''
  },
  {
    type: 'select',
    field: 'status',
    label: '状态',
    placeholder: '请选择状态',
    options: [
      { value: 'active', label: '激活' },
      { value: 'inactive', label: '未激活' }
    ]
  }
]

// 带高级搜索的搜索项
const advancedSearchItems: SearchItem[] = [
  {
    type: 'input',
    field: 'name',
    label: '姓名',
    placeholder: '请输入姓名',
    defaultValue: ''
  },
  {
    type: 'select',
    field: 'status',
    label: '状态',
    placeholder: '请选择状态',
    options: [
      { value: 'active', label: '激活' },
      { value: 'inactive', label: '未激活' }
    ]
  },
  {
    type: 'date',
    field: 'startDate',
    label: '开始日期',
    placeholder: '请选择开始日期'
  },
  {
    type: 'datetime',
    field: 'createDate',
    label: '创建时间',
    placeholder: '请选择创建时间'
  },
  {
    type: 'cascader',
    field: 'region',
    label: '地区',
    placeholder: '请选择地区',
    cascaderOptions: cascaderOptions
  },
  {
    type: 'checkbox',
    field: 'enabled',
    label: '是否启用',
    defaultValue: false
  }
]

// 级联选择器选项
const cascaderOptions = [
  {
    value: 'zhejiang',
    label: '浙江省',
    children: [
      {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'jianggan', label: '江干区' }
        ]
      }
    ]
  }
]

// 处理搜索
const handleSearch = (params: any) => {
  console.log('搜索参数:', params)
  // 执行搜索逻辑
}

// 处理重置
const handleReset = () => {
  console.log('重置搜索')
  // 执行重置逻辑
}

// 处理高级搜索
const handleAdvancedSearch = (params: any) => {
  console.log('高级搜索参数:', params)
  // 执行高级搜索逻辑
}

// 处理高级重置
const handleAdvancedReset = () => {
  console.log('重置高级搜索')
  // 执行高级重置逻辑
}

// 处理高级搜索展开/收起
const handleAdvancedChange = (isOpen: boolean) => {
  console.log('高级搜索状态:', isOpen ? '展开' : '收起')
}
</script>
```

### previewFile

文件预览函数，支持图片、视频、PDF、Excel、Word等多种文件类型。

#### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| fileList | `object \| array` | 文件对象或文件对象数组。单个文件时为对象，多个文件时为数组。 |

#### 文件对象结构

| 属性 | 类型 | 说明 |
|------|------|------|
| name | `string` | 文件名 |
| url | `string` | 文件URL |
| bytes | `number` | 文件大小（字节） |
| uploadUserName | `string` | 上传用户 |
| uploadTime | `string` | 上传时间 |

#### 使用示例

```typescript
import { previewFile } from 'publish-commons'

// 预览单个文件
previewFile({
  name: 'example.jpg',
  url: 'https://example.com/images/example.jpg',
  bytes: 1024000,
  uploadUserName: '张三',
  uploadTime: '2023-01-01 12:00:00'
})

// 预览多个文件
previewFile([
  {
    name: 'image.jpg',
    url: 'https://example.com/images/image.jpg'
  },
  {
    name: 'video.mp4',
    url: 'https://example.com/videos/video.mp4'
  }
])
```

### downloadFile

文件下载函数，支持指定文件名和URL。

#### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| file | `object` | 文件对象 |

#### 文件对象结构

| 属性 | 类型 | 说明 |
|------|------|------|
| name | `string` | 文件名 |
| url | `string` | 文件URL |

#### 使用示例

```typescript
import { downloadFile } from 'publish-commons'

downloadFile({
  name: 'example.pdf',
  url: 'https://example.com/files/example.pdf'
})
```

### printFile

文件打印函数，支持PDF等可打印文件类型。

#### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| file | `object` | 文件对象 |

#### 文件对象结构

| 属性 | 类型 | 说明 |
|------|------|------|
| name | `string` | 文件名 |
| url | `string` | 文件URL |

#### 使用示例

```typescript
import { printFile } from 'publish-commons'

printFile({
  name: 'example.pdf',
  url: 'https://example.com/files/example.pdf'
})

## 主题定制

通过覆盖 Less 变量来自定义主题：

```less
// 在你的样式文件中
@primary-color: #1890ff;
@xbtn-border-radius: 8px;

@import 'publish-commons/es/styles/index.less';
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 类型检查
pnpm typecheck
```

## License

MIT
