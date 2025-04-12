// store/dataStore.ts
import { defineStore } from 'pinia'
type CardState = 'NotStarted' | 'InProgress' | 'Completed'
export const useStepCardStore = defineStore('stepCardStore', () => {
  // 直接将 mockData.ts 中的数据作为状态
  let stepCardState: CardState = 'NotStarted'
  function changeCardState(newState: CardState) {
    stepCardState = newState
  }
  return { stepCardState, changeCardState }
})
