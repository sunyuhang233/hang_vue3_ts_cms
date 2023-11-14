<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in list">
      <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
      <countCard v-bind="item" />
      </el-col>
      </template>
    </el-row>
      <el-row :gutter="10">
        <el-col :span="7">
        <el-card >
          <PieEchart :pie-data="props1.pieData" />
        </el-card>

        </el-col>
        <el-col :span="10"><el-card >
          123
        </el-card></el-col>
        <el-col :span="7"><el-card >
         <rose-echart :rose-data="props1.roseData" />
        </el-card></el-col>

      </el-row>

       <el-row :gutter="10">
        <el-col :span="12">
        <el-card >
<lineEchart v-bind="props1.lineData" />
        </el-card>

        </el-col>
        <el-col :span="12"><el-card >

        </el-card></el-col>

      </el-row>

  </div>
</template>

<script setup lang="ts">
import countCard from './c-cpns/count-card.vue';
import { ref, onMounted } from 'vue'
import PieEchart from '@/components/page-echarts/pie-echart.vue'
import roseEchart from '@/components/page-echarts/rose-echart.vue'
import lineEchart from '@/components/page-echarts/line-echart.vue'

const list = ref([
  {
    amount: '¥ 126,560',
    title: '总销售额',
    tips: '日销售额 ￥12,423',
    number1: 78,
    number2: 88,
    subtitle: '周同比 12%',
  },
  {
    amount: '¥ 126,560',
    title: '总销售额',
    tips: '日销售额 ￥12,423',
    number1: 78,
    number2: 88,
    subtitle: '周同比 12%',
  },
  {
    amount: '¥ 126,560',
    title: '总销售额',
    tips: '日销售额 ￥12,423',
    number1: 78,
    number2: 88,
    subtitle: '周同比 12%',
  },
  {
    amount: '¥ 126,560',
    title: '总销售额',
    tips: '日销售额 ￥12,423',
    number1: 78,
    number2: 88,
    subtitle: '周同比 12%',
  },
])

const props1 = {
  pieData: [
    { value: 1048, name: '搜索引擎' },
    { value: 735, name: '直接访问' },
    { value: 580, name: '邮件营销' },
    { value: 484, name: '联盟广告' },
    { value: 300, name: '视频广告' },
  ],
  roseData: [
    { value: 1048, name: '搜索引擎' },
    { value: 735, name: '直接访问' },
    { value: 580, name: '邮件营销' },
    { value: 484, name: '联盟广告' },
    { value: 300, name: '视频广告' },
  ],
  lineData: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: ['820', '932', '901', '934', '1290', '1330', '1320'],
}
}
</script>


<style lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
