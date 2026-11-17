const express=require('express')
const cors=require('cors')
const path=require('path')
const router=require("./routers/router")
const app=express()
// app.use(core())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("api is working")
})
app.use(router)
module.exports=app