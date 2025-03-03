<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form :inline="true" :model="form" class="form">
            <!-- 政审是否合格 -->
              <el-form-item label="政审是否合格" :label-width="'130px'" class="multi-input">
                <el-select
                  v-model="form.poliExa"
                  placeholder="请选择"
                  style="width: 140px"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            <!-- 政审人（单位、职务、签名）-->
              <el-form-item label="政审人（单位、职务、签名）" :label-width="'260px'" class="multi-input" style="width: 500px;">
                <el-input v-model="form.poliAssessor" placeholder="请输入其单位及职务以及签名" />
              </el-form-item>
        </el-form>

  </div>
 
</template>

<script setup>
import { ref } from 'vue';
// view
 const labelInfo = ref({
    Text1: '政审是否合格',
    Text2: '政审人 (单位、职务、签名）',
   
  });
  
  const contentInfo = ref({
    Text1: '合格',
    Text2: '人工智能学院研究生党支部 党支部书记  胡燕',
  });
// edit
const options=[
  {
    label:"合格",
    value:1
  },
  {
    label:"不合格",
    value:0
  },
]
const form=ref({
  poliExa:"",
  poliAssessor:"",
})
</script>

<style lang="scss" scoped >
 .content {
    font-size: 14px;
    color: #555;
  }
  .edit{
  margin-top: 50px;
}
:deep(.el-input) {
  height: 100% !important;
  width: 100% !important;
}
</style>
