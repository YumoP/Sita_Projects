myapp.controller('tableController', function($scope,$window){
	var mystudents = [
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
	var globalIndex;
	$window.deleteEvent = {
		'click .delete': function(e, value, row, index){
			mystudents.splice(index, 1);
			$('#mytab').bootstrapTable('refreshOptions', tableOptions);
		}
	};
	$window.editHandler = {
		'click .edit': function(e, value, row, index){
		  	$("#firstname").val(mystudents[index].firstName);
		  	$("#lastname").val(mystudents[index].lastName);
		  	$("#phone").val(mystudents[index].phone);
		  	$("#email").val(mystudents[index].email);
		  	$("#status").val(mystudents[index].status);
		  	$("#DOB").val(mystudents[index].DOB);
		  	$("#salary").val(mystudents[index].salary);
		  	$("#zip").val(mystudents[index].zip);
		  	globalIndex = index;
		}
	};
	var tableOptions = {
		data:mystudents,
		columns: [
			{
				"field": "firstName",
				"title": "Name",
				formatter: nameFormat
			},
			{
				"field": "phone",
				"title": "Phone"
			},
			{
				"field": "email",
				"title": "E-mail"
			},
			{
				"field": "status",
				"title": "Status",
				formatter: statusFormat
			},
			{
				"field": "DOB",
				"title": "Date Of Birth"
			},
			{
				"field": "salary",
				"title": "Salary"
			},
			{
				"field": "zip",
				"title": "Zipcode"
			},
			{
				"field": "address",
				"title": "address"
			},
			{
				"field": "Edit",
				"title": "Edit",
				events: editHandler,
				formatter: editFormat
			},
			{
				"field": "Delete",
				"title": "Delete",
				events: deleteEvent,
				formatter: deleteFormat	
			}
		],
		pagination:true,
		pageSize:5,
		search:true
	}
	$("#mytab").bootstrapTable(tableOptions);
	function nameFormat(input, value){
		return value.firstName+" "+value.lastName;
	}
	function editFormat(input, value){
		return "<a class='btn edit btn-danger'>Edit</a>";
	}
	function deleteFormat(input, value){
		return "<a class='btn delete btn-info'>Delete</a>";
	}
	function statusFormat(input, value){
		return input === "active" ? "<i class=\"fas fa-circle\" style=\"color: red\"></a>" : "<i class=\"fas fa-circle\" style=\"color: green\"></a>"
	}
	// function addressFormat(input, value){
	// 	if(input !== ''){
	// 		var htmlString = new String();
	// 		var parsed = $.parseHTML(input);
	// 		for(let i = 0; i < parsed.length; i++){
	// 			htmlString += parsed[i].outerHTML;
	// 		}
	// 		console.log(input === htmlString);
	// 		return htmlString;
	// 	}
	// }
	$('#submitBtn').click(function(){
		mystudents[globalIndex].firstName = $("#firstname").val();
	  	mystudents[globalIndex].lastName = $("#lastname").val();
	  	mystudents[globalIndex].phone = $("#phone").val();
	  	mystudents[globalIndex].email = $("#email").val();
	  	mystudents[globalIndex].status = $("#status").val();
	  	mystudents[globalIndex].DOB = $("#DOB").val();
	  	mystudents[globalIndex].salary = $("#salary").val();
	  	mystudents[globalIndex].zip = $("#zip").val();;
	  	mystudents[globalIndex].address=$('.note-editable')[0].innerHTML;
		$('#mytab').bootstrapTable('refreshOptions', tableOptions);
	});
	$('#submitBtn').click(function(){
		mystudents.push(
			{
				"firstName":$("#firstname").val(), "lastName":$("#lastname").val(), 
				"phone":$("#phone").val(),"email":$("#email").val(), 
				"status":$("#status").val(), "DOB":$("#DOB").val(),
			 	"salary": $("#salary").val(), "zip": $("#zip").val(), 
			 	"address":$('.note-editable')[0].innerHTML
			}
		);
		$('#mytab').bootstrapTable('refreshOptions', tableOptions);
	});
  	$('#summernote').summernote({height: 300});
});
myapp.directive('myDir', function(){
	return {
		templateUrl: "Pages/Login/loginView.html"
	}
});