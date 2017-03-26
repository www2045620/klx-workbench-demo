app.controller('formValidationctrl',function($scope,formservice) {
	
	var currentDate = moment("2016-12-25 10:10:23","YYYY-MM-DD HH:mm:ss");
	$scope.dateRange = {"date1":{"startDate":currentDate,"endDate":currentDate},"date2":{"startDate":currentDate,"endDate":currentDate}};
	
	$scope.saveForm = function(){
		console.log($scope.standardForm);
		console.log($scope.dateRange);
		var start = $scope.dateRange.date1.startDate;
		var end = $scope.dateRange.date1.endDate;
		console.log(moment(start).format("YYYY-MM-DD HH:mm:ss"));
		console.log(moment(end).format("YYYY-MM-DD HH:mm:ss"));
	}
	
	$scope.formatDate = function(date,format){
		return moment(date).format(format);
	}
});
//app.filter("timerangefilter",function(){
//	return function(val){		
//		if(!val){
//		return;
//		}
//		console.log(val.startDate);
//		val.startDate=toString(val.startDate).replace(/T16/,"T24");
//		val.endDate=val.startDate.replace(/T15/,"T23");
//		return val;
//	}
//});
