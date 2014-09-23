'use strict';

// We create our own service to provide access to the phone data on the server
// this service depends on ngResource module
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

/* We used the module API to register a custom service using a factory function.
 * We passed in the name of the service - 'Phone' - and the factory function.
 * The factory function is similar to a controller's constructor in that both can
 * declare dependencies to be injected via function arguments.
 * The Phone service declared a dependency on the $resource service.
 * The $resource service makes it easy to create a RESTful client with just a few lines of code.
 * This client can then be used in our application, instead of the lower-level $http service.
*/
 
// We used the module API to register a custom service using a factory function
phonecatServices.factory('Phone', function($resource) {

  // The $resource service makes it easy to create a RESTful client with just a few lines of code.
  // $resource(url, paramDefaults(optional), actions(optional), options)
  // [complete documentation @ https://docs.angularjs.org/api/ngResource/service/$resource]
  return $resource('database/phones/:phoneId.json', {}, {
    query: {                          // The name of action. This name becomes the name of the method on your resource object.
      method:   'GET',                // Case insensitive HTTP method (e.g. GET, POST, PUT, DELETE, JSONP, etc).
      params:   { phoneId:'phones' }, // Optional set of pre-bound parameters for this action
      isArray:  true                  // If true then the returned object for this action is an array
    }
  });

});