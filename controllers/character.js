//Character Controller

starWarsApp.controller('CharacterCtrl', ['$routeParams','$scope', 'SwapiService', function($routeParams, $scope, SwapiService){
        $scope.loading = true;
        $scope.character = {};
        $scope.id = $routeParams.id;

        SwapiService.people()
            .then(function(data) {
                angular.forEach(data.data.results, function(person) {
                    if (person.name.toLowerCase() === $routeParams.id.toLowerCase()) {
                    angular.copy(person, $scope.character);
                }
            });
        $scope.loading = false;
        });
    }
]);
