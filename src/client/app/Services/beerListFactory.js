(function() {
	angular
		.module('beerApp.services.beerList',[])
		.factory('beerListFactory', beerListFactory);

		function beerListFactory($http, $log) {

			return {
				getBeerList: getBeerList
			}

			function getBeerList(){
				var url = './app/Services/IBU_list.json';

				return $http.get(url, {catch: true})
					.then(getBeerListComplete)
					.catch(getBeerListFailed);

					function getBeerListComplete(response) {
						console.log(response.data);

						return response.data;
					}

					function getBeerListFailed(error) {
						console.log('error', error);
					}
			}
		}
})();