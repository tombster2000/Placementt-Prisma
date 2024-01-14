import { PrismaClient } from '../prisma/generated/client'

//singleton client
declare global {
  var prisma: PrismaClient | undefined;
}

let prismaClient: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaClient = new PrismaClient();
} else {
//ensures only one client is created
  global.prisma = global.prisma || new PrismaClient();
  prismaClient = global.prisma;
}

export default prismaClient;
