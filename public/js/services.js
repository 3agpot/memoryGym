angular.module('facesService', [])
    .factory('faces', ['$resource',
        function($resource){
            return $resource('http://localhost:8080/faces', {}, {
                query: {
                    method:'GET',
                    isArray:true,
                }
            });
    }]);
