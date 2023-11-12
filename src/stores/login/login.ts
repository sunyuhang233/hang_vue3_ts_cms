import { defineStore } from 'pinia'
import type { IAccount } from '@/types/common'
import { LOGIN_TOKEN, USER_INFO } from '@/global/constants'
import { localCache } from '@/utils/cache'
import router from '@/router'
const useLoginStore = defineStore('useLoginStore', {
  state: () => ({
    token: '',
    userInfo: {}
  }),
  actions: {
    async loginByAccount(account: IAccount) {
      // const loginResult = await login(account)
      const token = 'abc'
      this.token = token
      localCache.setCache(LOGIN_TOKEN, token)

      // 获取个人信息
      const userInfo = {}
      localCache.setCache(USER_INFO, userInfo)

      // 跳转
      router.push('/main')
    }
  }
})

export default useLoginStore
