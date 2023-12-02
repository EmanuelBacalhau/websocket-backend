import { prisma } from '../../../libs/prisma'

interface IRequest {
  contactId: string
}

class DeleteContactService {
  async execute({ contactId }: IRequest) {
    await prisma.contact.delete({
      where: {
        id: contactId,
      },
    })
  }
}
export default new DeleteContactService()
