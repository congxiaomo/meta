/**
 * Created by zhoushujuan on 16/10/10.
 */

var top1 = document.querySelector(".shopbox2 .count");
var goon = document.querySelector(".infor2 .goon");
var infor1 = document.querySelector(".infor1");
var infor2 = document.querySelector(".infor2");
var tip = document.querySelector(".tip");
var tip2 =document.querySelector(".tip2");
var subtotal = document.querySelector(".subtotal i");
var fare = document.querySelector(".fare i");
var defare = document.querySelector(".defare i");
var alltotal = document.querySelector(".alltotal i");
var add = document.querySelectorAll(".goods .value2 .add");
var minus = document.querySelectorAll(".goods .value2 .minus");
var num = document.querySelectorAll(".goods .value2 input");
var price = document.querySelectorAll(".mingxi .value3 span");
var dele = document.querySelectorAll(".delete");
var goodList = document.querySelectorAll(".goods ul li");

var nav1 = document.querySelector(".nav ul");
var nav2 = document.querySelector(".nav ol");
var shopbox = document.querySelector(".topRight .shopbox");
var shopbox2 = document.querySelector(".topRight .shopbox2");

var point = document.querySelectorAll(".nav .point");
point[0].style.background = "#c29bb1";
point[1].style.background = "#c29bb1";
if($_GET("msg") == "true"){
    nav1.style.display = "none";
    nav2.style.display = "block";
    shopbox.style.display = "none";
    shopbox2.style.display = "block";
}

//继续
goon.onclick = function () {
    infor1.style.display = "block";
    infor2.style.display = "none";
    tip2.style.display = "none";
    tip.style.display = "block";
}

//小计，总价
function pricefn() {
    var sum = 0;
    for(var i = 0; i< goodList.length;i++){
        console.log(Number(num[i].value));
        sum += Number(num[i].value)*Number(price[i].innerText);
    }
    subtotal.innerText = sum;
    alltotal.innerText = sum+Number(fare.innerText)-Number(defare.innerText);
    top1.innerText = goodList.length;
}
pricefn();

//商品数量 加、减

for(var i = 0;i<add.length;i++){
    add[i].index = i;
    minus[i].index = i;
    add[i].onclick = function () {
        num[this.index].value = Number(num[this.index].value) + 1;
        pricefn();
    }
    minus[i].onclick = function () {
        num[this.index].value = Number(num[this.index].value) - 1;
        if(num[this.index].value <= 0){
            goodList[this.index].parentNode.removeChild(goodList[this.index]);
        }
        pricefn();
    }
}
// 删除商品
function delefn() {
    for(var j = 0;j<dele.length;j++){
        dele[j].index = j;
        dele[j].onclick = function () {
            num[this.index].value = 0;
            goodList[this.index].parentNode.removeChild(goodList[this.index]);
            pricefn();
        }
    }
}
delefn();


function $_GET(str){
    var url = location.search;

    var arr = url.slice(1).split("&");
    var length = arr.length;
    var arr2 = [];
    for(var i = 0;i<length;i++){
        arr2.push(arr[i].split("="));
    }
    var obj = {};
    for(var j = 0;j<arr2.length;j++){
        obj[arr2[j][0]] = arr2[j][1];
    }
    return obj[str];
}