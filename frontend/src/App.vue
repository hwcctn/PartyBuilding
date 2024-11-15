<script setup>
import router from './router/index';
</script>
<template>
  <div>
  <router-view />
  </div>
</template>

<style>
html,body {
    margin: 0;
    width: 100%; 
    height: 100%;
  
}
#app{
 
 margin: 0;
 padding: 0;
 text-align: center;
 width: 100%;
}
</style>
