/* 过滤时间戳的过滤器，因为从后台取出的时间一般为一个时间戳 */

export const normalTime=(time)=>{
  if (time) {
    var oDate=new Date();
    oDate.setTime(time);
    var y=oDate.getFullYear();
    var m=oDate.getMonth()+1;
    var d=oDate.getDate();
    var h=oDate.getHours();
    var f=oDate.getMinutes();
    var s=oDate.getSeconds();
  }
  return y+'-'+m+'-'+d+' '+h+':'+f+':'+s;
}
