myApp.controller('ShowController', ['$scope', 'HeroFactory', function($scope, HeroFactory){
  var heroFactory = HeroFactory;

  $scope.heroArray = [];

  heroFactory.getData().then(function(){
    $scope.heroes = heroFactory.data;
    $scope.heroArray = $scope.heroes.results;
    console.log($scope.heroArray);
  });
}]);
