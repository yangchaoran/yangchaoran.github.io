//设置cookie
function setCookie(name,value,time){
    if(time==undefined){
        document.cookie=name+"="+value;
    }else{
        var date=new Date();
        date.setTime(date.time+1000*time);
        document.cookie=name+"="+value+"; expires="+date.toGMTString();
    }
}
//获取cookie
function getCookie(name){
    var cookies=document.cookie;
    var arr=cookies.split("; ");
    var result;
    arr.forEach(function(value){
        var msg=value.split("=");
        if(msg[0]==name){
            result=msg[1];
        };
    });
    return result;
}

//删除cookie
function delCookie(name){
    var date=new Date();
    date.setTime(date.getTime()-1000);
    document.cookie=name+"= ; expires="+date.toGMTString();
}