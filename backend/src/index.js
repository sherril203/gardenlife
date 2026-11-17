const mongoose=require('mongoose')
const server=require('./app')
require('dotenv').config()
const mongodb_uri=process.env.Mongodb_uri
const port=process.env.port
if(!mongodb_uri){
    console.log("uri is missing")
}
mongoose.connect(mongodb_uri)
.then(()=>{
    console.log("mongodb connected to server")
    server.listen(port,()=>{
        console.log(`server is running on ${port}`)
    })
})
.catch((err)=>{
    console.log('mongodb error')
})