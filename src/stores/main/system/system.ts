import { defineStore } from 'pinia'

const useSystemStore = defineStore('useSystemStore', {
  state: (): any => ({
    pageList: []
  }),
  actions: {
    postPageListAction(moduleName: string, queryInfo: any) {
      // 查询数据
      // 模拟10条角色数据 name intro createAt updateAt
      const data = [
        {
          id: 1,
          name: 'admin',
          intro: '管理员',
          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 2,
          name: 'editor',
          intro: '编辑',
          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 3,
          name: 'test',
          intro: '测试',
          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 4,
          name: 'test1',
          intro: '测试1',
          createAt: '2021-06-01 10:00:00'
        }
      ]
      // 保存数据
      this.pageList = data
    },
    async editPageDataAction(moduleName: string, id: string, editData: any) { },
    async newPageDataAction(moduleName: string, newData: any) {

    },
    async deletePageByIdAction(moduleName: string, id: string) { }
  }
})

export default useSystemStore
