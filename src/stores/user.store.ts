import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', () => {
  const role = ref<string>('partyCommittee')
  const changeRole = (newRole: string) => {
    role.value = newRole
  }
  return { role, changeRole }
})
