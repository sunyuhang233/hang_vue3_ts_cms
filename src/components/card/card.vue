<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ props.title }}</span>
      </div>
    </template>
    <!-- card body -->
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "关于"
  }
})
</script>
<style lang="scss" scoped>
.box-card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
  margin: 10px 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}

.item {
  margin-bottom: 10px;
  // border: 1px solid red;
}
</style>

