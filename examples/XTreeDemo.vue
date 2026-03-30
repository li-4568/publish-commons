<template>
  <div class="tree-demo">
    <h1>XTree 树形组件示例</h1>
    
    <!-- 基本用法 -->
    <section class="demo-section">
      <h2>基本用法</h2>
      <div class="demo-row">
        <XTree :tree-data="basicTreeData" />
      </div>
      
      <div class="code-example">
        <h3>基本用法</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 基础树形结构，通过tree-data属性设置数据源 --&gt;
    &lt;XTree :tree-data="basicTreeData" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 基本树形数据结构
const basicTreeData = [
  {
    key: '0',
    title: '文件夹1',
    children: [
      {
        key: '0-0',
        title: '文件1-1',
        children: [
          { key: '0-0-0', title: '文件1-1-1' },
          { key: '0-0-1', title: '文件1-1-2' }
        ]
      },
      {
        key: '0-1',
        title: '文件1-2',
        children: [
          { key: '0-1-0', title: '文件1-2-1' }
        ]
      }
    ]
  },
  {
    key: '1',
    title: '文件夹2',
    children: [
      { key: '1-0', title: '文件2-1' },
      { key: '1-1', title: '文件2-2' }
    ]
  }
]
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
      </div>
    </section>
    
    <!-- 默认展开所有节点 -->
    <section class="demo-section">
      <h2>默认展开所有节点</h2>
      <div class="demo-row">
        <XTree :tree-data="basicTreeData" :default-expand-all="true" />
      </div>
      
      <div class="code-example">
        <h3>默认展开所有节点</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用default-expand-all属性默认展开所有节点 --&gt;
    &lt;XTree :tree-data="basicTreeData" :default-expand-all="true" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 基本树形数据结构
const basicTreeData = [
  {
    key: '0',
    title: '文件夹1',
    children: [
      {
        key: '0-0',
        title: '文件1-1',
        children: [
          { key: '0-0-0', title: '文件1-1-1' },
          { key: '0-0-1', title: '文件1-1-2' }
        ]
      },
      {
        key: '0-1',
        title: '文件1-2',
        children: [
          { key: '0-1-0', title: '文件1-2-1' }
        ]
      }
    ]
  },
  {
    key: '1',
    title: '文件夹2',
    children: [
      { key: '1-0', title: '文件2-1' },
      { key: '1-1', title: '文件2-2' }
    ]
  }
]
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
      </div>
    </section>
    
    <!-- 默认展开指定节点 -->
    <section class="demo-section">
      <h2>默认展开指定节点</h2>
      <div class="demo-row">
        <XTree :tree-data="basicTreeData" :default-expanded-keys="['0-0', '0-1']" />
      </div>
      
      <div class="code-example">
        <h3>默认展开指定节点</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用default-expanded-keys属性默认展开指定节点 --&gt;
    &lt;XTree 
      :tree-data="basicTreeData" 
      :default-expanded-keys="['0-0', '0-1']" 
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 基本树形数据结构
const basicTreeData = [
  {
    key: '0',
    title: '文件夹1',
    children: [
      {
        key: '0-0',
        title: '文件1-1',
        children: [
          { key: '0-0-0', title: '文件1-1-1' },
          { key: '0-0-1', title: '文件1-1-2' }
        ]
      },
      {
        key: '0-1',
        title: '文件1-2',
        children: [
          { key: '0-1-0', title: '文件1-2-1' }
        ]
      }
    ]
  },
  {
    key: '1',
    title: '文件夹2',
    children: [
      { key: '1-0', title: '文件2-1' },
      { key: '1-1', title: '文件2-2' }
    ]
  }
]
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
      </div>
    </section>
    
    <!-- 选择功能 -->
    <section class="demo-section">
      <h2>选择功能</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>单选</h3>
          <XTree :tree-data="basicTreeData" :default-selected-keys="['0-0']" />
        </div>
        <div class="demo-col">
          <h3>多选</h3>
          <XTree :tree-data="basicTreeData" :default-selected-keys="['0-0', '0-1']" :multiple="true" />
        </div>
      </div>
      
      <div class="code-example">
        <h3>选择功能</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;单选&lt;/h3&gt;
      &lt;!-- 单选模式，通过default-selected-keys设置默认选中节点 --&gt;
      &lt;XTree 
        :tree-data="basicTreeData" 
        :default-selected-keys="['0-0']" 
      /&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;多选&lt;/h3&gt;
      &lt;!-- 多选模式，设置multiple为true --&gt;
      &lt;XTree 
        :tree-data="basicTreeData" 
        :default-selected-keys="['0-0', '0-1']" 
        :multiple="true" 
      /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 基本树形数据结构
