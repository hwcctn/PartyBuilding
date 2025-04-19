<!-- <template>
  <div class="title">
    <h3>{{ topText }}:{{ middleText }}</h3>
  </div>
  <div class="edit">
    <DataEditor />
  </div>
  <div class="view">
    <DataDisplay :msg="demoData" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import DataEditor from './components/DataEditor.vue'
import DataDisplay from './components/DataDisplay.vue'
const route = useRoute()
const topText = route.query.topText
const middleText = route.query.middleText
// 示例数据
const demoData = [
  {
    content: '2024-02-03',
    label: '书面思想汇报时间1'
  },
  {
    content: '2024-02-03',
    label: '书面思想汇报时间1'
  },
  {
    content: '2024-02-03',
    label: '书面思想汇报时间1'
  },
  {
    content: '2024-02-03',
    label: '书面思想汇报时间2'
  },
  {
    content: '2024-02-03',
    label: '书面思想汇报时间3'
  },
  {
    content: '2024-02-03',
    label: '书面思想汇报时间4'
  },
  {
    content: '2024-05-03',
    label: '支部考察时间1'
  },
  {
    content: '2024-05-03',
    label: '支部考察时间2'
  },
  {
    content:
      '2023年11月--2023年11月,组织龚雪竹同志参加入党积极分子培训班,学习中国共产党的光辉历程等课程。<br />2023年12月12日,组织龚雪竹同志学习习近平总书记视察时重要讲话精神。<br />2024年3月10日,组织龚雪竹同志到学院开展志愿服务活动。<br />2024年5月11日,发放《党章》等资料,要求龚雪竹同志认真学习。',
    label: '培养教育情况'
  },
  {
    content:
      '该同志自被列为入党积极分子以来,主动学习党的基本知识,对党认识深刻,学习刻苦努力,团结同学,起到很好的带头作用,乐于帮助有困难的同学,受到同学们的好评。',
    label: '考察情况'
  }
]
</script>
<style lang="scss" scoped>
.form-view {
  margin-top: 50px;
}
::v-deep .el-form-item__label {
  line-height: 1.2;
  align-items: center;
}
.button {
  height: 40px;
  width: 100px;
  margin-top: 50px;
}
</style> -->
