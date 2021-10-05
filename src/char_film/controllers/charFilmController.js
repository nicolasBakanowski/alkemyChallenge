require('dotenv')
const express = require('express')
const routeCharFilm = express.Router()
const bcrypt = require('bcrypt');
const filmCharList = require('../services/charFIlmService')
const { request, response } = require('express')
jwt = require('jsonwebtoken')



routeCharFilm.get('/api/characters_films/details/:idchar', (request,response)=>{
    filmCharList(request,response)
});


module.exports = routeCharFilm