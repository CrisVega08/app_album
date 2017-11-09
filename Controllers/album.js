'use strict'

var Album = require('../Models/album');

function getAlbum(req, res){
    var albumId = req.params.id;

    Album.findById(albumId, (err, album)=>{
        if(err){
            return res.status(500).send({message:'Error en la petición'});
        }else{
            if(!album){
                return res.status(400).send({message:'No se encontró el album'});
            }else{
                return res.status(200).send({Album: album});
            }
        }
    });
}

function getAlbums(req, res){
    Album.find({} ,(err, albums)=>{
        if(err){
            return res.status(500).send({message: 'Error al mostrar los albums'});
        }else{
			if(!albums){
				res.status(404).send({message: 'No hay albums'});
			}else{
				res.status(200).send({Albums: albums});
			}	
		}
    });
}

function saveAlbum(req, res){
    var album = new Album();
    var params = req.body;
    
    album.title = params.title;
    album.description = params.description;

    album.save((err, albumStored)=>{
        if(err){
            return res.status(500).send({message: 'Error al guardar el album'}); 
        }else{
			if(!albumStored){
				res.status(404).send({message: 'No se ha guardado el album'});
			}else{
				res.status(200).send({Album: albumStored});
			}	
		}
    });
}

function updateAlbum(req,res){
    
    var albumId = req.params.id;
    var params = req.body;

    Album.findByIdAndUpdate(albumId,params,(err,updatedAlbum)=>{
        if(err){
            return res.status(500).send({message: 'Error al actualizar'}); 
        }else{
			if(!updatedAlbum){
				res.status(404).send({message: 'No se ha actualizado el album'});
			}else{
				res.status(200).send({Album: updatedAlbum});
			}	
		}
    });
}

function deleteAlbum(req,res){
    var albumId = req.params.id;

    Album.findByIdAndRemove(albumId,(err,deletedAlbum)=>{
        if(err){
            return res.status(500).send({message: 'Error al eliminar'}); 
        }else{
			if(!deletedAlbum){
				res.status(404).send({message: 'No se ha eliminar el album'});
			}else{
				res.status(200).send({Album: deletedAlbum});
			}	
		}
    });
}


module.exports ={
    getAlbum,
    getAlbums,
    saveAlbum,
    updateAlbum,
    deleteAlbum,
};