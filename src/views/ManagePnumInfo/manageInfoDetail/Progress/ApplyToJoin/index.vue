<template>
    <div>
      <div v-if="mode === 'edit'">
        <EditApplyToJoint :mode="mode" @update:mode="updateMode" />
        
      </div>
      <div v-else>
        <StateApplyToJoin    />
        <el-button type="primary" @click=" switchToEdit">编辑</el-button>
        <el-button type="primary">提交审核</el-button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import EditApplyToJoint from './EditApplyToJoin.vue';
  import StateApplyToJoin from '../../../components/state/StateApplyToJoin.vue';
  
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
  