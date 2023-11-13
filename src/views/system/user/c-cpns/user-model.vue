<template>
  <el-dialog v-model="show" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="show = false">取消</el-button>
        <el-button type="primary" @click="handleConfimClick"> 保存 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)

function setDialogVisible() {
  show.value = true
}

function handleConfimClick() {}

defineExpose({
  setDialogVisible
})
</script>
