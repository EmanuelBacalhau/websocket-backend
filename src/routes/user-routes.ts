import { Router } from 'express'

import createUserController from '../models/controllers/user/create-user.controller'
import disableUserController from '../models/controllers/user/disable-user.controller'
import detailsUserController from '../models/controllers/user/details-user.controller'
import deleteUserController from '../models/controllers/user/delete-user.controller'

export const userRoutes = Router()

userRoutes.post('/users/register', createUserController.handle)
userRoutes.put('/users/:id/disable', disableUserController.handle)
userRoutes.get('/users/:id/details', detailsUserController.handle)
userRoutes.delete('/users/:id/remove', deleteUserController.handle)
