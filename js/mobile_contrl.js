	angular.module('mobile_app',[]);

angular.
	module('mobile_app').
		component('mobileList',{
			template:
			'<ul>' +
			'<li ng-repeat="mobile in $ctrl.mobiles">' +
			'<span> {{mobile.name}} </span>' +
			'<b> {{mobile.snippet}} </b>'  +
			'</li>' +
			'</ul>',
			controller: function mobileListcontroller(){
				
				this.mobiles = [
				{ name : "Samsung", snippet :"I am using J7"},
				{ name : "Samsung", snippet :"My previous S7262"},
				{ name : "Nokia", snippet :"My third mobile Music Experia"},
				{ name : "Nokia", snippet :"That is my second moile"},
				{ name : "Nokia", snippet :"My first mobile gifted by my brother"}
				];
			}
				
		});