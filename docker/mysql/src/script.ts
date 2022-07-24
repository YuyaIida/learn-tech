import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const fetchCompany = async () => {

    const users = await prisma.company.findMany()

    console.log(users)
}
