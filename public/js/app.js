var gymApp = angular.module("gymApp", ['ui.router', 'ngResource']);

gymApp.service('resourceService', ['$resource', function($resource){
    return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
}]);

gymApp.service('faceService', function($http, $q){
    var deferred = $q.defer();
    $http.get('http://localhost:8080/faces').then(function(data){
        deferred.resolve(data);
    });
    
    this.getFaces = function(){
        return deferred.promise;
    }
});

gymApp.factory('Phone', ['$resource',
    function($resource){
        return $resource('http://jsonplaceholder.typicode.com/users/:user', {}, {
            query: {method:'GET', params:{user:'1'}, isArray:false}
        });
}]);

gymApp.controller('NamesAndFacesController',[ 'faceService', 'resourceService', 'Phone', '$http', '$q', function(faceService, resourceService, Phone, $http, $q){
    this.faces= [{"name":{"first":"John", "last":"Smith"}}, {"name":{"first":"Jane", "last":"Smith"}}];
    this.loadFaces = function(){
        var promise = faceService.getFaces();
        promise.then(function(data){
            this.faces = data.data;
            console.log(this.faces);
        });
    }

    this.show = function() {
        alert(this.faces[0].name.first);
    }

    this.tmp = function(){
        $http.get('http://localhost:8080/faces').then(function(data){
            this.faces = angular.fromJson(data.data);
            console.log(this.faces);
        });
    }

    this.showDummy = function(){
        this.users = Phone.query();
        alert(this.users);
    }

    this.people = [
        {name: "John Smith", photo: "1234fsad.jpg"},
        {name: "Robert Muckels", photo: "1fdsad23sad.jpg"},
        {name: "Aaron McPuppels", photo: "1dsad23ad.jpg"},
        {name: "Kenneth Rutters", photo: "hhs4fsad.jpg"},
    ];
    this.addPerson= function(){
        this.people.push({name: this.newPerson, photo: "somePic.jpg"});
        this.newPerson = '';
    };
}]);


/*gymApp.service('facesService', function($http){
    //delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function() {
        // $http() returns a $promise that we can add handlers with .then()
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/faces',
            params: 'limit=10'
            //headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
         });
     }
});*/

gymApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "partials/home.html"
        })
        .state("mission", {
            url: "/mission",
            templateUrl: "partials/mission.html"
        })
        .state("mission.list", {
            url: "/list",
            templateUrl: "partials/mission.list.html"
        })
        .state("about", {
            url: "/about",
            templateUrl: "partials/about.html"
        })
        .state("about.list", {
            url: "/list",
            templateUrl: "partials/about.list.html"
        })
        .state("contact", {
            url: "/contact",
            templateUrl: "partials/contact.html"
        })
        .state("namesandfaces", {
            url: "/namesandfaces",
            views: {
                "": {templateUrl: "partials/namesandfaces.html"},
                "viewProgressCount@namesandfaces": {templateUrl: "partials/namesandfaces.progressCount.html"},
                "viewList@namesandfaces": {templateUrl: "partials/namesandfaces.list.html"}
            }
        })
        .state("namesandfaces.list", {
            url: "/list",
            templateUrl: "partials/namesandfaces.list.html"
        });
});
