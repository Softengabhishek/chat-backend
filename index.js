import express, { urlencoded } from "express"
import cors from 'cors'
import bodyParser from "body-parser"
import connection from "./dbconnection.js"
import chatRoute from './routes/chatRoute.js'
import userRoute from './routes/userRoute.js'
import messageRoute from './routes/messageRoute.js'
import loginRoute from './routes/loginRoute.js'

import Routes from './routes/routes.js'

//Database connection
connection()

const app = express()
const PORT = process.env.PORT || 3000;

//Middlewares 
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended:false}))
app.use('/api', chatRoute)
app.use('/api', messageRoute)
app.use('/api', userRoute)
app.use('/api', loginRoute)
// app.use(Routes)

//Testing here that everything is working fine or not
app.get('/', (req, res)=>{
    res.send("Hello its working ")
})

app.listen(PORT,()=>{
    console.log(`Server is running : http://localhost:${PORT}` )
})