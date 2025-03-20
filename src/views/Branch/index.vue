<template>
  <div style="height: 100vh; display: flex; flex-direction: column">
    <Header :Menudata />
    <div style="flex: 1">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores'
const userStore = useUserStore()
const { changeRole } = userStore
changeRole('Branch')
const Menudata = ref({
  title: '支部页面',
  menu: [
    { index: '/branch/member-info', label: '党员信息' },
    { index: '/branch/personnel', label: '人员管理' }
  ]
})
</script>

<style lang="scss" scoped>
.main {
  with: 100%;
}
</style>
