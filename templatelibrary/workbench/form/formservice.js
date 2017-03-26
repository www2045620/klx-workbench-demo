var app = angular.module('Module.myForm', ['daterangepicker','datatime.directive']);
/*日期范围插件需要依赖daterangepicker，及对应文件asserts/js/plugin/daterangepicker/moment.min.js,asserts/js/plugin/daterangepicker/daterangepicker.js,asserts/js/plugin/daterangepicker/angular-daterangepicker.js,asserts/css/plugins/daterangepicker/daterangepicker-bs3.css
 *使用<input date-range-picker class="form-control date-picker" type="text"  ng-model="datePicker.date"/>标签，datePicker.date将会取出时间
 * */
/*单个日期插件需要依赖datatime.directive，及对应文件asserts/js/plugin/daterangepicker/moment.min.js,asserts/js/plugin/timepicker/bootstrap-datetimepicker.fr.js,asserts/js/plugin/timepicker/bootstrap-datetimepicker.min.js,asserts/js/plugin/timepicker/datatime.directive.js,asserts/css/plugins/timepicker/bootstrap-datetimepicker.min.css
 *使用<div ng-model='timepickerTest' ng-time class="input-group date form_datetime col-md-1" data-date="2015-09-16T05:25:07Z" data-date-format="dd MM yyyy - HH:ii p" data-link-field="dtp_input1">
 *		<input ng-model="test" class="form-control" size="16" type="text" value="" readonly>
 *		<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
 *		<span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
 *	</div>
 * */
app.factory('formservice',function($http) {
	var service = {};
		
	return service;
});
