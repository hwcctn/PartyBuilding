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
        <el-row :gutter="20">
          <el-col :span="5">
            <span class="label">{{ DValue.three.labelText1 }}：</span>
          </el-col>
          <el-col :span="19">
            <span class="content">{{ activeInfo.recommendation.groupRecommendation }}</span>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <span class="label">{{ DValue.three.labelText2 }}：</span>
          </el-col>
          <el-col :span="18">
            <span class="content">{{ activeInfo.recommendation.branchConfirmationDate }}</span>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="5">
            <span class="label">{{ DValue.three.labelText3 }}：</span>
          </el-col>
          <el-col :span="19">
            <span class="content">{{ activeInfo.recommendation.recommendationInfo }}</span>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <span class="label">{{ DValue.three.labelText4 }}：</span>
            <span class="content">{{ activeInfo.recommendation.place }}</span>
          </el-col>
          <el-col :span="5">
            <span class="label">{{ DValue.three.labelText5 }}：</span>
            <span class="content">{{ activeInfo.recommendation.p1 }}</span>
          </el-col>
          <el-col :span="5">
            <span class="label">{{ DValue.three.labelText6 }}：</span>
            <span class="content">{{ activeInfo.recommendation.p2 }}</span>
          </el-col>
        </el-row>
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
        <el-row :gutter="20">
          <el-col :span="4">
            <span class="label">{{ DValue.four.labelText1 }}：</span>
          </el-col>
          <el-col :span="18">
            <span class="content">{{ activeInfo.partyCommittee.committeeRecordDate }}</span>
          </el-col>
        </el-row>
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
        <el-row :gutter="20" v-for="(mentor, index) in activeInfo.mentorInfo" :key="index">
          <el-col :span="3">
            <span><strong>{{ DValue.five.labelText1 }}：</strong></span>
          </el-col>
          <el-col :span="19">
            <span>{{ mentor.name }} / {{ mentor.position }}</span>
          </el-col>
        </el-row>
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
        <!-- 第一行：书面思想汇报时间 -->
        <el-row :gutter="20">
          <el-col :span="5">
            <span><strong>{{ DValue.six.labelText1 }}</strong></span>
          </el-col>
          <el-col :span="19">
            <span class="content" >
              <span style="padding-right: 20px; font-size: 20px;" v-for="(date, index) in activeInfo.writtenReportTime" :key="index" class="date-item">{{ date }}</span>
            </span>
          </el-col>
        </el-row>

        <!-- 第二行：支部考察时间 -->
        <el-row :gutter="20">
          <el-col :span="3">
            <span><strong>{{ DValue.six.labelText2 }}</strong></span>
          </el-col>
          <el-col :span="19">
            <span class="content">
              <!-- 渲染支部考察时间 -->
              <span style="padding-right: 20px; font-size: 20px;" v-for="(date, index) in activeInfo.investigationTime" :key="index" class="date-item">{{ date }}</span>
            </span>
          </el-col>
        </el-row>
        <!-- 培养情况 -->
        <el-row :gutter="20">
            <el-col :span="3">
              <span><strong>培养教育情况</strong></span>
            </el-col>
            <el-col :span="19">
              <div v-html="activeInfo.educationInfo.summary"></div>
              
            </el-col>
          </el-row>
          <!-- 考察情况 -->
          <el-row :gutter="20">
            <el-col :span="3">
              <span><strong>考察情况：</strong></span>
            </el-col>
            <el-col :span="19">
              <span>{{ activeInfo.investigationInfo.summary }}</span>
              <strong>日期：</strong>{{ activeInfo.investigationInfo.date }}
            </el-col>
          </el-row>
        
      </div>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { reactive, ref } from 'vue';

const activeInfo = reactive({
  recommendation: {
    partyCandidate: '龚雪竹',
    recommendationInfo: '支部委员会于2023年11月3日研究决定，同意把龚雪竹同志确定为入党积极分子。指定胡燕和陈菲为培养联系人',
    groupRecommendation: '经研究生团支部民主评议和票决，并经人工智能学院团委备案同意，推荐为入党积极分子人选。',
    place:"花江慧谷6#403",
    number:"胡燕、唐小琦、熊川、周士龙、陈菲",
    p1:"胡燕",
    p2:"陈菲",
    branchConfirmationDate: '2023年11月3日',
    SecretarySignature:'胡燕' 

  },
  partyCommittee: {
    reviewDate: '2021-04-05',
    committeeRecordDate: '2023年11月6日',
  },
  mentorInfo: [
    {
      name: '胡燕',
      position: '人工智能学院研究生党支部 党支部书记',
    },
    {
      name: '陈菲',
      position: '人工智能学院研究生党支部 宣传委员',
    },
  ],
  writtenReportTime: [
    '2024-02-03',
    '2024-05-03',
    '2024-08-03',
    '2024-11-03',
  ],
  investigationTime: [
    '2024-05-03',
    '2024-11-03',
  ],
  investigationInfo: 
    {
      summary: '该同志自被列为入党积极分子以来，主动学习党的基本知识，对党认识深刻，学习刻苦努力，团结同学，起到很好的带头作用，乐于帮助有困难的同学，受到同学们的好评。',
      sign: '胡燕',
      date: '2024年5月3日',
    },
    educationInfo:{
      summary:  `
    2023年11月--2023年11月，组织龚雪竹同志参加入党积极分子培训班，学习中国共产党的光辉历程等课程。<br />
    2023年12月12日，组织龚雪竹同志学习习近平总书记视察时重要讲话精神。<br />
    2024年3月10日，组织龚雪竹同志到学院开展志愿服务活动。<br />
    2024年5月11日，发放《党章》等资料，要求龚雪竹同志认真学习。`,
      sign: '胡燕',
    }
    
  

});

const DValue = ref({
  three: {
    labelText1: '群团组织推优情况',
    labelText2: '支部确定入党积极分子时间',
    labelText3: '党支部意见',
    labelText4: '会议地点',
    labelText5: '会议主持人',
    labelText6: '会议记录人',
   

  },
  four: {
    labelText1: '党委备案时间',
  },
  five: {
    labelText1: '培养联系人',
    labelText2: '单位及职位',
  },
  six: {
    labelText1: '书面思想汇报时间',
    labelText2: '支部考察时间',
  }
});
</script>

<style scoped>
/* 自定义样式 */
.el-timeline-item {
  margin-bottom: 30px;
}

.info-card {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.label {
  font-weight: 600;
  font-size: 20px;
  color: #333;
}

.content {
  font-size: 20px;
  color: #555;
}

.el-row {
  margin-bottom: 15px;
}

.el-col {
  display: flex;
  align-items: center;
}

.date-item {
  margin-right: 10px;
  font-size: 14px;
  color: #409EFF;
}

.el-timeline-item .el-timeline-item-content {
  margin-left: 10px;
}

.el-timeline-item .el-timeline-item-dot {
  border: 2px solid #409EFF;
  background-color: #409EFF;
}

.el-timeline-item .el-timeline-item-dot .el-icon-check {
  color: white;
}
</style>
