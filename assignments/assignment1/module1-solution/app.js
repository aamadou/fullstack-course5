(function () {
'use strict';

angular.module("LunchCheck", [])

.controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.LunchItems="";
    $scope.LMStyle={"color" :"red"};
    $scope.LIStyle={"border-color" :"red"};
    $scope.LunchMessage="Please enter data first";
    $scope.CheckLunch = function () {
      var LunchItemsSplit=$scope.LunchItems.split(',');
      //console.log(LunchItemsSplit);

      function ValidItem (Value) {
        Value=Value.replace(/\s+/g, '');
        return Value!=="";
      };
      LunchItemsSplit=LunchItemsSplit.filter(ValidItem);
      $scope.LunchMessage=CheckItemNmber(LunchItemsSplit);
      function CheckItemNmber(Items) {
        if (Items.length<=0) {
          $scope.LMStyle={"color" :"red"};
          $scope.LIStyle={"border-color" :"red"};
          return "Please enter data first";
        };
        if (Items.length<=3) {
          $scope.LMStyle={"color" :"green"};
          $scope.LIStyle={"border-color" :"green"};
          return "Enjoy!";
        };
        $scope.LMStyle={"color" :"green"};
        $scope.LIStyle={"border-color" :"green"};
        return "Too much!";
      }

    };

  }
})();