const basicTreeData = [
  {
    key: '0',
    title: '文件夹1',
    children: [
      {
        key: '0-0',
        title: '文件1-1',
        children: [
          { key: '0-0-0', title: '文件1-1-1' },
          { key: '0-0-1', title: '文件1-1-2' }
        ]
      },
      {
        key: '0-1',
        title: '文件1-2',
        children: [
          { key: '0-1-0', title: '文件1-2-1' }
        ]
      }
    ]
  },
  {
    key: '1',
    title: '文件夹2',
    children: [
      { key: '1-0', title: '文件2-1' },
      { key: '1-1', title: '文件2-2' }
    ]
  }
]
&lt;/script&gt;

&lt;style scoped&gt;
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
&lt;/style&gt;</code></pre>
      </div>
    </section>
    
    <!-- 复选框功能 -->
    <section class="demo-section">
      <h2>复选框功能</h2>
      <div class="demo-row">
        <XTree :tree-data="basicTreeData" :checkable="true" :default-checked-keys="['0-0', '0-1']" />
      </div>
      
      <div class="code-example">
        <h3>复选框功能</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 启用复选框功能，设置checkable为true --&gt;
    &lt;XTree 
      :tree-data="basicTreeData" 
      :checkable="true" 
      :default-checked-keys="['0-0', '0-1']" 
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 基本树形数据结构
const basicTreeData = [
  {
    key: '0',
    title: '文件夹1',
    children: [
      {
        key: '0-0',
        title: '文件1-1',
        children: [
          { key: '0-0-0', title: '文件1-1-1' },
          { key: '0-0-1', title: '文件1-1-2' }
        ]
      },
      {
        key: '0-1',
        title: '文件1-2',
        children: [
          { key: '0-1-0', title: '文件1-2-1' }
        ]
      }
    ]
  },
  {
    key: '1',
    title: '文件夹2',
    children: [
      { key: '1-0', title: '文件2-1' },
      { key: '1-1', title: '文件2-2' }
    ]
  }
]
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
      </div>
    </section>
    
    <!-- 受控模式 -->
    <section class="demo-section">
      <h2>受控模式</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>受控选择</h3>
          <XTree :tree-data="basicTreeData" v-model:selected-keys="controlledSelectedKeys" />
          <div style="margin-top: 10px;">
            <Button type="primary" @click="controlledSelectedKeys = ['0-0']">选择第一个节点</Button>
            <Button type="dashed" @click="controlledSelectedKeys = []" style="margin-left: 10px;">清空选择</Button>
          </div>
        </div>
      </div>
      
      <div class="code-example">
        <h3>受控模式</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;受控选择&lt;/h3&gt;
      &lt;!-- 使用v-model:selected-keys实现受控选择 --&gt;
      &lt;XTree 
        :tree-data="basicTreeData" 
        v-model:selected-keys="controlledSelectedKeys" 
      /&gt;
      &lt;div style="margin-top: 10px;"&gt;
        &lt;Button type="primary" @click="controlledSelectedKeys = ['0-0']"&gt;选择第一个节点&lt;/Button&gt;
        &lt;Button type="dashed" @click="controlledSelectedKeys = []" style="margin-left: 10px;"&gt;清空选择&lt;/Button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 基本树形数据结构
const basicTreeData = [
  {
    key: '0',
    title: '文件夹1',
    children: [
      {
        key: '0-0',
        title: '文件1-1',
        children: [
          { key: '0-0-0', title: '文件1-1-1' },
          { key: '0-0-1', title: '文件1-1-2' }
        ]
      },
      {
        key: '0-1',
        title: '文件1-2',
        children: [
          { key: '0-1-0', title: '文件1-2-1' }
        ]
      }
    ]
  },
  {
    key: '1',
    title: '文件夹2',
    children: [
      { key: '1-0', title: '文件2-1' },
      { key: '1-1', title: '文件2-2' }
    ]
  }
]

// 受控选择状态
const controlledSelectedKeys = ref(['0-0'])
&lt;/script&gt;

