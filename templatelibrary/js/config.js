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
			.state('frontendtemplate', {
				abstract : true,
				url : "/frontendtemplate",
				templateUrl : "views/common/content.html",
			})
			.state(
					'frontendtemplate.formValidation',
					{
						url : "formValidation/:data",
						templateUrl : "workbench/form/form.html",
						data : {
							pageTitle : ''
						},
						controller : "formValidationctrl",
						resolve : {
							loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.myForm',
											files : [
													'./workbench/form/formservice.js',
													'./workbench/form/formctrl.js',
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
			.state('frontendtemplate.StandardList',{
				url : 'StandardList/:data',
				templateUrl : "workbench/StandardList/list.html",
						data : {
							pageTitle : ''
						},
						controller : "StandardListCtrl",
						resolve : {
							loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.StandardList',
											files : [
													'./workbench/StandardList/StandardListService.js',
													'./workbench/StandardList/StandardListCtrl.js',
													'../asserts/js/plugin/daterangepicker/moment.min.js',
													'../asserts/js/plugin/daterangepicker/daterangepicker.js',
													'../asserts/js/plugin/daterangepicker/angular-daterangepicker.js',
													'../asserts/css/plugins/daterangepicker/daterangepicker-bs3.css',
													'../asserts/js/plugin/select/select.min.js',
													'../asserts/js/plugin/select/lodash.min.js',
													'../asserts/js/plugin/select/myselect.min.js',
													'../asserts/css/plugins/select/select.min.css',
													'../asserts/css/plugins/select/myselect.css',
													'../asserts/js/plugin/timepicker/bootstrap-datetimepicker.fr.js',
													'../asserts/js/plugin/timepicker/bootstrap-datetimepicker.min.js',
													'../asserts/js/plugin/timepicker/datatime.directive.js',
													'../asserts/css/plugins/timepicker/bootstrap-datetimepicker.min.css',
													'../asserts/css/plugins/angulartreetable/tree-control-attribute.css',
													'../asserts/css/plugins/angulartreetable/tree-control.css',
													'../asserts/js/plugin/angulartreetable/angular-tree-control.js',
													'../asserts/js/plugin/selectTree/select.js'],
											serie : true
										}

										]);
							}
						}
			})
			.state('frontendtemplate.uploading',{
				url : 'uploading/:data',
				templateUrl : "workbench/uploading/list.html",
						data : {
							pageTitle : ''
						},
						controller : "uploadingctrl",
						resolve : {
							loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.uploading',
											files : [
													'./workbench/uploading/uploadingservice.js',
													'./workbench/uploading/uploadingctrl.js',
													'../asserts/js/plugin/fileupload/ng-file-upload-shim.min.js',
													'../asserts/js/plugin/fileupload/ng-file-upload.min.js'],
											serie : true
										}

										]);
							}
						}
			})
			.state('frontendtemplate.uiselect',{
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
													'../asserts/css/plugins/select/myselect.css'],
											serie : true
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
			.state('frontendtemplate.textedit',{
				url:'textedit',
				templateUrl : "workbench/textedit/list.html",
				data : {pageTitle:''},
				controller:'texteditctrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.textedit',
											files : [
													'./workbench/textedit/texteditservice.js',
													'./workbench/textedit/texteditctrl.js',
													'../asserts/css/plugins/textedit/summernote.css',
													'../asserts/css/plugins/textedit/summernote-bs3.css',
													'../asserts/js/plugin/textedit/summernote.min.js',
													//'../asserts/js/plugin/textedit/summernote.js',
													'../asserts/js/plugin/textedit/angular-summernote.min.js'],
											serie : true
										}

										]);
							}
				}
			})
			.state('frontendtemplate.classify',{
				url:'classify',
				templateUrl : "workbench/classify/list.html",
				data : {pageTitle:''},
				controller:'classifyctrl',
				resolve : {
					loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.classify',
											files : [
													'./workbench/classify/classifyservice.js',
													'./workbench/classify/classifyctrl.js'],
											serie : true
										}

										]);
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
										.load([ {
											name : 'Module.sortable',
											files : [
													'./workbench/sortable/sortableservice.js',
													'./workbench/sortable/sortablectrl.js',
													'../asserts/js/plugin/sortable/angular-sortable-view.min.js'],
											serie : true
										}

										]);
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
angular.module('klxTemplate').config(config).run(function($rootScope, $state) {
	$rootScope.$state = $state;
});
