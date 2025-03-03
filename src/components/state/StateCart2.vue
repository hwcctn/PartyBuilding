<template>
  <div style="margin-top: 30px;">
  <div class="content">
    <div v-for="(item, index) in labelInfo" :key="index" class="row">
      <div class="column" v-for="(value, key) in item" :key="key">
      <div class="item">
        <div class="label">{{value }}</div>
        <div class="content">{{ contentInfo[index][key] }}</div>
      </div>
    </div>
  </div>
 </div>
</div>
  <el-tag type="success" style="width: 100px; height: 40px; margin-top: 20px;">已通过</el-tag>
</template>

<script setup>
const props = defineProps({
  labelInfo: {
    type: Array,
    required: true
  },
  contentInfo: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
 .content {
    font-size: 14px;
    color: #555;
  }
.row{
  margin-left: 200px;
  display: flex;
  .column{
  margin-top: 10px;
  .item{
    display: flex;
    margin-left: 50px;
    
  }
  .label {
  font-weight: 600;
  color: #333;
  text-align: right;
  margin-right: 12px; 
  flex-shrink: 0; 
  }
  .content{
    text-align: left;
    
  }
    }
}

</style>
