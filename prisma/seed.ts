import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const afif = await prisma.user.upsert({
    where: { username: 'afifs' },
    update: {},
    create: {
        email: 'shaqilafif@gmail.com',
        username: 'afifs',
        fullName: 'Afif Shaqil',
        phoneNumber: 60176405619,
        role: "admin"
    },
  })
  console.log({ afif });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })