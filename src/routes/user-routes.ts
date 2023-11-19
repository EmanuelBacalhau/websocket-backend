import { Router } from 'express'
import createUserController from '../models/controllers/user/create-user.controller'
import disableUserController from '../models/controllers/user/disable-user.controller'

export const userRoutes = Router()

userRoutes.post('/users/register', createUserController.handle)
userRoutes.put('/users/:id/disable', disableUserController.handle)
