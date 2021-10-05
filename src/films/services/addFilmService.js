const { response, request } = require('express')
const Film = require('../model/film')
const bcrypt = require('bcrypt');
require('dotenv') 



async function addFilm(data,response){
    let exist = Film.count({
        where: {
          titulo_filmacion: data.body.titulo_filmacion.toUpperCase()
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
              console.log("por aca no es ")
              console.log(data.file)
            const newFilm =  Film.create({
                 titulo_filmacion: data.body.titulo_filmacion.toUpperCase(),                 
                 fechacreacion_filmacion:data.body.fechacreacion_filmacion,
                 calificacion_filmacion: parseFloat(data.body.calificacion_filmacion),
                 imagen_filmacion: data.file.path,

            })
            return response.status(201).json({status: "OK"});
          }
          else{
              return response.status(403).json({status: 'this Film already exist'})
          }
      }); 

}
module.exports = addFilm