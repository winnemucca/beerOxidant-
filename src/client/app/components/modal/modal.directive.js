(function() {
	'use strict';

	angular
		.module('app.components.modal')
		.directive('myModal', myModal);
		


		function myModal() {
			return {
				restrict: 'E',
				scope: {},
				template: "<button class='btn btn-danger' ng-click='vm.open()'>Beer </button>",
				controller: ModalController,
				controllerAs: 'vm',
				bindToController: true
			}
		}

		// ModalController.$inject = ['$modal'];
		function ModalController($modal, $log , $scope, beerListFactory, $stateParams) {
			var vm = this;

			vm.animationsEnabled = true;
			vm.open = open;

			function open() {
				var modalInstance = $modal.open({
					animation: vm.animationsEnabled,
					templateUrl: 'app/components/modal/modal.html',
					controller: ModalInstanceCtrl,
					controllerAs: 'vm',
					bindToController: true,
					size: 'lg'
					// resolve: {
					// 	title: function() {
					// 		return 'training Info';
					// 	}
					// }			
				});
				modalInstance.result.then(function(selectedItem) {
					$log.info('beer in modal',beerListFactory.getBeer($stateParams.beerId) );

					console.log("Confirmed: "+ selectedItem);
					$scope.selectedItem = selectedItem;
				}, function() {
					$log.info('modal dismissed at: ' + new Date());
				});
			};

			function ModalInstanceCtrl( $scope,$modalInstance) {

				var vm = this;
			    vm.ok = ok; 
			   	vm.cancel = cancel; 
			   	vm.newBeer = {};
			   	// vm.addBeer = function() {

			   	// }

			    function ok () {
	           		console.log('new beer', vm.newBeer);
	           		// console.log('IBU',$scope.IBU);
	           		console.log('clicked');
	               	$modalInstance.close();
	            };

	           	function cancel() {
	           		console.log('beer', vm.newBeer);

	           		console.log('clicked');
	               	$modalInstance.dismiss('cancel');
	           	};
			}
		}

	})(); // end of iffe statement function




// *************** worked out an alternative way with link*******************

// 	(function() {
// 	'use strict';

// 	angular
// 		.module('app.components.modal')
// 		.directive('myModal', function($log, $modal) {
//            return {
//                restrict: 'E',
//                // require: 'ngModel',
//                template : "<button class='btn btn-danger' ng-click='open()'>Beer </button>",
//                // replace: true,
//                transclude: false,
//                link: function ($scope, $rootScope, element, attrs) {

//                    	var ModalInstanceCtrl = function ($scope, $modalInstance) {
 
//                        	$scope.beer = {beerName:""}
//                        	console.log($scope.beer);
                   

//                        	$scope.ok = function () {
//                        		console.log('beer', $scope.beer);
//                        		// console.log('IBU',$scope.IBU);

//                        		console.log('clicked');
//                            // $modalInstance.close($scope.selected.item);
//                            $modalInstance.close();
//                        	};

//                        	$scope.cancel = function () {
//                        		console.log('clicked');
//                            $modalInstance.dismiss('cancel');
//                        	};
//                    	}; //end of control

//                    	// $scope.items = ['item1', 'item2', 'item3'];

//                    	$scope.open = function () {

//                        	var modalInstance = $modal.open({
//                            templateUrl: 'app/components/modal/modal.html',
//                            controller: ModalInstanceCtrl,
//                            // resolve: {
//                            //     items: function () {
//                            //         return $scope.items;
//                            //     }
//                            // },
//                            persist: true
//                        	});

//                        	modalInstance.result.then(function (selectedItem) {
//                            $scope.selected = selectedItem;
//                        	}, function () {
//                            $log.info('Modal dismissed at: ' + new Date());
//                        	});
//                    }; //end of modal open
//                } //end of link
//            }; // end of return 
//     	})    

// })(); // end of iffe statement function