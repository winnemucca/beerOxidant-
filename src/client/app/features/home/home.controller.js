(function() {
	'use strict';

	angular
		.module('beerApp.features.hopsCalculator')
		.controller('HomeController', HomeController);

		function HomeController() {
			console.log('home');
			var vm = this;
		}

})();