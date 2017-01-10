var ctrl=angular.module("ctrl",[]);
ctrl.controller("c",function ($scope) {
    var n=1;
    $scope.f=false;
    $scope.left=function () {
        n++;
        if(n%2==0){
            $scope.f=true;
            document.querySelector("#content").style.transform="translateX(50%)";
            $scope.f=true;
            console.log(document.querySelector(".mask"))
            console.log($scope.f)
        }else {
            $scope.f=false;
            document.querySelector("#content").style.transform="translateX(0)";
        }
    }
})
ctrl.controller("latest",function ($scope,$http) {
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/latest",
        method:"get",
        responseType:"json"
    }).then(function (res) {
        $scope.data=res.data;
    })
})
// debugger
ctrl.controller("themes",function ($scope,$http,$routeParams) {
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/themes",
        method:"get",
        responseType:"json"
    }).then(function (res) {
        $scope.zhuti=res.data.others;
    })
})
ctrl.controller("show",function ($scope,$http,$routeParams) {
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/"+$routeParams.id,
        method:"get",
        responseType:"json"
    }).then(function (res) {
        $scope.list=res.data;
    })
    $scope.back=function () {
       console.log(document.querySelector())
    }
})
ctrl.controller("themeList",function ($scope,$http,$routeParams) {
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/theme/"+$routeParams.id,
        method:"get",
        responseType:"json"
    }).then(function (res) {
        $scope.ztlist=res.data
        console.log($scope.ztlist)
    })
})


