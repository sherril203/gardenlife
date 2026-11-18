const express=require('express')
const cors=require('cors')
const path=require('path')
const router=require("./routers/router")
const app=express()
app.use(cors( {origin: "http://localhost:5173"}))
app.use(express.json())

const imagePath = path.join(__dirname, 'images');
app.use('/files', express.static(imagePath));

app.get('/',(req,res)=>{
    res.send("api is working")
})
app.use(router)
module.exports=app