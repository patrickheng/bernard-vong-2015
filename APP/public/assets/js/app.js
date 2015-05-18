"use strict";

var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $sceDelegateProvider, $httpProvider) {

	// ---------- ROUTE SYSTEM ----------
	$urlRouterProvider.otherwise("/"); // Default Page

	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: 'templates/pages/home.html',
			controller: 'HomeCtrl'
		})
		.state('project', {
			url: "/project/:slug",
			templateUrl: function($stateParams){
				return 'templates/pages/'+$stateParams.slug+'.html';
			},
			controller: 'ProjectCtrl'
		})

	$sceDelegateProvider.resourceUrlWhitelist([
		// Allow same origin resource loads.
		'self',
		// Allow loading from our assets domain.  Notice the difference between * and **.
		'http://hengpatrick.fr/**',
		'http://bernard-vong.fr/**',
		'http://api.bernard-vong.fr/**',
		'http://api.bernard-vong.fr/v1/**',
	]);
})