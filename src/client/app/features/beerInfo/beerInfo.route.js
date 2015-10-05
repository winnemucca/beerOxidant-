(function() {
	'use strict';

	angular
		.module('beerApp.features.beerInfo')
		.config(config);

		function config($stateProvider) {
			
			$stateProvider
				.state('beerInfo', {
					url:'/beerInfo:beerId',
					templateUrl: './app/features/beerInfo/beerInfo.html',
					controller: 'BeerController',
					controllerAs: 'vm',
					resolve: {
						beerLocker: beerLocker
					}
				})
		} 

		function beerLocker( beerListFactory, $stateParams) {
			return beerListFactory.getBeer($stateParams.beerId);
		}
})();

