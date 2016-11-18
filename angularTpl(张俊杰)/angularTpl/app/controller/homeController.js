var app = angular.module('myApp');
app.controller("homeController",["$scope","homeService",function($scope,homeService){
    $scope.items = homeService();
}])
