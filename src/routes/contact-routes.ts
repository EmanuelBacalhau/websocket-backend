import { Router } from 'express'
import createContactController from '../modules/controllers/contact/create-contact.controller'
import { isAuthenticated } from '../middlewares/is-authenticated'
import listContactController from '../modules/controllers/contact/list-contact.controller'
import deleteContactController from '../modules/controllers/contact/delete-contact.controller'

export const contactRouter = Router()

contactRouter.get('/contact', isAuthenticated, listContactController.handle)
contactRouter.delete(
  '/contact/:contactId',
  isAuthenticated,
  deleteContactController.handle,
)
contactRouter.post(
  '/contact/register',
  isAuthenticated,
  createContactController.handle,
)
