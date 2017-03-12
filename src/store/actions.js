/* 2.到达actions之后，commit到达mutations */
export default{
  navShow:({commit})=>{
    commit('navShow');
  },
  navHide:({commit})=>{
    commit('navHide');
  },
  showLoading:({commit})=>{
    commit('showLoading');
  },
  hideLoading:({commit})=>{
    commit('hideLoading');
  }
}
