(function() {
	'use strict';

	angular
		.module('beerApp.features.beerFlow')
		.controller('BeerFlowController', BeerFlowController);

		function BeerFlowController() {
			console.log('home');
			var vm = this;
		}

})();