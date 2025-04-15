<!-- <template>
  <div class="main-container">
    <div class="title">
      <p style="margin: 0;padding-bottom:10px ;">基本信息</p>
    </div>
    <div class="info-container">
      <div class="avater">
        <el-avatar shape="square" class="custom-avatar" fit="fill" :src="avatarSrc" />
      </div>
      <div class="right">
        
        <div class="name">{{ info.username }} </div>
        <div class="info">
          <div class="info-item">
            <strong>姓名：</strong>{{ info.username }}
          </div>
          <div class="info-item">
            <strong>性别：</strong>{{ info.role.sex }}
          </div>
          <div class="info-item">
            <strong>民族：</strong>{{ info.role.nation }}
          </div>
          <div class="info-item">
            <strong>出生年月日：</strong>{{ info.role.birthdate }}
          </div>
          <div class="info-item">
            <strong>单位、职务或职业：</strong>{{ info.role.occupation }}
          </div>
          <div class="info-item">
            <strong>籍贯：</strong>{{ info.role.origin }}
          </div>
          
          <div class="info-item">
            <strong>身份证号码：</strong>{{ info.role.identityId }}
          </div>
          <div class="info-item">
            <strong>家庭详细住址：</strong>{{ info.role.address }}
          </div>
          <div class="info-item">
            <strong>学历 学位：</strong>{{ info.role.education }}
          </div>
          <div class="info-item">
            <strong>联系电话：</strong>{{ info.role.phoneNumber }}
          </div>
          </div>
        </div>
        
    
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const avatarSrc = 'https://img2.baidu.com/it/u=717423697,1047943915&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067';

const info = ref({
  username: '龚雪竹',
  role: {
    sex: '男',
    nation: '汉',
    birthdate: '1999年 11月24日',
    origin: '重庆荣昌',
    occupation: '人工智能学院2023级人工智能专业 学生',
    identityId: '450303199911241229',
    education: '本科学士',
    address: '重庆渝北区木耳镇招商雍璟城璟轩沿港二路1号2幢2单元3一2',
    phoneNumber: '15086744089',
  },
  resume: `
    2011年9月——2014年9月  就读于重庆市荣昌县初级中学校 学生；
    2014年9月——2017年9月  就读于重庆市暨华中学校 学生；
    2017年9月——2021年9月  就读于重庆市邮电大学移通学院 学生；
    2023年9月——至今  就读于桂林电子科技大学 学生。
  `,
});
</script>

<style scoped>
.main-container {
  background-image:
    linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%),
    linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 50%), 
    url(https://i.pinimg.com/originals/8d/6a/80/8d6a80c726074d6f9fedd43d22651155.png);
  background-size: cover;
  background-position: center;
  padding: 20px 0 30px 30px;
}

.title {
  text-align: left;
  font-weight: 600;
}

.info-container {
  display: flex;
  align-items: center;
}

.avater {
  margin-right: 20px;
  height: 100%;
}

.right {
  height: 100%;
}

.name {
  text-align: left;
}

.info {
  padding: 20px 0px 20px 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  
  color: #767474;
  background-color: #f4f4f4;
}

.info-item {
  flex: 0 0 calc(33.33% - 10px);
  box-sizing: border-box;
  text-align: left;
}

.custom-avatar {
  width: 120px;
  height: 100%;
  cursor: pointer;
}
</style> -->
<template>
  <div class="main-container">
    <div class="title">
      <span style="margin: 0; padding-bottom: 10px">基本信息</span>
      <el-button @click="outputFile">导出模版</el-button>
    </div>
    <div class="info-container">
      <div class="avater">
        <el-avatar
          shape="square"
          class="custom-avatar"
          fit="fill"
          :src="info[0].value"
        />
      </div>
      <div class="right">
        <div class="info">
          <el-descriptions class="custom-descriptions">
            <template v-for="item in info.slice(1)" :key="item">
              <el-descriptions-item
                style="width: 10px"
                :label="`${item.label}:`"
                >{{ item.value }}</el-descriptions-item
              >
            </template>
          </el-descriptions>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface UserInfoItem {
  label: string
  value: string
}
const props = defineProps<{
  memberInfo: UserInfoItem[]
}>()
console.log('传过来的人员信息', props.memberInfo)
// const avatarSrc =
//   'https://img2.baidu.com/it/u=717423697,1047943915&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067'
// const info = ref({
//   username: '龚雪竹',
//   fields: [
//     { label: '性别', value: '男' },
//     { label: '民族', value: '汉' },
//     { label: '出生年月日', value: '1999年 11月24日' },
//     { label: '籍贯', value: '重庆荣昌' },
//     { label: '身份证号码', value: '450303199911241229' },
//     { label: '单位、职务或职业', value: '人工智能学院2023级人工智能专业 学生' },
//     { label: '学历 学位', value: '本科学士' },
//     { label: '联系电话', value: '15086744089' },
//     {
//       label: '家庭详细住址',
//       value: '重庆渝北区木耳镇招商雍璟城璟轩沿港二路1号2幢2单元3一2'
//     }
//   ]
// })
const info = ref(props.memberInfo)
import { useRoute } from 'vue-router'
import { postPDF } from './service'
const route = useRoute()
const { role, uid } = route.params
const outputFile = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '数据加载中请稍后',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  await postPDF(role as string, uid as string)
    .then((res) => {
      loading.close()
      const downloadUrl = res.msg
      if (downloadUrl) {
        const link = document.createElement('a')
        link.href = downloadUrl
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        ElMessage.success('下载成功')
        console.log(res)
      } else {
        ElMessage.warning(`下载异常`)
      }
    })
    .catch((err) => {
      ElMessage.error(`下载失败.错误：${err}`)
    })
}
</script>

<style lang="scss" scoped>
.custom-descriptions {
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
}
::v-deep(.el-descriptions__label) {
  color: var(--el-text-color-primary);
  margin-right: 16px;
  font-weight: 900;
}
.main-container {
  background-image:
    linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.9) 50%
    ),
    url(https://i.pinimg.com/originals/8d/6a/80/8d6a80c726074d6f9fedd43d22651155.png);
  background-size: cover;
  background-position: center;
  width: 100%;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-weight: 600;
}

.info-container {
  display: flex;
  align-items: center;
}

.avater {
  margin-right: 20px;
  height: 100%;
  margin-left: 20px;
}

.right {
  height: 100%;
  width: 100%;
  margin: 0px 20px 20px 0px;
}

.name {
  text-align: left;
}

.info {
  padding: 20px 20px 20px 20px;
  color: #767474;
  background-color: #fbfafb;
}

.custom-avatar {
  width: 120px;
  height: 100%;
  cursor: pointer;
}
</style>
