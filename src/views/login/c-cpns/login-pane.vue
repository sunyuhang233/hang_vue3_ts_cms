<template>
  <div class="login-pane-box">
    <h1 class="title">弘源后台管理系统</h1>
    <!-- 中间的tabs切换 -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <!-- 1.账号登录的Pane -->
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>
          <pane-account ref="accountRef" />
        </el-tab-pane>

        <!-- 2.手机登录的Pane -->
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <pane-phone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      v-loading="isLoading"
      type="primary"
      size="large"
      class="login-btn"
      @click="handleLoginBtnClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import paneAccount from './pane-account.vue'
import panePhone from './pane-phone.vue'
import { ref, watch } from 'vue'

const activeName = ref('account')
const isRemPwd = ref(false)
const isLoading = ref(false)

watch(isRemPwd, (newVal) => {
  isRemPwd.value = newVal
})

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
  } else {
    console.log('phone')
  }
}
</script>

<style scoped lang="scss">
.login-pane-box {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    // --el-button-size: 50px;
  }
}
</style>
