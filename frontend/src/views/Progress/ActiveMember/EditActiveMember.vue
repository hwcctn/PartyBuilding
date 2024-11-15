<template>
  <el-timeline style="max-width: 900px">
    <!-- 推荐和确定入党积极分子 -->
    <el-timeline-item timestamp="推荐和确定入党积极分子" placement="top">
      <template #dot>
        <i class="el-icon-check">
          <svg-icon name="number3"></svg-icon>
        </i>
      </template>
      <div class="content">
        <el-form :inline="true" :model="form1" class="demo-form-inline">
          <el-form-item :label="DValue.three.labelText1">
            <el-input
              v-model="form1.user"
              type="textarea"
              :placeholder="DValue.three.placeholder1"
              clearable
              maxlength="50"
              style="width: 240px;height: 80px;"
              resize="none"
              :rows="2"
            />
          </el-form-item>
          <el-form-item :label="DValue.three.labelText2">
            <el-date-picker v-model="form1.date" type="date" 
            :placeholder="DValue.three.placeholder2" 
            clearable
            @blur="checkDate(form1.date)" />
          </el-form-item>
          <el-form-item :label="DValue.three.labelText3">
            <el-input
              v-model="form1.user"
              type="textarea"
              :placeholder="DValue.three.placeholder3"
              clearable
             style="width: 300px;height: 100px;"
              resize="none"
              :rows="2"
            />
          </el-form-item>
          <el-form-item label="会议地点">
            <el-input
              v-model="form1.user"
              type="textarea"
            placeholder="请输入会议地点"
              clearable
             style="width: 200px;height: 50px;"
              resize="none"
              :rows="2"
            />
          </el-form-item>
          <el-form-item label="会议主持人">
            <el-input
              v-model="form1.user"
              type="textarea"
              placeholder="请输入会议主持人"
              clearable
             style="width: 150px;height: 50px;"
              resize="none"
              :rows="2"
            />
          </el-form-item>
          <el-form-item label="会议记录人">
            <el-input
              v-model="form1.user"
              type="textarea"
              placeholder="请输入会议记录人"
              clearable
             style="width: 150px;height: 50px;"
              resize="none"
              :rows="2"
            />
          </el-form-item>


        </el-form>
      </div>
    </el-timeline-item>

    <!-- 上级党委备案 -->
    <el-timeline-item timestamp="上级党委备案" placement="top">
      <template #dot>
        <i class="el-icon-check">
          <svg-icon name="number4"></svg-icon>
        </i>
      </template>
      <div class="content">
        <el-form :inline="true" :model="form1" class="demo-form-inline">
          <el-form-item :label="DValue.four.labelText1" :title="DValue.four.tooltipText1">
            <el-date-picker v-model="form2.date" type="date" :placeholder="DValue.four.placeholder1" clearable />
          </el-form-item>
        </el-form>
      </div>
    </el-timeline-item>

    <!-- 指定培养联系人 -->
    <el-timeline-item timestamp="指定培养联系人" placement="top">
      <template #dot>
        <i class="el-icon-check">
          <svg-icon name="number5"></svg-icon>
        </i>
      </template>
      <div class="content">
        <el-form :inline="true" :model="formData" class="fiveform">
          <el-row :gutter="10">
            <!-- 培养联系人1 和 对应职务1 -->
            <el-col :span="12">
              <el-form-item label="培养联系人 1" :label-width="'130px'" class="multi-input">
                <el-input v-model="formData.contact1" placeholder="请输入培养联系人1" style="margin-right: 10px;" />
                <el-input v-model="formData.position1" placeholder="请输入单位及职务1" />
              </el-form-item>
            </el-col>

            <!-- 培养联系人2 和 对应职务2 -->
            <el-col :span="12">
              <el-form-item label="培养联系人 2" :label-width="'130px'" class="multi-input">
                <el-input v-model="formData.contact2" placeholder="请输入培养联系人2" style="margin-right: 10px;" />
                <el-input v-model="formData.position2" placeholder="请输入单位及职务2" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-timeline-item>

    <!-- 培养教育考察 -->
    <el-timeline-item timestamp="培养教育考察" placement="top">
      <template #dot>
        <i class="el-icon-check">
          <svg-icon name="number6"></svg-icon>
        </i>
      </template>
      <div class="content">
        <el-form :inline="true" :model="formData" class="demo-form-inline">
          <el-row>
            <!-- 书面思想汇报时间 -->
            <el-col :span="24">
              <el-form-item label="书面思想汇报时间" :label-width="'130px'">
                <el-row :gutter="10">
                  <el-col :span="6">
                    <el-date-picker v-model="formData.reportTime1" type="date" placeholder="请选择时间1" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="formData.reportTime2" type="date" placeholder="请选择时间2" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="formData.reportTime3" type="date" placeholder="请选择时间3" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="formData.reportTime4" type="date" placeholder="请选择时间4" clearable />
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
                    <el-date-picker v-model="formData.investigationTime1" type="date" placeholder="请选择时间1" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="formData.investigationTime2" type="date" placeholder="请选择时间2" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="formData.investigationTime3" type="date" placeholder="请选择时间3" clearable />
                  </el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="formData.investigationTime4" type="date" placeholder="请选择时间4" clearable />
                  </el-col>
                </el-row>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-form-item label="培养教育情况">
            <el-input
              v-model="form1.user"
              type="textarea"
              placeholder="（例文：××××年××月--××××年××月，组织×××同志参加×××培训班，学习××××等课程。）
