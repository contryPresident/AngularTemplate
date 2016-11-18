
angular.module('myApp', ["ngRoute"])
.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/",{
        return {
            templateUrl : "../views/home.html",
            controller : "homeController"
        }
    })
}])
