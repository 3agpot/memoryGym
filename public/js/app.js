var gymApp = angular.module("gymApp", ['ui.router', 'ngResource']);

gymApp.factory('faces', ['$resource',
    function($resource){
        return $resource('http://localhost:8080/faces', {}, {
            query: {method:'GET', isArray:true}
        });
}]);

gymApp.controller('NamesAndFacesController',['faces', function(faces){
    //this.faces= [{"name":{"first":"John", "last":"Smith"}}, {"name":{"first":"Jane", "last":"Smith"}}];

    this.loadFaces = function(){
        this.faces = faces.query();
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
