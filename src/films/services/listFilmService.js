const { response, request } = require('express')
const Film = require('../model/film')
const bcrypt = require('bcrypt');
require('dotenv') 



async function listFilm(response){
    let exist = Film.count({
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            return response.status(204).json({status:'no data to show '});
          }
          else{
                const films = Film.findAll({attributes: [
                    'titulo_filmacion','imagen_filmacion','fechacreacion_filmacion'
                    
                  ]}).then(
                    function(results){
                        let jsonFilms = JSON.stringify(results,null)
                        return response.status(201).json({Films: jsonFilms  })
                    }
                )
                
              
          }
      }); 

}
module.exports = listFilm
