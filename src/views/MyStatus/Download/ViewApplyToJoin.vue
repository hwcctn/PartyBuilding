<template>
  <div>
    <StateApplyToJoin  />
      <el-button type="primary" @click="downloadFile">下载模版</el-button>
  </div>
  <a href="downloadUrl" download="项目文件.zip"></a>
</template>

<script setup>

const downloadFile = () => {
  const downloadUrl = '/remote.php/webdav/%E6%9C%B1%E5%B0%8F%E8%95%8A%E5%AD%A6%E6%A0%A1%E8%AF%BE%E7%A8%8B%E4%BD%9C%E4%B8%9A/project/1.docx';
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = '1.docx'; // 设置下载文件名
  a.click();
};


</script>

<style lang='stylus' scoped>

</style>
