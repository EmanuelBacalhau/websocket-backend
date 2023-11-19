import { AppError } from '../../../libs/app-error'
import { prisma } from '../../../libs/prisma'

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

    const user = await prisma.user.create({
      data,
    })

    return user
  }
}

export default new CreateUserService()