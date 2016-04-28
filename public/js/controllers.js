angular.module('gymAppController', []).controller('NamesAndFacesController',['faces', function(faces){
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
