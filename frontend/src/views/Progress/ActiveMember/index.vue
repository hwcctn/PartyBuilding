<template>
  <div>
    <div v-if="mode === 'edit'">
      <EditActiveMember :mode="mode" @update:mode="updateMode" />
      
    </div>
    <div v-else>
      <StateActiveMember    />
      <el-button type="primary" @click=" switchToEdit">编辑</el-button>
      <el-button type="primary">提交审核</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EditActiveMember from './EditActiveMember.vue';
import StateActiveMember from '../../../components/state/StateActiveMember.vue';

const mode = ref('edit'); // 默认显示编辑模式

const switchToEdit = () => {
   mode.value='edit'
};

const updateMode = (newMode) => {
mode.value = newMode;

};
</script>

<style scoped>

</style>
