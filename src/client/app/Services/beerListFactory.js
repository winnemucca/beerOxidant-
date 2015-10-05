(function() {
	angular
		.module('beerApp.services.beerList',[])
		.factory('beerListFactory', beerListFactory);

		function beerListFactory($http, $log) {

			return {
				getBeerList: getBeerList,
				getBeer: getBeer
			}

			function getBeerList(){
				var url = './app/Services/IBU_list.json';

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
				var url = './app/Services/IBU_list.json';
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
		} // end of function
})();