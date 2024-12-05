import mongoose from "mongoose";
const instructorSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    technology:{
        type:String,
        required:true
    }
    ,
    phone_number:{
        type:Number,
        length:10,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    }
})
export default mongoose.model("Instructor",instructorSchema)

