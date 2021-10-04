require('dotenv')
const express = require('express')
const routeCharFilm = express.Router()
const bcrypt = require('bcrypt');
const filmCharList = require('../char_film/services/charFIlmService')
const ensureToken = require('../../middlewares/ensureToken');
const { request, response } = require('express')
const upload = require('../../../uploadEngine');
const { route } = require('../../users/controllers/userControlles');
jwt = require('jsonwebtoken')



routeCharFilm.get('/api/characters_films/details/:idchar', (request,response)=>{
    filmCharList(request,response)
});


module.exports = routeCharFilm