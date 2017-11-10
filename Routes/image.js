'use strict'

var express = require('express');
var imageController = require('../Controllers/image');

var api = express.Router();

var multiplar = require('connect-multiparty');
var multiplarMiddleware = multiplar( { uploadDir: './Uploads' } );

api.get('/image/:id', imageController.getImage);
api.get('/images/:album?',imageController.getImages);
api.post('/image', imageController.saveImage);
api.put('/image/:id', imageController.updateImage);
api.delete('/image/:id', imageController.deleteImage);
api.post('/upload-image/:id', multiplarMiddleware, imageController.uploadImage);
api.get('/get-image/:imageFile', multiplarMiddleware, imageController.getImageFile);

module.exports = api;
