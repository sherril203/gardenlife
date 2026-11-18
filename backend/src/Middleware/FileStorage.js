const multer=require('multer')
const path=require('path')
const storage=multer.diskStorage({
    destination: function (req,file,cb)
{
    cb(null,"src/images")
},
filename:function (req,file,cb){
    const fileName=`product-${file.originalname}`
   cb(null,fileName)
}
})
const upload=multer({storage:storage})
module.exports=upload