import { Request, Response } from 'express'
import { z } from 'zod'
import deleteContactService from '../../services/contact/delete-contact.service'

class DeleteContactController {
  async handle(req: Request, res: Response) {
    const DeleteSchema = z.object({
      contactId: z.string().cuid(),
    })

    const { contactId } = DeleteSchema.parse(req.params)

    await deleteContactService.execute({ contactId })

    return res.status(204).end()
  }
}

export default new DeleteContactController()
