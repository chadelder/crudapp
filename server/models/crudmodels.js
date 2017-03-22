// Define mongoose
var mongoose = require('mongoose');
// Create a schema
var crudSchema = new mongoose.Schema({
  text: String,
  number: Number,
  //updated_at: { type: Date, default: Date.now },
});

// Create a model based on Schema
var Crud = module.exports = mongoose.model('Crud', crudSchema);

module.exports.update = (id, crud, options, callback) => {
	var query = {_id: id};
	var update = {
		text: crud.text,
		number: crud.number,
	}
	Crud.findOneAndUpdate(query, update, options, callback);
}
