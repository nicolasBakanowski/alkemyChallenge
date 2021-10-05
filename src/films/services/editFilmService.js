const { response, request } = require('express')
const Film = require('../model/film')
const bcrypt = require('bcrypt');
require('dotenv') 

function updateFilmNoTitle(data){
  if (data.file !== undefined){
    Film.update(
      {
          imagen_filmacion: data.file.path
      },
      { where: { id_filmacion: data.body.id_filmacion } }
    )
  }
  
  if (data.body.fechacreacion_filmacion !== undefined){
    Film.update(
      {
          fechacreacion_filmacion: data.body.fechacreacion_filmacion
      },
      { where: { id_filmacion: data.body.id_filmacion } }
    )
  }
  if (data.body.calificacion_filmacion !== undefined){
    Film.update(
      {
          calificacion_filmacion: data.body.calificacion_filmacion
      },
      { where: { id_filmacion: data.body.id_filmacion } }
    )
  }
}

function updateFilm(data){
  if (data.file !== undefined){
    Film.update(
      {
          imagen_filmacion: data.file.path
      },
      { where: { id_filmacion: data.body.id_filmacion } }
    )
  }
  if (data.body.titulo_filmacion !== undefined){
    Film.update(
      {
          titulo_filmacion: data.body.titulo_filmacion
      },
      { where: { id_filmacion: data.body.id_filmacion } }
    )
  }
  if (data.body.fechacreacion_filmacion !== undefined){
    Film.update(
      {
          fechacreacion_filmacion: data.body.fechacreacion_filmacion
      },
      { where: { id_filmacion: data.body.id_filmacion } }
    )
  }
  if (data.body.calificacion_filmacion !== undefined){
    Film.update(
      {
          calificacion_filmacion: data.body.calificacion_filmacion
      },
      { where: { id_filmacion: data.body.id_filmacion } }
    )
  }
}
  

  


async function editFilm(data,response){
    let exist = Film.count({
        where: {
          id_filmacion: data.body.id_filmacion 
        }
      }).then( function(results){
          rows = results
          if (rows ===  0 ){
            return response.status(200).json({status:'there is no film with the id'});
          }
          else{
              if(data.body.titulo_filmacion != undefined){
                  Film.count({
                    where:{
                      titulo_filmacion: data.body.titulo_filmacion.toUpperCase()
                    }
                  }).then(function(results){
                      rows = results
                      if(rows ===0 ){
                        updateFilm(data)    
                        return response.status(201).json({status:'this film has been updated'})    
                      }else{
                        updateFilmNoTitle(data)    
                        return  response.status(200).json({status:'this title already is in use, anothers field are updated'})
                      }
                    }
              )
              }else{
                updateFilmNoTitle(data)  
                return response.status(201).json({status:'this film has been updated'})    

              }
        }
      }); 
    }

module.exports = editFilm
