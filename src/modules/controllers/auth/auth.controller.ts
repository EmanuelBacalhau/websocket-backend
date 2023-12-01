import { Request, Response } from 'express'
import { z } from 'zod'
import authService from '../../services/auth/auth.service'

class AuthController {
  async handle(req: Request, res: Response) {
    const AuthSchema = z.object({
      phone: z.string(),
      password: z.string().min(8),
    })

    const { phone, password } = AuthSchema.parse(req.body)

    const response = await authService.execute({ phone, password })

    return res.status(201).json(response)
  }
}

export default new AuthController()
