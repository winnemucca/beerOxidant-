(function() {
	'use strict';
	angular
		.module('beerApp.features.hopsCalculator')
		.config(config);

		function config($stateProvider, $urlRouterProvider) {
			// $urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('calculator', {
					url:'/calculator',
					templateUrl: './app/features/hopsCalculator/hopsCalculator.html',
					controller: 'HopsCalculator',
					controllerAs: 'vm'
				})
		} 
})();