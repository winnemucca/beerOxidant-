(function() {
	'use strict';

	angular
		.module('beerApp.features.home')
		.controller('HomeController', HomeController);

		function HomeController() {
			console.log('home');
			var vm = this;
		}

})();