<template>
  
  <div class="main-container">
  <div class="baseInfo">
  <baseinfo />
  </div>
  <div class="developmen">
    <div class="title">
      <p>党员发展全纪实</p>
      <div>|</div>
      <div class="pathName">{{ pathName }}</div>
    </div>
    <div class="stage">
    <router-view />
    
    </div>
  </div>
  </div>

</template>

<script setup>
import { computed} from 'vue';
import { useRoute } from 'vue-router';
const route=useRoute();
const pathName=computed(() => route.name);
</script>

<style  scoped>
.main-container{
height: 100%;
}
.baseInfo{
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
 
}
.developmen{
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 10px;
  padding:  20px 0 30px 30px;
  background-color: #fff;
}
.title{
  text-align: left;
  
}
.title {
  display: flex;
  p {
  font-weight: 600;
  margin: 0 20px 0  0;
  }
  .pathName{
    margin-left: 5px;
    color: rgb(62, 62, 62);
  }
}

</style>
