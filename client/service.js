// ngResource - RESTful
myCrud.factory('Crud', ['$resource', function($resource) {
  return $resource('api/object/:id', null, {
    'update': {method: 'PUT'}
  });
}]);
