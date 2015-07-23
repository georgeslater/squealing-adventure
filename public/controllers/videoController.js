angular.module('video', [])
.config(function($sceDelegateProvider, $sceProvider) {
 $sceProvider.enabled(false) })
.controller('VideoController', function($scope, $http){

	$scope.title = 'Mr. title';
	$scope.wideos = new Array();

	$http.get('/wideos').success(function(data){

		for(var i = 0; i < data.items.length; i++){
			data.items[i].url = "http://youtube.com/embed/"+data.items[i].id.videoId;
			$scope.wideos.push(data.items[i]);
		}

		console.log($scope.wideos);
	});

});