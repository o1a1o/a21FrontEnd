<template>
    <div>
        <div ref="canvas" class="canves">
            
        </div>
    </div>
</template>

<style scoped>
.canves {
  width: 100%;
  height: 100vh;
  
}
</style>

<script>

import Modeler from '../../node_modules/bpmn-js/lib/NavigatedViewer'
import { xmlStr } from '../components/xmlData.js'

export default {
  init() {
    // // 去除默认工具栏
    const modules = Modeler.prototype._modules
    const index = modules.findIndex(it => it.paletteProvider)
    modules.splice(index, 1)

    this.bpmnModeler = new BpmnModeler({
      paletteEntries,
      additionalModules: [customPalette]
    })

  },
  data() {
    return {
      bpmnViewer: null
    }
  },
  async mounted() {
    this.bpmnViewer = new Modeler({
      container: this.$refs.canvas
    })

    try {
      const { warnings } = await this.bpmnViewer.importXML(xmlStr)
      // 调整在正中间
      this.bpmnViewer.get('canvas').zoom('fit-viewport', 'auto')
      console.log('rendered')
    } catch (err) {
      console.log('error rendering', err)
    }
  }
}


</script>
