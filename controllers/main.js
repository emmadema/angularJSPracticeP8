starWarsApp.controller('MainCtrl', ['$scope', 'SwapiService',function($scope, SwapiService){
    $scope.heading = "Hello World";
    $scope.message = "This is me";

    $scope.films = {};

    SwapiService.people()
      .then(function(data) {
        $scope.data = data.data.results;

        angular.forEach($scope.data, function(person){
          angular.forEach(person.films, function(film){
            $scope.films[film] = '';
          });
      });
    });

    SwapiService.films()
      .then(function(data){
        $scope.filmInfo = data.data.results;

        angular.forEach($scope.filmInfo, function(film) {
          var api_call = 'https://swapi.co/api/films/' + film.episode_id + '/';
          $scope.films[api_call] = {
            'title': film.title,
            'episode_id': film.episode_id,
            'characters': film.characters
          };
        });

      });
  }
]);
