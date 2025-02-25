(function () {

    angular.module('data')
        .service('MenuDataService',MenuDataService);

   MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems=result.data;
                // return processed items
                // console.log('Service categoreis called with categories=',foundItems);
                return foundItems;
            });

        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems=result.data;
                // return processed items
                // console.log('Service items called with items=',foundItems);
                return foundItems;
            });
        };
    }


})();
