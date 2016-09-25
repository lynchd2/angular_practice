var app = angular.module("myApp", []); 

app.controller("FirstCtrl", ["$scope", function($scope) {

  $scope.name = "hello!";
  $scope.meats = [
  {
    meat: "ham",
    rank: "1st",
    publicRate: 50
  },

  {
    meat: "pork",
    rank: "2nd",
    publicRate: 75
  },

  {
    meat: "beef",
    rank: "3rd",
    publicRate: 85
  },




  ]
  

}])