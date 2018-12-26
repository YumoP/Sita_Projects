var user = "a";
var password = "b";
myapp.controller('loginController', function($scope, $location){
	$scope.loginClick = function(){
		if($scope.username === "a" && $scope.password === "b"){
			$location.path('table');
		}
	}
});