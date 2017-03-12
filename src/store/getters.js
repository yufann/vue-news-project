/* getters获取数据源的状态，给mutations使用 */
export default{
  navState(state){
    return state.nav;
  },
  loading(state){
    return state.load;
  }
}
