import express from 'express'
import { getUserById, getUsers, postUser } from '../controllers/userController.js'

const router = express.Router()


router.get('/user', getUsers)

router.get('/user/:id', getUserById)


router.post('/user', postUser)




export default router