const mongoose=require('mongoose')
const CartSchema=new mongoose.Schema({
    product_image:{type:String},
    product_name:{type:String},
    Description:{type:String},
    product_price:{type:String},
    original_price:{type:String},
    Quantity:{type:Number},
    Category:{type:String},
    Status:{type:String}
})
const CartModel= mongoose.model('cart',CartSchema)
module.exports={CartModel}