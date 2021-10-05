require('dotenv')
const express = require('express')
const routeUser = express.Router()
const { addUser, getAuth } = require('../services/userService')
const bcrypt = require('bcrypt');
const ensureToken = require('../../middlewares/ensureToken');
const { request, response } = require('express');
const validateEmail = require('../functions/checkemail')
const SendEmail =require('../functions/emailEngine')
jwt = require('jsonwebtoken')



routeUser.post('/auth/register', (request, response,next) => {
    if (validateEmail(request.body.email_usuario)){
        addUser(request,response)
        SendEmail(request.body.email_usuario)
    }
    else{
        return response.status(200).json({mensage:"el email no es valido"})
    }
});
        

routeUser.get('/auth/login', async function (request, response){
        getAuth(request,response)
    }

    )
routeUser.get('/auth/protec',ensureToken,(request,response)=>{
    jwt.verify(request.token, process.env.SECRET_KEY_TOKEN,(err,data)=>{
        if (err){
            response.sendStatus(403);
        }
        else{
            response.json({
                text: 'protected'
            });
        }
    }
)
});
module.exports = routeUser