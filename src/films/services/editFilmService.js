const { response, request } = require('express')
const Film = require('../model/film')
const bcrypt = require('bcrypt');
require('dotenv') 



async function editFilm(data,response){
    let exist = Film.count({
        where: {
          id_filmacion: data.params.idfilm 
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            return response.status(200).json({status:'there is no film with the id'});
          }
          else{
            Film.update(
                {titulo_filmacion:data.body.titulo_filmacion,
                    fechacreacion_filmacion: data.body.fechacreacion_filmacion,
                    calificacion_filmacion: data.body.calificacion_filmacion,
                    imagen_filmacion: data.body.imagen_filmacion,
                },
                { where: { id_filmacion: data.params.idfilm } }
              )
              return response.status(201).json({status:'this film has been updated'})
            }
      }); 

}
module.exports = editFilm
