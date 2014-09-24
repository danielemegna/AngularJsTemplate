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

// that array lists the modules that phonecatApp depends on
var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers', 'phonecatFilters', 'phonecatServices']);

// with config() method, we request the $routeProvider to be injected into our config function
phonecatApp.config(function($routeProvider, $locationProvider) {

  $routeProvider.
    when('/phones', {
      templateUrl: 'phone-list.html',
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', { // all variables defined with the : notation are extracted into the $routeParams object.
      templateUrl: 'phone-detail.html',
      controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    });
    
  // use the HTML5 History API
  $locationProvider.html5Mode(true);
    
});