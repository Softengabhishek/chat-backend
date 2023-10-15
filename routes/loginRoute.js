import express from 'express'
import { verifyUser } from '../controllers/loginController.js'

const router = express.Router()


router.post('/login', verifyUser)


export default router