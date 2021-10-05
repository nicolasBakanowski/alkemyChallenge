require('dotenv')
const express = require('express')
const routeFilm = express.Router()
const bcrypt = require('bcrypt');
const listFilm = require('../services/listFilmService')
const addFilm = require('../services/addFilmService')
const editFilm = require('../services/editFilmService')
const ensureToken = require('../../middlewares/ensureToken');
const { request, response } = require('express')
const upload = require('../../../uploadEngine');
const deleteFilm = require('../services/deleteFilmService');
const controlFieldfilm = require('../functions/controlfieldfilms')
const {filterFilmByName, filterFilmByGender, orderFilm} = require('../services/filterFilmService')
jwt = require('jsonwebtoken')



routeFilm.get('/movies', (request, response,next) => {
        if(request.query.name != undefined){
                filterFilmByName(request.query.name.toUpperCase(),response) 
        }
        else{
                if(request.query.genre != undefined){
                        filterFilmByGender(request.query.age,response)
                }
                else{
                        if(request.query.order != undefined){
                                orderFilm(request.query.order,response)
                }
                        else{
                                   listFilm(response)
                        }
                }
        }
}
)
   
     
routeFilm.post('/api/films/add',upload.single('imagen_filmacion'),(request, response,next) => {
        if (controlFieldfilm(request)){
                return response.status(422).json({satus:"dont send the information correctly, need ALL fields "})        
        }else{
                addFilm(request,response)
        }
    });

routeFilm.delete('/api/films/delete/:idfilm',(request,response)=>{
        deleteFilm(request,response)
});

routeFilm.put('/api/films/edit',upload.single('imagen_filmacion'),(request,response)=>{
        if (request.body.id_filmacion === undefined){
                return response.status(422).json({satus:"dont send the information correctly, need idfilm "})        
        }else{
                editFilm(request,response)}
}
)
module.exports = routeFilm