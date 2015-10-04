(function() {
	'use strict';

	angular
		.module('beerApp.features.beerStyle')
		.controller('beerStyleController', beerStyleController);

		function beerStyleController() {
			console.log('beer list');
			var vm = this;
		}

})();