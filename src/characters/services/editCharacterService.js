const { response, request } = require('express')
const Character = require('../model/character')
const bcrypt = require('bcrypt');
const { model } = require('../../../connection');
require('dotenv') 




async function updateChar(data){
  if (data.file !== undefined){
    await Character.update(
      {
        imagen_personaje:data.file.path
      },
      { where: { id_personaje: data.body.id_personaje } }
    )
  }
  if (data.body.edad_personaje !== undefined){
    await Character.update(
      {
        edad_personaje:data.body.edad_personaje
      },
      { where: { id_personaje: data.body.id_personaje } }
    )
  if (data.body.peso_personaje !== undefined){
    await Character.update(
      {
        peso_personaje:data.body.peso_personaje
      },
      { where: { id_personaje: data.body.id_personaje } }
    )  }
  if (data.body.historia_personaje !== undefined){
    console.log("HISTORIA PERSONAJE")

    await Character.update(
      {
        historia_personaje:data.body.historia_personaje
      },
      { where: { id_personaje: data.body.id_personaje } }
    )}
  if (data.body.nombre_personaje !== undefined){
    await Character.update(
      {
        nombre_personaje:data.body.nombre_personaje
      },
      { where: { id_personaje: data.body.id_personaje } }
    )}
    
  }
}
  

async function editChar(data,response){
let exist = Character.count({
    where: {
      id_personaje: data.body.id_personaje 
    }
    }).then( function(results){
        rows = results
        if (rows ===  0 ){
          return response.status(200).json({status:'there is no character with the id'});
        }else{
              updateChar(data)
              return response.status(201).json({status:'this characater has been updated'})
        }
            }); 
            }
      
        

module.exports = editChar
