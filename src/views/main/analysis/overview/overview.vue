<template>
   <div class="overview">
    <MyCard title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </MyCard>
   </div>
</template>

<script lang="ts" setup>
import MyCard from "@/components/card/card.vue"
</script>

<style lang="scss" scoped>
.overview{
   .c-left {
    text-align: left;
  }
}
</style>
