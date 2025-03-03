import SvgIcon from './SvgIcon/index.vue'
import baseinfo from './baseInfo/index.vue'
import StateMenu2 from './state/StateMenu2.vue';
import AuditComponent from './AuditComponent/index.vue'
import StateApplyToJoin from './state/StateApplyToJoin.vue';
const allGlobalComponent = { SvgIcon,baseinfo,StateMenu2,AuditComponent,StateApplyToJoin}
export default {
    install(app) {
      Object.keys(allGlobalComponent).forEach((key) => {
        app.component(key, allGlobalComponent[key]);
      });
    },
  };