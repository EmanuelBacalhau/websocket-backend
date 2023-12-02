import { AppError } from '../../../libs/app-error'
import { prisma } from '../../../libs/prisma'

interface IRequest {
  userId: string
  name: string
  phone: string
}

class CreateContactService {
  async execute({ name, phone, userId }: IRequest) {
    const isUserExists = await prisma.user.findUnique({
      where: {
        phone,
      },
    })

    if (!isUserExists) {
      throw new AppError('Is user not found', 204)
    }

    const isContactExists = await prisma.contact.findFirst({
      where: {
        phone,
        userId,
      },
    })

    if (isContactExists) {
      throw new AppError('You already have this contact', 409)
    }

    await prisma.contact.create({
      data: {
        phone,
        name,
        userId,
      },
    })
  }
}

export default new CreateContactService()
