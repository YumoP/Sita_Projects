
myapp.controller('changepasswordController', function($scope, $location, $http){
	$scope.back = function(){
		$location.path('login');
	}	
	$scope.sunbitClick = function(){
		console.log("clicked");
		$http({
			method : "POST",
			url : "http://helpdesk.sitacorp.com:8080/registration/changePassword?username=" 
				+ $scope.user + "&password=" + $scope.cupassword + "&changePassword=" +$scope.nepassword
		}).then(function mySuccess(response) {
			console.log(response);
			if(response.data.status === "success"){
				alert("Success");
				$location.path('login');
			}
		});
	}
});