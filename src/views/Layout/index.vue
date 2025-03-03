<template>
    <div class="common-layout">
      <el-container>
        <el-header><Header/></el-header>
        <el-main class="Main">
            <router-view/>
        </el-main>
      </el-container>
    </div>
  </template>
<script setup>
import Header from './header.vue'

</script>

<style lang='scss' scoped>
.common-layout{
  min-width: 1000px;
  margin: 0 auto;
}
.Main{
 background-color:#f4f4f5; 
width: 100%;
padding: 0;
height:calc(100vh - 100px);
}
</style>
