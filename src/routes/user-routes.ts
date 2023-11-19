import { Router } from 'express'
import createUserController from '../models/controllers/user/craete-user.controller'

export const userRoutes = Router()

userRoutes.post('/users/register', createUserController.handle)
