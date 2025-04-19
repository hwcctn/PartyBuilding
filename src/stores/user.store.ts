import { defineStore } from 'pinia'
import { ref } from 'vue'

export type UserRole = 'member' | 'branch' | 'committee' | ''

export const useUserStore = defineStore('user', () => {
  const role = ref<UserRole>('')
  const changeRole = (newRole: UserRole) => {
    role.value = newRole
  }

  const getRole = () => {
    return role.value
  }

  return { role, getRole, changeRole }
})
