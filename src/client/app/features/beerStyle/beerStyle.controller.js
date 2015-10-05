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
			vm.sortBy = 'id';
			vm.reverse = true;
			vm.doSort = doSort;
			vm.isMatchedAgainstSearch = isMatchedAgainstSearch;


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

			function isMatchedAgainstSearch(beer) {
					console.log('user',user);
				return vm.beerFilter == 0 || beer.id.indexOf(vm.beerFilter) >=0;
			}

			function doSort(propName) {
				console.log(propName);
				vm.sortBy=propName;
                vm.reverse=!vm.reverse
			}

			function sortNumbers(a,b) {
				return  a - b;
			}
		} // end of controller

})();