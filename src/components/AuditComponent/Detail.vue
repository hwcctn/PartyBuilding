<template>
  <div>
    <baseinfo />
 
    <div class="stage">
        <div class="relative">
            <StateApplyToJoin/>
            <el-button type="danger" @click="ToBack">打回</el-button>
            <el-button type="primary" @click="ToBack">通过</el-button>
        </div>
    
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(()=>{
    console.log("1234")
})
const ToBack=()=>{
    router.push({
    path: "/firstStage",
  });
}
</script>

<style  scoped>

.relative{
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  padding:  70px 0px 30px 30px;
  background-color: #fff;
}
 

</style>
