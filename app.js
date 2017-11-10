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
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' );
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// ruta base
app.use('/api',album_routes);
app.use('/api',image_routes);

module.exports = app;