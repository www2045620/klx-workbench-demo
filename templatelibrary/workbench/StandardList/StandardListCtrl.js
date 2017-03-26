app.controller('StandardListCtrl', function($scope, StandardListService) {
	
	$scope.griddata=null;
	/* 控制摸态框显示 */
	$scope.openmodel = function() {
			$('#md-Modal').modal('show')
		}
		/* 定义日期控件初始属性 */
		// $scope.datePicker.date = {startDate: null, endDate: null};

	$scope.updisabled = false;
	$scope.uptext = '提交';
	
	$scope.up = function() {
		return StandardListService.uploadForm($scope.DemoUser, function callback(data) {
			$('#validation-Modal').modal('hide');
		});
	}
	$scope.dataGrid=function(params,paramsObj){
		//重置全选
		$scope.tableState.selectAll = false;
		$scope.ckListStr = '';
		return StandardListService.dataGrid(params,paramsObj);
	}
	
	
	/**
	 * 批量删除
	 */
	$scope.batchDel = function(){
		console.log($scope.ckListStr);
	}
	//全选及列表选择实现-------------------------------------------------------------------------------------------
	// 复选框选择数据字符串
	$scope.ckListStr = '';
	//列表状态对象
	$scope.tableState = {
			selectAll : false//是否全选
	};
	/**
	 * 复选框勾选事件
	 * 
	 * @param $row
	 *            选中行
	 */
	$scope.changeSelection = function($row){
		if($row.selected){
			$scope.ckListStr += $row.courseId + ",";
		}else{
			if($scope.tableState.selectAll){
				$scope.tableState.selectAll = false;
			}
			$scope.ckListStr = $scope.ckListStr.replace($row.courseId + ",","");
		}
	}
	/**
	 * 复选框全选
	 */
	$scope.changeSelectionAll=function($rows){
		if($scope.tableState.selectAll){
			angular.forEach($rows,function(data){
				data.selected = true;
				$scope.ckListStr += data.courseId + ",";
			});
		}else{
			angular.forEach($rows,function(data){
				data.selected = false;
			});
			$scope.ckListStr = "";
		}
	}
	//end--------------------------------------------------------------------------------------------
	$scope.tabalert = function() {
		alert("the value is --->"+$scope.tabmodel.classdate);
	}
	
	$scope.tabmodel =  {
		classdate:{startDate: new Date(1137075575000), endDate: new Date(1478563200000)}
	};
	$scope.init = {'sortBy' : 'status','sortOrder' : 'desc'}; // 排序
	$scope.getuserdata = function(params, paramsObj) {
		params+="&queryActiveState=1&queryUserName=";
		return StandardListService.findList(params, paramsObj);
	}
	$scope.getuserdatauitab = function(params, paramsObj) {
		params+="&queryActiveState=1&queryUserName=";
		return StandardListService.findList(params, paramsObj);
	}

	$scope.reloadUserdata=function(){}
	
	$scope.reloadUserdatauitab=function(){
	}
	
	$scope.usrdatasearch = function(){
		$scope.reloadUserdata();
	}
	
	$scope.usrdatasearchuitab = function(){
		$scope.reloadUserdatauitab();
	}
	
    $scope.selecteditmes = new Object();
    $scope.selecteditmes.id = [];
    $scope.selecteditmes.rows = [];
      
	$scope.dependencemodal = function (size) {
		  StandardListService.showuserdialog(size,$scope.selecteditmes).result.then(function (selectitems) {
			  debugger;
			  $scope.selecteditmes.id = selectitems.id;
			  $scope.selecteditmes.rows = selectitems.rows;
	      });
	 };
});