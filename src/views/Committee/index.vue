<template>
  <div style="height: 100vh; display: flex; flex-direction: column">
    <Header :Menudata />
    <div style="flex: 1">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'
import { ref } from 'vue'
const userStore = useUserStore()
const { changeRole } = userStore
changeRole('partyCommittee')
const Menudata = ref({
  title: '党委审核',
  menu: [
    { index: '/committee/member-info', label: '党员信息' },
    { index: '/committee/personnel', label: '人员管理' }
  ]
})
</script>

<style lang="scss" scoped></style>
