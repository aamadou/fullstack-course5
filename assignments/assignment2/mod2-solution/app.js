(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ToBuyList = this;

    ToBuyList.items = ShoppingListCheckOffService.gettobuyItems();

    ToBuyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var AlreadyBoughtList = this;

    AlreadyBoughtList.items = ShoppingListCheckOffService.getboughtItems();

  }


  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var tobuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "coca", quantity: 5 },
      { name: "chops", quantity: 7 },
      { name: "hot sauce", quantity: 2 },
      { name: "chlosterol meds", quantity: 20 }
    ];
    var boughtItems = [];

    service.buyItem = function (itemindex) {
      // console.log(tobuyItems[itemindex]);
      boughtItems.push(tobuyItems[itemindex]);
      tobuyItems.splice(itemindex, 1);
    };

    // service.removeItem = function (itemIdex) {
    //   items.splice(itemIdex, 1);
    // };
    //
    service.gettobuyItems = function () {
      return tobuyItems;
    };
    service.getboughtItems = function () {
      return boughtItems;
    };
  }

})();
