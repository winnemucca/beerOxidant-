(function() {
	'use strict';

	angular
		.module('beerApp.features.beerInfo')
		.controller('BeerController', BeerController);

		function BeerController($stateParams, beerLocker) {
			console.log('beerInfo', beerLocker);
			var vm = this;
			vm.id = beerLocker.id;
			vm.BeerStyle = beerLocker.BeerStyle;
			vm.IBU = beerLocker.IBU;

		}

})();