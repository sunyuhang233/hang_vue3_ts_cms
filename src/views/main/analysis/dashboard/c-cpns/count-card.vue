<template>
  <div class="count-card">
    <div class="header">
      <span class="title">{{props.title }}</span>
      <el-tooltip :content="props.tips" placement="top" effect="dark">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span ref="countRef1">{{ props.number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}</span>
      <span ref="countRef2">{{ props.number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from "countup.js"
import {ref,onMounted} from 'vue'
interface IProps {
  amount?: string
  title?: string
  tips?: string
  number1: number
  number2: number
  subtitle?: string
}

const countRef1 = ref<HTMLElement>()
const countRef2 = ref<HTMLElement>()
const props=defineProps<IProps>()
const options = {
   prefix: props.amount === 'saleroom' ? '¥' : ''
}

onMounted(() => {
  const countup1 = new CountUp(countRef1.value!, props.number1,options)
  const countup2 = new CountUp(countRef2.value!, props.number2,options)
  countup1.start()
  countup2.start()
})



</script>


<style lang="scss" scoped>
.count-card{
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
  }
  .content {
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
  }
}
</style>
