<template>
  <div class="content">
    <StateCart :labelInfo="labelInfo" :contentInfo="contentInfo" />
  </div>
  <div class="edit">
    <el-form :inline="true" :model="form" class="demo-form-inline">
  <div class="form-row">
    <el-form-item label="支部确定入党积极分子时间"  style=" height: 30px;">
      <el-date-picker v-model="form.data2" type="date" 
        placeholder="入党积极分子时间" 
        clearable
        style="width: 300px; height: 30px;"
        @blur="checkDate(form.confirmActiveTime)" />
    </el-form-item>

    <el-form-item label="会议记录人"  style=" height: 30px;">
      <el-input
        v-model="form.meetingRecorder"
        type="textarea"
        placeholder="请输入会议记录人"
        clearable
        style="width: 300px; height: 30px;"
        resize="none"
        :rows="2"
      />
    </el-form-item>
  </div>

  <div class="form-row">
    <el-form-item label="会议地点" style=" height: 30px;">
      <el-input
        v-model="form.meetingLocation"
        type="textarea"
        placeholder="请输入会议地点"
        clearable
        style="width: 300px; height: 30px;"
        resize="none"
        :rows="2"
      />
    </el-form-item>

    <el-form-item label="会议主持人" style=" height: 30px;">
      <el-input
        v-model="form.meetingHost"
        type="textarea"
        placeholder="请输入会议主持人"
        clearable
        style="width: 300px; height: 30px;"
        resize="none"
        :rows="2"
      />
    </el-form-item>
  </div>

  <div class="form-row">
    <el-form-item :label="defaultValue.labelText1" style=" height: 80px;">
      <el-input
        v-model="form.recommendStatus"
        type="textarea"
        :placeholder="defaultValue.placeholder1"
        clearable
        maxlength="50"
        style="width: 300px; height: 80px;"
        resize="none"
        :rows="2"
      />
    </el-form-item>

    <el-form-item :label="defaultValue.labelText2" style=" height: 80px;">
      <el-input
        v-model="form.partyBranchOpinion"
        type="textarea"
        :placeholder="defaultValue.placeholder2"
        clearable
        style="width: 300px; height: 80px;"
        resize="none"
        :rows="2"
      />
    </el-form-item>
  </div>
</el-form>
  <div>
    <el-button class="button" type="primary"@click="handleSave ">保存</el-button>
  </div> 
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue';
 const labelInfo = ref({
  recommendStatus: '群团组织推优情况',
  confirmActiveTime: '支部确定入党积极分子时间',
  meetingRecorder: '会议记录人',
  meetingLocation: '会议地点',
  meetingHost: '会议主持人',
  partyBranchOpinion: '党支部意见',
  });
  const contentInfo = ref({
  recommendStatus: '经研究生团支部民主评议和票决，并经人工智能学院团委备案同意，推荐为入党积极分子人选。',
  confirmActiveTime: '2023年11月3日',
  meetingRecorder: '胡燕',
  meetingLocation: '花江慧谷#403',
  meetingHost: '陈菲',
  partyBranchOpinion: '推荐为入党积极分子人选，由团委组织审议，并通过党员投票选举产生。',

  });
//Edit
const defaultValue=ref({
  labelText1:"群团组织推优情况",
  placeholder1:'经XXX团支部民主评议和票决，并经人工智能学院团委备案同意，推荐为入党积极分子人选。',
  labelText2:'党支部意见',
  placeholder2:'支部委员会于××××年××月××日研究决定，同意把×××同志确定为入党积极分子。指定×××和×××为培养联系人。',
  
  }) 
let form=reactive({
  confirmActiveTime: '',
  meetingRecorder: '',
  meetingLocation: '',
  meetingHost: '',
  recommendStatus: '经XXX团支部民主评议和票决，并经人工智能学院团委备案同意，推荐为入党积极分子人选。',
  partyBranchOpinion: '支部委员会于××××年××月××日研究决定，同意把×××同志确定为入党积极分子。指定×××和×××为培养联系人。',

})
</script>

<style  scoped>
 .edit{
  margin-top: 50px;
}
:deep(.el-form-item__label) {
  display: flex;
  align-items: center;  /* 垂直居中 */
  justify-content: flex-end;  /* 让文字靠右对齐 */  
  width: 100px;
  line-height: 100%;
  height: 100%;

}

.button{
  height: 40px;
  width: 100px;
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
