import type { App } from 'vue'

// 同步导入演示组件
import DemoButton from './components/DemoButton.vue'
import DemoInput from './components/DemoInput.vue'
import DemoSelect from './components/DemoSelect.vue'
import DemoCheckbox from './components/DemoCheckbox.vue'
import DemoRadio from './components/DemoRadio.vue'
import DemoDatePicker from './components/DemoDatePicker.vue'
import DemoCascader from './components/DemoCascader.vue'
import DemoForm from './components/DemoForm.vue'
import DemoTableSearch from './components/DemoTableSearch.vue'
import DemoTable from './components/DemoTable.vue'
import DemoTree from './components/DemoTree.vue'
import DemoTreeSelect from './components/DemoTreeSelect.vue'
import DemoChart from './components/DemoChart.vue'
import DemoEditor from './components/DemoEditor.vue'
import DemoImageCropper from './components/DemoImageCropper.vue'

export function enhanceAppWithComponents(app: App) {
  // 基础组件
  app.component('DemoButton', DemoButton)
  app.component('DemoInput', DemoInput)
  app.component('DemoSelect', DemoSelect)
  app.component('DemoCheckbox', DemoCheckbox)
  app.component('DemoRadio', DemoRadio)
  app.component('DemoDatePicker', DemoDatePicker)
  app.component('DemoCascader', DemoCascader)

  // 表单组件
  app.component('DemoForm', DemoForm)
  app.component('DemoTableSearch', DemoTableSearch)

  // 数据展示
  app.component('DemoTable', DemoTable)
  app.component('DemoTree', DemoTree)
  app.component('DemoTreeSelect', DemoTreeSelect)
  app.component('DemoChart', DemoChart)

  // 高级组件
  app.component('DemoEditor', DemoEditor)
  app.component('DemoImageCropper', DemoImageCropper)
}
