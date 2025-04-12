<template>
  <el-descriptions class="intro" title="基本情况" :column="8" border>
    <el-descriptions-item label="姓名" :span="2">{{
      memberInfo?.name
    }}</el-descriptions-item>
    <el-descriptions-item label="性别" :span="1">{{
      memberInfo?.sex
    }}</el-descriptions-item>
    <el-descriptions-item label="民族" :span="1">{{
      memberInfo?.nation
    }}</el-descriptions-item>
    <el-descriptions-item label="出生年月日" :span="2">{{
      memberInfo?.birthday
    }}</el-descriptions-item>
    <el-descriptions-item label="籍贯" :span="2">{{
      memberInfo?.origin
    }}</el-descriptions-item>
    <el-descriptions-item label="单位、职务或职业" :span="3">{{
      memberInfo?.occupation
    }}</el-descriptions-item>
    <el-descriptions-item label="身份证号码" :span="2">{{
      memberInfo?.identity_id
    }}</el-descriptions-item>
    <el-descriptions-item label="政治面貌" :span="3">{{
      memberInfo?.politicalStatus
    }}</el-descriptions-item>
    <el-descriptions-item label="家庭详细住址" :span="3">{{
      memberInfo?.address
    }}</el-descriptions-item>
    <el-descriptions-item label="学历 学位" :span="2">{{
      memberInfo?.education
    }}</el-descriptions-item>
    <el-descriptions-item label="联系电话" :span="3">{{
      memberInfo?.phone
    }}</el-descriptions-item>
    <el-descriptions-item label="个人简历" :span="8"
      ><div style="white-space: pre-wrap">
        {{ memberInfo?.resume }}
      </div></el-descriptions-item
    >
    <!-- 显示政治面貌 -->
  </el-descriptions>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  memberInfo: Object
})
// import { useMemberStore } from '@/stores/memberInfo'
// import { storeToRefs } from 'pinia'
// const memberStore = useMemberStore()
// const { memberInfo } = storeToRefs(memberStore)
// console.log(memberInfo)
</script>
<style scoped></style>
