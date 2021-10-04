require('dotenv')
const express = require('express')
const routeFilm = express.Router()
const bcrypt = require('bcrypt');
const listFilm = require('../services/listFilmService')
const addFilm = require('../services/addFilmService')
const deleleteFilm = require('../services/deleteFilmService')
const editFilm = require('../services/editFilmService')
const ensureToken = require('../../middlewares/ensureToken');
const { request, response } = require('express')
const upload = require('../../../uploadEngine');
const deleteFilm = require('../services/deleteFilmService');
jwt = require('jsonwebtoken')



routeFilm.get('/movies', (request, response,next) => {
        listFilm(response)
        }
)
    
      

routeFilm.post('/api/films/add',upload.single('imagen_filmacion'),(request, response,next) => {
        addFilm(request,response)
    });


routeFilm.delete('/api/films/delete/:idfilm',(request,response)=>{
        deleteFilm(request,response)
});

routeFilm.put('/api/films/edit/:idfilm',(request,response)=>{
        editFilm(request,response)
}
)
module.exports = routeFilm