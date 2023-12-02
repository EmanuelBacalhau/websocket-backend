import { Router } from 'express'
import { userRoutes } from './user-routes'
import { authRouter } from './auth-routes'
import { contactRouter } from './contact-routes'

export const router = Router()

router.use(userRoutes)
router.use(authRouter)
router.use(contactRouter)
