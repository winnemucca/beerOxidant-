(function() {
	'use strict';

	angular
		.module('beerApp.features.beerInfo')
		.controller('HomeController', BeerController);

		function BeerController() {
			console.log('beer page');
			var vm = this;
		}

})();