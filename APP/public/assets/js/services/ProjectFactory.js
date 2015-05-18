app.factory('ProjectFactory', function ($http, $q) {
	var Factory = {
		getProjects : function(){
			var deferred = $q.defer();
			$http({method:'GET', url: 'http://api.bernard-vong.fr/v1/projects'})
				.success(function(data, status){
					deferred.resolve(data);
				})
				.error(function(data, status){
					deferred.reject(data);
				});

			return deferred.promise;
		}
	}
	return Factory;
});

