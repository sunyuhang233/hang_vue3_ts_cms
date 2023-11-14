<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'


interface IProps {
  option: EChartsOption
}

const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()
onMounted(() => {
  const echartInstance = echarts.init(echartRef.value!, 'light',{
    renderer:"canvas"
  })
  watchEffect(() => echartInstance.setOption(props.option))
  window.addEventListener("resize", () => {
  echartInstance.resize()
 })
})
</script>


<style lang="scss" scoped>
.base-echart {
  color: red;
}

.echart {
  height: 300px;
}
</style>
