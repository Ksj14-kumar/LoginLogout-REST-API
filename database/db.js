const mongoose= require("mongoose")


function DataBaseConnected(URL){
    mongoose.connect(URL,(err,db)=>{
        if(err){
            console.log("data base not connected")

        }
        else{
            console.log("db connected")
        }
    })
}


module.exports=DataBaseConnected;