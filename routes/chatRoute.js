import express from 'express'
import {getChat, postChat} from '../controllers/chatController.js'

const router = express.Router()


router.get('/chat', getChat)


router.post('/chat', postChat)




export default router