const feedbackModel=require('../models/feedback.model')

const postfeed=async(req,res)=>{
try{
    const productdata=req.body
    const data=new feedbackModel(productdata)
    await data.save()
    return res.status(201).send({
        message:"feedback posted",
        data:data
    });
}
catch(err){
   return res.status(500).send({message:"error to post feedback"})
}
}
const getfeed=async(req,res)=>{
    try{
        const show=await feedbackModel.find().sort({_id:-1})
       return res.status(200).send({data:show})
    }
    catch(err){
        return res.status(500).send({message:"error in retrieve feedback"})
    }
}



module.exports={
    postfeed,
    getfeed
}