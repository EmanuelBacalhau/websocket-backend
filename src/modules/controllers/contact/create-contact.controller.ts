import { z } from 'zod'
import { Request, Response } from 'express'
import createContactService from '../../services/contact/create-contact.service'

class CreateContactController {
  async handle(req: Request, res: Response) {
    const ContactSchema = z.object({
      name: z.string(),
      phone: z.string(),
    })

    const { name, phone } = ContactSchema.parse(req.body)

    const userId = req.userId

    await createContactService.execute({ name, phone, userId })

    return res.status(201).end()
  }
}

export default new CreateContactController()