××××年××月××日，组织×××同志听×××同志讲的党课，题目为×××××××。
××××年××月××日，组织×××同志到×××单位开展党员服务群众活动。
××××年××月××日，发放《党章》等资料，要求×××同志认真学习。
(至少四条，其中参加培训班只能算一条记录) 
" 

              clearable
             style="width: 700px;height: 200px;"
              resize="none"
              :rows="2"
            />
          </el-form-item>
          <el-form-item label="考察情况">
            <el-input
              v-model="form1.user"
              type="textarea"
              placeholder="（从列为积极分子后每半年考察一次，考察情况落款时间刚满半年当天）"
              clearable
              style="width: 700px;height: 200px; margin-left: 25px;"
              resize="none"
              :rows="2"
            />
          </el-form-item>
      </div>
    </el-timeline-item>
  </el-timeline>
  <div>
    <el-button type="primary" @click="handleSave">保存</el-button>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps, defineEmits } from 'vue';
import { ElMessage } from 'element-plus';
const props = defineProps({
  mode: String
});

const emits = defineEmits(['update:mode']);

const checkDate = (date) => {
  if (date) {
    const selectedDate = new Date(date);
    const comparisonDate = new Date('2021-03-15');

    if (selectedDate < comparisonDate) {

      ElMessage({
        message: '入党积极分子的时间不能早于提交入党申请书的时间，请选择其他日期',
        type: 'warning'
      });
    }
  }
};
const handleSave = () => {
  
  emits('update:mode', 'view'); // 切换到查看模式
};

const DValue=ref({
  three:{
  labelText1:'群团组织推优情况',
  placeholder1:'经XXX团支部民主评议和票决，并经人工智能学院团委备案同意，推荐为入党积极分子人选。',
  labelText2:'支部确定入党积极分子时间',
  placeholder2:'入党积极分子时间',
  labelText3:'党支部意见',
  placeholder3:'支部委员会于××××年××月××日研究决定，同意把×××同志确定为入党积极分子。指定×××和×××为培养联系人。',
  },
  four:{
    labelText1:'党委备案时间',
    placeholder1:'以学院党委备案时间为准',
    tooltipText1:'以学院党委备案时间为准，与入党积极分子的确定和培养教育过程材料本中P8党委备案意见相同'
    
  }
})
const  formData=reactive( {
        contact1: '',
        contact2: '',
        position1: '',
        position2: '',
        reportTime1: '',
        reportTime2: '',
        reportTime3: '',
        reportTime4: '',
        reportTime5: '',
        reportTime6: '',
        reportTime7: '',
        reportTime8: '',
        investigationTime1: '',
        investigationTime2: '',
        investigationTime3: '',
        investigationTime4: '',
        field1: '',
        field2: '',
        field3: '',
        field4: ''
      })
const form1 = reactive({
  user: '',
  date: '',


})
const form2 = reactive({
  user: '',
  date: '',
})
</script>
<style >

.el-form-item {
  display: flex;
  align-items: center; /* 垂直居中 label */
}
.el-timeline {
  .el-timeline-item {
    .el-timeline-item__wrapper {
      text-align: left;

      .el-timeline-item__timestamp.is-top {
        color: #000;
        font-weight: 600;
        font-size: 15px;
      }
    }

    .el-timeline-item__dot {
      background-color: #fff;
      left: -6px;
      width: 20px;
      height: 20px;

      .el-icon {
        width: 100%;
      }
    }
  }
}


.el-timeline-item__content {
  margin-left: 50px;
  margin-top: 20px;
  width: 1200px;
}
.content{
  margin: 0;
  width: 1200px;
}
.el-textarea__inner {
  height: 100%;
}
.fiveform .el-input {
  width: 48%;
  display: inline-block;
}
</style>