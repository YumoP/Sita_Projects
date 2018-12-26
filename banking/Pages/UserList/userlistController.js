myapp.controller('userlistController', function($scope,$location,$http){
	$scope.buttonShow = false;
	$scope.back = function(){
		console.log("click");
		$location.path('login');
	}	
	$http({
		method : "GET",
		url : "http://helpdesk.sitacorp.com:8080/registration/getallUsers?"
	}).then(function mySuccess(response) {
		$scope.loadingIcon = false; 
		if(response.data.status === "success"){
			$scope.loadingIcon = true;
			var myusers = response.data.data;
			var tableOptions = {
				data:myusers,
				columns: [
					{
						"field": "userno",
						"title": "User Number"
					},
					{
						"field": "fullname",
						"title": "Name"
					},
					{
						"field": "email",
						"title": "E-mail"
					}
				],
				pagination:true,
				pageSize:5,
				search:true
			}
			$("#mytab").bootstrapTable(tableOptions);
			console.log(myusers);
			setTimeout(function(){
				$scope.buttonShow = true;
				$scope.loadingIcon = false; 
				$scope.$apply()
			}, 1000);
		}
	});

});