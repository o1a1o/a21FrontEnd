<template>
  <div class="bpmn-container">

    <div ref="palette"></div>

    <div ref="canvas" class="canves"></div>
          <!-- 工具栏显示的地方 -->
    <div id="js-properties-panel" class="panel"></div>

  </div>
</template>

<script>

// 工具栏相关
// import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
// import propertiesPanelModule from "bpmn-js-properties-panel";
// import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";

import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css' // 右边工具栏样式
 // 这里引入的是右侧属性栏这个框
import propertiesPanelModule from 'bpmn-js-properties-panel'
// 而这个引入的是右侧属性栏里的内容
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'


import Modeler from 'bpmn-js/lib/Modeler'
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import { xmlStr } from './xmlData.js'

import customPalette from './palette'
import customRenderer from './renderer'
import paletteEntries from './config/paletteEntries'
import customContextPad from './contextPad'
import customRules from './rules'
export default {
  data () {
    return {
      bpmnModeler: null
    }
  },
  async mounted () {
    // // 去除默认工具栏
    // const modules = Modeler.prototype._modules
    // const index = modules.findIndex(it => it.paletteProvider)
    // modules.splice(index, 1)

    this.bpmnModeler = new Modeler({
      container: this.$refs.canvas,
      paletteContainer: this.$refs.palette,
      paletteEntries,
      additionalModules: [customPalette, customRenderer, customContextPad, customRules]
    })
    const eventBus = this.bpmnModeler.get('eventBus')
    const eventTypes = Object.keys(eventBus._listeners)
    eventTypes.forEach(it => {
      eventBus.on(it, e => {
        console.log(it, e)
      })
    })
    try {
      const res = await this.bpmnModeler.importXML(xmlStr)
      console.log('res', res)
      // 调整在正中间
      this.bpmnModeler.get('canvas').zoom('fit-viewport', 'auto')
      console.log('rendered')
    } catch (err) {
      console.log('error rendering', err)
    }
  }
}
</script>

<style  scoped>

  .canves {
    width: 100%;
    height: 100vh;
  }

</style>
