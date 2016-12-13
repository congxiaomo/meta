/**
 * Created by zhoushujuan on 16/10/11.
 */
var bigbox = document.querySelector(".bigbox");
var ul = document.querySelector(".bigbox ul");
var speed = -1;
ul.innerHTML = ul.innerHTML + ul.innerHTML;
var li1 = document.querySelectorAll(".bigbox ul li");
ul.style.width = li1[0].offsetWidth*li1.length+"px";
var time = null;
time = setInterval(role,10);
function role(){
    if(ul.offsetLeft<-ul.offsetWidth/2){
        ul.style.left = 0 + "px";
    }
    if(ul.offsetLeft>0){
        ul.style.left = -ul.offsetWidth/2 + "px";
    }
    ul.style.left = ul.offsetLeft + speed + "px";
}
bigbox.onmouseover = function (event) {
    var oEvent = event || window.event;
    if(oEvent.clientX<=bigbox.offsetWidth/3){
        speed = -1;
    }else if((oEvent.clientX>bigbox.offsetWidth/3)&&(oEvent.clientX<bigbox.offsetWidth/3*2)){
        clearInterval(time);
    }else{
        speed = 1;
    }
}
bigbox.onmouseout = function (event) {
    var oEvent = event || window.event;
    if((oEvent.clientX>bigbox.offsetWidth/3)&&(oEvent.clientX<bigbox.offsetWidth/3*2)){
        time = setInterval(role,10);
    }
}