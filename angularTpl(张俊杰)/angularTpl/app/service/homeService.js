var app = angular.module('myApp')
app.service('homeService', ['$http', function($http) {
    return $http.get("热买地址").then(
        function success(res) {
            return red;
        },
        function error() {

        })

}])
