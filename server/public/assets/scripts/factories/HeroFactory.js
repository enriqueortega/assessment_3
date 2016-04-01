myApp.factory('HeroFactory', ['$http', function($http){
  var data = {};

  var getData = function(){
    // Promises? I think?  ... Bueller?
    return $http.get('/heroes').then(function(response){
      console.log('getData fired');
      data.results = response.data;
    });
  };

  var postData = function(){

      $http.post('/heroes').then(function(response){
      console.log('postData fired');
    });
  };

  return {
    data : data,
    getData : getData,
    postData : postData
  };
}]);
