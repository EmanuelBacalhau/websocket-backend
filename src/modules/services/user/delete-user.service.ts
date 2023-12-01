import { prisma } from '../../../libs/prisma'
import { AppError } from '../../../libs/app-error'

interface IRequest {
  userId: string
}

class DeleteUserService {
  async execute(data: IRequest) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
    })

    if (!userExists) {
      throw new AppError('User not found', 404)
    }

    await prisma.user.delete({
      where: {
        id: data.userId,
      },
    })
  }
}

export default new DeleteUserService()
