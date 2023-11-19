import { z } from 'zod'
import { Request, Response } from 'express'
import disableUserService from '../../services/user/disable-user.service'

class DisableUserController {
  async handle(req: Request, res: Response) {
    const disableSchema = z.object({
      id: z.string().cuid(),
    })

    const { id } = disableSchema.parse(req.params)

    await disableUserService.execute({ userId: id })

    return res.status(204).end()
  }
}

export default new DisableUserController()
