
myapp.controller('contactController', function($scope){	
    $scope.back = function(){
        $location.path('login');
    }

});