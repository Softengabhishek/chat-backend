import mongoose from "mongoose"

const chatSchema = new mongoose.Schema(
    {
        senderId : {
            type :String,
            required : true
        },
        receiverId : {
            type :String,
            required : true
        }
    }
)

const Chat = new mongoose.model("Conversation",chatSchema)
export default Chat