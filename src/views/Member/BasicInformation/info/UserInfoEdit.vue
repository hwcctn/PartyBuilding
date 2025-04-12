<template>
  <el-descriptions class="intro" title="基本情况" :column="8" border>
    <el-descriptions-item label="姓名" :span="2">
      <el-input v-model="memberInfo.name" />
    </el-descriptions-item>
    <el-descriptions-item label="性别" :span="1">
      <el-input v-model="memberInfo.sex" />
    </el-descriptions-item>
    <el-descriptions-item label="民族" :span="1">
      <el-input v-model="memberInfo.nation" />
    </el-descriptions-item>
    <el-descriptions-item label="出生年月日" :span="2">
      <el-input v-model="memberInfo.birthday" />
    </el-descriptions-item>
    <el-descriptions-item label="籍贯" :span="2">
      <el-input v-model="memberInfo.origin" />
    </el-descriptions-item>
    <el-descriptions-item label="单位、职务或职业" :span="3">
      <el-input v-model="memberInfo.occupation" />
    </el-descriptions-item>
    <el-descriptions-item label="身份证号码" :span="2">
      <el-input v-model="memberInfo.identity_id" />
    </el-descriptions-item>
    <el-descriptions-item label="政治面貌" :span="3">
      <el-input v-model="memberInfo.politicalStatus" />
    </el-descriptions-item>

    <el-descriptions-item label="家庭详细住址" :span="3">
      <el-input v-model="memberInfo.address" />
    </el-descriptions-item>
    <el-descriptions-item label="学历 学位" :span="2">
      <el-input v-model="memberInfo.education" />
    </el-descriptions-item>
    <el-descriptions-item label="联系电话" :span="3">
      <el-input v-model="memberInfo.phone" />
    </el-descriptions-item>
    <el-descriptions-item label="个人简历" :span="8">
      <el-input v-model="memberInfo.resume" type="textarea" />
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores/memberInfo/memberInfo'
import { storeToRefs } from 'pinia'
const memberStore = useMemberStore()
const { memberInfo } = storeToRefs(memberStore)
</script>
<style lang="scss">
.el-textarea__inner {
  resize: none;
  height: 150px;
}
</style>
