import { prisma } from '../../../libs/prisma'
import { AppError } from '../../../libs/app-error'

interface IRequest {
  userId: string
}

class DetailsUserService {
  async execute(data: IRequest) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
      select: {
        avatarUrl: true,
        username: true,
        phone: true,
      },
    })

    if (!userExists) {
      throw new AppError('User not found', 404)
    }

    return userExists
  }
}

export default new DetailsUserService()
