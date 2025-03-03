<script setup>
import router from './router/index';
</script>

<template>
  <router-view />
</template>

<style>
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #f7f7f7;
  overflow-x: hidden; 
}

#app {
  margin: 0;
  padding: 0;
  text-align: center;
  width: 1600px;
  margin: 0 auto;
  background-color: #f7f7f7;
}
</style>
