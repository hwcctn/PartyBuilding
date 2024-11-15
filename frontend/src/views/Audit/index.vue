<template>
    <div class="main-container">
        <div class="state"  v-if="!$route.meta.hideList">
            <div>
                <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    :router="true">
                    <el-menu-item index="1">
                        全部
                    </el-menu-item>
                    <el-menu-item index="/activeMember">
                        未审批
                    </el-menu-item>
                    <el-menu-item index="/developmentObject">
                        已审批
                    </el-menu-item>
                </el-menu>
            </div>
            <div
                style="background-color: #fff; height: 50px; display: flex; align-items: center; justify-content: space-between; padding: 0 20px;">


                <div style="flex-grow: 1; display: flex; justify-content: left;">
                    <el-input v-model="input2" style="width: 240px;margin-right: 20px;" placeholder="学号/姓名"
                        :prefix-icon="Search" />
                    <el-button type="primary">搜索</el-button>
                </div>
                <el-button type="primary" @click="downloadFile">导出数据</el-button>

            </div>
            <div class="checkForm">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="name" label="姓名" width="150" />
                    <el-table-column prop="studentId" label="学号" width="150" />
                    <el-table-column prop="gender" label="性别" width="100" />
                    <el-table-column prop="ethnicity" label="民族" width="120" />
                    <el-table-column prop="birthDate" label="出生日期" width="180" />
                    <el-table-column prop="applicationDate" label="递交入党申请书时间" width="200" />
                    <el-table-column prop="activeDate" label="确定入党积极分子时间" width="200" />
                    <el-table-column prop="origin" label="籍贯" width="150" />
                    <el-table-column prop="phone" label="联系电话" width="150" />
                    <el-table-column prop="address" label="现居住地" width="300" />
                    <el-table-column prop="partyBranch" label="负责发展其入党的现党支部" width="300" />
                    <el-table-column prop="secretary" label="支部书记（负责人）" width="150" />
                    <el-table-column prop="secretaryPhone" label="支部书记联系电话" width="180" />
                    <el-table-column fixed="right" prop="state" label="状态" min-width="120">
                        <template #default="{ row }">
                            <el-text class="mx-1" :type="row.state === 'success' ? 'success' : 'primary'">
                                {{ row.state === 'success' ? '已通过' : '待审批' }}
                            </el-text>
                        </template>
                    </el-table-column>

                    <el-table-column fixed="right" label="操作" min-width="120">
                        <template #default>
                            <el-button link type="primary" size="small" @click=" handleClick">查看</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
        </div>
        
        <router-view />
    </div>


</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const activeIndex = ref('')
const handleSelect = (index) => {
    activeIndex.value = index;
};
const handleClick = () => {
  router.push({
    path: "/firstStage/detail",
  });
};

const tableData = [
    {
        name: '陈丽',
        studentId: '2101630201',
        gender: '女',
        ethnicity: '汉族',
        birthDate: '2003-02-11',
        applicationDate: '2021-09-15',
        activeDate: '2021-10-05',
        origin: '广西桂林',
        phone: '18176312731',
        address: '桂林市灵川县灵田镇桂林电子科技大学花江校区',
        partyBranch: '桂林电子科技大学人工智能学院本科生第二党支部',
        secretary: '蒋鑫',
        secretaryPhone: '18278394335',
        state: 'success',
    },
    {
    name: '梁科恺',
    studentId: '2101610112',
    gender: '男',
    ethnicity: '汉族',
    birthDate: '2002-08-16',
    applicationDate: '2021-09-15',
    activeDate: '2021-10-05',
    origin: '广西玉林',
    phone: '17774759363',
    address: '桂林市灵川县灵田镇桂林电子科技大学花江校区',
    partyBranch: '桂林电子科技大学人工智能学院本科生第一党支部',
    secretary: '侯佳均',
    secretaryPhone: '13657830714',
    state: 'primary',
  },
  {
    name: '陈圣林',
    studentId: '2101610211',
    gender: '男',
    ethnicity: '汉族',
    birthDate: '2002-10-28',
    applicationDate: '2021-09-15',
    activeDate: '2021-10-05',
    origin: '广西贵港',
    phone: '18477029609',
    address: '桂林市灵川县灵田镇桂林电子科技大学花江校区',
    partyBranch: '桂林电子科技大学人工智能学院本科生第一党支部',
    secretary: '侯佳均',
    secretaryPhone: '13657830714',
    state: 'primary',
  },
  {
    name: '张文源',
    studentId: '2101630120',
    gender: '男',
    ethnicity: '汉族',
    birthDate: '2003-07-27',
    applicationDate: '2021-09-15',
    activeDate: '2021-10-05',
    origin: '河南焦作',
    phone: '15093727731',
    address: '桂林市灵川县灵田镇桂林电子科技大学花江校区',
    partyBranch: '桂林电子科技大学人工智能学院本科生第二党支部',
    secretary: '蒋鑫',
    secretaryPhone: '18278394335',
    state: 'primary',
  },
  {
    name: '胡义豪',
    studentId: '2101630207',
    gender: '男',
    ethnicity: '汉族',
    birthDate: '2002-10-28',
    applicationDate: '2021-09-15',
    activeDate: '2021-10-05',
    origin: '山西晋中',
    phone: '13903444609',
    address: '桂林市灵川县灵田镇桂林电子科技大学花江校区',
    partyBranch: '桂林电子科技大学人工智能学院本科生第二党支部',
    secretary: '蒋鑫',
    secretaryPhone: '18278394335',
    state: 'success',
  }

]
const downloadFile = () => {
    const downloadUrl = '/remote.php/webdav/%E6%9C%B1%E5%B0%8F%E8%95%8A%E5%AD%A6%E6%A0%A1%E8%AF%BE%E7%A8%8B%E4%BD%9C%E4%B8%9A/project/%E6%95%B0%E6%8D%AE.xlsx';
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = '数据.xlsx';
    a.click();
    
  };
  

</script>

<style scoped>
.main-container {
    height: 100%;
}


.checkForm {
    margin-top: 2px;

}
</style>