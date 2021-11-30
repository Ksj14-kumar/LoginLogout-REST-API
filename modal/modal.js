const mongoose= require("mongoose")




const Schema= mongoose.Schema({
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    aPassword:{type:String, required:true,trim:true},
    mobile:{type:Number, required:true, trim:true},
    date:{type:Date, default:Date.now()}
})





module.exports = mongoose.model("collection",Schema)




