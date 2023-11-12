import { defineStore } from 'pinia'

const useLoginStore = defineStore('useLoginStore', {
  state: () => ({
    token: '',
    userInfo: {}
  }),
  actions: {
    async loginByAccount(account: IAccount) {
      // const loginResult = await login(account)
    }
  }
})

export default useLoginStore
