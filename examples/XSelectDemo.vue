<template>
  <div class="xselect-demo">
    <h1>XSelect 组件示例</h1>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-row">
        <XSelect v-model="value1" :options="options" placeholder="请选择" />
      </div>
      <p class="demo-value">选择值: {{ value1 }}</p>
    </section>

    <!-- 输入框尺寸 -->
    <section class="demo-section">
      <h2>输入框尺寸</h2>
      <div class="demo-col">
        <XSelect v-model="value2" :options="options" size="large" placeholder="大号下拉框" />
        <XSelect v-model="value3" :options="options" size="middle" placeholder="中号下拉框" />
        <XSelect v-model="value4" :options="options" size="small" placeholder="小号下拉框" />
      </div>
    </section>

    <!-- 多选模式 -->
    <section class="demo-section">
      <h2>多选模式</h2>
      <div class="demo-row">
        <XSelect v-model="value5" :options="options" mode="multiple" placeholder="请选择（可多选）" />
      </div>
      <p class="demo-value">选择值: {{ value5 }}</p>
    </section>

    <!-- 标签模式 -->
    <section class="demo-section">
      <h2>标签模式</h2>
      <div class="demo-row">
        <XSelect
          v-model="value6"
          :options="options"
          mode="tags"
          placeholder="请选择或输入标签"
          allowCreate
        />
      </div>
      <p class="demo-value">选择值: {{ value6 }}</p>
    </section>

    <!-- 带清除按钮 -->
    <section class="demo-section">
      <h2>带清除按钮</h2>
      <div class="demo-row">
        <XSelect v-model="value7" :options="options" clearable placeholder="可清除的下拉框" />
      </div>
    </section>

    <!-- 搜索功能 -->
    <section class="demo-section">
      <h2>搜索功能</h2>
      <div class="demo-row">
        <XSelect
          v-model="value8"
          :options="options"
          showSearch
          :filterOption="true"
          placeholder="可搜索的下拉框"
        />
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-col">
        <XSelect v-model="value9" :options="options" disabled placeholder="禁用的下拉框" />
        <XSelect
          v-model="value10"
          :options="optionsWithDisabled"
          placeholder="部分选项禁用"
        />
      </div>
    </section>

    <!-- 必填状态 -->
    <section class="demo-section">
      <h2>必填状态</h2>
      <div class="demo-row">
        <XSelect v-model="value11" :options="options" required placeholder="必填的下拉框" />
      </div>
    </section>

    <!-- 错误状态 -->
    <section class="demo-section">
      <h2>错误状态</h2>
      <div class="demo-row">
        <XSelect
          v-model="value12"
          :options="options"
          placeholder="错误的下拉框"
          errorMessage="请选择一个选项"
        />
      </div>
    </section>

    <!-- 最大标签数量 -->
    <section class="demo-section">
      <h2>最大标签数量</h2>
      <div class="demo-row">
        <XSelect
          v-model="value13"
          :options="options"
          mode="multiple"
          :maxTagCount="3"
          placeholder="最多显示3个标签"
        />
      </div>
    </section>

    <!-- 自定义选项内容 -->
    <section class="demo-section">
      <h2>自定义选项内容</h2>
      <div class="demo-row">
        <XSelect v-model="value14" :options="optionsWithIcon" placeholder="带图标的选项">
          <template #option="{ option }">
            <span style="margin-right: 8px;">{{ option.icon }}</span>
            {{ option.label }}
          </template>
        </XSelect>
      </div>
    </section>

    <!-- 自定义标签渲染 -->
    <section class="demo-section">
      <h2>自定义标签渲染</h2>
      <div class="demo-row">
        <XSelect
          v-model="value15"
          :options="options"
          mode="multiple"
          placeholder="自定义标签样式"
        >
          <template #tagRender="{ label, closable, onClose }">
            <span class="custom-tag">
              {{ label }}
              <span v-if="closable" class="custom-tag-close" @click="onClose">&times;</span>
            </span>
          </template>
        </XSelect>
      </div>
    </section>

    <!-- 动态加载选项 -->
    <section class="demo-section">
      <h2>动态加载选项</h2>
      <div class="demo-row">
        <XSelect v-model="value16" :options="dynamicOptions" placeholder="动态加载选项" />
        <XButton type="primary" @click="loadMoreOptions">加载更多选项</XButton>
      </div>
      <p class="demo-value">选择值: {{ value16 }}</p>
    </section>

    <!-- 事件演示 -->
    <section class="demo-section">
      <h2>事件演示</h2>
      <div class="demo-row">
        <XSelect
          v-model="value17"
          :options="options"
          @change="handleChange"
          @open-change="handleOpenChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @clear="handleClear"
          @tag-remove="handleTagRemove"
          placeholder="触发各种事件"
        />
      </div>
      <div class="event-log">
        <p v-for="(log, index) in eventLogs" :key="index">{{ log }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/**
 * XSelect 组件使用示例
 */
import { ref } from 'vue'
import XSelect from '../src/components/XSelect/XSelect.vue'
import XButton from '../src/components/XButton/XButton.vue'

// 基础用法
const value1 = ref(undefined)

// 输入框尺寸
const value2 = ref(undefined)
const value3 = ref(undefined)
const value4 = ref(undefined)

// 多选模式
const value5 = ref([])

// 标签模式
const value6 = ref([])

// 带清除按钮
const value7 = ref(undefined)

// 搜索功能
const value8 = ref(undefined)

// 禁用状态
const value9 = ref(undefined)
const value10 = ref(undefined)

// 必填状态
const value11 = ref(undefined)

// 错误状态
const value12 = ref(undefined)

// 最大标签数量
const value13 = ref([])

// 自定义选项内容
const value14 = ref(undefined)

// 自定义标签渲染
const value15 = ref([])

// 动态加载选项
const value16 = ref(undefined)

// 事件演示
const value17 = ref(undefined)
const eventLogs = ref<string[]>([])

// 基础选项数据
const options = ref([
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4' },
  { value: 'option5', label: '选项5' }
])

// 带禁用选项的数据
const optionsWithDisabled = ref([
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2', disabled: true },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4', disabled: true },
  { value: 'option5', label: '选项5' }
])

