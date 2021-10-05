const { response, request } = require('express')
const Character = require('../model/character')
const bcrypt = require('bcrypt');
const Film = require('../../films/model/film');
const CharFilm = require('../../char_film/model/charFilm')
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
        .then(function(results,response){
            let jsonCharacters = JSON.stringify(results,null)
            return response.status(201).json({characters: jsonCharacters})
            }
        )}


async function filterCharactersByMovie(idMovie,response){
  Character.hasMany(CharFilm, {foreignKey: 'id_personaje'})
  const char = Character.findAll({
      include:[{
          model: CharFilm, 
          where:{id_filmacion: parseInt(idMovie)},
      }]     
  }
    ).then(
      function(results){
          results.forEach(element=>console.log(element));
          let jsonCharacters= JSON.stringify(results,null)
          Film.findAll({
              where: {
                id_filmacion: parseInt(idMovie)
              }
              }).then(
                  function(results){
                      if (results.length === 0){
                          return respone.status(400).json({status:"no hay un personaje con ese id "})
                      }else{
                          let jsonMovies = JSON.stringify(results,null)
                          return response.status(201).json({movies: jsonMovies, character: jsonCharacters })
                      }
                  }
              )
              
      }
  )
      
         
};         



module.exports = {filterCharactersByName,filterCharactersByAge,filterCharactersByMovie}
