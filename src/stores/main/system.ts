import { defineStore } from 'pinia'

const useSystemStore = defineStore('system', {
  state: (): any => ({
    list: []
  }),
  actions: {
    async getList(queryInfo: any) {
      const data = [
        {
          id: 1,
          name: 'admin',
          realname: '管理员',
          cellphone: '13888888888',
          enable: 1,
          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 2,
          name: 'editor',
          realname: '编辑',
          cellphone: '13888888888',
          enable: 1,
          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 3,
          name: 'test',
          realname: '测试',
          cellphone: '13888888888',
          enable: 1,

          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 4,
          name: 'test1',
          realname: '测试1',
          cellphone: '13888888888',
          enable: 1,

          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 5,
          name: 'test2',
          realname: '测试2',
          cellphone: '13888888888',
          enable: 1,

          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 6,
          name: 'test3',
          realname: '测试3',
          cellphone: '13888888888',
          enable: 1,
          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 7,
          name: 'test4',
          realname: '测试4',
          cellphone: '13888888888',
          enable: 1,
          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 8,
          name: 'test5',
          realname: '测试5',
          cellphone: '13888888888',
          enable: 1,
          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        },
        {
          id: 9,
          name: 'test6',
          realname: '测试6',
          cellphone: '13888888888',
          enable: 0,
          createAt: '2021-06-01 10:00:00',
          updateAt: '2021-06-01 10:00:00'
        }
      ]
      this.list = data
    },
    async deleteUserByIdAction(id: number) {
      console.log('deleteUserByIdAction', id)
      this.getList({
        page: 1,
        size: 10
      })
    },
    async createNewItem(data: any) {
      console.log('createNewItem', data)
      this.getList({
        page: 1,
        size: 10
      })
    },
    async updateUserById(id:number,data: any) {
      console.log('updateUserById', data)
      this.getList({
        page: 1,
        size: 10
      })
    }
  }
})

export default useSystemStore
