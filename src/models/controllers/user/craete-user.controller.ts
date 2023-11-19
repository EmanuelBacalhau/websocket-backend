import { Request, Response } from 'express'
import { z } from 'zod'
import createUserService from '../../services/user/create-user.service'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const userSchema = z.object({
      username: z.string(),
      password: z.string().min(8, 'An 8-digit password is required'),
      phone: z.string(),
    })

    const data = userSchema.parse(req.body)

    const response = await createUserService.execute(data)

    return res.status(201).json(response)
  }
}

export default new CreateUserController()
