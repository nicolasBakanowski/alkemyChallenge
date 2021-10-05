function controlFields(request){
if(
    request.file === undefined
 || request.body.edad_personaje === undefined
 || request.body.peso_personaje === undefined
 || request.body.historia_personaje === undefined
 || request.body.nombre_personaje === undefined
 ){ 
  return true}
  else{
      return false
  }
}
module.exports = controlFields