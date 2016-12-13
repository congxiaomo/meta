/**
 * Created by zhoushujuan on 16/10/9.
 */
var lpicsbox = document.querySelector(".detailsLeft ul");
var lpics = document.querySelectorAll(".detailsLeft ul li");
var spicsbox = document.querySelector(".detailsLeft ol");
var spics = document.querySelectorAll(".detailsLeft ol li");

var point = document.querySelector(".detailsLeft .point");
var large = document.querySelector(".detailsRight .large");
var largePics = document.querySelectorAll(".detailsRight .large ul li");
var imgs = document.querySelectorAll(".detailsRight .large ul li img");
console.log(large,largePics[0]);
var length = lpics.length;
lpics[0].style.display = "block";
largePics[0].style.display = "block";
for(var i = 0;i<length;i++){
    spics[i].index = i;
    spics[i].onclick = function(){
        for(var j = 0;j<length;j++){
            lpics[j].style.display = "none";
            largePics[j].style.display = "none";
        }
        lpics[this.index].style.display = "block";
        largePics[this.index].style.display = "block";
    }
}
lpicsbox.onmouseover = function () {
    point.style.display = "block";
    large.style.display = "block";
}
lpicsbox.onmouseout = function () {
    point.style.display = "none";
    large.style.display = "none";
}

    lpicsbox.onmousemove = function (event) {
        var oEvent = event || window.event;   //为了兼容
        var x = oEvent.clientX - lpicsbox.offsetLeft - lpicsbox.offsetParent.offsetLeft;
        var y = oEvent.clientY - lpicsbox.offsetTop + document.body.scrollTop;
        var l = x-point.offsetWidth/2;
        var t = y-point.offsetHeight/2;
        if(l<0){
            l = 0;
        }else if(l>lpicsbox.offsetWidth-point.offsetWidth){
            l = lpicsbox.offsetWidth-point.offsetWidth;
        }
        if(t<0){
            t = 0;
        }else if(t>lpicsbox.offsetHeight-point.offsetHeight){
            t = lpicsbox.offsetHeight-point.offsetHeight;
        }
        point.style.left = l+"px";
        point.style.top = t+"px";


        for(var i = 0;i<length;i++){
            var ww = (imgs[i].offsetWidth-large.offsetWidth)/(lpicsbox.offsetWidth-point.offsetWidth);
            var qq = (imgs[i].offsetHeight-large.offsetHeight)/(lpicsbox.offsetHeight-point.offsetHeight);
            imgs[i].style.left = -(ww*l)+"px";
            imgs[i].style.top = -(qq*t)+"px";
        }
    }
