angular.module('my-button',['ngAnimate'])
.run(['$rootScope',function($rootScope){
	$rootScope.fontSize = 'normal';
}]);
