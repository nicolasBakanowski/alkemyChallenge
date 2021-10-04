const { response, request } = require('express')
const Film = require('../model/film')
const bcrypt = require('bcrypt');
require('dotenv') 



async function deleteFilm(data,response){
    let exist = Film.count({
        where: {
          id_filmacion: data.params.idfilm
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            return response.status(204).json({status:'there is no Film with the id'});
          }
          else{
                Film.destroy({
                    where: {
                        id_filmacion:data.params.idfilm// criteria
                    }
                })
              return response.status(201).json({status:'the movie has been deleted' })
          }
      }); 

}
module.exports = deleteFilm
