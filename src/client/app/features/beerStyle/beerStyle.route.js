(function() {
	'use strict';

	angular
		.module('beerApp.features.beerStyle')
		.config(config);

		function config($stateProvider) {
			

			$stateProvider
				.state('beerStyle', {
					url:'/beerStyle',
					templateUrl: './app/features/beerStyle/beerStyle.html',
					controller: 'beerStyleController',
					controllerAs: 'vm'
				})
		} 


})();