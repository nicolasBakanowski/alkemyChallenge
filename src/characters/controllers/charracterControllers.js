require('dotenv')
const express = require('express')
const routeChar = express.Router()
const bcrypt = require('bcrypt');
const addChar = require('../services/addCharacterService')
const deleteChar = require('../services/deleteCharacterService')
const editChar = require('../services/editCharacterService')
const listCharacters = require('../services/listCharacterService')
const {filterCharactersByName,filterCharactersByAge, filterCharactersByMovie} = require('../services/filterCharacterService')
const ensureToken = require('../../middlewares/ensureToken');
const { request, response } = require('express')
const upload = require('../../../uploadEngine');
const { route } = require('../../users/controllers/userControlles');
const controlFields =require('../functions/controllfield')
jwt = require('jsonwebtoken')



routeChar.get('/characters', (request, response,next) => {
    console.log(request.query.idMovie)
        if(request.query.name != undefined){
           filterCharactersByName(request.query.name,response) 
        }
        else{
            if(request.query.age != undefined){
                filterCharactersByAge(request.query.age,response)
            }
            else{
                if(request.query.idMovie != undefined){
                    console.log("entra por el if")
                    filterCharactersByMovie(request.query.idMovie,response)
                }else{
                    listCharacters(request,response)     
            }
        }

        }
});

routeChar.post('/api/characters/add',upload.single('imagen_personaje'),ensureToken,(request, response,next) => {
    jwt.verify(request.headers.token, process.env.SECRET_KEY_TOKEN,(err,data)=>{
        if (err){
            response.sendStatus(403).json({"mensagge":"protectedroute"});
        }
        else{
            if(controlFields(request)){
              return response.status(422).json({satus:"dont send the information correctly, need ALL fields "})        
             }else{
                addChar(request, response)
                     
            }
         }
        }
         );
}) 


  


routeChar.delete('/api/characters/delete/',ensureToken,(request, response,next) => {
    jwt.verify(request.headers.token, process.env.SECRET_KEY_TOKEN,(err,data)=>{
        if (err){
            response.sendStatus(403).json({"mensagge":"protectedroute"});
        }
        else{
            deleteChar(request, response)
        }
    })
});

routeChar.put('/api/characters/edit/',ensureToken,upload.single('imagen_personaje'), (request, response,next) => {
    jwt.verify(request.headers.token, process.env.SECRET_KEY_TOKEN,(err,data)=>{
        if (err){
            response.sendStatus(403).json({"mensagge":"protectedroute"});
        }
        else{
            if (request.body.id_personaje === undefined){
                return response.status(422).json({satus:"dont send id  correctly"})        
            }
            else{
                editChar(request, response)
            }
        }
    })
});
           


module.exports = routeChar