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

const Menudata = ref({
  title: '党委审核',
  menu: [
    { index: '/committee/member-info', label: '党员信息' },
    { index: '/committee/personnel', label: '人员管理' },
    { index: '/committee/branch-manage', label: '支部管理' }
  ]
})
</script>

<style lang="scss" scoped></style>
