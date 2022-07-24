import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
    // const user = await prisma.company.create({
    //     data: {
    //         name: 'Harley-Davidson'
    //     }
    // })

    const users = await prisma.company.findMany()

    console.log(users)
}

main()
    .catch((e) => { throw e })
    .finally(async () => prisma.$disconnect())
