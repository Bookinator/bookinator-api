var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	title: String,
	author: String,
	description: String,
	serial: String,
	type: String,
	owner: Boolean,
	read: Boolean
})

var model = mongoose.model('books', schema)

module.exports = model