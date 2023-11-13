<template>
  <div class="user">
    <UserSearch @query="handleQueryClick" @reset="handleResetClick" />
    <UserContent
      ref="userContentRef"
      @editClick="handleEditClick"
      @newClick="handleNewClick"
    />
    <UserModel ref="userModelRef" />
  </div>
</template>

<script setup lang="ts">
import UserContent from './c-cpns/user-content.vue'
import UserModel from './c-cpns/user-model.vue'
import UserSearch from './c-cpns/user-search.vue'
import { ref } from 'vue'

const userContentRef = ref<InstanceType<typeof UserContent>>()
const userModelRef = ref<InstanceType<typeof UserModel>>()

function handleQueryClick(queryInfo: any) {
  userContentRef.value?.getDataList(queryInfo)
}

function handleResetClick() {
  userContentRef.value?.getDataList()
}

function handleEditClick(itemData: any) {

  userModelRef.value?.setDialogVisible(false, itemData)
}

function handleNewClick() {
   userModelRef.value?.setDialogVisible()
}
</script>
<style lang="scss" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
