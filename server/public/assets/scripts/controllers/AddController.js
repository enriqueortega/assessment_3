myApp.controller('AddController', ['$scope', 'HeroFactory', function($scope, HeroFactory){
  var heroesObject = {};
  var heroFactory = HeroFactory;

  // Posting through the factory to the DB
  $scope.submit = function(data){
    heroFactory.postData(data);
  };
}]);
