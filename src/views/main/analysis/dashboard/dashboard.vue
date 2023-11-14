<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in list">
      <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
      <countCard v-bind="item" />
      </el-col>

      </template>
    </el-row>

  </div>
</template>

<script setup lang="ts">
import countCard from './c-cpns/count-card.vue';
import { ref } from 'vue'

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

</script>
