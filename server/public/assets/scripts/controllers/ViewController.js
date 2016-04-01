myApp.controller('ShowController', ['$scope', 'HeroFactory', function($scope, HeroFactory){
  var heroFactory = HeroFactory;

  $scope.heroArray = [];

  heroFactory.getData().then(function(){
    $scope.gremlins = heroFactory.data;
    $scope.heroArray = $scope.gremlins.results;
  });
}]);
