(function(){
  'use strict'
  var x="hello";
  angular.module('myFirstApp',[])

  .controller('MyFirstController', function($scope){
    $scope.name="Sonal";
    $scope.sayHello=function(){
      return "Hello Coursera from Function in controller";
    }
  });


})();
