<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit" style="margin-top: 50px; ">
    <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-row>
            <!-- 书面思想汇报时间 -->
            <el-col :span="24">
              <el-form-item label="书面思想汇报时间" :label-width="'130px'">
                <el-row :gutter="10">
                  <el-col :span="6">
                    <el-date-picker v-model="form.reportTime1" type="date" placeholder="请选择时间1" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="form.reportTime2" type="date" placeholder="请选择时间2" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="form.reportTime3" type="date" placeholder="请选择时间3" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="form.reportTime4" type="date" placeholder="请选择时间4" clearable />
                  </el-col>
                </el-row>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <!-- 支部考察时间 -->
            <el-col :span="24">
              <el-form-item label="支部考察时间" :label-width="'130px'">
                <el-row :gutter="10">
                  <el-col :span="6">
                    <el-date-picker v-model="form.investigationTime1" type="date" placeholder="请选择时间1" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="form.investigationTime2" type="date" placeholder="请选择时间2" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="form.investigationTime3" type="date" placeholder="请选择时间3" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="form.investigationTime4" type="date" placeholder="请选择时间4" clearable />
                  </el-col>
                </el-row>
              </el-form-item>
            </el-col>
          </el-row>
       
        <!-- 培养教育情况 -->
        <el-form-item label="培养教育情况" :label-width="'130px'" style="margin-right: 250px;">
            <el-input
              v-model="form.education"
              type="textarea"
              placeholder="（例文：××××年××月--××××年××月，组织×××同志参加×××培训班，学习××××等课程。）
××××年××月××日，组织×××同志听×××同志讲的党课，题目为×××××××。
××××年××月××日，组织×××同志到×××单位开展党员服务群众活动。
××××年××月××日，发放《党章》等资料，要求×××同志认真学习。
(至少四条，其中参加培训班只能算一条记录)"
              clearable
              style= "width: 690px;height: 150px;"
              resize="none"
              :rows="2"
            />
          </el-form-item>
          <!-- 考察情况 -->
          <el-form-item label="考察情况" :label-width="'130px'" style="margin-right: 250px;">
            <el-input
              v-model="form.assessment"
              type="textarea"
              placeholder="（从列为积极分子后每半年考察一次，考察情况落款时间刚满半年当天）"
              clearable
              style="width: 690px;height: 150px; "
              resize="none"
              :rows="2"
            />
          </el-form-item>
      </el-form>
      <div>
      <el-button style="  height: 40px;
  width: 100px;" type="primary"@click="handleSave ">保存</el-button>
      </div> 
  </div>
</template>

<script setup>
import { ref } from 'vue';
// view
 const labelInfo = ref({
    Text1: '书面思想汇报时间',
    Text2: '支部考察时间',
    Text3: '培养教育情况',
    Text4: '考察情况',
   
  });
  
  const contentInfo = ref({
    Text1:'2024-02-03   2024-05-03    2024-08-03   2024-11-03',
    Text2: '2024-05-03 2024-11-03',
    Text3: '2023年11月--2023年11月，组织龚雪竹同志参加入党积极分子培训班，学习中国共产党的光辉历程等课程。<br />2023年12月12日，组织龚雪竹同志学习习近平总书记视察时重要讲话精神。<br />2024年3月10日，组织龚雪竹同志到学院开展志愿服务活动。<br />2024年5月11日，发放《党章》等资料，要求龚雪竹同志认真学习。',
    Text4: '该同志自被列为入党积极分子以来，主动学习党的基本知识，对党认识深刻，学习刻苦努力，团结同学，起到很好的带头作用，乐于帮助有困难的同学，受到同学们的好评。',
  });
// edit
const form=ref({
  reportTime1:"",
  reportTime2:"",
  reportTime3:"",
  reportTime4:"",
  investigationTime1:"",
  investigationTime2:"",
  investigationTime3:"",
  investigationTime4:"",
  education:"",
  assessment:"",

})
</script>

<style  scoped>
 .content {
    font-size: 14px;
    color: #555;
  }
  /* edit */
  .edit{
    margin-top: 50px;

  }
  :deep(.el-input__wrapper) {
  height: 100% !important;
  width: 100% !important;
}
:deep(.el-textarea__inner) {
  height: 100% !important;
  width: 100% !important;
}

</style>
