<template>
  <div class="login-pane">
    <LoginPane />
  </div>
</template>

<script lang="ts" setup>
import LoginPane from './c-cpns/login-pane.vue'
</script>

<style scoped lang="scss">
.login-pane {
  height: 100vh;
  width: 100vw;
  background: url('@/assets/img/login-bg.svg');
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
