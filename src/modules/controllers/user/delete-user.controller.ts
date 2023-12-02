import { z } from 'zod'
import { Request, Response } from 'express'
import deleteUserService from '../../services/user/delete-user.service'

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const id = req.userId

    await deleteUserService.execute({ userId: id })

    return res.status(204).end()
  }
}

export default new DeleteUserController()
