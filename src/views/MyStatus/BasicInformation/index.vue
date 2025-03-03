<template>
    <div style="width: 100%; height: 100%;position: relative;">
        <div class="bcgimg">
            <img style="width: 100%;height: 100%;" src="https://th.bing.com/th/id/OIP.PCGzeD4ZJbzASqBw4smhewAAAA?rs=1&pid=ImgDetMain" alt="">
        </div>
        <div class="info">
            <Info />
        </div>
    </div>

</template>

<script setup>
import Info from './info/index.vue'

</script>

<style scoped>
.bcgimg {
    margin-top: 20px;
    position: relative;
    width: 100%;
    height: 150px;

}
.info{
    position: absolute; 
    top: 60px; left: 50%; 
    width: 90%; 
    z-index: 1;
    transform: translateX(-50%);
}
</style>

