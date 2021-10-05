const { response, request } = require('express')
const CharFilm = require('../model/charFilm')
const Film = require('../../films/model/film')
const Character = require('../../characters/model/character')
const bcrypt = require('bcrypt');
require('dotenv') 



async function filmDetail(request,response){
    console.log("Aver si entra____?????+++++++++")
    console.log(request.params.idmovie)
    Character.hasMany(CharFilm, {foreignKey: 'id_personaje'})
    const movies = Character.findAll({
        include:[{
            model: CharFilm, 
            where:{id_filmacion: parseInt(request.params.idmovie)},
        }]     
    }
      ).then(
        function(results){
            let jsonCharacters= JSON.stringify(results,null)
            Film.count({
                where: {
                  id_filmacion: request.params.idmovie
                }
                }).then(function(results){
                     rows = results
                    if (rows ===  0 ){
                        return response.status(400).json({status:"no hay un pelicula o serie  con ese id "})
                    } 
                    else{
                        Film.findAll({
                            where: {
                                id_filmacion: request.params.idmovie
                            }
                            }).then(
                                function(results){  
                                        let jsonMovies = JSON.stringify(results,null)
                                        return response.status(201).json({movies: jsonMovies, character:jsonCharacters })
                                    }
                            )}
                    }
                )         
        }
    )   
}; 
module.exports = filmDetail
