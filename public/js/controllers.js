angular.module('gymAppController', []).controller('NamesAndFacesController',['faces', function(faces){
    //this.faces= [{"name":{"first":"John", "last":"Smith"}}, {"name":{"first":"Jane", "last":"Smith"}}];
    this.faceIndex = 0;
    this.faces = faces.query();
    this.faces.$promise.then(function(result){
        this.faces = result;
        //this.currentFaceUrl = this.faces[this.faceIndex].faceUrl;
        //console.log(this.currentFaceUrl);
    });
    this.currentFaceUrl = 'http://media.intrinc.com/images/faces/face1.jpg'; 

    this.loadFaces = function(){
        this.faces = faces.query();
    }

    this.checkForMatch = function(event) {
        if(this.Name === this.faces[this.faceIndex].name.first + ' ' + this.faces[this.faceIndex].name.last) {
           this.nextFace(); 
           this.Name = '';
        }
    }

    this.nextFace = function(){
        this.faceIndex++;
        if (this.faceIndex === this.faces.length) this.faceIndex = 0;
        this.currentFaceUrl = this.faces[this.faceIndex].faceUrl;
    }

    this.fullName = function(faceIndex) {
        return this.faces[faceIndex].name.first + ' ' + this.faces[faceIndex].name.last;
    }
}]);
