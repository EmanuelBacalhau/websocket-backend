import { z } from 'zod'
import { Request, Response } from 'express'
import detailsUserService from '../../services/user/details-user.service'

class DetailsUserController {
  async handle(req: Request, res: Response) {
    const detailsSchema = z.object({
      id: z.string().cuid(),
    })

    const { id } = detailsSchema.parse(req.params)

    const response = await detailsUserService.execute({ userId: id })

    return res.status(200).json(response)
  }
}

export default new DetailsUserController()
