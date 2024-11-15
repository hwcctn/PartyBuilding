<template>
  <div class="logo">
    <div class="content-wrapper">
      <div class="left">
        <img src="../../../public/img/icon.4349aadb52d6b36308ae.png" alt="">
        <p class="img-caption">SAI</p>
      </div>
      <div class="right">
        <p>智慧党建系统</p>
      </div>
    </div>
    <div class="meueMain">
      <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/basicInfo">
            <el-icon>
              <User />
            </el-icon>
            <template #title>基本信息</template>
          </el-menu-item>
          <el-menu-item index="/download">
            <el-icon><Download /></el-icon>
            <template #title>模版下载</template>
          </el-menu-item>
          <el-menu-item index="/progress">
            <el-icon>
              <Histogram />
            </el-icon>
            <template #title>进展情况</template>
          </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <Check />
            </el-icon>
            <span  style="font-size: 20px;">审查信息</span>
          </template>
            <el-menu-item index="/firstStage">入党申请人</el-menu-item>
            <el-menu-item index="1-2">入党积极分子</el-menu-item>
            <el-menu-item index="1-3">发展对象</el-menu-item>
            <el-menu-item index="1-4">预备党员</el-menu-item>
            <el-menu-item index="1-5">正式党员</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4" disabled>
          <el-icon>
            <document />
          </el-icon>
          <template #title>禁止使用</template>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>系统设置</template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const activeIndex = computed(() => {
  return route.meta.activeMenu || route.path;
});
</script>

<style scoped>
.logo {
  margin-top: 35px;
  margin-left: 25px;

}

.content-wrapper {
  display: flex;
  align-items: center;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
}

.left img {
  width: 30px;
  height: 30px;
  height: auto;
  background-size: cover;
}

.img-caption {
  margin: 0;
  font-size: 14px;
  background: linear-gradient(to right, #7e76ed, #b9b5f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Lobster', cursive;
}

.right p {
  font-size: 15px;
  color: #4e4d4d;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;

}

.meueMain {
  margin-top: 20px;
  height: 100%;
  width: 100%;
}
.el-menu-item  {
  width: 250px;
  font-size: 18px; 
  font-weight: 500; 
}

</style>
