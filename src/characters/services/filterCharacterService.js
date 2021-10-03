const { response, request } = require('express')
const Character = require('../model/character')
const bcrypt = require('bcrypt');
require('dotenv') 



async function filterCharactersByName(name,response){
    let exist = Character.findAll({
            where: {
              nombre_personaje: name
            }
        })
        .then(function(results){
            let jsonCharacters = JSON.stringify(results,null)
            return response.status(201).json({characters: jsonCharacters  })
        }
        )}


async function filterCharactersByAge(age,response){        
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
