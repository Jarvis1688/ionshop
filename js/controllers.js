/**
 * @author: Duy Thanh DAO
 * @email: success.ddt@gmail.com
 */
angular.module('starter.controllers', [])

// Home controller
.controller('HomeCtrl', function($scope, Product, Menu, $ionicNavBarDelegate) {
  // slider images
  $scope.slides = [
    {
      url: 'img/slide_1.jpg'
    },
    {
      url: 'img/slide_2.jpg'
    },
    {
      url: 'img/slide_3.jpg'
    }
  ];
  // list products
  $scope.products = Product.all();

})

// Home controller
.controller('menu', function($scope, Menu) {

  $scope.menus = Menu.all();

  // console.log($scope.menus);

})

// Category controller
.controller('CategoryCtrl', function($scope, Product) {
  $scope.products = Product.all();
})

// Product detail controller
.controller('DetailCtrl', function($scope, Product) {
  $scope.product = Product.get(1);

  // generate array from number
  $scope.range = function(n) {
    return new Array(n);
  };
})

// Cart controller
.controller('CartCtrl', function($scope, Product) {
    $scope.products = [];

    $scope.item = Product.get(1);
    $scope.products.push($scope.item);

    $scope.item = Product.get(5);
    $scope.products.push($scope.item);

    $scope.item = Product.get(6);
    $scope.products.push($scope.item);

})

// Checkout Controller, process checkout steps here
.controller('CheckoutCtrl', function($scope) {})

// Authentication controller
// Put your login, register functions here
.controller('AuthCtrl', function($scope, $ionicHistory) {
    // hide back butotn in next view
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
});