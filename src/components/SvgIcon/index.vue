<!-- src/components/SvgIcon/index.vue -->
<template>
    <svg style="width: 30px; height: 30px;">
      <use :xlink:href="perfix+name"></use>
    </svg>
  </template>
  
  <script setup>
  defineProps({
    perfix:{
      type:String,
      default:'#icon-'
    },
    name:String
  }); 
  
  </script>
  
  <style scoped>
 
  </style>
  