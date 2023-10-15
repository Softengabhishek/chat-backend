import mongoose from "mongoose"

const MONGODB_URI = "mongodb+srv://softengabhishek:sterivan@chat-api.jsjm49v.mongodb.net/chat-API?retryWrites=true&w=majority"

const connection = ()=>{
    try{
        mongoose.connect(MONGODB_URI)
        console.log("Connection has been successfully established with the database")
    } catch(error){
        console.log("Connction failed due to :" , error)
    }
}


export default connection