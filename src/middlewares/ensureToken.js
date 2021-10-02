function ensureToken(req,res,next){
    const token = req.headers['authorization']
        req.token = token 
        next()   
    }

module.exports = ensureToken