import { AppError } from '../../../libs/app-error'
import { prisma } from '../../../libs/prisma'

interface IRequest {
  userId: string
}

class DisableUserService {
  async execute(data: IRequest) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
    })

    if (!userExists) {
      throw new AppError('User not found', 404)
    }

    await prisma.user.update({
      where: {
        id: data.userId,
      },
      data: {
        active: false,
      },
    })
  }
}

export default new DisableUserService()