&lt;style scoped&gt;
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
&lt;/style&gt;</code></pre>
      </div>
    </section>
    
    <!-- 自定义节点内容 -->
    <section class="demo-section">
      <h2>自定义节点内容</h2>
      <div class="demo-row">
        <XTree :tree-data="customTreeData">
          <template #title="{ record }">
            <span>
              <span v-if="record?.icon" style="margin-right: 8px; color: #1890ff;">{{ record.icon }}</span>
              {{ record.title }}
              <span v-if="record?.tag" class="tag" :style="{ backgroundColor: record.tag.color }">
                {{ record.tag.text }}
              </span>
            </span>
          </template>
        </XTree>
      </div>
      
      <div class="code-example">
        <h3>自定义节点内容</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 使用title插槽自定义节点内容 --&gt;
    &lt;XTree :tree-data="customTreeData"&gt;
      &lt;template #title="{ record }"&gt;
        &lt;span&gt;
          &lt;!-- 显示自定义图标 --&gt;
          &lt;span v-if="record?.icon" style="margin-right: 8px; color: #1890ff;"&gt;{{ record.icon }}&lt;/span&gt;
          {{ record.title }}
          &lt;!-- 显示自定义标签 --&gt;
          &lt;span v-if="record?.tag" class="tag" :style="{ backgroundColor: record.tag.color }"&gt;
            {{ record.tag.text }}
          &lt;/span&gt;
        &lt;/span&gt;
      &lt;/template&gt;
    &lt;/XTree&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 自定义节点内容的数据
const customTreeData = [
  {
    key: '0',
    title: '文件夹1',
    icon: '📁',
    tag: { text: '重要', color: '#ff4d4f' },
    children: [
      {
        key: '0-0',
        title: '文件1-1',
        icon: '📄',
        tag: { text: '文档', color: '#1890ff' }
      },
      {
        key: '0-1',
        title: '图片1-2',
        icon: '🖼️',
        tag: { text: '图片', color: '#52c41a' }
      }
    ]
  },
  {
    key: '1',
    title: '文件夹2',
    icon: '📁',
    children: [
      {
        key: '1-0',
        title: '视频2-1',
        icon: '🎬',
        tag: { text: '视频', color: '#fa8c16' }
      }
    ]
  }
]
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}

.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  margin-left: 8px;
}
&lt;/style&gt;</code></pre>
      </div>
    </section>
    
    <!-- 禁用节点 -->
    <section class="demo-section">
      <h2>禁用节点</h2>
      <div class="demo-row">
        <XTree :tree-data="disabledTreeData" />
      </div>
      
      <div class="code-example">
        <h3>禁用节点</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 禁用节点，在数据中设置disabled为true --&gt;
    &lt;XTree :tree-data="disabledTreeData" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 禁用节点的数据
const disabledTreeData = [
  {
    key: '0',
    title: '文件夹1',
    children: [
      {
        key: '0-0',
        title: '可访问文件',
        children: [
          { key: '0-0-0', title: '文件1-1-1' },
          { key: '0-0-1', title: '文件1-1-2' }
        ]
      },
      {
        key: '0-1',
        title: '禁用文件',
        disabled: true,
        children: [
          { key: '0-1-0', title: '文件1-2-1', disabled: true }
        ]
      }
    ]
  }
]
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}
&lt;/style&gt;</code></pre>
      </div>
    </section>
    
    <!-- 拖拽功能 -->
    <section class="demo-section">
      <h2>拖拽功能</h2>
      <div class="demo-row">
        <XTree :tree-data="dragTreeData" :draggable="true" @drop="handleDrop" />
        <div style="margin-left: 20px; max-width: 300px;">
          <h3>拖拽日志</h3>
          <div class="drop-log">
            <div v-for="(log, index) in dropLogs" :key="index" class="log-item">
              {{ log }}
            </div>
            <div v-if="dropLogs.length === 0" class="log-empty">暂无拖拽记录</div>
          </div>
        </div>
      </div>
      
      <div class="code-example">
        <h3>拖拽功能</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;!-- 启用拖拽功能，设置draggable为true --&gt;
    &lt;XTree 
      :tree-data="dragTreeData" 
      :draggable="true" 
      @drop="handleDrop" 
    /&gt;
    &lt;div style="margin-left: 20px; max-width: 300px;"&gt;
      &lt;h3&gt;拖拽日志&lt;/h3&gt;
      &lt;div class="drop-log"&gt;
        &lt;div v-for="(log, index) in dropLogs" :key="index" class="log-item"&gt;
          {{ log }}
        &lt;/div&gt;
        &lt;div v-if="dropLogs.length === 0" class="log-empty"&gt;暂无拖拽记录&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref, reactive } from 'vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 拖拽功能的数据
