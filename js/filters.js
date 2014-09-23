'use strict';

// In order to create a new filter, you are going to create a phonecatFilters module...
var phonecatFilters = angular.module('phonecatFilters', []);

// .. and register your custom filter with this module
phonecatFilters.filter('checkmark', function() {
  
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
  
});

// remember: we need to register the phonecatFilters module as a dependency for our main phonecatApp module