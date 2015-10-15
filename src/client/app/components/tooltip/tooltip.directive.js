(function() {
	'use strict';

	angular
		.module('app.components.tooltip')
		.directive('tool', [function () {
			return {
				restrict: 'A',
				scope:{
					tooltipElement: '=',
					dynamicTooltip: '@'
				},
				link: function (scope, elem, attrs) {
					elem.on('mouseenter', function() {
						console.log('enter');
					});

					elem.on('mouseleave', function() {
						console.log('left');
					})
				}
			};
		}])
})();


// .directive('customPopover', function(){
//     return {
// 		restrict: 'A',
// 		template: '<span>Label</span>',
// 		link: function (scope, el, attrs) {
// 	            console.log("Popover Directive Loaded");
// 	            scope.Label = attrs.popoverLabel;
// 	            $(el).popover({
// 	            	trigger:'hover',
// 	            	html: true,
// 	            	content: attrs.popoverHtml,
// 	            	placement: attrs.popoverPlacement
//             });
// 		}
//     };
// });