import { Router } from 'express'

import createUserController from '../modules/controllers/user/create-user.controller'
import disableUserController from '../modules/controllers/user/disable-user.controller'
import detailsUserController from '../modules/controllers/user/details-user.controller'
import deleteUserController from '../modules/controllers/user/delete-user.controller'
import { isAuthenticated } from '../middlewares/is-authenticated'

export const userRoutes = Router()

userRoutes.post('/users/register', createUserController.handle)
userRoutes.put('/users/disable', isAuthenticated, disableUserController.handle)
userRoutes.get('/users/details', isAuthenticated, detailsUserController.handle)
userRoutes.delete('/users/remove', isAuthenticated, deleteUserController.handle)
