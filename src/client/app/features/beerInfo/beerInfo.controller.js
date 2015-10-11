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

			vm.animationsEnabled = true;
			// vm.open = function () {
			// 	var modalInstance = $modal.open({
			// 		animation: vm.animationsEnabled,
			// 		templateUrl: 'app/components/modal.html',
			// 		// controller: 'ModalInstanceCtrl',
			// 		// controllerAs: 'modal',
			// 		size: 'lg',
			// 		resolve: {
			// 			title: function() {
			// 				return 'training Info';
			// 			}
			// 		}			
			// 	});
			// 	modalInstance.result.then(function(selectedItem) {
			// 		console.log(selectedItem);
			// 		vm.selectedItem = selectedItem;
			// 	}, function() {
			// 		$log.info('modal dismissed at: ' + new Date());
			// 	});
			// };
			
		}

})();


