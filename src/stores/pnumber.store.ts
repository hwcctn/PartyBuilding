// store/dataStore.ts
import { defineStore } from 'pinia'
import { GroupTree, Modeldata } from '@/Mock/mockData' // 导入 mockData.ts 中的数据

export const usePnumberStore = defineStore('pnumberStore', () => {
  // 直接将 mockData.ts 中的数据作为状态
  return {
    GroupTree,
    Modeldata
  }
})
