
myapp.controller('homeController', function($scope){
	$scope.mystudents =[
	    {"firstName":"John", "lastName":"Doe", "phone":"9000000000", "email":"test@gmail.com", "status":"active", "DOB":"2018-12-25", "salary": "36000", "zip":"04401", "address":""}, 
	    {"firstName":"Anna", "lastName":"Smith", "phone":"9000000000", "email":"test@gmail.com", "status":"inactive", "DOB":"2018-12-25", "salary": "114200", "zip":"47906", "address":""},
	    {"firstName":"Peter", "lastName":"Jones", "phone":"9000000000", "email":"test@gmail.com", "status":"active", "DOB":"2018-12-25", "salary": "162000", "zip":"04401", "address":""},
	    {"firstName":"John", "lastName":"Doe", "phone":"9000000000", "email":"test@gmail.com", "status":"active", "DOB":"2018-12-25", "salary": "60000", "zip":"11355", "address":""}, 
	    {"firstName":"Anna", "lastName":"Smith", "phone":"9000000000", "email":"test@gmail.com", "status":"active", "DOB":"2018-12-25", "salary": "260000", "zip":"04401", "address":""},
	    {"firstName":"Peter", "lastName":"Jones", "phone":"9000000000", "email":"test@gmail.com", "status":"active", "DOB":"2018-12-25", "salary": "160000", "zip":"04401", "address":""},
	    {"firstName":"John", "lastName":"Doe", "phone":"9000000000", "email":"test@gmail.com", "status":"active", "DOB":"2018-12-25", "salary": "560000", "zip":"11355", "address":""}, 
	    {"firstName":"Anna", "lastName":"Smith", "phone":"9000000000", "email":"test@gmail.com", "status":"inactive", "DOB":"2018-12-25", "salary": "3600000", "zip":"04401", "address":""},
	    {"firstName":"Peter", "lastName":"Jones", "phone":"9000000000", "email":"test@gmail.com", "status":"active", "DOB":"2018-12-25", "salary": "106000", "zip":"47906", "address":""}
	  ];
	  $scope.globalIndex;
	  $scope.edit = function(index){
	  	$scope.firstname = $scope.mystudents[index].firstName;
	  	$scope.lastname = $scope.mystudents[index].lastName;
	  	$scope.phone = $scope.mystudents[index].phone;
	  	$scope.email = $scope.mystudents[index].email;
	  	$scope.status = $scope.mystudents[index].status;
	  	$scope.DOB = $scope.mystudents[index].DOB;
	  	$scope.salary = $scope.mystudents[index].salary;
	  	$scope.zip = $scope.mystudents[index].zip;
	  	$scope.globalIndex = index;
	  }
	  $scope.submit = function(){
	  	$scope.mystudents[$scope.globalIndex].firstName = $scope.firstname;
	  	$scope.mystudents[$scope.globalIndex].lastName = $scope.lastname;
	  	$scope.mystudents[$scope.globalIndex].phone = $scope.phone;
	  	$scope.mystudents[$scope.globalIndex].email = $scope.email;
	  	$scope.mystudents[$scope.globalIndex].status = $scope.status;
	  	$scope.mystudents[$scope.globalIndex].DOB = $scope.DOB;
	  	$scope.mystudents[$scope.globalIndex].salary = $scope.salary;
	  	$scope.mystudents[$scope.globalIndex].zip = $scope.zip;
	  	$scope.mystudents[$scope.globalIndex].address=$('.note-editable').children().prevObject[0].innerHTML;
	  }

  	  $('#summernote').summernote({height: 300});

});
myapp.filter('salaryLevel', function($sce){
	return function(input){
		if(input <= 100000) return $sce.trustAsHtml("<i class=\"fas fa-meh\" style=\"color:#4A5E06; font-size:22px\"></i>");
		if(input > 100000 && input <= 250000) return $sce.trustAsHtml("<i class=\"fas fa-grin\" style=\"color:#D3E347; font-size:22px\"></i>");
		if(input > 250000) return $sce.trustAsHtml("<i class=\"fas fa-laugh-squint\" style=\"color:#FFFB00; font-size:22px\"></i>");
	}
});
