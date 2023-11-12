<template>
  <div class="user">
    <UserSearch @query="handleQueryClick" @reset="handleResetClick" />
    <UserContent />
  </div>
</template>

<script setup lang="ts">
import UserContent from './c-cpns/user-content.vue'
import UserSearch from './c-cpns/user-search.vue'

function handleQueryClick() {
  console.log('query')
}

function handleResetClick() {
  console.log('reset')
}
</script>
<style lang="scss" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