const dragTreeData = reactive([
  {
    key: '0',
    title: '文件夹1',
    children: [
      {
        key: '0-0',
        title: '文件1-1',
        children: [
          { key: '0-0-0', title: '文件1-1-1' },
          { key: '0-0-1', title: '文件1-1-2' }
        ]
      },
      {
        key: '0-1',
        title: '文件1-2'
      }
    ]
  },
  {
    key: '1',
    title: '文件夹2',
    children: [
      { key: '1-0', title: '文件2-1' },
      { key: '1-1', title: '文件2-2' }
    ]
  }
])

// 处理拖拽事件
const handleDrop = (info: any) => {
  const log = `将节点 "${info.dragNode.title}" 拖拽到 "${info.node.title}" ${getDropPositionText(info.dropPosition)}`
  dropLogs.value.unshift(log)
  
  // 限制日志数量
  if (dropLogs.value.length > 5) {
    dropLogs.value.pop()
  }
}

// 获取拖拽位置文本
const getDropPositionText = (position: number) => {
  if (position === 0) return '内部'
  if (position === -1) return '前面'
  if (position === 1) return '后面'
  return ''
}
&lt;/script&gt;

&lt;style scoped&gt;
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}

.drop-log {
  height: 150px;
  overflow-y: auto;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 10px;
  background: #fafafa;
}

.log-item {
  padding: 5px 0;
  border-bottom: 1px solid #e8e8e8;
  font-size: 14px;
}

.log-empty {
  text-align: center;
  color: #999;
  padding: 20px;
}
&lt;/style&gt;</code></pre>
      </div>
    </section>
    
    <!-- 不同的显示效果 -->
    <section class="demo-section">
      <h2>不同的显示效果</h2>
      <div class="demo-row">
        <div class="demo-col">
          <h3>隐藏连接线</h3>
          <XTree :tree-data="basicTreeData" :show-line="false" />
        </div>
        <div class="demo-col">
          <h3>隐藏图标</h3>
          <XTree :tree-data="basicTreeData" :show-icon="false" />
        </div>
      </div>
      
      <div class="code-example">
        <h3>不同的显示效果</h3>
        <pre v-pre><code>&lt;template&gt;
  &lt;div class="demo-row"&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;隐藏连接线&lt;/h3&gt;
      &lt;!-- 设置show-line为false隐藏连接线 --&gt;
      &lt;XTree 
        :tree-data="basicTreeData" 
        :show-line="false" 
      /&gt;
    &lt;/div&gt;
    &lt;div class="demo-col"&gt;
      &lt;h3&gt;隐藏图标&lt;/h3&gt;
      &lt;!-- 设置show-icon为false隐藏图标 --&gt;
      &lt;XTree 
        :tree-data="basicTreeData" 
        :show-icon="false" 
      /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import XTree from 'your-component-library/XTree/XTree.vue'

// 基本树形数据结构
const basicTreeData = [
  {
    key: '0',
    title: '文件夹1',
    children: [
      {
        key: '0-0',
        title: '文件1-1',
        children: [
          { key: '0-0-0', title: '文件1-1-1' },
          { key: '0-0-1', title: '文件1-1-2' }
        ]
      },
      {
        key: '0-1',
        title: '文件1-2',
        children: [
          { key: '0-1-0', title: '文件1-2-1' }
        ]
      }
    ]
  },
  {
    key: '1',
    title: '文件夹2',
    children: [
      { key: '1-0', title: '文件2-1' },
      { key: '1-1', title: '文件2-2' }
    ]
  }
]
&lt;/script&gt;

