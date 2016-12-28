angular.
  module('core.icon').
  factory('Icon', ['$resource',
     function($resource) {
	    return $resource('data/:iconId.json', {}, {
			    query: {
					      method: 'GET',
					      params: {iconId: 'icons'},
					      isArray: true
					    }
			  });
	  }
    ]);
