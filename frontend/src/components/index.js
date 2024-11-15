
// 引入项目的全部组件
import login from './login/index.vue';
import register from './register/index.vue';
import avater from './avatar/index.vue'
import baseinfo from './baseInfo/index.vue'
import SvgIcon from './SvgIcon/index.vue'
import StateActiveMember from './state/StateActiveMember.vue'
import StateApplyToJoin from './state/StateApplyToJoin.vue'
import StateCart from './state/StateCart.vue'
import StateMenu from './state/StateMenu.vue'
import StepContainer from './stepContainer/index.vue'

// 全局对象
const allGlobalComponent = {login,register,avater,baseinfo, SvgIcon,StateActiveMember,StateApplyToJoin,StateMenu,StepContainer,StateCart}

// 对外暴露插件对象
export default {
  install(app) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key]);
    });
  },
};
