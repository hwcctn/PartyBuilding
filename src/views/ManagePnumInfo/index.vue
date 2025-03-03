<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px" class="aside1">
        <el-card>
          <template #header>
            <div class="card-header">
              <div style="margin-bottom: 12px;">
                <strong>
                  党组织结构树
                </strong>
              </div>
              <div>
                <el-input v-model="input1" style="width: 240px" placeholder="Type something">
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <search />
                    </el-icon>
                  </template>
                </el-input>
              </div>
            </div>
          </template>
          <div>
            <template v-for="item in GroupTree">
              <p class="GroupList">
                <svg-icon name="folder" style="margin-right: 10px;"></svg-icon>
                {{ item }}
              </p>
            </template>
          </div>
        </el-card>
      </el-aside>
      <el-main >
        <!-- 搜索框 -->
        <div class="top">
          <el-input
            v-model="input2"
            style="max-width: 600px"
            placeholder="输入关键字"
            class="input-with-select"
          >
            <template #prepend>
              <el-select v-model="select" placeholder="Select" style="width: 115px">
                <el-option label="姓名" value="1" />
                <el-option label="身份证" value="2" />
              </el-select>
            </template>
            <template #append>
              <el-button >
                <el-icon><Search /></el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
        <!-- 表格数据 -->
        <div class="centre">
        <el-table row-key="序号" :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column prop="序号" label="序号" sortable width="100" />
          <el-table-column prop="姓名" label="姓名" width="150" show-overflow-tooltip/>
          <el-table-column prop="所在支部" label="所在支部" sortable width="250" 
          show-overflow-tooltip
          :filters="[
        { text: '教工', value: '人工智能学院党委教工党组织' },
        { text: '本科生1', value: '人工智能学院党委本科生党组织1'}, 
        { text: '本科生2', value: '人工智能学院党委本科生党组织2'},
        { text: '研究生' , value: '人工智能学院党委研究生党组织'},
        
      ]"  
          :filter-method="filterGroup"
          />
          <el-table-column prop="性别" label="性别" width="100" show-overflow-tooltip/>
          <el-table-column prop="民族" label="民族" width="100" show-overflow-tooltip/>
          <el-table-column prop="籍贯" label="籍贯" width="200" show-overflow-tooltip/>
          <el-table-column prop="出生日期" label="出生日期" width="200" show-overflow-tooltip/>
          <el-table-column prop="身份证号" label="身份证号" width="250" show-overflow-tooltip/>
          <el-table-column prop="学历" label="学历" width="150" show-overflow-tooltip/>
          <el-table-column prop="个人身份" label="个人身份" width="200" show-overflow-tooltip/>
          <el-table-column fixed="right" label="操作" min-width="120" >
          <template #default="scope">
            <el-button link type="primary" size="small" @click="handleClick(scope.row)">
              查看
            </el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="bottom">
        <el-pagination background layout="prev, pager, next" 
        :current-page="page" :page-size="size"  :total="total"
        @size-change="sizeChange" @current-change="currentChange"/>
      </div>
      </el-main>
    </el-container>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { GroupTree, Modeldata } from './mockData';
import { useRouter } from 'vue-router';
const router=useRouter()
const filterGroup =(value ,row)=>{
  return row.所在支部===value
}
const tableRowClassName = ({ row }) => {

  
  switch (row.所在支部) {
    case '人工智能学院党委教工党组织':
      return 'teacher-row'; 
    case '人工智能学院党委本科生党组织1':
      return ;
    case '人工智能学院党委本科生党组织2':
      return 'undergraduate-row'; 
    case '人工智能学院党委研究生党组织':
      return 'graduate-row'; 
    default:
      return '';
  }
};
const input1 = ref('');
const input2 = ref('');
const select = ref('1');
// 表格设置
const handleClick = (row) => {
  console.log(row.序号);
  router.push({path:`/progress/${row.序号}`})

}
let tableData=ref([]);
// 分页设置
let page=ref(1);
let size=ref(15);

let total=ref();
const getTableData=()=>{
  tableData.value=Modeldata.slice(
    (page.value-1)*size.value,
    page.value*size.value
  );
  console.log(tableData.value,Modeldata);
  
  total.value=Modeldata.length
}
// page改变时的回调函数
const currentChange=(val)=>{
 console.log("翻页，当前为第几页",val);
 page.value=val;
 getTableData();
}
const sizeChange=(val)=>{
  console.log("改变每页多少条，当前一页多少条数据",val);
  size.value=val;
  page.value=1;
  getTableData();
  
}
onMounted(()=>{
  getTableData();
})
</script>
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.el-table .teacher-row {
  background-color: #e8f5e9; /* 淡绿色背景 */
}

/* 本科生支部2行样式 */
.el-table .undergraduate-row {
  background-color: #e3f2fd; /* 淡蓝色背景 */
}

/* 研究生支部行样式 */
.graduate-row {
  background-color: #fff3e0; /* 淡橙色背景 */
}
</style>
<style lang='scss' scoped>

.common-layout {
  margin: 0 100px;
}
.aside1{
  height: 100%;
}
.GroupList {
  text-align: left;
  color: rgb(158, 158, 158);
  align-items: center;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.el-card {
  text-align: left;
  width: 350px;

}
.el-main{
 width: 100%;
  padding: 0 10px;
 .top{
  margin: 10px 0;
 text-align: left;
 }
 .centre{
  padding: 20px 0 0 20px;
  background-color: #fff;
 }
 
}

</style>
