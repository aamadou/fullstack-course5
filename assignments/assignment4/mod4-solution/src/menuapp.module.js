(function () {

angular.module('MenuApp',['ui.router','data'])
    .controller('CategoriesController',CategoriesController)
    .controller('ItemsController',ItemsController);

    CategoriesController.$inject =['MenuDataService','items'];
    function CategoriesController(MenuDataService,items) {
        var myCategories = this;
        myCategories.items = items;
    }

    ItemsController.$inject=['MenuDataService','categoryItems'];
    function ItemsController(MenuDataService,categoryItems) {
        var myItems = this;
        myItems.categoryItems = categoryItems;
    }

})();
