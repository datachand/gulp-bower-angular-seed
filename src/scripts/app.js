(function () {

	'use strict';

	var app = angular.module('app', ['ngResource', 'ngSanitize', 'ui.router']);

	app.controller('HomeController', ['$scope', '$log', function($scope, $log) {
		$log.info('HomeController');
	}]);

});