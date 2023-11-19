import { hashSync } from 'bcrypt'
import { prisma } from '../../../libs/prisma'
import { AppError } from '../../../libs/app-error'

interface IRequest {
  username: string
  password: string
  phone: string
}

class CreateUserService {
  async execute(data: IRequest) {
    const usernameExists = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    })

    const phoneExists = await prisma.user.findUnique({
      where: {
        phone: data.phone,
      },
    })

    if (usernameExists || phoneExists) {
      throw new AppError('User already exists', 409)
    }

    const hashPassword = hashSync(data.password, 10)

    await prisma.user.create({
      data: {
        ...data,
        password: hashPassword,
      },
    })
  }
}

export default new CreateUserService()
