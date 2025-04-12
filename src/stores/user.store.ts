import { ref } from 'vue'
import { defineStore } from 'pinia'
export type UserRole = 'member' | 'branch' | 'committee' | ''
export const useUserStore = defineStore('user', () => {
  const role = ref<UserRole>('')
  const changeRole = (newRole: UserRole) => {
    role.value = newRole
  }
  const isAuthenticated = ref(false)

  return { role, isAuthenticated, changeRole }
})
