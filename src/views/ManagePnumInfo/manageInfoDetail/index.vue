
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="left">
          <svg-icon @click="goBack" name="return_back"></svg-icon>
        </div>
        <div class="right"><strong>查看龚雪竹信息</strong></div>
      </el-header>
      <el-container>
        <el-aside :style="{ width: isCollapse ? '64px' : '280px', transition: 'width 0.3s' }">
          <StateMenu2 :menuItems="menuData" v-model="isCollapse" />
        </el-aside >
        <el-main :style="{ width: isCollapse ? 'calc(90% - 64px)' : 'calc(90% - 200px)', transition: 'width 0.3s' }">
          <Progress />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Progress from './Progress/index.vue'
import { ref, computed } from 'vue'
import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const router=useRouter()
const isCollapse = ref(false)

const menuData = computed(() => {
  const id = route.params.id || 'default' // 取当前 ID，避免 undefined
  return [
    { index: `/progress/${id}/showApplyOfState`, label: '申请入党', disabled: false },
    { index: `/progress/${id}/showActiveOfState`, label: '入党积极分子的确定和培养教育', disabled: false },
    { index: `/progress/${id}/developmentObject`, label: '发展对象的确定和考察', disabled: false },
    { index: `/progress/${id}/reception`, label: '预备党员的接收', disabled: false },
    { index: `/progress/${id}/educationAndApproval`, label: '预备党员的教育考察和转正', disabled: false }
  ];
})
const goBack=()=>{
  router.back();
}
</script>

<style lang='scss' scoped>
el-container {
  display: flex;
}
.el-header {
    background-color: #fff;
    width: 100%;
    height: 40px;
    margin: 5px auto 0;
    display: flex;
    justify-content:space-between;
    align-items: center;
    .left{
      cursor: pointer;
    }
    .right{
      color: #2dadef;
    }
}
.el-main{
  height: 100%;
  padding: 0;
}
.el-aside{
 margin-top: 5px;
 
}

</style>
