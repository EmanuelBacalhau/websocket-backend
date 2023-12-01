import { compareSync } from 'bcrypt'
import { AppError } from '../../../libs/app-error'
import { prisma } from '../../../libs/prisma'
import { sign } from 'jsonwebtoken'
import { JWT_SECRET } from '../../../environments'

interface IRequest {
  phone: string
  password: string
}

class AuthService {
  async execute({ phone, password }: IRequest) {
    const isAuthExists = await prisma.user.findUnique({
      where: {
        phone,
      },
    })

    if (!isAuthExists) {
      throw new AppError('User not found', 204)
    }

    const matchPassword = compareSync(password, isAuthExists.password)

    if (!matchPassword) {
      throw new AppError('User not found', 204)
    }

    const payload = {
      name: isAuthExists.username,
    }

    const token = sign(payload, JWT_SECRET)

    return {
      id: isAuthExists.id,
      username: isAuthExists.username,
      avatarUrl: isAuthExists.avatarUrl,
      phone: isAuthExists.phone,
      token,
    }
  }
}

export default new AuthService()
