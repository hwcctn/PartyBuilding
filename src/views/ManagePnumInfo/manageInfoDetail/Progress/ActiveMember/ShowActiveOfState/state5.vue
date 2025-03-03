<template>
  <div class="content">
    <div v-for="(item, index) in labelInfo" :key="index" class="row">
      <div class="column">
      <div class="item">
        <div class="label">{{ item.contact }}</div>
        <div class="content">{{ contentInfo[index]?.contact }}</div>
      </div>
      <div class="item">
        <div class="label">{{ item.position }}</div>
        <div class="content">{{ contentInfo[index]?.position }}</div>
      </div>
    </div>
  </div>
  <el-tag type="success" style="width: 100px; height: 40px; margin-top: 20px;">已通过</el-tag>
    <!-- <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" /> -->
  </div>
  <div class="edit">
    <el-form :inline="true" :model="form" class="form">
            <!-- 培养联系人1 和 对应职务1 -->
              <el-form-item label="培养联系人 1" :label-width="'130px'" class="multi-input">
                <el-input v-model="form.contact1" placeholder="请输入培养联系人1" style="margin-right: 10px;" />
                <el-input v-model="form.position1" placeholder="请输入单位及职务1" />
              </el-form-item>
            <!-- 培养联系人2 和 对应职务2 -->
              <el-form-item label="培养联系人 2" :label-width="'130px'" class="multi-input">
                <el-input v-model="form.contact2" placeholder="请输入培养联系人2" style="margin-right: 10px;" />
                <el-input v-model="form.position2" placeholder="请输入单位及职务2" />
              </el-form-item>
        </el-form>
    <div>
    <el-button class="button" type="primary">保存</el-button>
  </div> 
  </div>
</template>

<script setup>
import { ref } from 'vue';
//  const labelInfo = ref({
//     Text1: '培养联系人',
//     Text2: '单位及职位',
//     Text3: '培养联系人',
//     Text4: '单位及职位',
   
//   });
  
//   const contentInfo = ref({
//     Text1: '胡燕',
//     Text2: '人工智能学院研究生党支部 党支部书记',
//     Text3: '陈菲',
//     Text4: '人工智能学院研究生党支部 宣传委员',
//   });
const labelInfo = [
  { contact: "培养联系人", position: "单位及职位" },
  { contact: "培养联系人", position: "单位及职位" }
];

const contentInfo = [
  { contact: "胡燕", position: "人工智能学院研究生党支部 党支部书记" },
  { contact: "陈菲", position: "人工智能学院研究生党支部 宣传委员" }
];
const form=ref({
  contact1:"",
  position1:"",
  contact2:"",
  position2:"",
})
</script>

<style  scoped>
/* view */
.content{
font-size: 14px;
color: #555;
}
 .column{
  display: flex;
  margin-left: 200px;
  margin-top: 10px;
  .item{
    display: flex;
    
  }
  .label {
  width: 200px;  
  font-weight: 600;
  color: #333;
  text-align: right;
  margin-right: 50px; 
  flex-shrink: 0; 
  }
    }
/* edit */
.edit 
{
  margin-top: 50px;
  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .el-input {
    width: 200px;
    display: inline-block;
  }
  }
  .button{
  height: 40px;
  width: 100px;
}
 
}

</style>
