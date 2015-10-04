(function() {
	'use strict';
	angular
		.module('beerApp.features.home')
		.config(config);

		function config($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('home', {
					url:'/home',
					templateUrl: './app/features/home/home.html',
					controller: 'HomeController',
					controllerAs: 'vm'
				})
		} 
})();


// ./components/orders/orders.html'