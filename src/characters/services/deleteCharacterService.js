const { response, request } = require('express')
const Character = require('../model/character')
const bcrypt = require('bcrypt');
require('dotenv') 



async function deleteChar(data,response){
    let exist = Character.count({
        where: {
          id_personaje: data.body.id_personaje
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            return response.status(204).json({status:'there is no character with the id'});
          }
          else{
                Character.destroy({
                    where: {
                        id_personaje:data.body.id_personaje// criteria
                    }
                })
              return response.status(201).json({status:'the character has been deleted' })
          }
      }); 

}
module.exports = deleteChar
