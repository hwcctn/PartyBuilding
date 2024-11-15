<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://registry.npmmirror.com/vue/3.3.11/files/dist/vue.global.js"></script>
</head>
<body>
  <div id="app" class="p-4">
    <div class="border border-black">
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">基本情况</div>
        <div class="col-span-2 border-r border-black p-2">姓名</div>
        <div class="col-span-2 border-r border-black p-2"><input type="text" v-model="formData.name" class="w-full border-none"></div>
        <div class="col-span-1 border-r border-black p-2">性别</div>
        <div class="col-span-1 border-r border-black p-2"><input type="text" v-model="formData.gender" class="w-full border-none"></div>
        <div class="col-span-1 border-r border-black p-2">民族</div>
        <div class="col-span-1 border-r border-black p-2"><input type="text" v-model="formData.ethnicity" class="w-full border-none"></div>
        <div class="col-span-1 border-r border-black p-2">出生年月日</div>
        <div class="col-span-1 p-2"><input type="text" v-model="formData.birthdate" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">单位、职务或职业</div>
        <div class="col-span-10 p-2"><input type="text" v-model="formData.job" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">家庭详细住址</div>
        <div class="col-span-10 p-2"><input type="text" v-model="formData.address" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">身份证号码</div>
        <div class="col-span-4 border-r border-black p-2"><input type="text" v-model="formData.idNumber" class="w-full border-none"></div>
        <div class="col-span-2 border-r border-black p-2">学历 学位</div>
        <div class="col-span-4 p-2"><input type="text" v-model="formData.education" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">联系电话</div>
        <div class="col-span-10 p-2"><input type="text" v-model="formData.phone" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">申请入党</div>
        <div class="col-span-10 p-2"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">申请入党时间</div>
        <div class="col-span-4 border-r border-black p-2"><input type="text" v-model="formData.applicationDate" class="w-full border-none"></div>
        <div class="col-span-2 border-r border-black p-2">入党申请书接收人（单位、职务、签名）</div>
        <div class="col-span-4 p-2"><input type="text" v-model="formData.applicationReceiver" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">支部派人谈话时间</div>
        <div class="col-span-4 border-r border-black p-2"><input type="text" v-model="formData.interviewDate" class="w-full border-none"></div>
        <div class="col-span-2 border-r border-black p-2">谈话人（单位、职务、签名）</div>
        <div class="col-span-4 p-2"><input type="text" v-model="formData.interviewer" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">入党积极分子</div>
        <div class="col-span-10 p-2"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">推荐入党积极分子人选</div>
        <div class="col-span-4 border-r border-black p-2"><input type="text" v-model="formData.recommendation" class="w-full border-none"></div>
        <div class="col-span-2 border-r border-black p-2">党支部推荐情况</div>
        <div class="col-span-4 p-2"><input type="text" v-model="formData.partyRecommendation" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">群团组织推荐情况</div>
        <div class="col-span-10 p-2"><input type="text" v-model="formData.groupRecommendation" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">支部确定入党积极分子时间</div>
        <div class="col-span-4 border-r border-black p-2"><input type="text" v-model="formData.confirmationDate" class="w-full border-none"></div>
        <div class="col-span-2 border-r border-black p-2">党支部审议时间</div>
        <div class="col-span-2 border-r border-black p-2"><input type="text" v-model="formData.reviewDate" class="w-full border-none"></div>
        <div class="col-span-2 p-2">党委备案时间</div>
        <div class="col-span-2 p-2"><input type="text" v-model="formData.recordDate" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">培养联系人</div>
        <div class="col-span-4 border-r border-black p-2"><input type="text" v-model="formData.contactPerson" class="w-full border-none"></div>
        <div class="col-span-2 border-r border-black p-2">单位及职务</div>
        <div class="col-span-4 p-2"><input type="text" v-model="formData.contactJob" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">书面思想汇报时间</div>
        <div class="col-span-10 p-2"><input type="text" v-model="formData.reportDate" class="w-full border-none"></div>
      </div>
      <div class="grid grid-cols-12 border-b border-black">
        <div class="col-span-2 border-r border-black p-2">支部考察时间</div>
        <div class="col-span-10 p-2"><input type="text" v-model="formData.inspectionDate" class="w-full border-none"></div>
      </div>
    </div>
  </div>
  <script>
    const { createApp, ref } = Vue
    createApp({
      setup() {
        const formData = ref({
          name: '',
          gender: '',
          ethnicity: '',
          birthdate: '',
          job: '',
          address: '',
          idNumber: '',
          education: '',
          phone: '',
          applicationDate: '',
          applicationReceiver: '',
          interviewDate: '',
          interviewer: '',
          recommendation: '',
          partyRecommendation: '',
          groupRecommendation: '',
          confirmationDate: '',
          reviewDate: '',
          recordDate: '',
          contactPerson: '',
          contactJob: '',
          reportDate: '',
          inspectionDate: ''
        })
        return {
          formData
        }
      }
    }).mount('#app')
  </script>
</body>
</html>