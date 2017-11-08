'use strict'

var Album = require('../Models/album');
var Image = require('../Models/image');

function getImage(req, res){
    var imageId= req.params.id;

    Image.findById(imageId, (err, image)=>{
        if(err){
           res.status(500).send({message: 'Error al mostrar la imagen'});
        }else{
            if(!image){
            	res.status(404).send({message: 'No hay imagen'});
			}else{

                Album.populate(image, { path: 'album' }, (err,image) => {
                    if(err){
                        res.status(500).send({message: 'Error en la petición'}); 
                    }else{
                        res.status(200).send({Image: image});    	
                    }
                });
				
			}
        }
    });
}

function getImages(req,res){
    Image.find({},(err,imagesArray)=>{
        if(err){
            return res.status(500).send({message: 'Error al mostrar las imagenes'});
        }else{
            if(!imagesArray){
                res.status(404).send({message: 'No hay imagenes'});
            }else{
                res.status(200).send({Imagenes: imagesArray});
            }
        }
    });
}

function saveImage(req,res){
    var image = new Image();
    var params = req.body;

    image.title = params.title;
    image.picture = null;
    image.album = params.album;

    image.save((err,storedImage)=>{
        if(err){
            return res.status(500).send({message: 'Error al guardar la imagen'}); 
        }else{
			if(!storedImage){
				res.status(404).send({message: 'No se ha guardado el album'});
			}else{
				res.status(200).send({Image: storedImage});
			}	
		}
    });
}

function updateImage(req, res){
    var imageId = req.params.id;
    var params = req.body;

    Image.findByIdAndUpdate(imageId,params,(err,updatedImage)=>{
        if(err){
            return res.status(500).send({message: 'Error al eliminar'}); 
        }else{
			if(!updatedImage){
				res.status(404).send({message: 'No se ha eliminar la imagen'});
			}else{
				res.status(200).send({Image: updatedImage});
			}	
		}
    });
}

function deleteImage(req, res){
    var imageId= req.params.id;
}
module.exports = {
    getImage,
    getImages,
    saveImage,
    updateImage

};