<template>
  <div class="desktop">
    <template v-for="item in menuList" :key="item.key">
      <div class="card">
        <div class="title1">
          <svg-icon :name="item.icon"></svg-icon>

          {{ item.label }}

        </div>
        <div class="title2">
          <el-row>
            <template v-for="subItem in item.children">

              <el-col :span="1"></el-col>
              <el-col :span="3">
                <router-link :to="subItem.index">
                  <el-button type="plain" link>
                    <svg-icon :name="subItem.icon" style="margin-right: 10px;"></svg-icon>
                    {{ subItem.label }}
                  </el-button>
                </router-link>

              </el-col>
            </template>
          </el-row>
        </div>

      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 菜单数据
const menuList = ref([
{
  index:'/manageInfo',
  label: '党员信息管理',
  icon: 'manage_info',
  children:[
    {index:'/progress',label:'进展情况',icon:'manage_info1'}
  ]
  },
  {
    index: '/mystatus',
    label: '我的情况',
    icon: 'my_person',
    children: [
      { index: '/basicInfo', label: '个人信息', icon: 'my_info' },
      { index: '/download', label: '模版下载', icon: 'my_download' },
    ]
  },
  
  {
    index: '3',
    label: '发展党员管理',
    icon: 'pmenber1',
    children: [
      { index: '/auditStage', label: '申请人员管理', icon: 'pmenber2' },
      { index: '3-2', label: '积极分子管理', icon: 'pmenber3' },
      { index: '3-3', label: '发展对象管理', icon: 'pmenber4' },
      { index: '3-4', label: '预备党员管理', icon: 'pmenber5' },
      { index: '3-5', label: '正式党员管理', icon: 'pmenber6' },
    ]
  },
  {
    index: '4',
    label: '人员管理',
    icon: 'user1',
    children: [
      { index: '/manageUser', label: '用户管理', icon: 'user2' },
      { index: '4-2', label: '管理员管理', icon: 'user3' },
    ]
  },



])
</script>

<style lang='scss' scoped>
.desktop {
  background-color: #fff;
  margin: 30px 240px 0 80px;
  padding: 50px 10px 20px 50px;
  text-align: left;
  min-width: 900px;

  .card {
    color: #615f5f;
    margin-bottom: 50px;


    .title1 {
      font-weight: bold;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .title2 {
      .el-row {
        .el-col {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }


    }
  }
}
</style>
