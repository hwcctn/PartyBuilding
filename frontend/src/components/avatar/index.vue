<template>
    <div class="demo-fit">
      <div class="block" @click="showDialog = true">
        <el-avatar shape="square" class="custom-avatar" fit="fill" :src="avatarSrc" />
      </div>
      <el-dialog :visible.sync="showDialog" width="30%">
        <img :src="avatarSrc" alt="头像" style="width: 100%; height: auto;" />
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="showDialog = false">关闭</el-button>
        </span>
      </el-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
 
    const showDialog = ref(false);
    const avatarSrc = 'https://img2.baidu.com/it/u=717423697,1047943915&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067';
  
      
  </script>
  
  <style scoped>
  .custom-avatar {
    width: 120px;
    height: 135px;
    cursor: pointer; 
  }
  </style>
  