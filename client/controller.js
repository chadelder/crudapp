
myCrud.controller('crudController', ['$scope', '$resource', '$routeParams', 'Crud', function($scope, $resource, $routeParams, Crud) {
  //console.log('controller loaded');
  /*var Crud = $resource('api/object/:id', null, {
    'update':  { method: 'PUT'  }
  });*/

  //Get all cruds
  Crud.query(function (results) {
    $scope.cruds = results;
    //console.log(results);
  });

  // Create a new crud
  $scope.cruds = [] //Empty Crud
  $scope.crud = new Crud(); //create new crud
  $scope.createCrud = function() { //binded to ng-submit
    $scope.crud.$save(function(result) { // save new Crud
      $scope.cruds.push(result); // push to end of array
      console.log("I am here.", result);
      $scope.crud = ''; //clear text box
    });
  };

  // Get one id
  $scope.crud = Crud.get({id: $routeParams.id});
  //console.log($scope.crud);

  // Edit crud
  /*$scope.updateCrud = function() {
  var note = Crud.get({id: $routeParams.id});
  $id = note.id;
  Crud.update({id: $id}, note);
  console.log(note);
};*/
  $scope.updateCrud = function(){
            var todo = $scope.crud;
            Crud.update({id: todo._id}, todo);
            console.log($scope.crud);
            //$scope.editing[index] = false;
          };
  /*$scope.updateCrud = function() {
    var getIt = $scope.crud;
    Crud.update({id: $routeParams.id, getIt});
    console.log(getIt);
    console.log($routeParams.id);
  };*/

  //console.log($scope.crud);
}]);
