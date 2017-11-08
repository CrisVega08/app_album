'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 4567;

/*mongoose.connect('mongodb://localhost:27017/favoritos',(err,res)=>{
	if(err){
		throw err;
	}
	else{
		app.listen(port, function(){
		console.log(`el servidor esta funcionando en localhost:${port}`);
		console.log("otra forma de imprimir el puerto"+port);
		});	
	}
});
*/

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/appAlbums', {useMongoClient: true})
        .then(() => {
            console.log('La conexión a MongoDB se ha realizado correctamente!!');
 
            app.listen(port, () => {
            console.log(`API RESTful escuchando en localhost:${port}`);
			console.log("otra forma de imprimir el puerto: "+port);
            });
        })
        .catch(err => console.log(err));