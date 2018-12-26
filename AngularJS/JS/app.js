var myapp = angular.module("myapp", ["ngRoute"]);
myapp.config(($routeProvider)=>{
	$routeProvider
	.when("/", {
		templateUrl :"Pages/Login/loginView.html",
		controller: "loginController"
	})
	.when("/login", {
		templateUrl :"Pages/Login/loginView.html",
		controller: "loginController"
	})
	.when("/home", {
		templateUrl :"Pages/Home/homeView.html",
		controller: "homeController"

	})
	.when("/table", {
		templateUrl :"Pages/Table/tableView.html",
		controller: "tableController"

	})
})