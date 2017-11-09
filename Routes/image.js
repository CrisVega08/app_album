'use strict'

var express = require('express');
var imageController = require('../Controllers/image');

var api = express.Router();

api.get('/image/:id', imageController.getImage);
api.get('/images/:album?',imageController.getImages);
api.post('/image', imageController.saveImage);
api.put('/image/:id', imageController.updateImage);
api.delete('/image/:id', imageController.deleteImage);

module.exports = api;
