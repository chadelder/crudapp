// use mongoose Model global

//console.log("Read me");
var Crud = require('../models/crudmodels');

// Get all Cruds from database
module.exports.list = function(req, res) {
  Crud.find({}, function(err, cruds) {
    if (err) {
      throw err;
    }
    res.json(cruds);
    //console.log(cruds);
  });
}

// get on array by id
module.exports.getId = function(req, res) {
  Crud.findById(req.params.id, function(err, crud) {
    if(err) {
      throw err;
    }
    res.json(crud);
    //console.log(crud);
  });
}

//  Post a new array
module.exports.create = function(req, res) {
  parser = req.body;
  var crud = new Crud(parser);
  crud.save(function(err, add) {
    if (err) {
      throw err;
    }
    res.json(add);
    //console.log(add);
  });
}

// delete
module.exports.removeIt = function(req, res) {
  var id = req.params.id;
  Crud.remove(id, function(err, crud) {
    if (err) {
      throw err;
    }
    res.json(crud);
  });
}
