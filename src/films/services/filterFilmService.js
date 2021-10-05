const { response, request } = require('express')
const Film = require('../model/Film')
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
            return response.status(201).json({characters: jsonCharacters  })
        }
        )}


async function filterFilmByGender(age,response){        
    let exist = Character.findAll({
        where: {
          edad_personaje: age
        }
        })
        .then(function(results){
            let jsonCharacters = JSON.stringify(results,null)
            return response.status(201).json({characters: jsonCharacters})
            }
        )}


        async function filterCharactersByMovie(request,response){        
}


module.exports = {filterCharactersByName,filterCharactersByAge,filterCharactersByMovie}
