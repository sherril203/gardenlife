const express=require('express')
const router=express.Router()
const Garden=require('../controllers/product.controller')
const upload = require('../Middleware/FileStorage');
const feedback=require('../controllers/feedback.controller')
const cart=require('../controllers/Cart.controllers') 

// product page
router.post('/post',upload.single('product_image'),Garden.postdata)
router.get('/display',Garden.getdata)
router.get("/display/:id", Garden.getProductById);
router.put('/update/:id', upload.single('product_image'),Garden.updatedata)
router.delete('/delete/:id', Garden.deletedata);
//cart
router.post('/addcart',cart.postCart)
router.get('/getcart',cart.getCart)
router.delete('/deletecart/:id',cart.deleteCart)
//feedback
router.post('/postfeed',feedback.postfeed)
router.get('/postfeed',feedback.getfeed)

module.exports=router