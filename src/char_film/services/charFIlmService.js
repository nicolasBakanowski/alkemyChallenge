const { response, request } = require('express')
const CharFilm = require('../model/charFilm')
const Film = require('../../films/model/film')
const Character = require('../../characters/model/character')
const bcrypt = require('bcrypt');
require('dotenv') 



async function filmCharList(request,response){
    Film.hasMany(CharFilm, {foreignKey: 'id_filmacion'})
    const movies = Film.findAll({
        include:[{
            model: CharFilm, 
            where:{id_personaje: parseInt(request.params.idchar)},
        }]     
    }
      ).then(
        function(results){
            results.forEach(element=>console.log(element));
            let jsonMovies= JSON.stringify(results,null)
            Character.findAll({
                where: {
                  id_personaje: parseInt(request.params.idchar)
                }
                }).then(
                    function(results){
                        if (results.length === 0){
                            return respone.status(400).json({status:"no hay un personaje con ese id "})
                        }else{
                            let jsonCharacters = JSON.stringify(results,null)
                            return response.status(201).json({movies: jsonMovies, character:jsonCharacters })
                        }
                    }

                )
                
        }
    )

   
}; 
module.exports = filmCharList
