import express from 'express'
import { getMessage , postMessage } from '../controllers/messageController.js'


const router = express.Router()


router.get('/message', getMessage)


router.post('/message', postMessage)




export default router