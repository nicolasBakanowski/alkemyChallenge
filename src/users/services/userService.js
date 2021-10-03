const { response, request } = require('express')
const User = require('../models/userModel')
const bcrypt = require('bcrypt');
require('dotenv') 



async function addUser(data,response){
    let exist = User.count({
        where: {
          email_usuario: data.body.email_usuario
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            console.log(data.body.email_usuario)
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

async function getAuth(data,response){
  User.findAll({
    where: {
      email_usuario:data.body.email_usuario
    }
  })
  .then( async function(results){
    rows = results
    passwordcheck = await bcrypt.compare(
      data.body.password_usuario, rows[0].password_usuario)
    if((data.body.email_usuario === rows[0].email_usuario ) && (passwordcheck)){
        const payload = {
            check:  true
            };
        const token = jwt.sign(payload, process.env.SECRET_KEY_TOKEN,{
            expiresIn: 60 * 24
        });
      return response.status(200).json({
            mensaje: 'Autenticación correcta',
            token: token
        });
        
    }else{
      return response.status(401).json({status:"unauthorized"})
    }
    
  });
}



module.exports = {
    addUser,getAuth
}