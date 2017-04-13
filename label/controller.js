
app.controller('myCtrl', ['$scope', 'myDataService', function($scope, myDataService) {
  $scope.title = "LABEL Topup";
	$scope.tax = 0.07;

	// key := provider id
	// value := promotion_data
	$scope.data = myDataService.get();
}]);