"use strict";

app.directive('projectsNavigation', function($window, $rootScope, $state, $timeout) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/partials/ProjectsNavigation.html',

		link: function($scope, element, attrs) {

			$scope.finalPos = 0;
			var marker = document.getElementById('marker');
			var dots = document.getElementsByClassName('dot');
			var sectionContainer = document.getElementById('section-container');
			var sections = document.getElementsByTagName('section');

			$scope.changePos = function(e) {
				var w = $window.innerWidth;
				// Change the active class
				for(var i = 0; i < dots.length; i++) {
					dots[i].classList.remove('active');
				};
				dots[$scope.slidePosition].classList.add('active');

				// Move the marker
				var oldPos = $scope.slidePosition;

				if(e == 'next') {
					// Press Arrow right
					if($scope.slidePosition < dots.length-1) {
						$scope.slidePosition = parseInt($scope.slidePosition) + 1;
					}
				} else if (e == 'prev') {
					// Press Arrow left
					if($scope.slidePosition > 0) {
						$scope.slidePosition = parseInt($scope.slidePosition) - 1;
					}
				} else {
					// On click
					$scope.slidePosition = e.target.getAttribute('pos');
				}

				//$scope.moveTitle();
				$scope.moveMarker(oldPos, $scope.slidePosition, dots[$scope.slidePosition]);
				$scope.moveSlides($scope.slidePosition);

				$scope.$digest();

			}

			$scope.moveMarker = function(oldPos, newPos, currentCircle) {
				var initPos = 7 + (54 * oldPos),
					finalPos = 7 + (54 * newPos);

				var markerTl = new TimelineMax();

				markerTl
					.set(marker, {left: initPos}, 0)
					.to(marker, 0.2, {css:{scale: 0.2, opacity: 1 }, ease: 'linear'})
					.to(marker, 0.2, {css:{left: finalPos, scale: 1.6, opacity: 1 }, ease: 'linear'})
					.to(currentCircle, 0.2, {css:{left: finalPos, scale: 1.1, opacity: 1 }, ease: 'linear'}, -0.1)
					.to(marker, 0.2, {css:{left: finalPos, scale: 1}, ease: 'linear'})
					.to(currentCircle, 0.2, {css:{left: finalPos, scale: 1 }, ease: 'linear'}, -0.30);

			}

			$scope.moveTitle = function() {
				var prev = element.find('.prev');
				var active = element.find('.active');
				console.log(prev);
				var titleTl = new TimelineMax();

				titleTl
					.to(prev, 0.2, {css: {translateX: ' -100vh'}})
			}

			$scope.moveSlides = function(newPos) {
				var w = $window.innerWidth;
				var active = sections[newPos];
				var slideTl = new TimelineMax();

				sectionContainer.style.transform = 'translateX(-'+ w*(parseInt(newPos))  +'px)';
				// Switching active class
				for(var i = 0; i < sections.length; i++) {
					sections[i].classList.remove('active');
				}
				active.classList.add('active');


				slideTl
					.set(active, {x: '-100vh', y:0, z:-20}, 0)
					.to(active, 0.2, {x: 0,y:0, z:0});

			}

			// Navigate via arrow keys
			document.onkeydown = function(e) {
				switch (e.keyCode) {
					case 37:
						$scope.changePos('prev');
						break;
					case 39:
						$scope.changePos('next');
						break;
				}
			};
		}

	}
});