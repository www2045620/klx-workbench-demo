app.controller('sortablectrl',function($scope,sortableservice) {
$scope.data={
	items:[{attachid:"4.1",attachOrder:"1"}, {attachid:"4.2",attachOrder:"1"}, {attachid:"4.3",attachOrder:"1"}, {attachid:"4.4",attachOrder:"1"}, {attachid:"4.5",attachOrder:"1"}, {attachid:"4.6",attachOrder:"1"}, {attachid:"4.7",attachOrder:"1"}]
}
$scope.savedata=function(){
	angular.forEach($scope.data.items,function(data,index,array){
		$scope.data.items[index].attachOrder=index;
	})
}
$scope.photosArray=[{url:"./workbench/sortable/img/1.jpg"},{url:"./workbench/sortable/img/555.jpg"},{url:"./workbench/sortable/img/666.jpg"}]
});
