angular.module('omdb', [])
	.factory('GOTService', function($http,$q) {
		var service = {};
		service.baseurl = 'http://anapioficeandfire.com/api/characters';

		service.search = function(query) {
			var deferred = $q.defer();
			$http.get(service.baseurl)
				.then((data) => {
					deferred.resolve(data);
				});
			return deferred.promise;
		}

		return service;
	});