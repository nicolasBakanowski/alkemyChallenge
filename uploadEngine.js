const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: function(req, file, cb){
            cb(null,'./image_upload')
        },
        filename: function(req,file, cb){
            cb(null,  Date.now() + file.originalname)
        }
    }
)
const fileFilter=(req,file,cb)=>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);

    }
    else{
        cb(null, false);
    }
    
}

const upload = multer({
    storage:storage,
    limits:{
        fileSize: 1024*1024*16
    },
    fileFilter: fileFilter
})

module.exports = upload 