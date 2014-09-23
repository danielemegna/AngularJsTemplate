/* The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you cannot, for example, use undeclared variables.
 * Strict mode makes it easier to write "secure" JavaScript.
 * Strict mode changes previously accepted "bad syntax" into real errors.
 * As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
 * In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
 * In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
 * In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable,
 * or a non-existing object, will throw an error.*/
'use strict';


// create new module
var phonecatControllers = angular.module('phonecatControllers', []);

// declare a controller and registered it in an AngularJS module
phonecatControllers.controller('PhoneListCtrl', function($scope, $http) {

  $http.get('database/phones.json').success(function(data) {
    $scope.phones = data;
  });
  
  $scope.orderProp = 'age';
  
});

// declare another controller and registered it in an AngularJS module
phonecatControllers.controller('PhoneDetailCtrl', function($scope, $routeParams, $http) {

  $http.get('database/phones/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
    $scope.mainImageUrl = data.images[0];
    
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
    
  });
  
});