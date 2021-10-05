require('dotenv')
const express = require('express')
const routeCharFilm = express.Router()
const bcrypt = require('bcrypt');
const charDetail = require('../services/charDetailService')
const filmDetail = require('../services/filmDetailService')
const { request, response } = require('express')
jwt = require('jsonwebtoken')



routeCharFilm.get('/api/characters_films/detailschar/:idchar', (request,response)=>{
    charDetail(request,response)
});

routeCharFilm.get('/api/characters_films/detailsfilm/:idmovie', (request,response)=>{
    filmDetail(request,response)
});


module.exports = routeCharFilm