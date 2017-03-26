app.controller('uitabctrl', function($scope, uitabservice) {
	$scope.tabContrl = {
			"showBtn":true,
			"tabsHeaderSwitch":true
			
	};
	
	$scope.preTab = function(){
		console.log("上一步");
		$scope.tabContrl.preTab();
	}
	$scope.nextTab = function(){
		console.log("下一步");
		$scope.tabContrl.nextTab();
	}
});