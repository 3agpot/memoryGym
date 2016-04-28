var gymApp = angular.module("gymApp", ['ui.router', 'ngResource', 'gymAppController', 'facesService']);

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
