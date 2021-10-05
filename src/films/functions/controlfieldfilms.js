
function controlFieldfilm(reqeust){
    if(
        request.body.titulo_filmacion === undefined
     || request.body.fechacreacion_filmacion === undefined
     || request.body.calificacion_filmacion == undefined
     || request.file == undefined
     )
     {
         return true
     }else{
         return false
     }
    
}
module.exports =controlFieldfilm