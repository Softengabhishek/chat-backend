import mongoose from "mongoose"

const messageSchema = new mongoose.Schema(
    {
        message : {
            type : String,
            requied : true
        },

    },
    {timestamps: true}
)

const Message = new mongoose.model("Message", messageSchema)

export default Message