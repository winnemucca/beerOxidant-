(function() {
	'use strict';

	angular
		.module('app.components.modal')
		.directive('myModal', myModal)

		function myModal(){

    return {

        restrict: 'E',

        // The modal callback specified in the directive tag
        scope: {
            onUpdate: '&?'
        },

        replace: true,

        // This is the template for the directive, not the modal
        templateUrl: 'modal.html',

        controllerAs: 'ctrl',

        bindToController: true,

        compile: function (element, attrs) {

            return function (scope, element, attrs) {

            };
        },


        /*@ngInject*/
        controller: function($scope, $log, $aside){

            var vm = this;

            var myDialog = $aside({

                // Dialog template
                template: 'my-modal.template.html',
                show: false,
                animation: 'am-fade-and-slide-right',
                placement: 'right',
                backdrop: true,
                html: true,
                container: '',
                scope: $scope
            });


            // Opens modal
            vm.ShowDialog = function(){
                myDialog.$promise.then(function() {
                    myDialog.show();
                })
            };


            // Expose Update() method to the dialog template
            $scope.Update = function(){

                if(angular.isFunction(vm.onUpdate) ) {

                    vm.onUpdate()();
                }

            }

        }
    }

}

})();



