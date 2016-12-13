        var lunbo = one(".lunbo");
        var ul = one(".lunbo ul");
        var ol = one(".lunbo ol");
        var liList = some(".lunbo ul li");
        var btnList = some(".lunbo ol li");
        // lunbo.style.position = "relative";
        // ul.style.position = "relative";
        ol.style.position = "absolute";
        btnList[0].style.background = "red";
        ol.style.width = btnList[0].offsetWidth*btnList.length+btnList.length*10+"px";
        ol.style.bottom = "15px";
        ol.style.left = "50%";
        ol.style.marginLeft = -ol.offsetWidth/2+"px";

        var time3 = null;
        var index3 = 0;
        ul.style.left = "0px";

        lunbo.onmouseover = function () {
            clearInterval(time3);
        }
        lunbo.onmouseout = function () {
            clearInterval(time3);
            time3 = setInterval(function(){
                next();
            },3000);
        }
    for(var i = 0;i<btnList.length;i++){
        btnList[i].index = i;
        btnList[i].onmouseover = function () {
            clearInterval(time3);
            for(var j = 0;j<btnList.length;j++){
                btnList[j].style.background = "lightgray";
                liList[j].style.opacity = 0;
            }
            index3 = this.index;
            btnList[index3].style.background = "red";
            liList[index3].style.opacity = 1;
            // ul.style.left = -liList[0].offsetWidth*index3+"px";
        }
    }
    function one(x){
        return document.querySelector(x);
    }
    function some(x){
        return document.querySelectorAll(x);
    }
    function next() {
        index3 ++;
        if(index3>liList.length-1){
            index3 = 0;
        }
        for(var j=0;j<btnList.length;j++){
            btnList[j].style.background = "lightgray";
            liList[j].style.opacity = 0;
        }
        btnList[index3].style.background = "red";
        liList[index3].style.opacity = 1;
        // ul.style.left = -liList[0].offsetWidth*index3+"px";
    }
    function init2() {
        clearInterval(time3);
        // for(var k = 0;k<btnList.length;k++){
        //     // liList[k].style.width = window.innerWidth+"px";
        //     // console.log(window.innerWidth,liList[0].offsetWidth);
        // }
        // ul.style.width = liList[0].offsetWidth*liList.length+"px";

        for(var i=0;i<btnList.length;i++){
            btnList[i].index = i;
            btnList[i].onclick = function(){
                for(var j=0;j<btnList.length;j++){
                    btnList[j].style.background = "lightgray";
                    liList[j].style.opacity = 0;
                }
                index3 = this.index;
                this.style.background = "red";
                liList[index3].style.opacity = 1;
                // ul.style.left = -liList[0].offsetWidth*this.index+"px";
            }
        }
        time3 = setInterval(function(){
            next();
        },3000);
    }
    init2();
    window.onresize = function () {
        console.log("123");
        init2();
    }



