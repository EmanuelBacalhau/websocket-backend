import { prisma } from '../../../libs/prisma'

interface IRequest {
  userId: string
}

class ListContactService {
  async execute({ userId }: IRequest) {
    const isUserExists = await prisma.contact.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        name: true,
        phone: true,
      },
    })

    return isUserExists
  }
}

export default new ListContactService()
