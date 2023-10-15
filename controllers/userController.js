import User from '../models/user.js'



export const getUsers = async (req, res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)

    } catch(error){
        res.status(500).json({"Internal server error" : error})
    }

}

export const getUserById = async (req, res)=>{
    const {id} = req.params
    if(!id){
        res.status(401);
        throw new Error("Please provide user id");
    }
    else{
        try{
            const user = await User.findById(id)
            // const user = await User.find({_id:id})  it will return array of objects
            if(!user){
                throw new Error("User id is not valid")
            }else{
                 res.status(200).json(user)
            }

        } catch(error){
            console.log(error)
            res.status(500).json({"error" : error.message})
        }
    }
    
}


export const postUser = async (req,res)=>{
    try{
        const {username, name , phone , mail , gender, age ,  password , confirmPassword} = req.body
        const data = await User.insertMany({username,name, phone , mail, gender, age, password , confirmPassword})
        console.log(data)
        res.status(200).json(data)

    } catch(error){
        res.status(500).json({"Internal server error" : error})
    }
}

