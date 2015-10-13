(function() {
	'use strict';

	angular
		.module('beerApp.features.hopsCalculator')
		.controller('HopsCalculator', HopsCalculator);

		function HopsCalculator() {
			console.log('hops');
			var vm = this;

			var IBU = 0;
			var OriginalGrav = 0;
			var BitternessRatio = IBU/OriginalGrav;

			// Porter :: Original Gravity = 1.056  IBUS 30
			// steps 1.
			// First convert the gravity figure into gravity points. That’s a simple matter of removing the 1 and multiplying by a thousand.
			var gravityPoints = (OriginalGrav-1) * 1000;
			// specific gravity is best comparing water weight to beer weight.
			// beer weight is heavier due to its sugar content
			// sugars have points per pound per gallon
			// 
			var pureWater = 1.000;

			var beerRange = {
				'start': 1.035,
				'end': 1.100
			}
			
		}

})();