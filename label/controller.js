
app.controller('myCtrl', ['$scope', 'myDataService', function($scope, myDataService) {
  $scope.title = "LABEL - Thailand Mobile Topup Provider";
	$scope.tax = 0.07;

	myDataService.loadAsync().then(function(result){
		$scope.data = result;
		console.log($scope.data);
	}, function(error){});
}]);