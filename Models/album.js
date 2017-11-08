'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = Schema({
	title: String,
	description: String
});

module.exports = mongoose.model('Album', albumSchema);