<template>
  <div class="title">
    <h3>{{ stepInfo.topText }} - {{ stepInfo.middleText }}</h3>
  </div>
  <component :is="currentRoleComponent" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// import CommitteeDetail from '/CommitteeDetail.vue'
// import BranchDetail from './BranchDetail.vue'
import CommitteeDetail from './children/committee/index.vue'
import BranchDetail from './children/branch/index.vue'

const route = useRoute()
const { role } = route.params

// 当前步骤信息
const stepInfo = {
  topText: route.query.topText,
  middleText: route.query.middleText
}

// 根据用户角色动态加载组件
const currentRoleComponent = computed(() => {
  return role === 'committee' ? CommitteeDetail : BranchDetail
})
</script>
