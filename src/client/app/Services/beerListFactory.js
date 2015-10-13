(function() {
	angular
		.module('beerApp.services.beerList',[])
		.factory('beerListFactory', beerListFactory);

		beerListFactory.$inject = ['$http', '$log'];

		function beerListFactory($http, $log) {
			var url = './app/Services/IBU_list.json';

			return {
				getBeerList: getBeerList,
				getBeer: getBeer
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
				.then(function(response) {
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
				})
			}

			function addBeer() {
				return $http.post(url,{
			        data: JSON.stringify({application:app, from:d1, to:d2}),
			        headers: {'Content-Type': 'application/json'}
      			})

				
			}
		} // end of beer Factory
})();


			// return $http.post(url,{
			//     headers: { 'Content-Type': 'application/json' },
			//     data: {application: app, from: d1, to: d2}
			// });

			// return $http.post(url,{
		 //        data: JSON.stringify({application:app, from:d1, to:d2}),
		 //        headers: {'Content-Type': 'application/json'}
   //    		})