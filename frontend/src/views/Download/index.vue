<template>
  <div class="main-container">
  <div class="baseInfo">
  <baseinfo />
  </div>
  <div class="developmen">
    <div class="title">
      <p>模版下载</p>
    </div>
    <div class="stage">
     <StateMenu  :menuItems="menuData"/>
        <div class="relative">
          <router-view />
        </div>
    
    </div>
  </div>
  </div>

</template>

<script setup>
const menuData = [
  { index: '/downloadApply', label: '申请入党', disabled: false },
  { index: '/downloadActive', label: '入党积极分子的确定和培养教育', disabled: false },
  { index: '/developmentObject', label: '发展对象的确定和考察', disabled: false },
  { index: '/reception', label: '预备党员的接收', disabled: false },
  { index: '/educationAndApproval', label: '预备党员的教育考察和转正', disabled: false }
];
</script>

<style  scoped>
.main-container{
height: 100%;
}
.baseInfo{
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
 
}
.developmen{
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  padding:  20px 0 30px 30px;
  background-color: #fff;
}
.title{
  text-align: left;
  
}
.title p{
 font-weight: 600;
 margin: 0;
}

.relative{
  margin-top: 40px;
 
}
</style>
