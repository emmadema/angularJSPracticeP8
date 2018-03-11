console.log("Working");

//Module
var pax8App = angular.module('pax8App', ['ngRoute', 'ngResource']);


//Services

// swapi.service(,function(){
//     $scope.people = swapiService.people
// });

//Main Controller
pax8App.controller('mainController', ['$scope', function($scope){

}]);


//API controller - pulls in SWAPI data
pax8App.controller('apiController', ['$scope', '$resource', '$routeParams', function($scope, $resource, $routeParams){
    $scope.swapi = $resource("https://swapi.co/api/", {
        callback: "JSON_CALLBACK"},{ get: {method: 'JSONP'}});

        // $scope.people = peopleService.people;
        
    $scope.character = $scope.swapi.get({ people: $scope.people });

}]);
