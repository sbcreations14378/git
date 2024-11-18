import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    displayName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const User = mongoose.model('user',userSchema)