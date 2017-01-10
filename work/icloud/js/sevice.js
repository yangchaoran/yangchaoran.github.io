var sevice=angular.module('sevice',[]);
sevice.factory("localS",function () {
    return {
        getdata:function(){
            var data=localStorage.getItem("arr");
            if(data==null){
                return[{
                    id:1,
                    title:'列表1',
                    color:colors[0],
                    list:[]
                }]
            }else if(JSON.parse(data).length==0){
                return[{
                    id:1,
                    title:'列表1',
                    color:colors[0],
                    list:[]
                }]
            }
            return JSON.parse(data);
        },
        savedata:function(data){
            localStorage.setItem("arr",JSON.stringify(data))
        }
    };
})