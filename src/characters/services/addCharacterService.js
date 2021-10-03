const { response, request } = require('express')
const Character = require('../model/character')
const bcrypt = require('bcrypt');
require('dotenv') 



async function addChar(data,response){
    let exist = Character.count({
        where: {
          nombre_personaje: data.body.nombre_personaje
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            const newCharacter =  Character.create({
                 imagen_personaje: data.file.path,                 
                 edad_personaje: parseInt(data.body.edad_personaje),
                 peso_personaje: parseFloat(data.body.peso_personaje),
                 historia_personaje: data.body.historia_personaje,
                 nombre_personaje: data.body.nombre_personaje

                 
            })
            return response.status(201).json({status: "OK"});
          }
          else{
              return response.status(403).json({status: 'this character already exist'})
          }
      }); 

}
module.exports = addChar
