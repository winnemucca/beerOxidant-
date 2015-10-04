(function() {
	'use strict';

	angular
		.module('beerApp.features.beerStyle')
		.controller('beerStyleController', beerStyleController);

		beerStyleController.$inject = ['beerListFactory'];

		function beerStyleController(beerListFactory) {
			console.log('beer list', beerListFactory.getBeerList());
			var vm = this;
			vm.beerList = [];

			activate();

			function activate() {
				return getBeerList().then(function() {
					console.log('hey hey hey');
				})
			}

			function getBeerList() {
				return beerListFactory.getBeerList().then(function(data) {
					console.log('data',data);
					vm.beerList = data;
					return vm.beerList;
				})
			}
		}

})();