<template>
  <div class="popconfirm-demo">
    <h1>XPopconfirm 气泡确认框示例</h1>
    
    <!-- 基本用法 -->
    <section class="demo-section">
      <h2>基本用法</h2>
      <div class="demo-row">
        <XPopconfirm title="确定要删除这条记录吗？" @confirm="handleConfirm">
          <Button type="danger">删除</Button>
        </XPopconfirm>
        
        <XPopconfirm title="确定要提交吗？" okType="primary" @confirm="handleConfirm">
          <Button type="primary">提交</Button>
        </XPopconfirm>
        
        <XPopconfirm title="确定要取消吗？" @confirm="handleConfirm">
          <Button>取消</Button>
        </XPopconfirm>
      </div>
    </section>
    
    <!-- 不同触发方式 -->
    <section class="demo-section">
      <h2>不同触发方式</h2>
      <div class="demo-row">
        <XPopconfirm title="点击触发" trigger="click" @confirm="handleConfirm">
          <Button>点击</Button>
        </XPopconfirm>
        
        <XPopconfirm title="悬停触发" trigger="hover" @confirm="handleConfirm">
          <Button>悬停</Button>
        </XPopconfirm>
        
        <XPopconfirm title="聚焦触发" trigger="focus" @confirm="handleConfirm">
          <Button>聚焦</Button>
        </XPopconfirm>
        
        <XPopconfirm title="右键触发" trigger="contextmenu" @confirm="handleConfirm">
          <Button>右键</Button>
        </XPopconfirm>
      </div>
    </section>
    
    <!-- 不同位置 -->
    <section class="demo-section">
      <h2>不同位置</h2>
      <div class="demo-row positions">
        <XPopconfirm title="顶部" placement="top" @confirm="handleConfirm">
          <Button>顶部</Button>
        </XPopconfirm>
        
        <XPopconfirm title="底部" placement="bottom" @confirm="handleConfirm">
          <Button>底部</Button>
        </XPopconfirm>
        
        <XPopconfirm title="左侧" placement="left" @confirm="handleConfirm">
          <Button>左侧</Button>
        </XPopconfirm>
        
        <XPopconfirm title="右侧" placement="right" @confirm="handleConfirm">
          <Button>右侧</Button>
        </XPopconfirm>
      </div>
    </section>
    
    <!-- 自定义内容 -->
    <section class="demo-section">
      <h2>自定义内容</h2>
      <div class="demo-row">
        <XPopconfirm
          title="删除确认"
          description="此操作将永久删除该记录，无法恢复，请谨慎操作。"
          okType="danger"
          @confirm="handleConfirm"
        >
          <Button type="danger">带描述</Button>
        </XPopconfirm>
        
        <XPopconfirm @confirm="handleConfirm">
          <template #title>
            <span style="color: #ff4d4f;">⚠️ 警告</span>
          </template>
          <template #description>
            <div>
              <p>这是一个自定义的描述内容</p>
              <p style="color: #ff7875;">请仔细阅读后再操作</p>
            </div>
          </template>
          <Button>自定义描述</Button>
        </XPopconfirm>
      </div>
    </section>
    
    <!-- 自定义按钮 -->
    <section class="demo-section">
      <h2>自定义按钮</h2>
      <div class="demo-row">
        <XPopconfirm 
          title="自定义按钮文字"
          okText="是的" 
          cancelText="不，谢谢" 
          @confirm="handleConfirm"
        >
          <Button>自定义文字</Button>
        </XPopconfirm>
        
        <XPopconfirm 
          title="自定义按钮样式"
          :okButtonProps="{ type: 'primary', size: 'small' }"
          :cancelButtonProps="{ size: 'small' }"
          @confirm="handleConfirm"
        >
          <Button>自定义样式</Button>
        </XPopconfirm>
        
        <XPopconfirm 
          title="使用插槽自定义按钮"
          @confirm="handleConfirm"
        >
          <template #okText>
            <span style="color: #52c41a;">✅ 确认</span>
          </template>
          <template #cancelText>
            <span style="color: #ff4d4f;">❌ 取消</span>
          </template>
          <Button>插槽按钮</Button>
        </XPopconfirm>
      </div>
    </section>
    
    <!-- 受控模式 -->
    <section class="demo-section">
      <h2>受控模式</h2>
      <div class="demo-row">
        <XPopconfirm 
          :open="visible"
          title="受控模式"
          @confirm="handleConfirm"
          @cancel="handleCancel"
        >
          <Button>受控显示</Button>
        </XPopconfirm>
        
        <Button type="primary" @click="visible = true">手动打开</Button>
        <Button @click="visible = false">手动关闭</Button>
        <span>当前状态: {{ visible ? '显示' : '隐藏' }}</span>
      </div>
    </section>
    
    <!-- 其他用法 -->
    <section class="demo-section">
      <h2>其他用法</h2>
      <div class="demo-row">
        <XPopconfirm 
          title="禁用状态"
          disabled
          @confirm="handleConfirm"
        >
          <Button disabled>禁用</Button>
        </XPopconfirm>
        
        <XPopconfirm 
          title="无关闭按钮"
          :closeable="false"
          @confirm="handleConfirm"
        >
          <Button>无关闭按钮</Button>
        </XPopconfirm>
        
        <XPopconfirm 
          title="自定义图标颜色"
          iconColor="#52c41a"
          @confirm="handleConfirm"
        >
          <Button>自定义图标</Button>
        </XPopconfirm>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import XPopconfirm from '../src/components/XPopconfirm/XPopconfirm.vue'

// 受控模式的可见性
const visible = ref(false)

// 处理确认事件
const handleConfirm = () => {
  console.log('确认操作')
  visible.value = false
  // 可以在这里执行实际的确认逻辑
}

// 处理取消事件
const handleCancel = () => {
  console.log('取消操作')
  visible.value = false
}
</script>

<style scoped lang="less">
.popconfirm-demo {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 32px;
}

.demo-section h2 {
  font-size: 18px;
  margin-bottom: 16px;
  color: #262626;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
}

.positions {
  align-items: baseline;
}
</style>