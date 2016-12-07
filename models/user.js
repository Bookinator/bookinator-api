var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	password: String,
	mail: {
		type: String,
		index: true,
		unique: true
	}
})

var model = mongoose.model('users', schema)

module.exports = model