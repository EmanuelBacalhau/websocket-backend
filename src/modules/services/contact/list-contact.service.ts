import { prisma } from '../../../libs/prisma'
import detailsUserService from '../user/details-user.service'

interface IRequest {
  userId: string
}

class ListContactService {
  async execute({ userId }: IRequest) {
    const contacts = await prisma.contact.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        user: {
          select: {
            avatarUrl: true,
          },
        },
      },
    })

    return contacts
  }
}

export default new ListContactService()
