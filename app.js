// ui.router 第309行显示模块名称
angular.module("app",['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home.part1");
	$stateProvider
	.state("home",{
		url:"/home",
		templateUrl:"compner/home/home.html"
	})
	.state("list",{
		url:"ss/list",
		templateUrl:"compner/list/list.html",
		controller:function($scope){
			$scope.name = "王源";
		}
	})
	// car 是和前面ui-sref 对应的 /car是和地址栏对应的.
	.state("car",{
		url:"/car",
		templateUrl:"compner/car/car.html",
		controller:"listctr"
	})
	.state("home.part1",{
		url:"/part1",
		templateUrl:"compner/home/home.part1.html"
	})
	.state("home.part2",{
		url:"/part1",
		templateUrl:"compner/home/home.part2.html"
	})
})
.controller("listctr",function($scope){
	$scope.name = "张三";
})