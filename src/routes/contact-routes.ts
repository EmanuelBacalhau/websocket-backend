import { Router } from 'express'
import createContactController from '../modules/controllers/contact/create-contact.controller'
import { isAuthenticated } from '../middlewares/is-authenticated'
import listContactController from '../modules/controllers/contact/list-contact.controller'

export const contactRouter = Router()

contactRouter.get('/contact', isAuthenticated, listContactController.handle)
contactRouter.post(
  '/contact/register',
  isAuthenticated,
  createContactController.handle,
)
