<template>
  <el-descriptions class="intro" title="基本情况" :column="8" border>
    <el-descriptions-item label="姓名" :span="2">{{
      info.username
    }}</el-descriptions-item>
    <el-descriptions-item label="性别" :span="1">{{
      info.role.sex
    }}</el-descriptions-item>
    <el-descriptions-item label="民族" :span="1">{{
      info.role.nation
    }}</el-descriptions-item>
    <el-descriptions-item label="出生年月日" :span="2">{{
      info.role.birthdate
    }}</el-descriptions-item>
    <el-descriptions-item label="籍贯" :span="2">{{
      info.role.origin
    }}</el-descriptions-item>
    <el-descriptions-item label="单位、职务或职业" :span="3">{{
      info.role.occupation
    }}</el-descriptions-item>
    <el-descriptions-item label="身份证号码" :span="2">{{
      info.role.identityId
    }}</el-descriptions-item>
    <el-descriptions-item label="政治面貌" :span="3">{{
      info.role.politicalStatus
    }}</el-descriptions-item>
    <el-descriptions-item label="家庭详细住址" :span="3">{{
      info.role.address
    }}</el-descriptions-item>
    <el-descriptions-item label="学历 学位" :span="2">{{
      info.role.education
    }}</el-descriptions-item>
    <el-descriptions-item label="联系电话" :span="3">{{
      info.role.phoneNumber
    }}</el-descriptions-item>
    <el-descriptions-item label="个人简历" :span="8"
      ><div style="white-space: pre-wrap">
        {{ info.resume }}
      </div></el-descriptions-item
    >
    <!-- 显示政治面貌 -->
  </el-descriptions>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  info: Object
})
</script>
<style scoped></style>
