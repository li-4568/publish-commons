<template>
  <div class="tree-demo">
    <h1>XTree 树形组件示例</h1>
    
    <!-- 基本用法 -->
    <section class="demo-section">
      <h2>基本用法</h2>
      <div class="demo-row">
        <XTree :tree-data="basicTreeData" />
      </div>
    </section>
    
    <!-- 默认展开所有节点 -->
    <section class="demo-section">
      <h2>默认展开所有节点</h2>
      <div class="demo-row">
        <XTree :tree-data="basicTreeData" :default-expand-all="true" />
      </div>
    </section>
    
    <!-- 默认展开指定节点 -->
    <section class="demo-section">
      <h2>默认展开指定节点</h2>
      <div class="demo-row">
        <XTree :tree-data="basicTreeData" :default-expanded-keys="['0-0', '0-1']" />
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
    </section>
    
    <!-- 复选框功能 -->
    <section class="demo-section">
      <h2>复选框功能</h2>
      <div class="demo-row">
        <XTree :tree-data="basicTreeData" :checkable="true" :default-checked-keys="['0-0', '0-1']" />
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
    </section>
    
    <!-- 自定义节点内容 -->
    <section class="demo-section">
      <h2>自定义节点内容</h2>
      <div class="demo-row">
        <XTree :tree-data="customTreeData">
          <template #title="{ record }">
            <span>
              <span v-if="record?.icon" style="margin-right: 8px; color: #1890ff;">{{ record.icon }}</span>
              {{ record?.title }}
              <span v-if="record?.tag" class="tag" :style="{ backgroundColor: record.tag.color }">
                {{ record.tag.text }}
              </span>
            </span>
          </template>
        </XTree>
      </div>
    </section>
    
    <!-- 禁用节点 -->
    <section class="demo-section">
      <h2>禁用节点</h2>
      <div class="demo-row">
        <XTree :tree-data="disabledTreeData" />
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
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { Button } from 'ant-design-vue'
  import XTree from '../src/components/XTree/XTree.vue'
  import type { XTreeNode } from '../src/components/XTree/types'
  
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
    const dropKey = info.node.key
    const dragKey = info.dragNode.key
    const dropPos = info.node.pos.split('-')
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])
    
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
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .demo-section {
    margin-bottom: 40px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .demo-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 16px;
  }
  
  .demo-col {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    min-width: 300px;
  }
  
  h1 {
    color: #333;
    margin-bottom: 32px;
    text-align: center;
  }
  
  h2 {
    color: #666;
    font-size: 20px;
    margin-bottom: 16px;
    border-bottom: 2px solid #1890ff;
    padding-bottom: 8px;
  }
  
  h3 {
    color: #888;
    font-size: 14px;
    margin: 0 0 10px 0;
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
</style>
