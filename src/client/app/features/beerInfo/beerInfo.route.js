(function() {
	'use strict';

	angular
		.module('beerApp.features.beerInfo')
		.config(config);

		function config($stateProvider) {
			
			$stateProvider
				.state('beerInfo', {
					url:'/beerInfo',
					templateUrl: './app/features/beerInfo/beerInfo.html',
					controller: 'beerController',
					controllerAs: 'vm'
				})
		} 
})();

