const GardenModel=require('../models/products.model')

const postdata=async(req,res)=>{
try{
    const productdata=req.body
    if(req.file){
        productdata.product_image=req.file.filename;
    }
    const data=new GardenModel(productdata)
    await data.save()
    return res.status(201).send({
        message:"product posted",
        data:data
    });
}
catch(err){
   return res.status(500).send({message:"error to post product"})
}
}
const getdata=async(req,res)=>{
    try{
        const show=await GardenModel.find().sort({_id:-1})
       return res.status(200).send({data:show})
    }
    catch(err){
        return res.status(500).send({message:"error in retrieve product"})
    }
}
const updatedata=async(req,res)=>{
    try{
        const id=req.params.id
        const updateProducts=req.body
        if(req.file){
            updateProducts.product_image=req.file.filename
        }
        const updated = await GardenModel.findByIdAndUpdate(id, {...updateProducts}, { new: true });
        return res.status(200).send({message:"product updated",data:updated})
    }
    catch(err){
        return res.status(500).send({message:"error in update"})
    }
}
const deletedata=async(req,res)=>{
    try{
        const id=req.params.id
        const deleted=await GardenModel.findByIdAndDelete(id)
        return res.status(200).send({message:"product deleted"})
    }
    catch(err){
        return res.status(500).send({message:"error in delete data"})
    }
}

module.exports={
    postdata,
    getdata,
    updatedata,
   deletedata 
}