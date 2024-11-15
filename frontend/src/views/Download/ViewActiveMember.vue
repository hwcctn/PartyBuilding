<template>
    <div>
      <StateActiveMember />
        <el-button type="primary" @click="downloadFile">下载模版</el-button>
    </div>
  </template>
  
  <script setup>
  const downloadFile = () => {
    const downloadUrl = '/remote.php/webdav/%E6%9C%B1%E5%B0%8F%E8%95%8A%E5%AD%A6%E6%A0%A1%E8%AF%BE%E7%A8%8B%E4%BD%9C%E4%B8%9A/project/1%E3%80%81%E5%85%A5%E5%85%9A%E7%A7%AF%E6%9E%81%E5%88%86%E5%AD%90%E7%9A%84%E7%A1%AE%E5%AE%9A%E5%92%8C%E5%9F%B9%E5%85%BB%E6%95%99%E8%82%B2%E8%BF%87%E7%A8%8B%E6%9D%90%E6%96%99-%E6%9B%B4%E6%96%B0.doc';
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = '模版.docx'; // 设置下载文件名
    a.click();
    
  };
  
  
  </script>
  
  <style lang='stylus' scoped>
  
  </style>
