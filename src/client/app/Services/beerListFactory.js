(function() {
	'use strict';
	angular
		.module('beerApp.services.beerList',[])
		.factory('beerListFactory', beerListFactory);

		beerListFactory.$inject = ['$http', '$log'];

		function beerListFactory($http, $log) {
			var url = './app/Services/IBU_list.json';

			return {
				getBeerList: getBeerList,
				getBeer: getBeer,
				addBeer: addBeer
			}

			function getBeerList(){

				return $http.get(url, {catch: true})
					.then(getBeerListComplete)
					.catch(getBeerListFailed);

					function getBeerListComplete(response) {

						return response.data;
					}

					function getBeerListFailed(error) {
						console.log('error', error);
					}
			}

			function getBeer(id) {
				return $http.get(url, {
					catch: true
				})
				.then(getBeerComplete)

				function getBeerComplete(response) {
					console.log('promise', id);
					console.log('response', response.data.length);
					var data = response.data;
					for(var i =0, len=data.length;i<len;i++) {
                   		console.log(typeof data[i].id)
	                    if(data[i].id == parseInt(id)) {
	                    	console.log('data i',data[i]);
	                        return data[i];
	                    }
                	}
				} // end of getBeerComplete
			} //end of getBeer

			function addBeer(beer) {
				console.log('beer', beer);
				return $http.post(url,{
			        data: JSON.stringify({}),
			        headers: {'Content-Type': 'application/json'}
      			})
      			.then(function(response) {
      				console.log('response', response);
      			}, function(error) {
      				console.log('Error: ', response);
      			});

				
			}
		} // end of beer Factory
})();



			