var app=angular.module("app",["ctrl","filter","ngRoute","ngSanitize"]);
app.config(["$routeProvider",function ($r) {
    $r.when("/",{
        templateUrl:"tpls/index-list.html",
        controller:"latest"
    }).when("/show/:id",{
        templateUrl:"tpls/show.html",
        controller:"show"
    }).when("/theme/:id",{
        templateUrl:"tpls/theme.html",
        controller:"themes"
    })
}])
app.directive("hello",function () {
    return{
        restrict:"ECMA",
        template:"tpls/theme.html",
        replace:true,
        scope:true
    }
})

