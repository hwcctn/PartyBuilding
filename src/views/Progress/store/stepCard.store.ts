// store/dataStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
interface StepCard {
  top_text: string
  step_id: number
  middle_text: string
  bottom_text: 'NotStarted' | 'InProgress' | 'Completed'
}
export interface StepGroup {
  title: string
  StateCartData: StepCard[]
}
export const useStepCardStore = defineStore('stepCardStore', () => {
  // 直接将 mockData.ts 中的数据作为状态
  const menuData = ref<StepGroup[]>([])
  function changeCardState(newStepCards: StepGroup[]) {
    menuData.value = newStepCards
  }
  return { menuData, changeCardState }
})
