require('dotenv')
const express = require('express')
const routeChar = express.Router()
const bcrypt = require('bcrypt');
const addChar = require('../services/addCharacterService')
const deleteChar = require('../services/deleteCharacterService')
const editChar = require('../services/editCharacterService')
const listCharacters = require('../services/listCharacterService')
const {filterCharactersByName,filterCharactersByAge, filterCharactersByMovie} = require('../services/filterCharacterService')
const filmCharList = require('../../char_film/services/charFIlmService')
const ensureToken = require('../../middlewares/ensureToken');
const { request, response } = require('express')
const upload = require('../../../uploadEngine');
const { route } = require('../../users/controllers/userControlles');
jwt = require('jsonwebtoken')



routeChar.get('/characters', (request, response,next) => {
    console.log(request.query.name)
        if(request.query.name != undefined){
           filterCharactersByName(request.query.name,response) 
        }
        else{
            if(request.query.age != undefined){
                filterCharactersByAge(request.query.age,response)
            }
            else{
                if(request.query.idMovie != undefined){
                    filterCharactersByAge(request.query.idMovie,response)
                }else{
                    listCharacters(response)     
            }
        }

        }
});



routeChar.post('/api/characters/add',upload.single('imagen_personaje'),ensureToken,(request, response,next) => {
    jwt.verify(request.token, process.env.SECRET_KEY_TOKEN,(err,data)=>{
        if (err){
            response.sendStatus(403).json({"mensagge":"protectedroute"});
        }
        else{
            addChar(request, response)
        }
    })
});



routeChar.delete('/api/characters/delete/',ensureToken,(request, response,next) => {
    jwt.verify(request.token, process.env.SECRET_KEY_TOKEN,(err,data)=>{
        if (err){
            response.sendStatus(403).json({"mensagge":"protectedroute"});
        }
        else{
            deleteChar(request, response)
        }
    })
});

routeChar.put('/api/characters/edit/',ensureToken, (request, response,next) => {
    jwt.verify(request.token, process.env.SECRET_KEY_TOKEN,(err,data)=>{
        if (err){
            response.sendStatus(403).json({"mensagge":"protectedroute"});
        }
        else{
            editChar(request, response)
        }
    })
});
           


module.exports = routeChar