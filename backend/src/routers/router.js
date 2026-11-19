const express=require('express')
const router=express.Router()
const Garden=require('../controllers/product.controller')
const upload = require('../Middleware/FileStorage');
const feedback=require('../controllers/feedback.controller')

router.post('/post',upload.single('product_image'),Garden.postdata)
router.get('/display',Garden.getdata)
router.put('/update/:id', upload.single('product_image'),Garden.updatedata)
router.delete('/delete/:id', Garden.deletedata);

router.post('/postfeed',feedback.postfeed)
router.get('/postfeed',feedback.getfeed)

module.exports=router