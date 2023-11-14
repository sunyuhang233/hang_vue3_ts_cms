<template>
<div class="description">
 <el-descriptions :title="props.title"  :column="props.column" border>
<template v-for="(itemData, index) in tableDatas" :key="index">
        <el-descriptions-item>
          <template #label> {{ itemData.name }} </template>
          <el-tag size="small">{{ itemData.description }}</el-tag>
        </el-descriptions-item>
      </template>
</el-descriptions>
</div>

</template>


<script lang="ts" setup>

const props = defineProps({
   title: {
      type: String,
      default: ''
    },
  column: {
    type: Number,
    default: 1
  },
  tableDatas: {
    type: Array,
    default: () => []
  }
})

</script>


<style lang="scss" scoped>
.description {
  margin-bottom: 20px;
}
</style>
