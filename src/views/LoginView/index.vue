<template>
  <div class="login">
    <div class="left">
      <div class="text">
        <h1>欢迎来到智慧党务系统</h1>

        <hr style="width: 60%" />

        <p>这是人工智能智慧党务系统快来登录吧</p>
      </div>
    </div>
    <div class="right">
      <div class="center">
        <login />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/login-bgc.gif');
  background-repeat: no-repeat;
  background-size: cover;
}
.text {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.left {
  width: 50%;
  height: 100%;
  color: #fefafa;
  float: left;
  position: relative;
  display: flex;
  align-items: center;
}

.right {
  width: 50%;
  height: 100%;
  position: relative;
  float: left;
}
.center {
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
