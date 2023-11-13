<template>
  <div class="user">
    <UserSearch @query="handleQueryClick" @reset="handleResetClick" />
    <UserContent ref="userContentRef" @editClick="handleEditClick" />
  </div>
</template>

<script setup lang="ts">
import UserContent from './c-cpns/user-content.vue'
import UserSearch from './c-cpns/user-search.vue'
import { ref } from 'vue'

const userContentRef = ref<InstanceType<typeof UserContent>>()

function handleQueryClick(queryInfo: any) {
  userContentRef.value?.getDataList(queryInfo)
}

function handleResetClick() {
  userContentRef.value?.getDataList()
}

function handleEditClick(row: any) {
  console.log(row)
}
</script>
<style lang="scss" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
