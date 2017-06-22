angular.module('user_app',[]);

angular.module('user_app').component('userList',{
	template:
		'<table class="table table-bordered table-hover">' +
		
			'<tr>' +
			'<th> Employee Name </th>'+
			'<th> Employee id </th>'+
			'<th> Employee DOB </th>'+
			'<th> Employee AGE </th>'+
			'<th> Employee Designation </th>'+
			
			'<tr ng-repeat="user in $ctrl.users">' +		
			'<td> {{ user.name}} </td>' +
			'<td> {{ user.id}} </td>' +
			'<td> {{ user.DOB}} </td>' +
			'<td> {{ user.AGE}} </td>' +
			'<td> {{ user.Designation}} </td>' +
			
		'</table>',
		
	controller : function userListcontroller() {
		this.users = [
			{name :"User1", id:"0001", AGE:"36", DOB:"01-01-1980", Designation:"JAVA DEVELOPER"},
			{name :"User2", id:"0002", AGE:"35", DOB:"01-05-1980", Designation:"DOT NET DEVELOPER"},
			{name :"User3", id:"0003", AGE:"36", DOB:"01-08-1980", Designation:"UI DEVELOPER"},
			{name :"User4", id:"0004", AGE:"36", DOB:"08-01-1980", Designation:"FRONT END DEVELOPER"},
			{name :"User5", id:"0005", AGE:"36", DOB:"01-01-1980", Designation:"JAVA DEVELOPER"},
			{name :"User6", id:"0006", AGE:"36", DOB:"01-01-1980", Designation:"JAVA DEVELOPER"},
			{name :"User7", id:"0007", AGE:"36", DOB:"06-01-1980", Designation:"JAVA DEVELOPER"},
			{name :"User8", id:"0008", AGE:"36", DOB:"01-01-1980", Designation:"JAVA DEVELOPER"},
			{name :"User9", id:"0009", AGE:"36", DOB:"01-01-1980", Designation:"JAVA DEVELOPER"},
			{name :"User10", id:"00010", AGE:"36", DOB:"09-01-1980", Designation:"JAVA DEVELOPER"}			
		
		];		
		
	}
});