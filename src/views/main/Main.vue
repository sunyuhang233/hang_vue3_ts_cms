<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isChage ? '60px' : '210px'">
        <MainMenu :isFold="isChage" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <MainHeader @foldChange="handleFoldChange" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainHeader from '@/components/main-header/main-header.vue'
import MainMenu from '@/components/main-menu/main-menu.vue'

const isChage = ref(false)
function handleFoldChange(isFold: boolean) {
  isChage.value = isFold
}
</script>

<style scoped lang="scss">
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
