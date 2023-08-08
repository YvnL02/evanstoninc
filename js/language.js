dict = {
    "主页":"home",
    "关于我们":"about",
    "服务":"service",
    "销售渠道":"pipeline",
    "联系我们":"contact"
}
$(function(){ 

    sessionStorage.setItem("language", "中文");
});

function translate(){
  var value = sessionStorage.getItem("language");
  if(value==="中文"){
      sessionStorage.setItem("language", "english"); 
  }else{
      sessionStorage.setItem("language", "中文");
  }
  window.location.reload();//刷新当前页面.
}
