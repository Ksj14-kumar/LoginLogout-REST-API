const express= require("express")

const router= express.Router()
const app = express()
const Post = require("../modal/modal")


const bodyParser= require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine","ejs")




router.get("/",(req,res)=>{
   
    res.render("../views/pages/Login.ejs")
    
})

router.post("/login",async(req,res)=>{
    try{

    console.log(req.body)
    const loginData= await Post.findOne({$and:[{email:{$eq:req.body.email}},{password:{$eq:req.body.password}}]})

    if(req.body.email=="" || req.body.password){
        console.log("fill form")

    }
    else{
            
if(loginData.email==req.body.email && loginData.password==req.body.password ){

    res.render("../views//pages/dashboard.ejs")
}

else{
    res.render("../views/pages/Login.ejs",{error:"something went wrong"})
    
}    
        
    }





}
catch(err){
    console.log("something is wrong")
}

    
})


router.post("/post",async(req,res)=>{
    try{
        console.log(req.body)
        const data=await new Post({email:req.body.email,password:req.body.password, aPassword:req.body.apassword,mobile:req.body.number})
        res.render("../views//pages/Home.ejs")
    data.save()
    


    }
    catch(err){
        console.log("not insert")

    }
    
    
})








module.exports= router