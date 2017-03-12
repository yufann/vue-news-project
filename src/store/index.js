import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations.js'
import actions from './actions.js'

export default new Vuex.Store({//Vue.Stroe()首字母大写
  modules:{   //这里注意mutations导出的是一个模块
    mutations
  },
  actions
});
