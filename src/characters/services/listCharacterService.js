const { response, request } = require('express')
const Character = require('../model/character')
const bcrypt = require('bcrypt');
require('dotenv') 



async function listCharacters(request,response){
    let exist = Character.count({
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            return response.status(204).json({status:'there is no character to show'});
          }
          else{
                const characters = Character.findAll({attributes: [
                    'nombre_personaje','imagen_personaje'
                    
                  ]}).then(
                    function(results){
                        let jsonCharacters = JSON.stringify(results,null)
                        return response.status(201).json({characters: jsonCharacters  })
                    }
                )
                
              
          }
      }); 

}
module.exports = listCharacters
