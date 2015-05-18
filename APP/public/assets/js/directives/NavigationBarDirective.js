"use strict";

app.directive('navigationBar', function($window, $rootScope, $timeout, ProjectFactory) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/partials/NavigationBar.html',

		link: function($scope, element, attrs) {
			$scope.navOpen = false;
			$scope.isClosing = false;

			$scope.toggleNav = function() {
				if(!$scope.navOpen) {
					$scope.navOpen = true;
				}else {
					$scope.isClosing = true;
					$timeout(function(){
						$scope.navOpen = false;
						$scope.isClosing = false;
					}, 500);
				}
				console.log($scope.navOpen);
			}
		}
	}
});
