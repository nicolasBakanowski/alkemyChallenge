const { response, request } = require('express')
const Film = require('../model/film')
const bcrypt = require('bcrypt');
require('dotenv') 



async function editFilm(data,response){
    let exist = Film.count({
        where: {
          id_filmacion: data.body.id_filmacion 
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            return response.status(200).json({status:'there is no film with the id'});
          }
          else{
              Film.count({
                where:{
                  titulo_filmacion: data.body.titulo_filmacion.toUpperCase()
                }
              }).then(function(results){
                rows = results
                if(rows ===0){
                  Film.update(
                    {
                        titulo_filmacion:data.body.titulo_filmacion.toUpperCase(),
                        fechacreacion_filmacion: data.body.fechacreacion_filmacion,
                        calificacion_filmacion: data.body.calificacion_filmacion,
                        imagen_filmacion: data.file.path
                    },
                    { where: { id_filmacion: data.body.id_filmacion } }
                  )
                  return response.status(201).json({status:'this film has been updated'})    
                }else{
                  return  response.status(200).json({status:'this title already is in use'})
                }
              }
              
              )}
      }); 
    }

module.exports = editFilm
