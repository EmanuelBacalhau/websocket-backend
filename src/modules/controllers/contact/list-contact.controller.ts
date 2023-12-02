import { Request, Response } from 'express'
import listContactService from '../../services/contact/list-contact.service'

class ListContactController {
  async handle(req: Request, res: Response) {
    const userId = req.userId

    const response = await listContactService.execute({ userId })

    return res.status(200).json(response)
  }
}

export default new ListContactController()
