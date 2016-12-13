/**
 * Created by zhoushujuan on 16/10/9.
 */
var cover = document.querySelector("header .cover");
var coverbox = document.querySelector(".coverbox");
var coverbox2 = document.querySelector(".coverbox2");
var welcome = document.querySelector(".welcome");
var login = document.querySelector(".cover .welcome .denglu");
var load = document.querySelector("header .topLeft .right .load");
var register = document.querySelector(".right .register");
var create = document.querySelector(".cover .create");

var topRight = document.querySelector(".topRight");
var shopbox3 = document.querySelector(".shopbox3");

var right = document.querySelector("header .topLeft .right");
var right2 = document.querySelector("header .topLeft .right2");
var ul = document.querySelector("header .topLeft .right2 ul");
var out = document.querySelector("header .topLeft .right2 .out");
function init() {
    document.body.style.overflow = "hidden";
    cover.style.width = "100%";
    cover.style.height = document.body.offsetHeight +"px";
}
var join = document.querySelector(".topLeft .left");
join.onclick = function () {
    init();
    cover.style.display = "block";
    coverbox.style.display = "block";
}
register.onclick = function () {
    init();
    cover.style.display = "block";
    coverbox2.style.display = "block";
}
load.onclick = function () {
    init();
    cover.style.display = "block";
    welcome.style.display = "block";
}
cover.onclick = function () {
    cover.style.display = "none";
    coverbox.style.display = "none";
    coverbox2.style.display = "none";
    welcome.style.display = "none";
    document.body.style.overflow = "scroll";
}
coverbox.onclick = function () {
    stopBubble();
}
coverbox2.onclick = function () {
    stopBubble();
}
create.onclick = function () {
    coverbox.style.display = "none";
    coverbox2.style.display = "block";
}
function stopBubble(e){
    if(e&&e.stopPropagation){//非IE
        e.stopPropagation();
    }
    else{//IE
        window.event.cancelBubble=true;
    }
}

topRight.onmouseover = function () {
    shopbox3.style.display = "block";
    topRight.style.borderLeft = "1px solid #d3d2d2";
    topRight.style.borderRight = "1px solid #d3d2d2";
}
topRight.onmouseout = function () {
    shopbox3.style.display = "none";
    topRight.style.borderLeft = "";
    topRight.style.borderRight = "";
}

login.onclick = function(){
    right.style.display = "none";
    right2.style.display = "block";
}
right2.onmouseover = function () {
    ul.style.display = "block";
}
right2.onmouseout = function () {
    ul.style.display = "none";
}
out.onclick = function () {
    right.style.display = "block";
    right2.style.display = "none";
}