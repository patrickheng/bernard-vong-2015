"use strict";
app.controller('HomeCtrl',  function($document, $window, $q, $scope, $rootScope, $timeout, ProjectFactory) {
	$rootScope.slidePosition = 0;
	$rootScope.projects = {};

	var getProjects = ProjectFactory.getProjects(),
		sectionContainer = document.getElementById('section-container'),
		sections = document.getElementsByTagName('section');


	// GET PROJECTS
	getProjects.then(function(data) {
		$rootScope.projects = data.projects;
		//INIT SIZE
		resizingElement();
	});

	// ON WINDOW RESIZE
	$window.addEventListener("resize",function(){
		resizingElement();
		console.log('resize');
	});

	// ON NG-REAPEAT FINISHED EMIT EVENT
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		resizingElement();
	});

	function resizingElement() {
		var windowW = $window.innerWidth;
		var projectsNav = document.getElementById('projects-navigation');
		// Set container width
		sectionContainer.style.width = (windowW * ($rootScope.projects.length+1)) + 50 + 'px';
		// Set section width
		for(var i = 0; i < sections.length; i++) {
			sections[i].style.width = windowW +'px';
		}
		// Set projects navigigation width
		projectsNav.style.left = (windowW - projectsNav.clientWidth)/2 + 'px';
	}
});
