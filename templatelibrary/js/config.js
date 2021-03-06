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
										.load([{
											name : 'Module.uploading',
											files : [
													'./workbench/uploading/uploadingservice.js',
													'./workbench/uploading/uploadingctrl.js',
													'../asserts/js/plugin/fileupload/ng-file-upload-shim.min.js',
													'../asserts/js/plugin/fileupload/ng-file-upload.min.js'
													],
											serie : true
										}
										]);
							}
						}
			})
			.state('frontendtemplate.check',{
				url: "check/:data",
				templateUrl: "workbench/check/list.html",
				data: { pageTitle:''},
				controller: "checkctrl",
				resolve: {
				   loadPlugin: function ($ocLazyLoad) {
				       return $ocLazyLoad.load([
				          	{
							   name:'Module.check', 
							   files: [
							   'workbench/check/checkservice.js','workbench/check/checkctrl.js','workbench/check/check.css',
							   '../asserts/js/plugin/daterangepicker/moment.min.js',
							   '../asserts/js/plugin/daterangepicker/daterangepicker.js',
							   '../asserts/js/plugin/daterangepicker/angular-daterangepicker.js',
							   '../asserts/css/plugins/daterangepicker/daterangepicker-bs3.css',
							   '../asserts/js/plugin/updataValueD/updataValueD.js'
							   ],
							   serie: true 
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
			})
			.state('frontendtemplate.model', {
				url: "model/:data",
				templateUrl: "./workbench/model/list.html",
				data: { pageTitle:''},
				controller: "modelctrl",
				resolve: {
				   loadPlugin: function ($ocLazyLoad) {
				       return $ocLazyLoad.load([
				          	{ 
							   name:'Module.model', 
							   files: ['./workbench/model/modelservice.js','./workbench/model/modelctrl.js'], 
							   serie: true 
							}
				
				       ]);
				   }
				}
			})
			.state('frontendtemplate.basiciinformation', {
				url: "basiciinformation/:data",
				templateUrl: "./workbench/basiciinformation/list.html",
				data: { pageTitle:''},
				controller: "basiciinformationctrl",
				resolve: {
				   loadPlugin: function ($ocLazyLoad) {
				       return $ocLazyLoad.load([
				          	{ 
							   name:'Module.basiciinformation', 
							   files: ['../asserts/js/plugin/chosen/chosen.jquery.min.js',
							   		   '../asserts/css/plugins/chosen/chosen.css',
							   		   '../asserts/js/plugin/chosen/angular-chosen.js',
							   		   './workbench/basiciinformation/basiciinformationservice.js',
							   		   './workbench/basiciinformation/basiciinformationctrl.js',
							   		   '../asserts/js/plugin/fileupload/ng-file-upload-shim.min.js',
							   		   '../asserts/js/plugin/fileupload/ng-file-upload.min.js'
							   		   ],
							   serie: true 
							}
				
				       ]);
				   }
				}
			})
			.state('frontendtemplate.signin', {
				url: "signin/:data",
				templateUrl: "./workbench/signin/list.html",
				data: { pageTitle:''},
				controller: "signinctrl",
				resolve: {
				   loadPlugin: function ($ocLazyLoad) {
				       return $ocLazyLoad.load([
				          	{ 
							   name:'Module.signin', 
							   files: [
							   		   './workbench/signin/signinservice.js',
							   		   './workbench/signin/signinctrl.js'
							   		   ],
							   serie: true 
							}
				
				       ]);
				   }
				}
			})
			

}
angular.module('klxTemplate').config(config).run(function($rootScope, $state) {
	$rootScope.$state = $state;
});