&lt;style scoped&gt;
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
&lt;/style&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { Button } from 'ant-design-vue'
  import XTree from '../src/components/XTree/XTree.vue'
  // XTreeNode type is used in template via TreeData
  
  // 基本树形数据
  const basicTreeData = [
    {
      key: '0',
      title: '文件夹1',
      children: [
        {
          key: '0-0',
          title: '文件1-1',
          children: [
            { key: '0-0-0', title: '文件1-1-1' },
            { key: '0-0-1', title: '文件1-1-2' }
          ]
        },
        {
          key: '0-1',
          title: '文件1-2',
          children: [
            { key: '0-1-0', title: '文件1-2-1' }
          ]
        }
      ]
    },
    {
      key: '1',
      title: '文件夹2',
      children: [
        { key: '1-0', title: '文件2-1' },
        { key: '1-1', title: '文件2-2' }
      ]
    }
  ]
  
  // 自定义节点内容的数据
  const customTreeData = [
    {
      key: '0',
      title: '文件夹1',
      icon: '📁',
      tag: { text: '重要', color: '#ff4d4f' },
      children: [
        {
          key: '0-0',
          title: '文件1-1',
          icon: '📄',
          tag: { text: '文档', color: '#1890ff' }
        },
        {
          key: '0-1',
          title: '图片1-2',
          icon: '🖼️',
          tag: { text: '图片', color: '#52c41a' }
        }
      ]
    },
    {
      key: '1',
      title: '文件夹2',
      icon: '📁',
      children: [
        {
          key: '1-0',
          title: '视频2-1',
          icon: '🎬',
          tag: { text: '视频', color: '#fa8c16' }
        }
      ]
    }
  ]
  
  // 禁用节点的数据
  const disabledTreeData = [
    {
      key: '0',
      title: '文件夹1',
      children: [
        {
          key: '0-0',
          title: '可访问文件',
          children: [
            { key: '0-0-0', title: '文件1-1-1' },
            { key: '0-0-1', title: '文件1-1-2' }
          ]
        },
        {
          key: '0-1',
          title: '禁用文件',
          disabled: true,
          children: [
            { key: '0-1-0', title: '文件1-2-1', disabled: true }
          ]
        }
      ]
    }
  ]
  
  // 拖拽功能的数据
  const dragTreeData = reactive([
    {
      key: '0',
      title: '文件夹1',
      children: [
        {
          key: '0-0',
          title: '文件1-1',
          children: [
            { key: '0-0-0', title: '文件1-1-1' },
            { key: '0-0-1', title: '文件1-1-2' }
          ]
        },
        {
          key: '0-1',
          title: '文件1-2'
        }
      ]
    },
    {
      key: '1',
      title: '文件夹2',
      children: [
        { key: '1-0', title: '文件2-1' },
        { key: '1-1', title: '文件2-2' }
      ]
    }
  ])
  
  // 受控模式的选择状态
  const controlledSelectedKeys = ref(['0-0'])
  
  // 拖拽日志
  const dropLogs = ref<string[]>([])
  
  // 处理拖拽事件
  const handleDrop = (info: any) => {
    const log = `将节点 "${info.dragNode.title}" 拖拽到 "${info.node.title}" ${getDropPositionText(info.dropPosition)}`
    dropLogs.value.unshift(log)
    
    // 限制日志数量
    if (dropLogs.value.length > 5) {
      dropLogs.value.pop()
    }
  }
  
  // 获取拖拽位置文本
  const getDropPositionText = (position: number) => {
    if (position === 0) return '内部'
    if (position === -1) return '前面'
    if (position === 1) return '后面'
    return ''
  }
</script>

<style scoped lang="less">
  .tree-demo {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
  }
  
  .demo-section {
    margin-bottom: 32px;
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
  
  h1 {
    text-align: center;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.85);
  }
  
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.85);
    border-left: 4px solid #1890ff;
    padding-left: 12px;
  }
  
  h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.65);
  }
  
  .tag {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    margin-left: 8px;
  }
  
  .drop-log {
    height: 150px;
    overflow-y: auto;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding: 10px;
    background: #fafafa;
  }
  
  .log-item {
    padding: 5px 0;
    border-bottom: 1px solid #e8e8e8;
    font-size: 14px;
  }
  
  .log-empty {
    text-align: center;
    color: #999;
    padding: 20px;
  }
  
  /* 代码示例块样式 */
  .code-example {
    margin-top: 20px;
    margin-bottom: 30px;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .code-example h3 {
    padding: 10px 16px;
    margin: 0;
    background-color: #fafafa;
    border-bottom: 1px solid #f0f0f0;
    font-size: 14px;
    font-weight: 500;
  }
  
  .code-example pre {
    margin: 0;
    padding: 16px;
    background: #fff;
    overflow-x: auto;
  }
</style>
