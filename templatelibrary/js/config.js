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
											name : 'Module.myForm',
											files : [
													'./workbench/StandardList/StandardListService.js',
													'./workbench/StandardList/StandardListCtrl.js'],
											serie : true
										}

										]);
							}
						}
			})
			.state('frontendtemplate.uploading',{
				url : 'StandardList/:data',
				templateUrl : "workbench/uploading/list.html",
						data : {
							pageTitle : ''
						},
						controller : "StandardListCtrl",
						resolve : {
							loadPlugin : function($ocLazyLoad) {
								return $ocLazyLoad
										.load([ {
											name : 'Module.myForm',
											files : [
													'./workbench/uploading/uploadingservice.js',
													'./workbench/uploading/uploadingctrl.js'],
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
