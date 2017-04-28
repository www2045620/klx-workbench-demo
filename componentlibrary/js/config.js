/**
 * INSPINIA - Responsive Admin Theme
 * 
 * Inspinia theme use AngularUI Router to manage routing and views Each view are
 * defined as state. Initial there are written state for all view in theme.
 * 
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider,
		IdleProvider, KeepaliveProvider) {

	// Configure Idle settings
	IdleProvider.idle(5); // in seconds
	IdleProvider.timeout(120); // in seconds

	$urlRouterProvider.otherwise("/index/minor");

	$ocLazyLoadProvider.config({
		// Set to true if you want to see what and when is dynamically loaded
		debug : false
	});

	$stateProvider
			.state('index', {
				abstract : true,
				url : "/index",
				templateUrl : "views/common/content.html",
			})
			.state('index.minor', {
				url : "/minor",
				templateUrl : "views/minor.html"
			})
			.state('dateComponent', {
				abstract : true,
				url : "/dateComponent",
				templateUrl : "views/common/content.html",
			})
			.state(
					'dateComponent.datatime',
					{
						url : "datatime/:data",
						templateUrl : "workbench/datatime/list.html",
						data : {
							pageTitle : ''
						},
						controller : "datatimectrl",
						resolve : {
							loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([{
											name : 'Module.datatime',
											files : [
													'workbench/datatime/datatimeservice.js',
													'workbench/datatime/datatimectrl.js',
													'../asserts/js/plugin/daterangepicker/moment.min.js',
													'../asserts/js/plugin/daterangepicker/daterangepicker.js',
													'../asserts/js/plugin/daterangepicker/angular-daterangepicker.js',
													'../asserts/css/plugins/daterangepicker/daterangepicker-bs3.css',
													'../asserts/js/plugin/timepicker/bootstrap-datetimepicker.fr.js',
													'../asserts/js/plugin/timepicker/bootstrap-datetimepicker.min.js',
													'../asserts/js/plugin/timepicker/datatime.directive.js',
													'../asserts/css/plugins/timepicker/bootstrap-datetimepicker.min.css' ],
											serie : true
										}

										]);
							}
						}
					})
			.state('dateComponent.daterangepicker',{
				url : 'daterangepicker/:data',
				templateUrl : "workbench/daterangepicker/list.html",
						data : {
							pageTitle : ''
						},
						controller : "daterangepickerctrl",
						resolve : {
							loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.daterangepicker',
											files : [
													'./workbench/daterangepicker/daterangepickerservice.js',
													'./workbench/daterangepicker/daterangepickerctrl.js',
													'../asserts/js/plugin/daterangepicker/moment.min.js',
													'../asserts/js/plugin/daterangepicker/daterangepicker.js',
													'../asserts/js/plugin/daterangepicker/angular-daterangepicker.js',
													'../asserts/css/plugins/daterangepicker/daterangepicker-bs3.css'
													],
											serie : true
										}

										]);
							}
						}
			})
			.state('treeComponent', {
				abstract : true,
				url : "/treeComponent",
				templateUrl : "views/common/content.html",
			})
			.state('treeComponent.tree',{
				url : 'tree/:data',
				templateUrl : "workbench/tree/list.html",
						data : {
							pageTitle : ''
						},
						controller : "treectrl",
						resolve : {
							loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
									.load([{
										name : 'Module.tree',
										files : [
												'./workbench/tree/treeservice.js',
												'./workbench/tree/treectrl.js',
												'../asserts/css/plugins/angulartreetable/tree-control-attribute.css',
												'../asserts/css/plugins/angulartreetable/tree-control.css',
												'../asserts/js/plugin/angulartreetable/angular-tree-control.js'
												],
										serie : true
									}]);
							}
						}
			})
			.state('treeComponent.selectTree',{
				url:'selectTree/:data',
				templateUrl : "workbench/selectTree/list.html",
				data : {pageTitle:''},
				controller:'selectTreectrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
							return $ocLazyLoad
									.load([ {
										name : 'Module.selectTree',
										files : [
												'./workbench/selectTree/selectTreeservice.js',
												'./workbench/selectTree/selectTreectrl.js',
												'../asserts/css/plugins/angulartreetable/tree-control-attribute.css',
												'../asserts/css/plugins/angulartreetable/tree-control.css',
												'../asserts/js/plugin/angulartreetable/angular-tree-control.js',
												'../asserts/js/plugin/selectTree/select.js'
												],
										serie : true
									}]);
							}
				}
			})
			.state('uploading', {
	            url: "/uploading",
	            templateUrl: "views/common/content.html",
	            data: { pageTitle: '' },
	            resolve: {
	                loadPlugin: function ($ocLazyLoad) {
	                    return $ocLazyLoad.load([
	                        {
	                            files: []
	                        }
	                    ]);
	                }
	            }
	        })
			.state('uploading.fileuploade', {
	            url: "/fileuploade/:data",
	            templateUrl: "workbench/fileuploade/list.html",
	            data: { pageTitle: '' },
	            controller:'fileuploadectrl',
	            resolve: {
	                loadPlugin: function ($ocLazyLoad) {
	                    return $ocLazyLoad
	                    .load([{
	                        	name : 'Module.fileuploade',
	                            files: ['./workbench/fileuploade/fileuploadeservice.js',
	                            		'./workbench/fileuploade/fileuploadectrl.js',
										'../asserts/js/plugin/fileupload/ng-file-upload-shim.min.js',
										'../asserts/js/plugin/fileupload/ng-file-upload.min.js'
									   ]
	                        }
	                    ]);
	                }
	            }
	        })
			.state('frontendtemplate.treegrid',{
				url:'treegrid',
				templateUrl : "workbench/treegrid/list.html",
				data : {pageTitle:''},
				controller:'treegridctrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.treegrid',
											files : [
													'./workbench/treegrid/treegridservice.js',
													'./workbench/treegrid/treegridctrl.js',
													'../asserts/js/plugin/treegrid/tree-grid-directive.js',
													'../asserts/css/plugins/treegrid/treeGrid.css'],
											serie : true
										}

										]);
							}
				}
			})
			.state('editor', {
	            url: "/editor",
	            templateUrl: "views/common/content.html",
	            data: { pageTitle: '' },
	            resolve: {
	                loadPlugin: function ($ocLazyLoad) {
	                    return $ocLazyLoad.load([
	                        {
	                            files: []
	                        }
	                    ]);
	                }
	            }
	        })
			.state('editor.summernote',{
				url:'editor',
				templateUrl : "workbench/summernote/list.html",
				data : {pageTitle:''},
				controller:'summernotectrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
									.load([ {
										name : 'Module.summernote',
										files : [
												'./workbench/summernote/summernoteservice.js',
												'./workbench/summernote/summernotectrl.js',
												'../asserts/css/plugins/textedit/summernote.css',
												'../asserts/css/plugins/textedit/summernote-bs3.css',
												'../asserts/js/plugin/textedit/summernote.min.js',
												'../asserts/js/plugin/textedit/angular-summernote.min.js'],
										serie : true
									}
									]);
							}
				}
			})
			.state('classify', {
	            url: "/classify",
	            templateUrl: "views/common/content.html",
	            data: { pageTitle: '' },
	            resolve: {
	                loadPlugin: function ($ocLazyLoad) {
	                    return $ocLazyLoad.load([
	                        {
	                            files: []
	                        }
	                    ]);
	                }
	            }
	        })
			.state('classify.threeLevel',{
				url:'threeLevel',
				templateUrl : "workbench/threeLevel/list.html",
				data : {pageTitle:''},
				controller:'threeLevelctrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.threeLevel',
											files : [
													'./workbench/threeLevel/threeLevelservice.js',
													'./workbench/threeLevel/threeLevelctrl.js'
													],
											serie : true
										}]);
							}
				}
			})
			.state('select', {
	            url: "/select",
	            templateUrl: "views/common/content.html",
	            data: { pageTitle: '' },
	            resolve: {
	                loadPlugin: function ($ocLazyLoad) {
	                    return $ocLazyLoad.load([
	                        {
	                            files: []
	                        }
	                    ]);
	                }
	            }
	        })
			.state('select.uiselect',{
				url:'uiselect',
				templateUrl : "workbench/uiselect/list.html",
				data : {pageTitle:''},
				controller:'uiselectctrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
						return $ocLazyLoad
							.load([ {
								name : 'Module.uiselect',
								files : [
										'./workbench/uiselect/uiselectservice.js',
										'./workbench/uiselect/uiselectctrl.js',
										'../asserts/js/plugin/select/select.min.js',
										'../asserts/js/plugin/select/lodash.min.js',
										'../asserts/js/plugin/select/myselect.min.js',
										'../asserts/css/plugins/select/select.min.css',
										'../asserts/css/plugins/select/myselect.css'
										],
								serie : true
							}]);
					}
				}
			})
			.state('tab', {
	            url: "/tab",
	            templateUrl: "views/common/content.html",
	            data: { pageTitle: '' },
	            resolve: {
	                loadPlugin: function ($ocLazyLoad) {
	                    return $ocLazyLoad.load([
	                        {
	                            files: []
	                        }
	                    ]);
	                }
	            }
	        })
			.state('tab.uitab',{
				url:'uitab',
				templateUrl : "workbench/uitab/list.html",
				data : {pageTitle:''},
				controller:'uitabctrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
						return $ocLazyLoad
							.load([ {
								name : 'Module.uitab',
								files : [
										'./workbench/uitab/uitabservice.js',
										'./workbench/uitab/uitabctrl.js',
										'../asserts/js/plugin/ngtab/tabs.js'
										],
								serie : true
							}]);
					}
				}
			})
			.state('checkbox', {
	            url: "/checkbox",
	            templateUrl: "views/common/content.html",
	            data: { pageTitle: '' },
	            resolve: {
	                loadPlugin: function ($ocLazyLoad) {
	                    return $ocLazyLoad.load([
	                        {
	                            files: []
	                        }
	                    ]);
	                }
	            }
	        })
			.state('checkbox.allchecked',{
				url:'/allchecked',
				templateUrl : "workbench/allchecked/list.html",
				data : {pageTitle:''},
				controller:'allcheckedctrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
						return $ocLazyLoad
							.load([{
								name : 'Module.allchecked',
								files : [
										'./workbench/allchecked/allcheckedservice.js',
										'./workbench/allchecked/allcheckedctrl.js'
										],
								serie : true
							}]);
					}
				}
			})
			
			.state('frontendtemplate.sortable',{
				url:'sortable',
				templateUrl : "workbench/sortable/list.html",
				data : {pageTitle:''},
				controller:'sortablectrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([{
											name : 'Module.sortable',
											files : [
													'./workbench/sortable/sortableservice.js',
													'./workbench/sortable/sortablectrl.js',
													'../asserts/js/plugin/sortable/angular-sortable-view.min.js'],
											serie : true
										}]);
							}
				}
			})
			.state('frontendtemplate.treemenu',{
				url:'treemenu',
				templateUrl : "workbench/treemenu/list.html",
				data : {pageTitle:''},
				controller:'',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.treemenu',
											files : [
													'../asserts/css/plugins/angulartree/tree-control-attribute.css',
													'../asserts/css/plugins/angulartree/tree-control.css',
													'../asserts/css/plugins/angulartree/index.css',
													'../asserts/js/plugin/angulartree/angular-tree-control.js',
													'../asserts/js/plugin/angulartree/index.js'],
											serie : true
										}

										]);
							}
				}
			})
			.state('frontendtemplate.uitab',{
				url:'uitab',
				templateUrl : "workbench/uitab/list.html",
				data : {pageTitle:''},
				controller:'uitabctrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.uitab',
											files : [
													'./workbench/uitab/uitabservice.js',
													'./workbench/uitab/uitabctrl.js',
													'../asserts/js/plugin/ngtab/tabs.js'],
											serie : true
										}

										]);
							}
				}
			})
			.state('frontendtemplate.uitabtasty',{
				url:'uitabtasty',
				templateUrl : "workbench/uitabtasty/list.html",
				data : {pageTitle:''},
				controller:'uitabtastyctrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.uitabtasty',
											files : [
													'./workbench/uitabtasty/uitabtastyService.js',
													'./workbench/uitabtasty/uitabtastyctrl.js',
													'../asserts/js/plugin/gtilesTasty/gtiles-tasty.js'],
											serie : true
										}

										]);
							}
				}
			})
			.state('frontendtemplate.treemenutable',{
				url:'treemenutable',
				templateUrl : "workbench/treemenutable/list.html",
				data : {pageTitle:''},
				controller:'treemenutablectrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.treemenutable',
											files : [
													'./workbench/treemenutable/treemenutableservice.js',
													'./workbench/treemenutable/treemenutablectrl.js',
													'../asserts/css/plugins/angulartreetable/tree-control-attribute.css',
													'../asserts/css/plugins/angulartreetable/tree-control.css',
													'../asserts/js/plugin/angulartreetable/angular-tree-control.js'],
											serie : true
										}

										]);
							}
				}
			});

}
angular.module('klxComponent').config(config).run(function($rootScope, $state) {
	$rootScope.$state = $state;
});
