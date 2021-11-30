const express= require("express")


const app = express()
const router= require("./router/router")
require("dotenv/config")
const bodyParser= require("body-parser")
const db= require("./database/db")
db(process.env.URL)
app.use(bodyParser.urlencoded({extended:false}))
app.use("/",router)


const port= process.env.port||1500


//define a document






app.listen(port,(err)=>{
    console.log(`the server is start at port ${port}`)
})