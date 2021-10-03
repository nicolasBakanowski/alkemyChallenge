const { response, request } = require('express')
const Character = require('../model/character')
const bcrypt = require('bcrypt');
require('dotenv') 



async function editChar(data,response){
    let exist = Character.count({
        where: {
          id_personaje: data.body.id_personaje 
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            return response.status(200).json({status:'there is no character with the id'});
          }
          else{
            Character.update(
                {imagen_personaje:data.body.imagen_personaje,
                    edad_personaje: data.body.edad_personaje,
                    peso_personaje: data.body.peso_personaje,
                    historia_personaje:data.body.historia_personaje,
                    nombre_personaje: data.body.nombre_personaje
                },
                { where: { id_personaje: data.body.id_personaje } }
              )
              return response.status(201).json({status:'this characater has been updated'})
            }
      }); 

}
module.exports = editChar
