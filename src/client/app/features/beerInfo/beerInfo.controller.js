(function() {
	'use strict';

	angular
		.module('beerApp.features.beerInfo')
		.controller('BeerController', BeerController);
		// .controller('ModalInstanceCtrl', function(modalInstance) {

		// });

		function BeerController($stateParams, beerLocker, $modal, $log) {
			console.log('beerInfo', beerLocker);

			var vm = this;
			vm.id = beerLocker.id;
			vm.BeerStyle = beerLocker.BeerStyle;
			vm.IBU = beerLocker.IBU;

			vm.list = beerLocker.list.drinks;

			vm.greetingInfoClass="text-muted";

			var beerList = [];
			
		}

})();


