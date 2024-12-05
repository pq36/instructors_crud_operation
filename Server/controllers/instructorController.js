import Instructor from "../models/instructormodel.js";
export const createInstructor = async (req, res) => {
    try {
        const instructorData = Instructor(req.body)
        if(!instructorData){
            return res.status(404).json({msg:"Unable to create Instructor"})
        }
        await instructorData.save()
        return res.status(200).json({msg:"Instructor created successfully"})
    }
    catch (error) {
        return res.status(500).json({error:error.message})
    }
}
export const getAllInstructors=async (req,res)=>{
    try{
        const instructorData=await Instructor.find()
        if(!instructorData){
            return res.status(404).json({msg:"Instructor is not found"})
        }
        return res.status(200).json(instructorData)
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
}
export const getoneInstructors=async (req,res)=>{
    try{
        console.log(req.params.id)
        const instructorData=await Instructor.findById(req.params.id)
        if(!instructorData){
            return res.status(404).json({msg:"Instructor is not found"})
        }
        return res.status(200).json(instructorData)
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
}
export const searchInstructorbyName=async (req,res)=>{
    try{
        const regexName=new RegExp(req.params.name,'i')
        const instructorData=await Instructor.find({name:{$regex:regexName}})
        if(!instructorData){
            return res.status(404).json({msg:"Instructor is not found"})
        }
        return res.status(200).json(instructorData)
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
}
export const upadateInstructor=async (req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await Instructor.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"Instructor is not found"})
        } 
        await Instructor.findByIdAndUpdate(id,req.body,{new:true})
        return res.status(200).json({msg:"User updated successfully"})
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
}
export const deleteInstructor= async(req,res)=>{
        Instructor.findByIdAndDelete(req.params.id).then(result=>{
            if(result) return res.status(200).json({msg:"User deleted successfully"})
                else return res.status(404).json({msg:"Instructor is not found"})
        })
       .catch(err=>{
        return res.status(500).json({error:err.message})
    })
}