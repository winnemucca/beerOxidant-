(function() {
	'use strict';

	angular
		.module('beerApp.features.beerInfo')
		.config(config);

		function config($stateProvider) {
			
			$stateProvider
				.state('beerInfo:beerId', {
					url:'/beerInfo',
					templateUrl: './app/features/beerInfo/beerInfo.html',
					controller: 'BeerController',
					controllerAs: 'vm',
					beerInfo: beerInfo
				})
		} 

		function beerInfo( beerListFactory, $stateParams) {
			return beerListFactory.getBeer($stateParams.beerId);
		}
})();

