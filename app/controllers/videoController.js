angular.module('video', [])
.controller('VideoController', ['$scope', '$http', function($scope, $http){

	$scope.title = 'Mr. title';

	$scope.wideos = $http.get('/wideos');
}]);