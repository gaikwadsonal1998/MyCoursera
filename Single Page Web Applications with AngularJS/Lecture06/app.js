(function (){
  'use strict';
  angular.module('NameCalculator',[])

  .controller('NameCalculatorController',function($scope){
     $scope.name="";
     $scope.me="sonal";
     $scope.totalvalue=0;

     $scope.displaynumeric=function(){
       var totalNameValue=
       calculateNumericForString($scope.name);
       $scope.totalvalue=total;
     };
      function calculateNumericForString(string){
        var totalStringvalue=0;
        for(var i=0;i<string.length;i++){
          totalStringvalue+=string.charCodeAt(i);
        }
        return totalStringvalue;
      }
  })
})