// 带图标选项的数据
const optionsWithIcon = ref([
  { value: 'option1', label: '选项1', icon: '📦' },
  { value: 'option2', label: '选项2', icon: '📄' },
  { value: 'option3', label: '选项3', icon: '🔧' },
  { value: 'option4', label: '选项4', icon: '🚀' },
  { value: 'option5', label: '选项5', icon: '📊' }
])

// 动态选项数据
const dynamicOptions = ref([
  { value: 'dynamic1', label: '动态选项1' },
  { value: 'dynamic2', label: '动态选项2' },
  { value: 'dynamic3', label: '动态选项3' }
])

// 加载更多选项的计数器
let optionCounter = 4

/**
 * 添加事件日志
 */
const addLog = (message: string) => {
  const time = new Date().toLocaleTimeString()
  eventLogs.value.unshift(`[${time}] ${message}`)
  // 只保留最近10条
  if (eventLogs.value.length > 10) {
    eventLogs.value.pop()
  }
}

/**
 * 处理值变化事件
 */
const handleChange = (value: any) => {
  addLog(`值变化: ${JSON.stringify(value)}`)
}

/**
 * 处理下拉框打开/关闭事件
 */
const handleOpenChange = (open: boolean) => {
  addLog(`下拉框${open ? '打开' : '关闭'}`)
}

/**
 * 处理聚焦事件
 */
const handleFocus = () => {
  addLog('下拉框获得焦点')
}

/**
 * 处理失焦事件
 */
const handleBlur = () => {
  addLog('下拉框失去焦点')
}

/**
 * 处理清除事件
 */
const handleClear = () => {
  addLog('内容已清除')
}

/**
 * 处理标签移除事件
 */
const handleTagRemove = (removedTag: string | number) => {
  addLog(`移除标签: ${removedTag}`)
}

/**
 * 加载更多选项
 */
const loadMoreOptions = () => {
  // 模拟加载更多选项
  const newOptions = [
    { value: `dynamic${optionCounter}`, label: `动态选项${optionCounter}` },
    { value: `dynamic${optionCounter + 1}`, label: `动态选项${optionCounter + 1}` }
  ]
  
  dynamicOptions.value = [...dynamicOptions.value, ...newOptions]
  optionCounter += 2
  
  addLog(`已加载更多选项，当前共 ${dynamicOptions.value.length} 个选项`)
}
</script>

<style scoped lang="less">
.xselect-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;

  h1 {
    text-align: center;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.85);
  }
}

.demo-section {
  margin-bottom: 32px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.85);
    border-left: 4px solid #1890ff;
    padding-left: 12px;
  }
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.demo-value {
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.event-log {
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
  min-height: 100px;

  p {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.8;
    font-family: monospace;
  }
}

// 自定义标签样式
.custom-tag {
  display: inline-block;
  padding: 2px 8px;
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  border-radius: 4px;
  color: #1890ff;
  font-size: 12px;
  line-height: 1.5;
  margin-right: 8px;

  .custom-tag-close {
    margin-left: 4px;
    cursor: pointer;
    font-size: 14px;
    vertical-align: middle;
  }
}
</style>
