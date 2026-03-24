# publish-commons

公共组件库，封装通用组件、业务需求组件和可定制组件，提高开发效率，实现组件化、模块化。

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
import { XButton } from 'publish-commons'
import 'publish-commons/dist/style.css'

export default {
  components: { XButton }
}
```

## 组件列表

### XButton

基于 Ant Design Vue Button 封装的增强按钮组件。

#### Props

| 名称     | 类型                                                     | 默认值      | 说明          |
| -------- | -------------------------------------------------------- | ----------- | ------------- |
| type     | `'primary' \| 'default' \| 'dashed' \| 'text' \| 'link'` | `'default'` | 按钮类型      |
| size     | `'large' \| 'middle' \| 'small'`                         | `'middle'`  | 按钮尺寸      |
| disabled | `boolean`                                                | `false`     | 是否禁用      |
| loading  | `boolean`                                                | `false`     | 是否加载中    |
| icon     | `string`                                                 | `''`        | 图标名称/字符 |
| ghost    | `boolean`                                                | `false`     | 是否幽灵按钮  |
| danger   | `boolean`                                                | `false`     | 是否危险按钮  |
| block    | `boolean`                                                | `false`     | 是否块级按钮  |

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
</template>
```

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
