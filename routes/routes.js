import userRoute from './userRoute.js'
import messageRoute from './messageRoute.js'
import chatRoute from './chatRoute.js'

import express from 'express'

const routes = express.Router()

routes.use('/user', userRoute)
routes.use('message', messageRoute)
routes.use('chat', chatRoute)


export default routes




// Why it is mot working when importing all routes and then exporting fom here