<template>
  <div class="panel-phone">
    <el-form label-width="60px" size="large" :model="phone">
      <el-form-item label="手机号">
        <el-input placeholder="请输入手机号" v-model="phone.phone" />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="verify-code">
          <el-input placeholder="请输入验证码" v-model="phone.code" />
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const phone = reactive({
  phone: '',
  code: ''
})
</script>

<style lang="scss" scoped>
.panel-phone {
  color: red;
}

.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
