<template>
  <el-card v-show="isShow">
    <div class="demo-fit">
      <div class="block">
        <el-avatar shape="square" class="custom-avatar" fit="fill"
          src="https://img2.baidu.com/it/u=717423697,1047943915&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067" />
      </div>
    </div>
    <div class="info">
      <template v-if="isEditing">
        <UserInfoEdit :editableInfo="editableInfo" />
      </template>
      <template v-else>
        <UserInfoDisplay :info="info" />
      </template>
    </div>
    <div class="button">
      <el-button type="primary" @click="toggleEditMode">
        {{ isEditing ? '保存' : '编辑' }}
      </el-button>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue';
import UserInfoDisplay from './UserInfoDisplay.vue';
import UserInfoEdit from './UserInfoEdit.vue';

const isShow = ref(true);
const isEditing = ref(false);

const info = ref({
  username: '龚雪竹',
  role: {
    sex: '男',
    nation: '汉',
    birthdate: '1999年 11月24日',
    origin: '重庆荣昌',
    occupation: '人工智能学院2023级人工智能专业 学生',
    identityId: '450303199911241229',
    politicalStatus: '共青团员',
    education: '本科学士',
    address: '重庆渝北区木耳镇招商雍璟城璟轩沿港二路1号2幢2单元3一2',
    phoneNumber: '15086744089',
  },
  resume: `2011年9月——2014年9月  就读于重庆市荣昌县初级中学校 学生；\n 2014年9月——2017年9月  就读于重庆市暨华中学校 学生；\n 2017年9月——2021年9月  就读于重庆市邮电大学移通学院 学生；\n2023年9月——至今  就读于桂林电子科技大学 学生。`
});


const editableInfo = ref({ ...info.value });

const toggleEditMode = () => {
  if (isEditing.value) {
    info.value = { ...editableInfo.value };
  } else {
    editableInfo.value = { ...info.value };
  }
  isEditing.value = !isEditing.value;
};
</script>

<style scoped>
.intro {
  margin-top: 10px;

}

.custom-avatar {
  width: 120px;
  height: 155px;
}

.info {
  margin-bottom: 30px;
}

.button {
  margin-bottom: 30px;

}
</style>
