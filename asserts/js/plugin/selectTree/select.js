var app = angular.module('selectTree',['treeControl']);
app.directive("selectTree",function($timeout){
	return{
		restrict:"AE",
		scope:{
			treeData:"=",
			selectTreeOptions:"=",
			searchCriteria:"=",
			selectedTreeNode:"=",
			showDirection:"=",
			showLable:"@",
			onSelect:"&"
		},
		replace:true,
		link:function(scope,element,attr){
			var node="";
			scope.selectedTreeNode={};
			scope.showLable?"":scope.showLable='title';
			scope.lable=scope.selectedTreeNode[scope.showLable];
			scope.showSelected=function(node){
				newnode = jQuery.extend(true, {}, node);
				scope.selectedTreeNode=newnode;
				scope.showSelectedViewStart=false;
				$timeout(function(){
					scope.onSelect(node);			
				},1)
			}
			scope.showSelectedView=function(){
			 	scope.showSelectedViewStart=true;
			}
			scope.nodeToggle=function(){
				$timeout(function(){
					element.find("input").innerWidth(element.find(".selTree").innerWidth());			
				},10);
			}
			element.click(function(event){
				event.stopPropagation();
			});
			$(document).click(function(){
				$timeout(function(){
					scope.showSelectedViewStart=false;
				},1);
			});
		},
		template:	'<div class="form-group" style="position: relative;">'
						+'<input ng-model="selectedTreeNode[showLable]" ng-focus="showSelectedView()" class="form-control" size="16" type="text" value="" style="transition: all 0.5s;">'
						+'<div ng-show="showSelectedViewStart" ng-class="{false:\'bottom\',true:\'top\'}[showDirection==\'bottom\']" class="selTree" style="transition: all 0.5s;">'
							+'<treecontrol class="tree-light" tree-model="treeData" options="selectTreeOptions" on-node-toggle="nodeToggle()" on-selection="showSelected(node)" expanded-nodes="dataForTheTreeSel">'
								+'<span class="{{node.id}}">{{node[showLable]}}</span>'
							+'</treecontrol>'
						+'</div>'
					+'</div>'
	}
})