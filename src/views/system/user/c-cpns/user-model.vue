<template>
  <el-dialog v-model="show" :title="title" width="30%" center>
        <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              v-model="formData.realname"
              placeholder="请输入真实姓名"
            />
          </el-form-item>
          <el-form-item  label="密码" prop="password">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item label="手机号码" prop="cellphone">
            <el-input
              v-model="formData.cellphone"
              placeholder="请输入手机号码"
            />
          </el-form-item>

        </el-form>
      </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="show = false">{{ props.cancelText }}</el-button>
        <el-button type="primary" @click="handleConfimClick">{{ props.confirmText }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import useSystemStore from '@/stores/main/system';
import { computed, reactive, ref } from 'vue'
const show = ref(false)

const systemStore = useSystemStore()

const props = defineProps({
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '保存'
  },
})

const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const isNewRef = ref(true)
const editData = ref()
function setDialogVisible(isNew: boolean = true,itemData?: any ) {
  show.value = true
  isNewRef.value = isNew

  if (itemData && !isNew) {
    console.log('获取编辑', itemData);
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}
const title = computed(() => {
  return isNewRef.value ? '新增' : '编辑'
})
function handleConfimClick() {
  show.value = false
  if (editData && !isNewRef.value) {
systemStore.updateUserById(editData.value.id,formData)
  } else {
    console.log('新增', formData);
    systemStore.createNewItem(formData)
  }
}

defineExpose({
  setDialogVisible
})
</script>

<style lang="scss" scoped>
.form{
  padding: 0 20px;
}
</style>
