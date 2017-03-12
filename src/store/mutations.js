/* 3.到达mutations的时候，对数据的状态进行处理 */
import getters from './getters.js'
var state={   //state表示数据源的状态，这里为显示/隐藏
  nav:true,
  load:false
};
const mutations={
  navShow(state){
    state.nav=true;
  },
  navHide(state){
    state.nav=false;
  },
  showLoading(state){
    state.load=true;
  },
  hideLoading(state){
    state.load=false;
  }
};

export default{
  state,
  mutations,
  getters
}
