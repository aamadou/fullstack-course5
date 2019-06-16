(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .directive('foundItems',foundItemsDirective);

    function foundItemsDirective(){
        var ddo = {
            templateUrl: 'found-items-template.html',
            scope: {
                found: '<',
                notFound : '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }


    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            }).then(function (result) {
                // process result and only keep items that match
                var menu_items=result.data.menu_items;

                var foundItems=[];
                for (var i = 0; i < menu_items.length; i++) {
                    if (menu_items[i].name.toLowerCase().indexOf(searchTerm) !== -1){
                        foundItems.push(menu_items[i]);
                    }
                }
                // return processed items
                return foundItems;
            });
        }
    }


    NarrowItDownController.$inject = ['$scope','MenuSearchService'];
    function NarrowItDownController($scope,MenuSearchService) {
        var NarrowList = this;

        NarrowList.shortName="";
        NarrowList.MenuItems=[];
        NarrowList.NothingFound=false;

        NarrowList.NarrowItDown = function () {

            var promise=MenuSearchService.getMatchedMenuItems(NarrowList.shortName);
            NarrowList.MenuItems=[];
            NarrowList.NothingFound=false;
            if (NarrowList.shortName===""){
                NarrowList.NothingFound=true;
                return
            }
            promise.then(function (response) {
                NarrowList.MenuItems = response;
                if (NarrowList.MenuItems.length==0){
                    NarrowList.NothingFound=true;
                }
                // console.log(response);
            })
                .catch(function (error) {
                    console.log("Something went terribly wrong.");
                });


        }

        NarrowList.removeItem = function (itemIndex) {
            NarrowList.MenuItems.splice(itemIndex,1);
        };



    }



})();
