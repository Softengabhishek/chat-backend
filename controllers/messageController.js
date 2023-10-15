import Message from '../models/message.js'


export const getMessage = async (req, res)=>{
    res.status(200).json({
        name : "Aditya Gupta",
        isWorking : true
    })
}


export const postMessage = async (req, res)=>{

    const {message} = req.body
    try{

        const data = await Message.insertMany({message})
        const list = await Message.find()
        console.log(list)
        res.status(200).json(data)
        
    }catch(error){
        console.log("Internal server error", error)
    }

}