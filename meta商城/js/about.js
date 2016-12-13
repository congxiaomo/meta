/**
 * Created by zhoushujuan on 16/10/8.
 */
var list = document.querySelector(".list");
window.onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollTop);
    if(scrollTop >= 256){
        list.style.position = "fixed";
        list.style.top = "0px";
        list.style.left = "50%";
        list.style.marginLeft = -list.offsetWidth/2+"px";
        list.style.background = "lightgray";
    }else{
        list.style.position = "static";
        list.style.background = "";
        list.style.left = "";
        list.style.top = "";
        list.style.marginLeft = "";
    }
}