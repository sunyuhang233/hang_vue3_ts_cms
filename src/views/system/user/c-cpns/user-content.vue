<template>
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary" @click="">新建用户</el-button>
    </div>
    <div class="table">
      <el-table
        v-loading="isLoading"
        :data="list"
        border
        style="width: 100%"
        empty-text="暂无数据~~~"
        tooltip-options
      >
        <el-table-column align="center" type="selection" width="50px" />
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="60px"
        />

        <el-table-column
          align="center"
          label="用户名"
          prop="name"
          width="150px"
        />
        <el-table-column
          align="center"
          label="真实姓名"
          prop="realname"
          width="150px"
        />
        <el-table-column
          align="center"
          label="手机号码"
          prop="cellphone"
          width="150px"
        />
        <el-table-column
          align="center"
          label="状态"
          prop="enable"
          width="100px"
        />
        <el-table-column align="center" label="创建时间" prop="createAt" />
        <el-table-column align="center" label="更新时间" prop="updateAt" />

        <el-table-column align="center" label="操作" width="150px">
          <template #default="scope">
            <el-button
              size="small"
              icon="Edit"
              type="primary"
              text
              @click="handleEditClick(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              icon="Delete"
              type="danger"
              text
              @click="handleDeleteClick(scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useSystemStore from '@/stores/main/system'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'

const systemStore = useSystemStore()

const { list } = storeToRefs(systemStore)

const pageNo = ref(1)
const pageSize = ref(10)
const total = ref(10)
const isLoading = ref(false)

function handleSizeChange(val: number) {
  pageNo.value = val
  console.log(`每页 ${val} 条`)
}

function handleCurrentChange(val: number) {
  pageSize.value = val
  console.log(`当前页: ${val}`)
}

function getDataList(formData: any = {}) {
  isLoading.value = true

  const pageInfo = {
    pageNo,
    pageSize
  }
  const queryInfo = { ...pageInfo, ...formData }
  systemStore.getList(queryInfo)

  setTimeout(() => {
    isLoading.value = false
  }, 5000)
}

getDataList()

defineExpose({
  getDataList
})

const emit = defineEmits(['editClick'])

function handleEditClick(row: any) {
  console.log('编辑')
  emit('editClick', row)
}

function handleDeleteClick(id: number) {
  console.log('删除')
  systemStore.deleteUserByIdAction(id)
  ElMessage.success('删除成功')
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;

  .title {
    font-size: 22px;
  }
}

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
