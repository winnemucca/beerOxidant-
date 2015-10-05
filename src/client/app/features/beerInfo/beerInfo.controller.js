(function() {
	'use strict';

	angular
		.module('beerApp.features.beerInfo')
		.controller('BeerController', BeerController);

		function BeerController($stateParams, beerInfo) {
			console.log('beerInfo', beerInfo);
			console.log('beerInfo', $stateParams);

			var vm = this;
		}

})();