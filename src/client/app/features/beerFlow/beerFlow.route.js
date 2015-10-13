(function() {
	'use strict';
	angular
		.module('beerApp.features.beerFlow')
		.config(config);

		function config($stateProvider, $urlRouterProvider) {
			// $urlRouterProvider.otherwise('/beerFlow');

			$stateProvider
				.state('beerFlow', {
					url:'/beerFlow',
					templateUrl: './app/features/beerFlow/beerFlow.html',
					controller: 'BeerFlowController',
					controllerAs: 'vm'
				})
		} 
})();