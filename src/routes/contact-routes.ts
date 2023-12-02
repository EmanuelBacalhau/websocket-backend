import { Router } from 'express'
import createContactController from '../modules/controllers/contact/create-contact.controller'
import { isAuthenticated } from '../middlewares/is-authenticated'

export const contactRouter = Router()

contactRouter.post(
  '/contact/register',
  isAuthenticated,
  createContactController.handle,
)
