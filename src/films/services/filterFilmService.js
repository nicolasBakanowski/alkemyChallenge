const { response, request } = require('express')
const Film = require('../model/Film')
const GenderFilm = require('../../gender_film')
const Gender = require('../../genders/models')
const bcrypt = require('bcrypt');
require('dotenv') 



async function filterFilmByName(name,response){
    let exist = Film.findAll({
            where: {
              titulo_filmacion: name
            }
        })
        .then(function(results){
            let jsonFilm = JSON.stringify(results,null)
            return response.status(201).json({characters: jsonFilm  })
        }
        )}



async function filterFilmByGender(idgender,response){        
    Film.hasMany(GenderFilm, {foreignKey: 'id_filmacion'})
    const film = Film.findAll({
        include:[{
            model: GenderFilm, 
            where:{id_genero: parseInt(idgender)},
        }]     
    }
      ).then(
        function(results){
            results.forEach(element=>console.log(element));
            let jsonMovies= JSON.stringify(results,null)
            Gender.findAll({
                where: {
                  id_genero: parseInt(idgender)
                }
                }).then(
                    function(results){
                        if (results.length === 0){
                            return respone.status(400).json({status:"no hay un personaje con ese id "})
                        }else{
                            let jsonGender = JSON.stringify(results,null)
                            return response.status(201).json({movies: jsonMovies, character: jsonGender })
                        }
                    }
                )
                
        }
    )
}
async function orderFilm(order,response){
  if (order == 'DESC' || order == 'ASC' ){
    let exist = Film.findAll({
      order: [
        ['fechaCreacion_filmacion', order]
    ]
    })
    .then(function(results){
        let jsonFilm = JSON.stringify(results,null)
        return response.status(201).json({characters: jsonFilm  })
    }
    )}
  else{
    return response.status(400).json({mensage:"no valid order only ASC or DESC"})
  } 
}

           
module.exports = {filterFilmByName,filterFilmByGender,orderFilm}
