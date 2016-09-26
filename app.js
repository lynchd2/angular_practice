var app = angular.module("myApp", []); 

app.controller("FirstCtrl", ["$scope", function($scope) {

  $scope.name = "hello!";
  $scope.meats = [

  {
    meat: "chicken",
    rank: "4th",
    publicRate: 95,
    available: true,
    thumb: "content/chicken.jpg"
  },

  {
    meat: "ham",
    rank: "1st",
    publicRate: 50,
    available: true,
    thumb: "content/ham.jpg"
  },

  {
    meat: "pork",
    rank: "2nd",
    publicRate: 75,
    available: true,
    thumb: "content/pork.jpg"
  },

  {
    meat: "beef",
    rank: "3rd",
    publicRate: 85,
    available: false,
    thumb: "content/beef.jpg"
  }
]

  $scope.removeMeat = function(meat) {
    for(var i = 0; i < $scope.meats.length; i++) {
      if($scope.meats[i].meat === meat.meat) {
        $scope.meats.splice(i,1);
      }
    }
  }

  $scope.addMeat = function() {
    $scope.meats.push( {
      meat: $scope.newmeat.meat,
      rank: $scope.newmeat.rank,
      publicRate: parseInt($scope.newmeat.publicRate),
      available: true
    });
    $scope.newmeat.meat = ""
    $scope.newmeat.rank = ""
    $scope.newmeat.publicRate = ""
  }
  

}])