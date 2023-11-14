<template>
   <div class="overview">
    <MyCard title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </MyCard>
    <MyCard title="技术栈"></MyCard>
    <MyCard title="项目结构"></MyCard>
    <MyCard title="项目规范"></MyCard>
    <MyCard title="Git提交规范">
      <MyDescriptions
      :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'yarn commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"/>
    </MyCard>
   </div>
</template>

<script lang="ts" setup>
import MyCard from "@/components/card/card.vue"
import MyDescriptions from "@/components/descriptions/descriptions.vue"
</script>

<style lang="scss" scoped>
.overview{
   .c-left {
    text-align: left;
  }
}
</style>
