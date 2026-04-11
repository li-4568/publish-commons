<template>
  <div class="x-table-search" ref="searchRef">
    <Form
      ref="formRef"
      name="table_search"
      class="search-form"
      :model="formState"
    >
      <Row :gutter="24" class="search-row">
        <FormItemRender
          v-for="item in visibleFields"
          :key="item.field"
          :item="item"
          :formState="formState"
          :rowSpan="rowSpan"
        />

        <Col class="action-col">
          <Space :size="spaceNum">
            <div
              class="expand-icon"
              @click="toggleMore"
              v-if="shouldCollapse && expandIcon"
              :title="isExpanded ? '收起' : '展开'"
            >
              <UpOutlined v-if="isExpanded" />
              <DownOutlined v-else />
            </div>
            <XButton @click="toggleMore" v-else-if="shouldCollapse">
              {{ isExpanded ? '收起' : '展开' }}
              <UpOutlined v-if="isExpanded" />
              <DownOutlined v-else />
            </XButton>

            <slot name="actions">
              <XButton @click="handleReset">
                {{ resetText || '重置' }}
              </XButton>
              <XButton type="primary" @click="handleSearch">
                {{ searchText || '搜索' }}
              </XButton>
            </slot>
          </Space>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script setup lang="ts">
import FormItemRender from './components/FormItemRender.vue'
import { XButton } from '../XButton'
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue'
import { Form, Row, Col, Space } from 'ant-design-vue'
import type { XTableSearchProps, XTableSearchEmits } from './types'
import { useTableSearch } from './composables'
import './style.less'

defineOptions({
  name: 'XTableSearch',
  inheritAttrs: false
})

const props = defineProps<XTableSearchProps>()
const emit = defineEmits<XTableSearchEmits>()

const {
  formState,
  searchRef,
  isExpanded,
  rowSpan,
  spaceNum,
  expandIcon,
  visibleFields,
  shouldCollapse,
  toggleMore,
  handleSearch,
  handleReset,
} = useTableSearch(props, emit)
</script>
