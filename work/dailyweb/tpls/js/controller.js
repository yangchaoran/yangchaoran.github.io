var ctrl=angular.module("ctrl",[]);
ctrl.controller("banner",function ($scope,$http) {
    $http({
        url:"http://news-at.zhihu.com/api/4/start-image/1080*1776",
        method:"get",
        response:"json"
    }).then(function (res) {
        $scope.thumb=res.img;
        console.log($scope.thumb)
        alert(1)
    })
})
ctrl.controller("latest",function ($scope,$http) {
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/latest",
        method:"get",
        responseType:"json"
    }).then(function (res) {
        $scope.data=res.data;
        console.log($scope.data)
    })
})
ctrl.controller("themes",function ($scope,$http) {
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/themes",
        method:"get",
        responseType:"json"
    }).then(function (res) {
        $scope.zhuti=res;
        console.log($scope.zhuti)
    })
})
ctrl.controller("show",function ($scope,$http,$routeParams) {
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/"+$routeParams.id,
        method:"get",
        responseType:"json"
    }).then(function (res) {
        console.log($routeParams.id)
        $scope.list=res.data;
        console.log($scope.list)
    })
})




