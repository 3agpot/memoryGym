var gymApp = angular.module("gymApp", ['ui.router', 'ngResource', 'gymAppController', 'facesService']);

gymApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "public/partials/home.html"
        })
        .state("mission", {
            url: "/mission",
            templateUrl: "public/partials/mission.html"
        })
        .state("mission.list", {
            url: "/list",
            templateUrl: "public/partials/mission.list.html"
        })
        .state("about", {
            url: "/about",
            templateUrl: "public/partials/about.html"
        })
        .state("about.list", {
            url: "/list",
            templateUrl: "public/partials/about.list.html"
        })
        .state("contact", {
            url: "/contact",
            templateUrl: "public/partials/contact.html"
        })
        .state("namesandfaces", {
            url: "/namesandfaces",
            views: {
                "": {templateUrl: "public/partials/namesandfaces.html"},
                "viewProgressCount@namesandfaces": {templateUrl: "public/partials/namesandfaces.progressCount.html"},
                "viewList@namesandfaces": {templateUrl: "public/partials/namesandfaces.list.html"}
            }
        })
        .state("namesandfaces.list", {
            url: "/list",
            templateUrl: "public/partials/namesandfaces.list.html"
        });
});
