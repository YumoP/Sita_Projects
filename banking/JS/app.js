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
	.when("/signup", {
		templateUrl :"Pages/SignUp/signupView.html",
		controller: "signupController"
	})
	.when("/contact", {
		templateUrl :"Pages/Contact/contactView.html",
		controller: "contactController"
	})
	.when("/changepassword", {
		templateUrl :"Pages/ChangePassword/changepasswordView.html",
		controller: "changepasswordController"
	})
	.when("/userlist", {
		templateUrl :"Pages/UserList/userlistView.html",
		controller: "userlistController"
	})
})