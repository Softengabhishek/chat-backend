import User from '../models/user.js'

export const verifyUser = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.find({username})
        if(!user){
            throw new Error("User id is not valid")
        }else{
            if(user[0].password ===password)
              res.status(200).json({
                "Status" : "SUCCESS"
            })
            else{
                res.status(404).json({
                    "Status" : "Fail",
                    "message" : "Incorrect password"
                })
            }
        }

    } catch(error){
        res.status(500).json({"error" : error.message})
    }

}