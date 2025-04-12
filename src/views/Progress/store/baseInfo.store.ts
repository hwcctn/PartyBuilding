// 没有用
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfoItem } from '../service/style'
export const useBaseInfoStore = defineStore('baseInfo', () => {
  const baseInfo = ref<UserInfoItem[]>([])
  return { baseInfo }
})
