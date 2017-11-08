'use strict'

var express = require('express');
var imageController = require('../Controllers/image');

var api = express.Router();

api.get('/image/:id', imageController.getImage);
api.get('/images',imageController.getImages);
api.post('/image', imageController.saveImage);

module.exports = api;
