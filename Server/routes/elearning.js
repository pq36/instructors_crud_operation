import {createInstructor,getAllInstructors,searchInstructorbyName,getoneInstructors,upadateInstructor,deleteInstructor} from "../controllers/instructorController.js";
import express from "express"
const route=express.Router()
route.post("/createInstructor",createInstructor)
route.get('/getAllInstructors',getAllInstructors)
route.get('/getOneInstructorById/:id',getoneInstructors)
route.get('/searchAllInstructorByNameFilter/:name',searchInstructorbyName)
route.put('/updateInstructor/:id',upadateInstructor)
route.delete('/deleteInstructorById/:id',deleteInstructor)
export default route