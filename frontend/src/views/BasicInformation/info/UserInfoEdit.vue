<template>
    <el-descriptions class="intro" title="基本情况" :column="8" border>
      <el-descriptions-item label="姓名" :span="2">
        <el-input v-model="editableInfo.username" />
      </el-descriptions-item>
      <el-descriptions-item label="性别" :span="1">
        <el-input v-model="editableInfo.role.sex" />
      </el-descriptions-item>
      <el-descriptions-item label="民族" :span="1">
        <el-input v-model="editableInfo.role.nation" />
      </el-descriptions-item>
      <el-descriptions-item label="出生年月日" :span="2">
        <el-input v-model="editableInfo.role.birthdate" />
      </el-descriptions-item>
      <el-descriptions-item label="籍贯" :span="2">
        <el-input v-model="editableInfo.role.origin" />
      </el-descriptions-item>
      <el-descriptions-item label="单位、职务或职业" :span="3">
        <el-input v-model="editableInfo.role.occupation" />
      </el-descriptions-item>
      <el-descriptions-item label="身份证号码" :span="2">
        <el-input v-model="editableInfo.role.identityId" />
      </el-descriptions-item>
      <el-descriptions-item label="政治面貌" :span="3">
        <el-input v-model="editableInfo.role.politicalStatus" />
      </el-descriptions-item>
      
      <el-descriptions-item label="家庭详细住址" :span="3">
        <el-input v-model="editableInfo.role.address" />
      </el-descriptions-item>
      <el-descriptions-item label="学历 学位" :span="2">
        <el-input v-model="editableInfo.role.education" />
      </el-descriptions-item>
      <el-descriptions-item label="联系电话" :span="3">
        <el-input v-model="editableInfo.role.phoneNumber" />
      </el-descriptions-item>
      <el-descriptions-item label="个人简历" :span="8">
      <el-input v-model="editableInfo.resume" type="textarea" />
    </el-descriptions-item>
    </el-descriptions>
  
     
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    editableInfo: Object,
  });
  </script>
  