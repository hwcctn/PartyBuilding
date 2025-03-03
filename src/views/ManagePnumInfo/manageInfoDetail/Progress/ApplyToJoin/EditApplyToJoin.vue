<template>
  <el-timeline style="max-width: 600px">
    <!--递交入党申请书 -->
    <el-timeline-item timestamp="递交入党申请书" placement="top">
      <template #dot>
        <i class="el-icon-check">
          <svg-icon name="number1"></svg-icon>
        </i>
      </template>
      <div class="content">
        <el-form :inline="true" :model="form1" class="demo-form-inline">
          <el-form-item :label="defaultValue.labelText1" :title="defaultValue.tooltipText1" >
            <el-date-picker v-model="form1.date1" type="date" :placeholder="defaultValue.placeholder1" 
            @blur="checkYearOnFocus('date1')"
            clearable />
          </el-form-item>
          <el-form-item :label="defaultValue.receiver1">
            <el-input  
            v-model="form1.user1"
            type="textarea"
            :placeholder="defaultValue.placeholder2"
            clearable
            maxlength="50"
            style="width: 220px; height: 55px;overflow: hidden;"
            resize="none"
            overflow="hidden"
            :rows="2"
            />
          </el-form-item>
        </el-form>
      </div>
    </el-timeline-item>


    <!--党组织派人谈话  -->
    <el-timeline-item timestamp="党组织派人谈话" placement="top">
      <template #dot>
        <i class="el-icon-check">
          <svg-icon name="number2"></svg-icon>
        </i>
      </template>
      <div class="content">
        <el-form :inline="true" :model="form1" class="demo-form-inline">
          <el-form-item :label="defaultValue.labelText2" :title="defaultValue.tooltipText3">
            <el-date-picker 
            v-model="form1.date2" type="date" :placeholder="defaultValue.placeholder3" 
            @blur="checkYearOnFocus2"
            clearable />
          </el-form-item>
          <el-form-item :label="defaultValue.receiver2" >
            <el-input  
            v-model="form1.user2"
            type="textarea"
            :placeholder="defaultValue.placeholder4"
            clearable
            maxlength="50"
            style="width: 280px; height: 55px;overflow: hidden;"
            resize="none"
            overflow="hidden"
            :rows="2"
            />
          </el-form-item>
        </el-form>
      </div>
    </el-timeline-item>
  </el-timeline>
  <div>
          <el-button type="primary"@click="handleSave ">保存</el-button>
        </div>
</template>
<script setup>
import { reactive, ref, defineProps, defineEmits } from 'vue';
import { ElMessage } from 'element-plus';
const props = defineProps({
  mode: String
});

const emits = defineEmits(['update:mode']);

const checkYearOnFocus = (field) => {
  const date = form1[field];
  if (date) {
    const selectedYear = new Date(date).getFullYear();
    if (selectedYear === 2020) {
      ElMessage({
        message: "满十八岁才能提交入党申请书",
        type: 'warning'
      });
    }
  }
};
const checkYearOnFocus2 = () => {
  ElMessage({
        message: "满十八岁才能提交入党申请书",
        type: 'warning'
      });
   
      ElMessage({
        message: "支部谈话时间要在申请入党时间的后一个月内",
        type: 'warning'
     
  })
};
  const handleSave = () => {
  
    checkYearOnFocus2();
  // if (form1.date1 && form1.date2) {
  //   const oneMonthAfterDate1 = new Date(form1.date1);
  //   oneMonthAfterDate1.setMonth(oneMonthAfterDate1.getMonth() + 1);

  //   if (new Date(form1.date2) > oneMonthAfterDate1) {
  //     ElMessage({
  //       message: '党组织派人谈话时间需在递交入党申请书的一个月内',
  //       type: 'warning'
  //     });
  //     return;
  //   }
  // }

  // emits('update:mode', 'view'); // 切换到查看模式
};


const defaultValue=ref({
  labelText1:'申请入党时间',
  
  placeholder1:'与入党申请书落款时间一致',
  tooltipText1:'要满18岁之后才能申请入党',
  labelText2:'支部派人谈话时间',
  placeholder2:'人工智能学院XXXX党支部 党支部书记  李四（本人签字）',
  receiver1:'入党申请书接收人\n(单位、职务、签名）',
  placeholder3:'谈话时间',
  tooltipText3:'递交入党申请书一个月内的时间',
  receiver2:'谈话人(单位、职务、签名）',
  placeholder4:'人工智能学院XXXX党支部 支部书记（副书记/组织委员等） 王五（本人签字）',

  

})
const form1 = reactive({
  user1: '',
  date1: '',
  user2: '',
  date2: '',
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

.content {
  margin-left: 50px;
  margin-top: 20px;
  width: 1000px;
}
.el-textarea__inner {
  height: 100%;
}
</style>