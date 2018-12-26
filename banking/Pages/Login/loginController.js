var user = "shiva.gunti@sitacorp.com";
var password = "shiva";
var currentUser = new String();
var currentName = new String();
myapp.controller('loginController', function($scope, $location, $http){
	$scope.loadingIcon = false;
	var contain = angular.element(document.querySelector(".container"));
	$scope.addClassL = function(){
		contain.addClass("hover-left");
	}
	$scope.addClassR = function(){
		contain.addClass("hover-right");
	}
	$scope.removeClassL = function(){
		contain.removeClass('hover-left');
	}
	$scope.removeClassR = function(){
		contain.removeClass("hover-right");
	}
	$scope.signupClick = function(){
		$location.path('signup');
	}
	$scope.userlistClick = function(){
		$location.path('userlist');
	}
	$scope.changePasswordClick = function(){
		$location.path('changepassword');
	}
	$scope.contactClick = function(){
		$location.path('contact');
	}
	$scope.booleanVal = false;
	$scope.myVar = false;
	$scope.loginClick = function(){
		$scope.loadingIcon = true;
		$http({
			method : "GET",
			url : "http://helpdesk.sitacorp.com:8080/registration/userLogin?username=" + $scope.usernameInput + "&password=" + $scope.passwordInput
		}).then(function mySuccess(response) {
			if(response.data.status === "success"){
				$scope.myVar = !$scope.myVar;
				$scope.currentName = response.data.data[0].firstname + " " + response.data.data[0].lastname;
				$scope.booleanVal = false;
				setTimeout(function(){
					$scope.loadingIcon = false; 
					$scope.$apply()
				}, 1000);
			}else{
				alert("Failed to log in, please try again");
				$scope.loadingIcon = false; 
			}
			console.log(currentName);
		});
	}
});