var user = "shiva.gunti@sitacorp.com";
var password = "shiva";
var currentUser = new String();
var currentName = new String();
var d1 = new Date();
var d2 = new Date();
var fulldata = [];
myapp.controller('loginController', function($scope, $location, $http){
	$('.night').click(function(){
		$(this).toggleClass('show');
		$('.day').toggleClass('show');
	});
	$('.day').click(function(){
		$(this).toggleClass('show');
		$('.night').toggleClass('show');
	});
	$(function() {
		$('#text-calendar1').pignoseCalendar({
			format: 'YYYY-MM-DD' // date format string. (2017-02-02)
		});
		$('#text-calendar2').pignoseCalendar({
			format: 'YYYY-MM-DD' // date format string. (2017-02-02)
		});
	});
	function prepareDate(d) {
		[y, m, d] = d.split("-"); //Split the string
		return [y, m - 1, d]; //Return as an array with y,m,d sequence
	}
	$scope.filte = function(){
		var str1 = $('#text-calendar1').val();
		var str2 = $('#text-calendar2').val();
		d1 = new Date(...prepareDate(str1));
		d2 = new Date(...prepareDate(str2));
		var currentdata = [];
		for(var item in fulldata){
			var date = new Date(fulldata[item].date);
			if(date >= d1 && date <= d2){
				currentdata.push(fulldata[item]);
			}
		}
		console.log(currentdata);
		
		$("#myTab").bootstrapTable('destroy');
		createTable(currentdata);
	}
	window.onkeydown = function(e) {
		var key = e.keyCode ? e.keyCode : e.which;
		if (key == 13 && $scope.booleanVal==true) {
			$scope.loginClick();
			$scope.$apply();
		}else{
			//console.log(key + " " + $scope.booleanVal);
		}
	 }
	$(document).on('scroll', function(){
		console.log(window.scrollY);
		if(window.scrollY >= 150) {
			$(".subtitle1").css({"letter-spacing": (window.scrollY - 150)/8.2 + "px", "opacity": 1 - (window.scrollY - 150) * 0.22 / 100, 
			"font-size": 60 - (window.scrollY - 150)/7.5 + "px", "height": 72 - (window.scrollY - 150)*0.11 + "px"});
		}
		if(window.scrollY >= 780 && window.scrollY < 1140) {
			$(".paypal-iframe").css({"height":(70 + (window.scrollY - 780)/12) + "%", "width":(70 + (window.scrollY - 780)/12) + "%"});
		}
	});
	$scope.onloadFun = function() {
		var date = new Date();
		var hour = date.getHours();
		if(hour >= 0 && hour < 12){
			$scope.time = "Morning";
		}
		if(hour >= 12 && hour < 18){
			$scope.time = "Afternoon";
		}
		if(hour >= 18 && hour < 24){
			$scope.time = "Evening";
		}
		if(localStorage.getItem("logged") == "true"){
			//console.log("1 " + localStorage.getItem("logged"));
			$scope.getTrans();
			$scope.currentName = localStorage.getItem("name");
			$scope.currentEmail = localStorage.getItem("email");
			$scope.currentPhone = localStorage.getItem("phone");
			$scope.currrentBalance = localStorage.getItem("balance");
			$scope.myVar = true;
			document.querySelector(".buscar-caja").style.left="40%";
		}else{
			document.querySelector(".buscar-caja").style.left="50%";
			//console.log("2 " + localStorage.getItem("logged"));
			$scope.myVar = false;
		}
    }
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
	$scope.profileClick = function(){
		document.querySelector(".profileContainer").style.display="block";
	}
	$scope.profileClose = function(){
		document.querySelector(".profileContainer").style.display="none";
	}
	$scope.signoutClick = function(){
		localStorage.setItem("logged", "false");
		localStorage.setItem("name", null);
		$scope.myVar = false;
		$("#mytab").bootstrapTable('destroy');
		$location.path('login');
		document.querySelector(".buscar-caja").style.left="50%";
	}
	$scope.booleanVal = false;
	$scope.loginClick = function(type){
		if($scope.loginForm.$valid){
        
		$scope.loadingIcon = true;
		$http({
			method : "GET",
			url : "http://helpdesk.sitacorp.com:8080/registration/userLogin?username=" + $scope.usernameInput + "&password=" + $scope.passwordInput
		}).then(function mySuccess(response) {
			if(response.data.status === "success"){
				$scope.myVar = true;
				localStorage.setItem("logged", "true");
				console.log(response.data.data[0]);
				localStorage.setItem("name", response.data.data[0].firstname + " " + response.data.data[0].lastname);
				localStorage.setItem("email", response.data.data[0].email);
				localStorage.setItem("phone", response.data.data[0].phone);
				$scope.currentName = localStorage.getItem("name");
				$scope.currentEmail = localStorage.getItem("email");
				$scope.currentPhone = localStorage.getItem("phone");
				$scope.booleanVal = false;
				document.querySelector(".buscar-caja").style.left="40%";
				window.setTimeout(function(){
					$scope.getTrans();
					$scope.loadingIcon = false; 
					$scope.$apply()
				}, 1000);
			}else{
				alert("Failed to log in, please try again");
				$scope.loadingIcon = false; 
			}
		});	
		}else{
			alert("not valid");
		}
	}
	function createTable(data){
		var headerdata = [{
			field: 'paymentno',
			title: 'paymentno',
			align: 'left',
			valign: 'top',
			sortable: true,
			formatter:mobileFormat
		}, {
			field: 'totalamount',
			title: 'totalamount',
			align: 'left',
			valign: 'top',
			sortable: true
		}, {
			field: 'date',
			title: 'date',
			align: 'left',
			valign: 'top',
			sortable: true
		}, {
			field: 'paymentamount',
			title: 'paymentamount',
			align: 'left',
			valign: 'top',
			sortable: true
		}, {
			field: 'marchant',
			title: 'marchant',
			align: 'left',
			valign: 'top',
			sortable: true
		}]
		var tableOptions = {
			data: data,
			columns:headerdata,
			rowStyle: function (row, index) {
				return { classes: 'none' };
			},
			cache: false,
			striped: true,
			pagination: true,
			pageSize: 5,
			pageList: "[5, 10, 25, 50, 100, ALL]",
			search: true,
			flat:true,
			showColumns: true,
			showRefresh: false,
			minimumCountColumns: 2,
			clickToSelect: false,
			showToggle: true,
			maintainSelected: true,
			showPaginationSwitch: true,
			mobileResponsive:true,
			smartDisplay:true
		};
		$("#myTab").bootstrapTable(tableOptions);
		
		function mobileFormat(input,val) {
			return '<p>'+input+'</p>'	
					+'<div class="payment-info">'
					+'		<a class="payment-title">$ '+val.paymentamount
					+'          <span class="label label-warning pull-right">'+val.date+'</span>'
					+'		</a>'
					+'	    <span class="payment-description">'+val.marchant
					+'		</span>'
					+'</div>'		
		}
	}
	$scope.getTrans = function(){
		$http({
			method : "GET",
			url : "http://helpdesk.sitacorp.com:8080/registration/getpayment"
		}).then(function mySuccess(response) {
			if(response.data.status === "success"){
				fulldata = response.data.data;
				localStorage.setItem("balance", fulldata[fulldata.length-1].totalamount);
				$scope.currrentBalance = localStorage.getItem("balance");
				createTable(fulldata);
			}else{
				console.log("failed")
			}
		});
	}
	

	var checkbox = document.querySelector("#nightMode_Check");

	checkbox.addEventListener( 'change', function() {
		var body = document.getElementsByTagName("BODY")[0];
		if(this.checked) {
			body.style.setProperty("--background-color", "#222");
			body.style.setProperty("--text-color", "#888");
		} else {
			body.style.setProperty("--background-color", "white");
			body.style.setProperty("--text-color", "black");
		}
	})

});
