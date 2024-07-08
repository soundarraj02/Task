const { timeStamp } = require("console");
const mongoose = require("mongoose");


const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requires:true
    },
    password:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    }, 
},
{       
    timestamps:true
})
module.exports=mongoose.model("User",UserSchema,"User");