const { response, request } = require('express')
const Character = require('../model/character')
const bcrypt = require('bcrypt');
require('dotenv') 



async function detailCharacters(request,response){
    let exist = Character.count({where:{
        id_personaje:request.params.idchar
    }} 
      ).then( function(results){
          rows = results
          if (rows ===  0 ){
            return response.status(204).json({status:'there are no characters with that id'});
          }
          else{
                
                
              
          }
      }); 

}
module.exports = detailCharacters
