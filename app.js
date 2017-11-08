'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//Cargar routes
var album_routes = require('./Routes/album');
var image_routes = require('./Routes/image');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configurar headers

// ruta base
app.use('/api',album_routes);
app.use('/api',image_routes);

module.exports = app;