const { response, request } = require('express')
const CharFilm = require('../model/charFilm')
const Film = require('../../films/model/film')
const Character = require('../../characters/model/character')
const bcrypt = require('bcrypt');
require('dotenv') 



async function charDetail(request,response){
    Film.hasMany(CharFilm, {foreignKey: 'id_filmacion'})
    const movies = Film.findAll({
        include:[{
            model: CharFilm, 
            where:{id_personaje: parseInt(request.params.idchar)},
        }]     
    }
      ).then(
        function(results){
            let jsonMovies= JSON.stringify(results,null)
            Character.count({
                where: {
                  id_personaje: request.params.idchar
                }
                }).then(function(results){
                     rows = results
                    if (rows ===  0 ){
                        return response.status(400).json({status:"no hay un personaje con ese id "})
                    } 
                    else{
                        Character.findAll({
                            where: {
                              id_personaje: parseInt(request.params.idchar)
                            }
                            }).then(
                                function(results){  
                                        let jsonCharacters = JSON.stringify(results,null)
                                        return response.status(201).json({movies: jsonMovies, character:jsonCharacters })
                                    }
                            )}
                    }
                )         
        }
    )   
}; 
module.exports = charDetail
