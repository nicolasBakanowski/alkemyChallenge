require('dotenv').config()
const express = require('express')
const routeUser = express.Router()
const { addUser } = require('../services/userService')
const bcrypt = require('bcrypt');
jwt = require('jsonwebtoken')



routeUser.post('/api/user/auth/register', (request, response,next) => {
        addUser(request,response)
});
        

routeUser.get('/api/signin', async function (request, response){
        let user = await getOneUser(request.body.user)
        console.log(user)
        passwordcheck = await bcrypt.compare(request.body.pass, user[0].pass)
        console.log(passwordcheck)
        if((request.body.user === user[0].user ) && (passwordcheck)){
        const payload = {
            check:  true
            };
        const token = jwt.sign(payload, "123",{
            expiresIn: 60 * 24
        });
        response.json({
            mensaje: 'Autenticación correcta',
            token: token
        });
        } else {
            response.json({ mensaje: "Usuario o contraseña incorrectos"})
    }}

)
module.exports = routeUser