const { response } = require('express')
const User = require('../models/userModel')
const bcrypt = require('bcrypt');



async function addUser(data,response){
    let exist = User.count({
        where: {
          email_usuario: data.body.email_usuario
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            const newUser =  User.create({
                 email_usuario: data.body.email_usuario,
                 password_usuario: bcrypt.hashSync(data.body.password,10)
                 
            })
            return response.status(201).json({status: "OK"});
          }
          else{
              return response.status(403).json({status: 'this user already exist'})
          }
      }); 

}
module.exports = {
    addUser
}