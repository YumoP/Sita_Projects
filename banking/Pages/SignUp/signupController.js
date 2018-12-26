
myapp.controller('signupController', function($scope, $location,$http){
	$scope.back = function(){
		$location.path('login');
	}	
	$scope.registerClick = function(){
		console.log("clicked");
		$http({
			method : "POST",
			url : "http://helpdesk.sitacorp.com:8080/registration/userDetails?" +"firstname=" 
				+ $scope.fname + "&lastname=" + $scope.lname + "&emailid=" + $scope.email + "&userid=" + $scope.email + 
					"&password=" + $scope.password + "&mobileno=" + $scope.mobile
		}).then(function mySuccess(response) {
			console.log(response);
			if(response.data.status === "success"){
				alert("Success");
			}
		});
	}
});