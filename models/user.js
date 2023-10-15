import mongoose from "mongoose"

const userRouteSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }
        },
        phone: {
            type: Number,
            required: true
        },
        mail: String,
        gender: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        password : {
            type : String,
            required : true
        },
        confirmPassword : {
            type : String,
            required : true
        }
    },
    {
        timestamps: true
    }
)

const User = new mongoose.model("User", userRouteSchema)
export default User